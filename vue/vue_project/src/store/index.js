import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sampleItems: [],
    usersData: [],
    loggedIn: false,
    tasks: [],
  },
  getters: {
    sampleItems: state => state.sampleItems,
    loggedIn: state => state.loggedIn,
    tasks: state => state.tasks,
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
    //タスク読み込み
    async loadTasks({commit}) {
      const res = await api.get('tasks');
      const tasks = res.data.task_params;
      commit('setTasks', { tasks });
      console.log(tasks);
      return tasks;
    },
    //タスク追加
    async addTask({commit}, {title}) {
      const res = await api.post('tasks', { task: { title: title }});
      const task = res.data.task;
      commit('addTask', { task });
      return task;
    },
    async login({commit}, {name, email, password}) {
      const res = await api.post('login', {login_data: {name: name, email: email, password: password}});
      const loginData = res.data.login_data;
      commit('login', this.state.loggedIn);
      return loginData;
    },
    async logout({commit}) {
      commit('logout');
    },
    async signUp({commit}, {name, email, password}) {
      const res = await api.post('signup', {user_data: {name: name, email: email, password: password}});
      const userData = res.data.user_data;
      commit('signUp', this.state.loggedIn);
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
      state.loggedIn = true;
    },
    login(state, { loginData }) {
      state.loginData = loginData;
      state.loggedIn = true;
    },
    logout(state) {
      state.loggedIn = false;
    },
    setTasks(state, { tasks }) {
      state.tasks = tasks;
    },
    addTask(state, { tasks }) {
      state.tasks = tasks;
    }
  },
  modules: {},
  plugins: [createPersistedState(
    { // ストレージのキーを指定
      key: 'rails_vue_practice',
      // ストレージの種類を指定
      paths: [
        'loggedIn',
      ],
      storage: window.sessionStorage,
    }
  )]
})
