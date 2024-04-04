<template>
    <div class="users" >
      <div class="users-title">{{ user.name }}</div>
      <div class="buttons">
        <div class="complete-button" @click="getUser">詳細</div>
        <div class="follow-button" @click="followBtnClicked">{{ this.isFollowing == true ? "フォロー済み" : "フォロー" }}</div>
      </div>
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
          isFollowing: false,
        }
    },
    created() {
      this.isFollow()
    },
    methods: {
      async getUser() {
        await this.$store.dispatch('getUser', { user_id: this.user.id });
        location.href = this.url_detail_id;
      },
      async followBtnClicked() {
        await this.$store.dispatch('followBtnClicked', { user_id: this.user.id });
        location.reload();
      },
      async isFollow() {
        this.isFollowing = await this.$store.dispatch('isFollow', {user_id: this.user.id});
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

    .buttons {
      display: inline-flex;
      margin-top: 20px;

    .complete-button {
        margin-left: 50px;
        width: auto;
        padding: 0 10px 0 10px;
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

    .follow-button {
        margin-left: 10px;
        width: auto;
        padding: 0 10px 0 10px;
        border-radius: 4px;
        line-height: 40px;
        text-align: center;
        background-color: rgb(232, 199, 199);
        color: black;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
        user-select: none;
  
        &:hover {
          background-color: rgb(252, 194, 194);
        }
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
  