<template>
      <div
        class="bg-top bg-cover bg-no-repeat bg-[url('@/assets/img/banner-2.jpeg')] dark:bg-[url('@/assets/img/banner.jpeg')] w-full min-h-[calc(50vh-40px)] relative overflow-hidden"
      >
        <!-- <h1 class="text-2xl font-bold text-center text-white">TaiwanBus</h1> -->
        <div
          class="absolute w-full h-[30px] scale-150 bg-white dark:bg-black bottom-[-20px] blur-sm"
        ></div>
        <a
          class="fixed z-10 left-[8px] top-[8px] text-gray-400"
          v-show="view == 'all'"
          @click.prevent="viewChange('home'), scrollPoint(-1)"
          href="#"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </a>
      </div>
      <div
        v-if="view === 'home'"
        class="dark:text-white text-xl bg-white dark:bg-black gap-2 grid grid-flow-row-dense grid-cols-2 grid-rows-4 p-2 min-h-[50vh]"
      >
        <button
          class="duration-300 ease-in-out bg-gray-200 rounded-lg dark:bg-gray-800 hover:bg-main hover:text-white"
          v-for="item in listFilter()"
          :key="item.value"
          @click.prevent="router.push(`/city/${item.value}`)"
        >
          {{ item.name }}
        </button>
        <button
          class="col-span-2 duration-300 ease-in-out bg-gray-200 rounded-lg dark:bg-gray-800 hover:bg-main hover:text-white"
          @click.prevent="viewChange('all')"
        >
          全部城市
        </button>
      </div>
      <div v-else>
        <div
          class="sticky top-[47px] flex items-center bg-white dark:bg-black dark:text-white"
        >
          <a
            class="border-b-2 border-[transparent] py-2 px-4"
            @click.prevent="scrollPoint(0)"
            :class="{
              'text-main': section == 0,
            }"
            href="#"
            >北部</a
          >
          <a
            class="border-b-2 border-[transparent] py-2 px-4"
            @click.prevent="scrollPoint(1)"
            :class="{
              'text-main': section == 1,
            }"
            href="#"
            >中部</a
          >
          <a
            class="border-b-2 border-[transparent] py-2 px-4"
            @click.prevent="scrollPoint(2)"
            :class="{
              'text-main': section == 2,
            }"
            href="#"
            >南部</a
          >
          <a
            class="border-b-2 border-[transparent] py-2 px-4"
            @click.prevent="scrollPoint(3)"
            :class="{
              'text-main': section == 3,
            }"
            href="#"
            >東部</a
          >
          <a
            class="border-b-2 border-[transparent] py-2 px-4"
            @click.prevent="scrollPoint(4)"
            :class="{
              'text-main': section == 4,
            }"
            href="#"
            >外島</a
          >
        </div>
        <div class="text-black bg-white dark:text-white dark:bg-black">
          <div class="js-block" id="north">
            <h2 class="p-2 mx-3 text-2xl font-bold text-main">北部</h2>
            <div
              class="dark:text-white text-xl gap-2 grid grid-flow-row-dense grid-cols-2 grid-rows-4 p-2 min-h-[50vh]"
            >
              <button
                class="duration-300 ease-in-out bg-gray-200 rounded-lg dark:bg-gray-800 hover:bg-main hover:text-white"
                v-for="item in listFilter('north')"
                :key="item.value"
                @click.prevent="router.push(`/city/${item.value}`)"
              >
                {{ item.name }}
              </button>
            </div>
          </div>
          <div class="js-block" id="central">
            <h2 class="mx-3 text-2xl font-bold text-main">中部</h2>
            <div
              class="text-xl gap-2 grid grid-flow-row-dense grid-cols-2 p-2 min-h-[37.5vh]"
            >
              <button
                class="duration-300 ease-in-out bg-gray-200 rounded-lg dark:bg-gray-800 hover:bg-main hover:text-white"
                v-for="item in listFilter('central')"
                :key="item.value"
                @click.prevent="router.push(`/city/${item.value}`)"
              >
                {{ item.name }}
              </button>
            </div>
          </div>
          <div class="js-block" id="south">
            <h2 class="mx-3 text-2xl font-bold text-main">南部</h2>
            <div
              class="dark:text-white text-xl bg-white dark:bg-black gap-2 grid grid-flow-row-dense grid-cols-2 p-2 min-h-[37.5vh]"
            >
              <button
                class="duration-300 ease-in-out bg-gray-200 rounded-lg dark:bg-gray-800 hover:bg-main hover:text-white"
                v-for="item in listFilter('south')"
                :key="item.value"
                @click.prevent="router.push(`/city/${item.value}`)"
              >
                {{ item.name }}
              </button>
            </div>
          </div>
          <div class="js-block" id="east">
            <h2 class="mx-3 text-2xl font-bold text-main">東部</h2>
            <div
              class="dark:text-white text-xl bg-white dark:bg-black gap-2 grid grid-flow-row-dense grid-cols-2 p-2 min-h-[12.5vh]"
            >
              <button
                class="duration-300 ease-in-out bg-gray-200 rounded-lg dark:bg-gray-800 hover:bg-main hover:text-white"
                v-for="item in listFilter('east')"
                :key="item.value"
                @click.prevent="router.push(`/city/${item.value}`)"
              >
                {{ item.name }}
              </button>
            </div>
          </div>
          <div class="js-block" id="island">
            <h2 class="mx-3 text-2xl font-bold text-main">外島</h2>
            <div
              class="dark:text-white text-xl bg-white dark:bg-black gap-2 grid grid-flow-row-dense grid-cols-2 p-2 min-h-[25vh]"
            >
              <button
                class="duration-300 ease-in-out bg-gray-200 rounded-lg dark:bg-gray-800 hover:bg-main hover:text-white"
                v-for="item in listFilter('island')"
                :key="item.value"
                @click.prevent="router.push(`/city/${item.value}`)"
              >
                {{ item.name }}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="p-2 text-center text-gray-400 bg-white footer dark:bg-black">
        <slot name="footer"></slot>
        <p>Copyright©2022 TangYuCheng</p>
      </div>
