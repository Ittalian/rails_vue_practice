<template>
    <div class="todo-page">
      <Header class="header"/>
      <div class="add-task-form">
          <router-link :to="{ name: 'LikeMyPage' }" class="like-link">いいねしたタスク一覧</router-link>
          <input class="input-sample-item-text" type="text" v-model="inputText">
          <div class="add-button" @click="addTask">追加</div>
      </div>
        <div class="tasks">タスク一覧</div>
        <div class="task-cards">
        <TaskCard
          v-for="(task, index) in tasks"
          :key="index"
          :task="task"
        />
      </div>
    </div>
  </template>
  
  <script>
  import TaskCard from '../components/TaskCard.vue';
  import Header from '@/components/Header'
  
  export default {
    name: 'TodoPage',
    components: {
      TaskCard,
      Header,
    },
    data() {
      return {
        tasks: [],
        inputText: '',
        url_top_id: '/',
      };
    },
    created() {
      this.loadTasks();
    },
    methods: {
      async loadTasks() {
        this.tasks =  await this.$store.dispatch('loadTasks');
      },
      async addTask() {
        if (!this.inputText) {
        return window.alert('テキストを入力してください');
        }
        await this.$store.dispatch('addTask', { title: this.inputText });
        alert("タスクを追加しました");
        this.inputText = '';
        this.loadTasks();
      },
      async showFollowList() {
        await this.$store.dispatch('showFollowList');
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .todo-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 36px;
    min-height: 100vh;
    background-color: #efe;
    padding: 0 36px 0 36px;
    box-sizing: border-box;
  
    .header {
          text-align: center;
          font-size:xx-large;
          font-weight: bold;
          color: #5af;
    }

    .tasks {
        font-size: large;
        font-weight: bolder;
    }
  
    .add-task-form {
      display: flex;
      gap: 36px;
      align-items: center;
      margin-right: 200px;

      .like-link {
        margin-right: 30px;
        font-size: large;
        font-weight: bold;
      }
  
      .input-sample-item-text {
        height: 36px;
        width: 300px;
        font-size: 16px;
        padding: 0 8px;
        border: 1px solid #ddd;
        border-radius: 4px;
      }
    }
  
    .task-cards {
      display: flex;
      gap: 24px;
      flex-wrap: wrap;
      width: 1000px;
    }

    .add-button {
      height: auto;
      width: auto;
      padding: 0 20px 0 20px;
      border-radius: 4px;
      line-height: 40px;
      text-align: center;
      background-color: #5af;
      color: white;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
      user-select: none;

      &:hover {
        background-color: #7cf;
      }
    }
  }
  </style>
  