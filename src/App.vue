<template class="main">
<Loading v-show="load" ></Loading>
  <div class="max-w-md mx-auto">
    <div class="fixed top-0 max-w-md mx-auto z-10 w-full">
  <Header></Header>
    </div>
  <router-view></router-view>
  </div>
</template>
<script setup>
import { computed } from "vue";
import Loading from "@/components/Loading.vue";
import Header from "@/components/Header.vue";
import { useStore } from "vuex";
const store = useStore();
const load = computed(() => store.getters.loading);
</script>
