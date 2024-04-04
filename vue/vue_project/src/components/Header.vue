<template>
  <header>
    <div class="header-section">
      <div class="logout-button" @click="logout" v-show="$store.state.loggedIn">ログアウト</div>
      <span class="header">{{ $store.state.loggedIn ? "ログイン済み" : "未ログイン" }}</span>
      <div class="right-section">
        <router-link :to="{ name: 'SignUpPage' }" class="signup-link">新規登録</router-link>
        <router-link :to="{ name: 'LoginPage' }" class="login-link">ログイン</router-link>
        <router-link :to="{ name: 'TodoPage' }" class="todo-link" v-show="$store.state.loggedIn">マイページ</router-link>
        <router-link :to="{ name: 'EveryonePage' }" class="everyone-link" v-show="$store.state.loggedIn">みんなのタスク</router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
name: 'Header',
data() {
  return {
    url_top_id: '/',
  }
},
methods: {
    async logout() {
      await this.$store.dispatch('logout');
      location.href = this.url_top_id;
    },
  }
};
</script>
  
<style>
.header-section {
  display: flex;
  /* margin-left: 15%; */
}
.header {
  height: 200px;
  width: 100%;
  padding-left: 10%;
}
.right-section {
  width: 50%;
  font-size: medium;
  display: flex;
}
.signup-link {
  margin-right: 10px;
  height: 30px;
}
.login-link {
  margin-right: 10px;
  height: 30px;
}
.todo-link {
  margin-right: 10px;
  height: 30px;
}
.everyone-link {
  height: 30px;
}
.logout-button {
  height: 40px;
  width: 150px;
  margin-top: 5px;
  padding: 0 5px 0 5px;
  border-radius: 4px;
  border: solid black;
  line-height: 40px;
  text-align: center;
  color: black;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: rgb(218, 10, 10);
  }
}
</style>