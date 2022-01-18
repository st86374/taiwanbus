<template>
  <Base>
    <template #header>
      <Header></Header>
    </template>
    <template #body>
      <div class="fixed top-[48px] max-w-md mx-auto w-full text-gray-400 bg-white dark:bg-black p-3">
        <div class="flex items-center justify-between">
          <div class="py-2">
            <p>{{ city_name }}｜站牌</p>
            <p class="text-xl text-main">{{ stop }}</p>
          </div>
          <div>
            <p class="text-sm text-right">{{ second_text }}秒後更新</p>
            <button
              class="p-2 my-2 text-black bg-gray-200 rounded-lg dark:text-white dark:bg-gray-800"
              @click.prevent=";(map = !map), initMap(theme)"
            >
              {{ map ? '地圖關閉' : '地圖顯示' }}
            </button>
          </div>
        </div>
      </div>
      <div class="mt-[140px]">
        <div class="z-[5]" v-show="map">
          <div class="w-full h-[50vh]" id="map"></div>
        </div>
        <div
          class="bg-white dark:bg-black dark:text-white px-3 overflow-y-scroll h-[calc(100vh-140px)]"
          :class="{ 'max-h-[calc(50vh-140px)]': map }"
        >
          <a
            class="flex flex-row block my-3 overflow-hidden bg-gray-200 rounded-lg dark:bg-gray-800 items-inherit"
            @click.prevent="
              router.push(`/bus/${city}/${item.RouteName.Zh_tw}?direction=${item.Direction}&stop=${stop}`)
            "
            v-for="item in list_info"
            :key="item.RouteID"
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
            <p class="p-2 text-lg font-bold truncate rounded basis-2/3">
              {{ `${item.RouteName.Zh_tw}-往${item.Direction_text}` }}
            </p>
          </a>
        </div>
      </div>
    </template>
  </Base>
</template>
<script setup>
import { apiGetRouteArrival, apiGetRouteInfo, apiGetBusStopOfRoutesByBusStop, apiGetStopInfo } from '@/api/bus'
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
const { city, stop } = route.params
const city_name = ref()
const list = ref([])
const theme = computed(() => store.getters.theme)
const list_info = ref([])
let isDestroy = false
const second = ref(Date.now() + 30 * 1000)
const second_text = ref()
const stop_info = ref({
  lat: '',
  lon: '',
})
const map = ref(false)
const getCityName = (str) => {
  cities.forEach((item) => {
    if (item.value === city) {
      city_name.value = item.name
    }
  })
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
const getBusTime = () => {
  store.dispatch('handLoadingToggle')
  const list_info2 = []
  list.value.forEach((item) => {
    apiGetRouteArrival(city, item.RouteName.Zh_tw)
      .then((res) => {
        res.data.forEach((item2) => {
          if (item2.StopName.Zh_tw === stop) {
            apiGetRouteInfo(city, item.RouteName.Zh_tw)
              .then((res2) => {
                if (item2.Direction) {
                  item2.Direction_text = res2.data[0].DepartureStopNameZh
                } else {
                  item2.Direction_text = res2.data[0].DestinationStopNameZh
                }
                list_info2.push(item2)
              })
              .catch((err2) => {
                console.log(err2)
              })
          }
        })
      })
      .catch((err) => {
        console.log(err)
      })
  })
  list_info.value = list_info2
  store.dispatch('handLoadingToggle')
}
const getStopInfo = async () => {
  try {
    const res = await apiGetStopInfo(city, stop)
    stop_info.value.lat = res.data[0].StopPosition.PositionLat
    stop_info.value.lon = res.data[0].StopPosition.PositionLon
  } catch (error) {
    console.log(error)
  }
}
const GetBusStopOfRoutesByBusStop = async () => {
  try {
    const res = await apiGetBusStopOfRoutesByBusStop(city, stop)
    let arr_new = []
    res.data.forEach((item) => {
      let r = arr_new.map((item) => item.RouteName.Zh_tw).indexOf(item.RouteName.Zh_tw)
      if (r === -1) {
        arr_new.push(item)
      }
    })
    list.value = arr_new
    getBusTime()
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
      lat: stop_info.value.lat,
      lng: stop_info.value.lon,
    },
    zoom: 16,
    maxZoom: 20,
    minZoom: 3,
    streetViewControl: false,
    mapTypeControl: false,
    disableDefaultUI: true,
    styles: b ? '' : dark_map,
  })
  const infowindow = new google.maps.InfoWindow({
    content: `<div class="w-full font-bold text-center text-md">${stop}</div>`,
  })
  const marker = new google.maps.Marker({
    position: states.value.map.getCenter(),
    icon: {
      url: mark_img, // url
      scaledSize: new google.maps.Size(24, 32), // scaled size
    },
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
const getStatus = (i) => {
  switch (i) {
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

const secondCount = () => {
  setTimeout(() => {
    if (isDestroy) {
      return
    }
    const x = second.value - Date.now()
    second_text.value = Math.ceil((second.value - Date.now()) / 1000)
    if (x <= 0) {
      getBusTime()
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
  getStopInfo()
  GetBusStopOfRoutesByBusStop()
  secondCount()
  onUnmounted(() => {
    isDestroy = true
  })
})
</script>
