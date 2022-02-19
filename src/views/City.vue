<template>
      <div class="bg-white dark:bg-black relative mt-[48px]">
        <div
          class="flex items-center w-full p-3 text-black bg-white border-b-2 dark:text-white border-main dark:bg-black"
        >
          <p class="text-center text-xl min-w-[100px]">{{ city_name }}</p>
          <input
            class="w-full px-2 py-1 bg-white border border-gray-400 rounded dark:bg-black flex-2"
            placeholder="搜尋公車號"
            id="searchInput"
            type="text"
            :disabled="!edit"
            v-model="keyword"
          />
          <button class="pl-2 text-center" @click.prevent="edit=false" :disabled="!edit" :class="{'text-transparent':!edit,'text-main':edit}">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
            </svg>
          </button>
        </div>
        <div
          class="dark:text-white px-3 h-[50vh] overflow-y-scroll"
          :class="{ 'h-[50vh]': !edit, 'h-[calc(100vh-108px)]': edit }"
        >
          <a
            class="flex items-center justify-between block p-3 my-3 duration-300 ease-in-out bg-gray-200 rounded-lg dark:bg-gray-800 hover:bg-main hover:text-white"
            v-for="item in listFilter()"
            :key="item.RouteID"
            @click.prevent="router.push(`/bus/${city}/${item.RouteName.Zh_tw}`)"
          >
            <p class="text-xl font-bold">{{ item.RouteName.Zh_tw }}</p>
            <div class="text-right">
              <p class="text-md">
                {{ item.DepartureStopNameZh }} -
                {{ item.DestinationStopNameZh }}
              </p>
              <p class="text-sm">
                {{
                  item.SubRoutes[0].FirstBusTime
                    ? `${item.SubRoutes[0].FirstBusTime}-${item.SubRoutes[0].LastBusTime}`
                    : `-`
                }}
              </p>
            </div>
          </a>
        </div>
        <div
          class="h-[calc(50vh-108px)] p-3 grid grid-cols-5 grid-rows-4 gap-2"
          v-if="!edit"
        >
          <button
            class="text-lg font-bold text-black bg-gray-200 rounded-lg dark:text-white dark:bg-gray-800"
            @click.prevent="keyword += '紅'"
          >
            紅
          </button>
          <button
            class="text-lg font-bold text-black bg-gray-200 rounded-lg dark:text-white dark:bg-gray-800"
            @click.prevent="keyword += '藍'"
          >
            藍
          </button>
          <button
            class="text-lg font-bold text-black bg-gray-200 rounded-lg dark:text-white dark:bg-gray-800"
            @click.prevent="keyword += '1'"
          >
            1
          </button>
          <button
            class="text-lg font-bold text-black bg-gray-200 rounded-lg dark:text-white dark:bg-gray-800"
            @click.prevent="keyword += '2'"
          >
            2
          </button>
          <button
            class="text-lg font-bold text-black bg-gray-200 rounded-lg dark:text-white dark:bg-gray-800"
            @click.prevent="keyword += '3'"
          >
            3
          </button>
          <button
            class="text-lg font-bold text-black bg-gray-200 rounded-lg dark:text-white dark:bg-gray-800"
            @click.prevent="keyword += '綠'"
          >
            綠
          </button>
          <button
            class="text-lg font-bold text-black bg-gray-200 rounded-lg dark:text-white dark:bg-gray-800"
            @click.prevent="keyword += '棕'"
          >
            棕
          </button>
          <button
            class="text-lg font-bold text-black bg-gray-200 rounded-lg dark:text-white dark:bg-gray-800"
            @click.prevent="keyword += '4'"
          >
            4
          </button>
          <button
            class="text-lg font-bold text-black bg-gray-200 rounded-lg dark:text-white dark:bg-gray-800"
            @click.prevent="keyword += '5'"
          >
            5
          </button>
          <button
            class="text-lg font-bold text-black bg-gray-200 rounded-lg dark:text-white dark:bg-gray-800"
            @click.prevent="keyword += '6'"
          >
            6
          </button>
          <button
            class="text-lg font-bold text-black bg-gray-200 rounded-lg dark:text-white dark:bg-gray-800"
            @click.prevent="keyword += '橘'"
          >
            橘
          </button>
          <button
            class="text-lg font-bold text-black bg-gray-200 rounded-lg dark:text-white dark:bg-gray-800"
            @click.prevent="keyword += '小'"
          >
            小
          </button>
          <button
            class="text-lg font-bold text-black bg-gray-200 rounded-lg dark:text-white dark:bg-gray-800"
            @click.prevent="keyword += '7'"
          >
            7
          </button>
          <button
            class="text-lg font-bold text-black bg-gray-200 rounded-lg dark:text-white dark:bg-gray-800"
            @click.prevent="keyword += '8'"
          >
            8
          </button>
          <button
            class="text-lg font-bold text-black bg-gray-200 rounded-lg dark:text-white dark:bg-gray-800"
            @click.prevent="keyword += '9'"
          >
            9
          </button>
          <button
            class="text-lg font-bold text-black bg-gray-200 rounded-lg dark:text-white dark:bg-gray-800"
            @click.prevent="buttonEvent('more', $event)"
          >
            更多
          </button>
          <button
            class="text-lg font-bold text-black bg-gray-200 rounded-lg dark:text-white dark:bg-gray-800"
            @click.prevent="keyword += '幹線'"
          >
            幹線
          </button>
          <button
            class="text-lg font-bold text-black bg-gray-200 rounded-lg dark:text-white dark:bg-gray-800"
            @click.prevent="buttonEvent('clear')"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </button>
          <button
            class="text-lg font-bold text-black bg-gray-200 rounded-lg dark:text-white dark:bg-gray-800"
            @click.prevent="keyword += '0'"
          >
            0
          </button>
          <button
            class="text-lg font-bold text-black bg-gray-200 rounded-lg dark:text-white dark:bg-gray-800"
            @click.prevent="buttonEvent('back')"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"
              />
            </svg>
          </button>
        </div>
      </div>
