<template>
    <div class="detail-page">
      <Header class="header"/>
        <div class="task-detail-cards">
          <div class="tasks" v-for="(likeTaskTitle, index) in likeTaskTitles" :key="index">
            <p class="tasks-title">{{ likeTaskTitle }}</p>
            <GoodButton :taskId=likeTaskIds[index] :taskUserId=likeTaskUserIds[index]></GoodButton>
        </div>
        </div>
    </div>
  </template>
  
  <script>
  import Header from '@/components/Header'
  import GoodButton from '../components/GoodButton.vue';
  
  export default {
    name: 'LikeMyPage',
    components: {
      Header,
      GoodButton,
    },
    data() {
      return {
        likeTaskTitles: [],
        likeTaskIds: [],
        likeTaskUserIds: [],
        url_top_id: '/',
      };
    },
    created() {
      this.loadtaskTitles();
    },
    methods: {
      async loadtaskTitles() {
        await this.$store.dispatch('getLikeTasks');
        for (var i = 0; i < this.$store.state.likeTasks.length; i++) {
          this.likeTaskTitles.push(this.$store.state.likeTasks[i].title);
          this.likeTaskIds.push(this.$store.state.likeTasks[i].id);
          this.likeTaskUserIds.push(this.$store.state.likeTasks[i].user_id);
        }
      },
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .detail-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 36px;
    min-height: 100vh;
    background-color: #efe;
    padding: 0 36px 0 36px;
    box-sizing: border-box;
  
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
    .title {
        font-size: large;
        font-weight: bolder;
    }
  
    .header {
        text-align: center;
        font-size:xx-large;
        font-weight: bold;
        color: #5af;
    }
  
    .task-detail-cards {
      display: flex;
      gap: 24px;
      flex-wrap: wrap;
      width: 1000px;
    }
  
    .tasks {
      position: relative;
      width: 300px;
      height: min-content;
      min-height: 100px;
      background-color: white;
      padding: 24px;
      box-sizing: border-box;
      border: 1px solid #eee;
      border-radius: 8px;
      box-shadow: 2px 2px 4px #bbb;
      cursor: pointer;
  
      &-title {
        font-size: 16px;
        font-weight: bold;
        user-select: none;
      }
    
      &:hover {
        right: 4px;
        bottom: 4px;
      }
    }
  }
  </style>
  