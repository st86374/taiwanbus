<template class="main">
<Loading v-show="load" ></Loading>
  <div class="max-w-md mx-auto">
  <router-view></router-view>
  </div>
</template>
<script setup>
import { computed } from "vue";
import Loading from "@/components/Loading.vue";
import { useStore } from "vuex";
const store = useStore();
const load = computed(() => store.getters.loading);
</script>
