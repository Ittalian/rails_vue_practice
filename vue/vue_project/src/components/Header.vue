<template>
  <header>
    <div class="header-section">
      <span class="header">{{ $store.state.loggedIn == true ? "ログイン済み" : "未ログイン" }}</span>
      <div class="right-section">
        <router-link :to="{ name: 'SignUpPage' }" class="signup-link">新規登録</router-link>
        <router-link :to="{ name: 'LoginPage' }" class="login-link">ログイン</router-link>
        <router-link :to="{ name: 'EveryonePage' }" class="everyone-link" v-show="$store.state.loggedIn">みんなのタスク</router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
name: 'Header',
methods: {
    login() {
      this.loggedIn = true;
      this.$emit('login-success');
    },
    logout() {
      this.loggedIn = false;
      this.$emit('logout-success');
    },
    async logout2() {
      this.loggedIn = false;
      this.$emit('logout-success');
      await this.$store.dispatch('logout');
    }
}
};
</script>
  
<style>
.header-section {
  display: flex;
  margin-left: 25%;
}
.header {
height: 200px;
width: 100%;
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
</style>