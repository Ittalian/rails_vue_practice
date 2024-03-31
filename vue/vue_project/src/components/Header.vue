<template>
  <header>
    <div class="header-section">
      <div class="add-button" @click="logout" v-show="$store.state.loggedIn">ログアウト</div>
      <span class="header">{{ $store.state.loggedIn == true ? "ログイン済み" : "未ログイン" }}</span>
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
  padding-left: 110px;
}
.right-section {
  width: 50%;
  font-size: medium;
  display: flex; 
}
.signup-link {
  margin-right: 10px;
}
.login-link {
  margin-right: 10px;
}
.todo-link {
  margin-right: 10px;
}
.add-button {
  height: 40px;
  width: 20%;
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
</style>