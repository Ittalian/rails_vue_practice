<template>
    <div class="users" >
      <div class="users-title">{{ user.name }}のタスク</div>
      <div class="complete-button" @click="getUser">詳細</div>
    </div>
</template>

  <script>
  export default {
    name: 'UserCard',
    components: {},
    props: {
      user: {
        type: Object,
        default: () => {},
      },
      taskDetails: {
        type: Object,
        default: () => {},
      }
    },
    data() {
        return {
          url_detail_id: '/detail',
        }
    },
    methods: {
      async getUser() {
        await this.$store.dispatch('getUser', { user_id: this.user.id });
        location.href = this.url_detail_id;
      },
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .users {
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

    .complete-button {
        height: auto;
        width: 50px;
        margin-left: 80%;
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
  </style>
  