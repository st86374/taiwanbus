<template>
  <Base>
    <template #header>
      <Header></Header>
    </template>
    <template #body>
      <div class="fixed top-[48px] max-w-md mx-auto w-full text-gray-400 bg-white dark:bg-black p-3">
        <div class="grid grid-cols-2 grid-rows-1">
          <div class="py-2">
            <p>{{ city_name }}｜公車</p>
            <p class="text-xl text-main">{{ bus }}</p>
          </div>
          <div class="">
            <p class="text-sm text-right">{{ second_text }}秒後更新</p>
            <div class="flex items-center justify-end my-2">
              <button
                class="p-2 mr-2 text-black bg-gray-200 rounded-lg dark:text-white dark:bg-gray-800"
                @click.prevent="window = true"
              >
                公車資訊
              </button>
              <button
                id="testt"
                class="p-2 text-black bg-gray-200 rounded-lg dark:text-white dark:bg-gray-800"
                @click.prevent=";(map = !map), initMap(theme)"
              >
                {{ map ? '地圖關閉' : '地圖顯示' }}
              </button>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-2 grid-rows-1">
          <button
            class="truncate border-b-2"
            :class="{
              'border-main': direction == 0,
              'text-main': direction == 0,
              'border-transparent': direction != 0,
            }"
            @click.prevent=";(direction = 0), initMap(theme)"
          >
            {{ `往${info.DestinationStopNameZh}` }}
          </button>
          <button
            class="truncate border-b-2"
            :class="{
              'border-main': direction == 1,
              'text-main': direction == 1,
              'border-transparent': direction != 1,
            }"
            @click.prevent=";(direction = 1), initMap(theme)"
          >
            {{ `往${info.DepartureStopNameZh}` }}
          </button>
        </div>
      </div>
      <div class="mt-[166px]">
        <div class="z-[5]" v-show="map">
          <div class="w-full h-[50vh]" id="map"></div>
        </div>
        <div
          class="px-3 overflow-y-scroll bg-white dark:bg-black dark:text-white"
          :class="{ 'max-h-[calc(50vh-164px)]': map }"
        >
          <template v-for="item in list" :key="item.StopID">
            <a
              class="flex flex-row block my-3 overflow-hidden bg-gray-200 rounded-lg dark:bg-gray-800 items-inherit"
              v-show="item.Direction == direction"
              @click.prevent="router.push(`/stop/${city}/${item.StopName.Zh_tw}`)"
            >
              <div
                class="p-2 text-center text-white basis-1/3"
                :class="{
                  'bg-main': item.EstimateTime < 60,
                  'bg-main/75': item.EstimateTime <= 180 && item.EstimateTime >= 60,
                  'bg-gray-500': item.EstimateTime > 181,
                }"
                v-if="item.StopStatus === 0"
              >
                <p>{{ getTimeArrival(item.EstimateTime) }}</p>
              </div>
              <div class="p-2 text-center text-white bg-gray-700 basis-1/3" v-else>
                <p>{{ getStatus(item.StopStatus) }}</p>
              </div>
              <p class="p-2 text-lg font-bold text-right rounded basis-2/3">
                {{ item.StopName.Zh_tw }}
              </p>
            </a>
          </template>
        </div>
      </div>
      <div class="fixed top-0 z-20 w-full h-full max-w-md mx-auto bg-black/50 backdrop-blur-md" v-if="window">
        <div class="relative w-full h-full">
          <div
            class="absolute w-[90%] right-2/4 bottom-2/4 translate-x-2/4 translate-y-2/4 rounded-lg bg-white dark:bg-black"
          >
            <div class="flex items-center justify-between p-2 text-lg text-gray-400 border-b">
              <p>公車資訊</p>
              <div @click="window = false">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </div>
            <div class="p-3 text-black dark:text-white">
              <p class="text-lg text-main text-bold">頭末班車：</p>
              <p>平日：{{ info?.SubRoutes[0].FirstBusTime }}-{{ info?.SubRoutes[0].LastBusTime }}</p>
              <p>假日：{{ info?.SubRoutes[0].HolidayFirstBusTime }}-{{ info?.SubRoutes[0].HolidayLastBusTime }}</p>
              <p class="text-lg text-main text-bold">收費方式：</p>
              <p>{{ info?.TicketPriceDescriptionZh || '-' }}</p>
              <p class="text-lg text-main text-bold">客運業者：</p>
              <p>{{ info.Operators[0]?.OperatorName.Zh_tw }}</p>
              <div class="text-center">
                <a
                  class="inline-block px-3 py-2 text-white rounded bg-main"
                  target="_blank"
                  :href="info?.RouteMapImageUrl"
                  >詳細資訊</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Base>
