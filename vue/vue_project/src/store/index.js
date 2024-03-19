import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sampleItems: [],
    usersData: [],
  },
  getters: {
    sampleItems: state => state.sampleItems,
  },
  actions: {
    async loadSampleItems({commit}) {
      const res = await api.get('sample_items');
      const sampleItems = res.data.sample_items;
      commit('setSampleItems', { sampleItems });
      return sampleItems;
    },
    async addSampleItem({commit}, {text}) {
      const res = await api.post('sample_items', { sample_item: { text: text }});
      const sampleItem = res.data.sample_item;
      commit('addSampleItem', { sampleItem });
      return sampleItem;
    },
    async login() {
      api.get('login').then(res => {
        if (res.data) {
          console.log("ログイン");
          console.log(res.data);
        }
        else {
          console.log("error");
          console.log(res.data);
        }
      })
    },
    async signUp({commit}, {name, email, password}) {
      // api.post('signup', { name: name, email: email, password: password }).then(res => {
      //   if (res.data) {
      //     console.log("登録");
      //     console.log("res.data: " + res.data);
      //   }
      //   else {
      //     console.log("エラー");
      //     console.log("res.data: " + res.data);
      //   }
      // })
      const res = await api.post('signup', {user_data: {name: name, email: email, password: password}});
      const userData = res.data.user_data;
      commit('signUp', [userData]);
      console.log(userData);
      return userData;
    },
  },
  mutations: {
    setSampleItems(state, { sampleItems }) {
      state.sampleItems = sampleItems;
    },
    addSampleItem(state, { sampleItem }) {
      state.sampleItems.push(sampleItem);
    },
    signUp(state, { usersData }) {
      state.usersData = usersData;
    },
    login(state, { usersData }) {
      state.usersData = usersData;
    }
  },
  modules: {}
})
