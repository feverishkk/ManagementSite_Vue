import { ActionContext, createStore } from 'vuex'
import { getCurrentInstance } from 'vue';

export default createStore({
  state() {
    return{
      auth:true,
      userEmail: '',
      getCurrentComponent: getCurrentInstance()?.type.name,
    }
  },
  getters: {
  },
  mutations: {
    setAuth(state:{auth:boolean}, auth:boolean){
      state.auth = auth;
    },
  },
  actions: {
    setAuth(context:ActionContext<any, any>, auth:boolean){
      context.commit('setAuth', auth);
    },
  },
  modules: {
  }
})