import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

let apiURL = "https://randomuser.me/api/?results=1"

export default new Vuex.Store({
  state: {
    persons: [],
  },
  actions: {
    GET_DATA  ({ commit }){
      axios
      .get(apiURL)
      .then(rsp =>rsp.data.results )
      .then(person=>{
        commit('reloadNewUser',person)
      })
    }
  },
  mutations: {
    reloadNewUser(state,person){
     state.persons=person
    }
   }
})
