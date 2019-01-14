import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    login:"isNoLogin"
  },
  mutations:{
    loginchange:(state,qcLogin)=> {
        state.login = qcLogin
        window.localStorage.setItem('qcLogin', state.login);
    },
  }
})

