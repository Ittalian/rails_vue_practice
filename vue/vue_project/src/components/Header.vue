<template>
  <header>
    <div class="left-section">
      <span></span>
    </div>
    <div class="right-section">
      <span class="header">{{ $store.state.loggedIn == true ? "ログイン済み" : "未ログイン" }}</span>
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
    }
}
};
</script>
  
<style>
.login-button {
    height: auto;
    width: 100px;
    border-radius: 4px;
    line-height: 40px;
    text-align: center;
    background-color: #5af;
    color: white;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    user-select: none;
    margin-left: 50%;
    margin-bottom: 20px;

    &:hover {
    background-color: #7cf;
    }
}
.header {
  text-align: center;
  height: 200px;
}
</style>