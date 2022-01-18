<template>
  <header
    class="relative flex items-center justify-center w-full p-2 text-gray-400 bg-white dark:bg-black"
  >
    <div class="absolute top-0 right-0 left-0 bottom-0 z-[-1]"></div>
    <div class="flex-1">
      <a v-if="route.path != '/'" @click.prevent="pageGo(-1)" href="#">
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
    <a href="#" @click.prevent="homeCheck()">
      <h1 class="flex-1 text-2xl italic font-bold text-center">
        <span class="text-2xl italic font-bold text-main">T</span>aiwan<span
          class="text-2xl italic font-bold text-main"
          >B</span
        >us
      </h1>
    </a>

    <div class="flex items-center justify-end flex-1">
      <label for="toggleTheme" class="flex items-center cursor-pointer">
        <!-- toggle -->
        <div class="relative">
          <!-- input -->
          <input
          :checked="toggle"
            type="checkbox"
            id="toggleTheme"
            class="sr-only"
            @change="themeSet($event)"
          />

          <!-- line -->
          <div class="block h-8 bg-gray-600 rounded-full w-14"></div>
          <!-- dot -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="moon h-6 w-6 absolute text-white right-[3px] bottom-2/4 translate-y-2/4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="sun h-6 w-6 absolute text-white left-[3px] bottom-2/4 translate-y-2/4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          <div
            id="toggleDot"
            class="absolute w-6 h-6 transition bg-white rounded-full dot left-1 top-1"
          ></div>
        </div>
      </label>
      <!-- <button
        id="light"
        class="px-4 py-2 bg-white border-2 border-gray-400 rounded-full"
      >
        日間模式 <i class="text-yellow-500 fas fa-sun"></i>
      </button>
      <button
        id="dark"
        class="px-4 py-2 text-white bg-gray-700 border-2 border-gray-700 rounded-full"
      >
        夜間模式<i class="text-yellow-500 fas fa-moon"></i>
      </button> -->
      <!-- <svg
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
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
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
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        />
      </svg> -->
    </div>
  </header>
</template>
<script setup>
import { computed, ref,onBeforeMount, onMounted, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
const store = useStore();
const route = useRoute();
const router = useRouter();
const theme = computed(() => store.getters.theme);
const toggle = computed(()=>{
  if(document.documentElement.classList.contains('dark')){
    return false
  }else{
    return true
  }
})
isDarkMode()
const pageGo = (i) => {
  router.go(i);
};
const homeCheck = () => {
  if (route.path === "/") {
    window.location.hash = "";
  } else {
    router.push(`/`);
    console.log("check");
  }
};
const themeSet = (e) => {
  let input = document.getElementById("toggleDot");
  if (e.currentTarget.checked) {
    document.documentElement.classList.remove("dark");
    store.dispatch("handThemeSet", true);
  } else {
    document.documentElement.classList.add("dark");
    store.dispatch("handThemeSet", false);
  }
};
function isDarkMode() {
  if (!('matchMedia' in window)) {
    return
  }
  const mediaQuery = matchMedia('(prefers-color-scheme: dark)')
  return mediaQuery.matches
}
</script>
<style lang="scss">
#toggleTheme:checked {
  & + div {
    background-color: #f97316;
  }
  & ~ #toggleDot {
    transform: translateX(100%);
  }
}
</style>
