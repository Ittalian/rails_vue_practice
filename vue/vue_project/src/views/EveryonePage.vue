<template>
    <div class="everyone-page">
      <Header class="header"/>
        <div class="title">すべてのユーザー</div>
        <div class="user-cards">
        <UserCard
          v-for="(user, index) in users"
          :key="index"
          :user="user"
        />
        </div>
    </div>
  </template>
  
  <script>
  import UserCard from '@/components/UserCard.vue';
  import Header from '@/components/Header'
  
  export default {
    name: 'everyonePage',
    components: {
      UserCard,
      Header,
    },
    data() {
      return {
        users: [],
        url_top_id: '/',
      };
    },
    created() {
      this.loadUsers();
    },
    methods: {
      async loadUsers() {
        this.users =  await this.$store.dispatch('loadUsers');
      },
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .everyone-page {
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
  
    .user-cards {
      display: flex;
      gap: 24px;
      flex-wrap: wrap;
      width: 1000px;
    }
  }
  </style>
  