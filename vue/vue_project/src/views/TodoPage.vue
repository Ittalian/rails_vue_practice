<template>
    <div class="todo-page">
      <Header class="header"/>
      <div class="add-task-form">
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
      // async logout() {
      //     await this.$store.dispatch('logout');
      //     location.href = this.url_top_id;
      // }
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
  
    .title {
      font-size: 36px;
      font-weight: bold;
    }
  
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
  
      .input-sample-item-text {
        height: 36px;
        width: 300px;
        font-size: 16px;
        padding: 0 8px;
        border: 1px solid #ddd;
        border-radius: 4px;
      }
  
      .add-button {
        height: 40px;
        width: 85px;
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
  
    .task-cards {
      display: flex;
      gap: 24px;
      flex-wrap: wrap;
      width: 1000px;
    }
  }
  </style>
  