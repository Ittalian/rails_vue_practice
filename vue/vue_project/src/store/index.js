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
    taskDetails: [],
    taskUser: [],
    isFollow: false,
  },
  getters: {
    sampleItems: state => state.sampleItems,
    loggedIn: state => state.loggedIn,
    tasks: state => state.tasks,
    userId: state => state.userId,
    taskUser: state => state.taskUser,
    // followedUser: state => state.followedUser,
    isFollow: state => state.isFollow,
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
      return tasks;
    },
    //タスク追加
    async addTask({commit}, {title}) {
      const res = await api.post('tasks', { task: { title: title }});
      const task = res.data.task;
      commit('addTask', { task });
      return task;
    },
    async completeTask({commit}, {title}) {
      const res = await api.post('tasks_complete', { task: { title: title }});
      const task = res.data.task;
      commit('completeTask', { task });
      return task;
    },
    async getUser({commit}, {user_id}) {
      const res = await api.post('get_user', { task_user: { user_id: user_id }})
      const taskUser = res.data.task_detail_params;
      commit('setUser', {taskUser});
    },
    async loadUsers({commit}) {
      const res = await api.get('everyone');
      const users = res.data.user_params;
      commit('setUsers', { users });
      return users;
    },
    async isFollow({commit}, {user_id}) {
      const res = await api.post('isFollow', { relationship: { user_id: user_id } })
      const isFollow = res.data.followed_params;
      commit('isFollow', {isFollow});
      return isFollow
    },
    async followBtnClicked({commit}, {user_id}) {
      const res = await api.post('isFollow', { relationship: { user_id: user_id } })
      const isFollow = res.data.followed_params;
      if (!isFollow) {
        await api.post('follow', { relationship: { user_id: user_id } })
        alert("フォローしました");
        commit('isFollow', {isFollow});
      } else {
        await api.post('unfollow', { relationship: { user_id: user_id } })
        alert("フォローを解除しました");
        commit('isFollow', {isFollow});
      }
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
    },
    completeTask(state, { tasks }) {
      state.tasks = tasks;
    },
    setUsers(state, { usersData }) {
      state.usersData = usersData;
    },
    setTaskDetails(state, { taskDetails }) {
      state.taskDetails = taskDetails;
    },
    setUser(state, { taskUser }) {
      state.taskUser = taskUser;
    },
    // followUser(state) {
    //   state.isFollowed = true;
    // },
    // unfollowUser(state) {
    //   state.isFollowed = false;
    // }
    isFollow(state, { isFollow }) {
      state.isFollow = isFollow;
    },
  },
  modules: {},
  plugins: [createPersistedState(
    { // ストレージのキーを指定
      key: 'rails_vue_practice',
      // ストレージの種類を指定
      paths: [
        'loggedIn',
        'taskUser',
      ],
      storage: window.sessionStorage,
    }
  )]
})