</template>
<script setup>
import { apiGetRouteArrival, apiGetStopOfRoute, apiGetRouteInfo } from '@/api/bus'
import Base from '@/layouts/Base.vue'
import { cities } from '@/utils/cities'
import { dark_map } from '@/utils/map'
import mark_img from '@/assets/img/marker.png'
import { createHTMLMapMarker } from '@/utils/map_html'
import Header from '@/components/Header.vue'
import { ref, onMounted, watch, computed, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
const store = useStore()
const route = useRoute()
const router = useRouter()
let isDestroy = false
const { city, bus } = route.params
const city_name = ref()
const direction = ref(0)
const list = ref([])
const info = ref({})
const second = ref(Date.now() + 30 * 1000)
const second_text = ref()
const map = ref(false)
const stop = ref([])
const window = ref(false)
const getCityName = (str) => {
  cities.forEach((item) => {
    if (item.value === city) {
      city_name.value = item.name
    }
  })
}
const getArrivalInfo = () => {
  store.dispatch('handLoadingToggle')
  apiGetRouteArrival(city, bus)
    .then((res) => {
      let data = res.data.sort((a, b) => a.StopID - b.StopID)
      let newData = []
      for (let i = 0; i < data.length; i++) {
        if (i === 0 || data[i].StopID - data[0].StopID < 10000) {
          newData.push(data[i])
        }
      }
      list.value = newData
      store.dispatch('handLoadingToggle')
    })
    .catch((err) => {
      console.log(err)
    })
}

const theme = computed(() => store.getters.theme)
const getBusInfo = async () => {
  try {
    const res = await apiGetRouteInfo(city, bus)
    info.value = res.data[0]
  } catch (error) {
    console.log(error)
  }
}
const getStatus = (i) => {
  switch (Number(i)) {
    case 1:
      return '尚未發車'
    case 2:
      return '交管不停靠'
    case 3:
      return '末班駛離'
    case 4:
      return '今日停駛'
  }
}
const getTimeArrival = (i) => {
  if (i < 60) {
    return '進站中'
  } else if (i < 180) {
    return '即將進站'
  } else {
    let minute = Math.ceil(i / 60) - 1
    return `${minute}分鐘`
  }
  return str
}
const getStopOfRoute = async () => {
  try {
    const res = await apiGetStopOfRoute(city, bus)
    stop.value = res.data
    getArrivalInfo()
  } catch (error) {
    console.log(error)
  }
}
const routeCheck = () => {
  try {
    let str = route.fullPath.toString()
    let p = str.indexOf('=')
    let p2 = str.indexOf('=', p + 1)
    let d = str[p + 1]
    direction.value = d ? 1 : 0
  } catch (error) {
    console.log(error)
  }
}
import { Loader } from '@googlemaps/js-api-loader'
const states = ref({
  google: null,
  map: null,
  markers: null,
})
const initMap = async (b) => {
  const loader = new Loader({
    apiKey: process.env.VUE_APP_GOOGLE_MAP_API_KEY,
    version: 'weekly',
    libraries: ['places'],
    language: 'zh-TW',
  })
  states.value.google = await loader.load()
  states.value.map = new states.value.google.maps.Map(document.getElementById('map'), {
    center: {
      lat: stop.value[direction.value].Stops[0].StopPosition.PositionLat,
      lng: stop.value[direction.value].Stops[0].StopPosition.PositionLon,
    },
    zoom: 16,
    maxZoom: 20,
    minZoom: 3,
    streetViewControl: false,
    mapTypeControl: false,
    disableDefaultUI: true,
    styles: b ? '' : dark_map,
  })
  states.value.markers = []
  stop.value[direction.value].Stops.forEach((item) => {
    let obj = {
      lat: item.StopPosition.PositionLat,
      lng: item.StopPosition.PositionLon,
    }
    states.value.markers.push(obj)
  })
  const flightPath = new google.maps.Polyline({
    path: states.value.markers,
    geodesic: true,
    strokeColor: '#F97316',
    strokeOpacity: 1.0,
    strokeWeight: 2,
  })
  flightPath.setMap(states.value.map)
  setMarkers(states.value.map)
}
const setMarkers = () => {
  for (let i = 0; i < stop.value[direction.value].Stops.length; i++) {
    if (stop.value[direction.value].Stops[i].StopID - stop.value[direction.value].Stops[0].StopID < 10000) {
      const infowindow = new google.maps.InfoWindow({
        width: 320,
        content: `<div class="w-full text-center min-w-[100px] min-h-[55px]">
        <p class="mb-3 font-bold text-md">${i + 1}. ${stop.value[direction.value].Stops[i].StopName.Zh_tw}</p>
        <div>
        <a class="p-2 text-white rounded bg-main" href="/${city}/stop/${
          stop.value[direction.value].Stops[i].StopName.Zh_tw
        }">公車查詢</a>
        </div>
        </div>`,
      })
      var mark = {
        url: mark_img, // url
        scaledSize: new google.maps.Size(24, 32),
      }
      const marker = new google.maps.Marker({
        position: {
          lat: stop.value[direction.value].Stops[i].StopPosition.PositionLat,
          lng: stop.value[direction.value].Stops[i].StopPosition.PositionLon,
        },
        icon: mark,
        map: states.value.map,
      })

      marker.addListener('click', () => {
        infowindow.open({
          anchor: marker,
          map: states.value.map,
          // shouldFocus: false,
        })
      })
    }
  }
}
const secondCount = () => {
  setTimeout(() => {
    if (isDestroy) {
      return
    }
    const x = second.value - Date.now()
    second_text.value = Math.ceil((second.value - Date.now()) / 1000)
    if (x <= 0) {
      getArrivalInfo()
      second.value = Date.now() + 30 * 1000
      secondCount()
    } else {
      secondCount()
    }
  }, 1000)
}
watch(
  () => store.getters.theme,
  (o, n) => {
    initMap(o)
  }
)
onMounted(() => {
  getCityName()
  getStopOfRoute()
  getBusInfo()
  secondCount()
  routeCheck()
})
onUnmounted(() => {
  isDestroy = true
})
</script>