</template>
<script setup>
import { computed, ref, onMounted, watch, onUnmounted } from "vue";
import { cities } from "@/utils/cities";
import { apiGetCityRoute } from "@/api/bus";
import { useRouter, useRoute } from "vue-router";
const route = useRoute();
const router = useRouter();
const view = ref("home");
const section = ref(-1);
onMounted(() => {
  window.addEventListener("scroll", scrollEvent);
});
onUnmounted(() => {
  window.removeEventListener('scroll', scrollEvent)
})
const listFilter = (str) => {
  let result;
  if (str) {
    result = cities.filter((item) => item.area === str);
  } else {
    result = cities.filter((item) => item.municipality);
  }
  return result;
};
const getCityBus = async (city) => {
  try {
    const res = await apiGetCityRoute(city);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
const scrollPoint = (i) => {
  if (i > -1) {
    const block = document.querySelectorAll(".js-block");
    scrollTo(block[i].offsetTop, block[i].offsetTop - 90);
    setTimeout(() => {
      section.value = i;
    }, 500);
  } else {
    scrollTo(window.offsetTop, window.offsetTop);
  }
};
const scrollEvent = (e) => {
  e = document.documentElement;
  const block = document.querySelectorAll(".js-block");
  for (let i = block.length - 1; i >= 0; i--) {
    const scrollView =
      e.scrollTop - 100 >= block[i].offsetTop - block[0].offsetTop;
    if (scrollView) {
      section.value = i;
      break;
    }
  }
};
const viewChange = (str) => {
  view.value = str;
  if (str === "all") {
    window.location.hash = "all";
    view.value = "all";
    setTimeout(() => {
      scrollPoint(0);
    }, 0);
  } else {
    window.location.hash = "";
    view.value = "home";
  }
};
watch(
  () => route.hash,
  (o,n) => {
    if (!n) {
      view.value = "all";
      } else {
      view.value = "home";
    }
  }
);
</script>
