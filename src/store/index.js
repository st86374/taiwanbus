import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
        loading: false,
        theme:true,

    };
  },
  actions:{
    handLoadingToggle(context){
      context.commit("loadingToggle");
    },
    handThemeSet(context,payload){
      context.commit("themeSet",payload);
    },
  },
  mutations:{
    loadingToggle(state){
      state.loading = !state.loading;
    },
    themeSet(state,payload){
      state.theme = payload
    },
  },
  getters:{
    loading(state){
      return state.loading
    },
    theme(state){
      return state.theme
    },
  }
});

export default store;