</template>
<script setup>
import { ref, reactive,onMounted } from "vue";
import { cities } from "@/utils/cities";
import { apiGetCityRoute } from "@/api/bus";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
const store = useStore();
const route = useRoute();
const router = useRouter();
const { city } = route.params;
const city_name = ref();
const list = reactive([]);
const search = ref(null);
const edit = ref(false);
const keyword = ref("");
const getCityAllRoute = async () => {
  store.dispatch("handLoadingToggle");
  try {
    const res = await apiGetCityRoute(city);
    list.value = res.data;
    store.dispatch("handLoadingToggle");
  } catch (error) {
    console.log(error);
  }
};
const getCityName = (str) => {
  cities.forEach((item) => {
    if (item.value === city) {
      city_name.value = item.name;
    }
  });
};
const listFilter = () => {
  if (keyword.value === "") {
    return list.value;
  } else {
    let result = list.value.filter((item) =>
      item.RouteName.Zh_tw.includes(keyword.value)
    );
    return result;
  }
};
const createFakeElementAndRemove =()=>{
      edit.value = true;
      let fakeInput = document.createElement("input");
      document.body.appendChild(fakeInput);
      fakeInput.focus();
      setTimeout(() => {
        document.getElementById("searchInput").focus();
        document.getElementById("searchInput").click();
        document.body.removeChild(fakeInput);
      }, 0);
}
const keyValueCheck =()=>{
      if (keyword.value === "") {
        keyword.value = "";
      } else {
        keyword.value = keyword.value.slice(0, -1);
      }
}
const buttonEvent = (str, e) => {
  switch (str) {
    case "clear":
      keyword.value = "";
      break;
    case "back":
      keyValueCheck()
      break;
    case "more":
      createFakeElementAndRemove()
      break;
  }
};
onMounted(() => {
  getCityAllRoute();
  getCityName();
});
</script>
