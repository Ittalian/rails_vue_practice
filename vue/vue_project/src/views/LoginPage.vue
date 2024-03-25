<template>
    <div class="top-page">
      <Header class="header" />
      <div class="title">ログイン</div>
      <!-- <router-link :to="{ name: 'SamplePage' }">サンプルページを見る</router-link> -->
        <div class="input-area">
            <div>
              <label>ユーザー名</label>
              <input class="input-text" type="text" v-model="loginName">
            </div>
            <div>
              <label>メールアドレス</label>
              <input class="input-text" type="text" v-model="loginEmail">
            </div>
            <div>
              <label>パスワード</label>
              <input class="input-text" type="text" v-model="loginPassword">
            </div>
          </div>
        <div class="add-button" @click="login">ログイン</div>
    </div>
  </template>
  
  <script>
  import Header from '@/components/Header'
  
  export default {
  
    name: 'LoginPage',
    components: {
      Header,
    },
    data() {
      return {
        loginName: '',
        loginEmail: '',
        loginPassword: '',
        loggedIn: this.$store.state.loggedIn,
        url_sample_id: '/todo',
      };
    },
    methods: {
      async login() {
        await this.$store.dispatch('login', { name: this.loginName, email: this.loginEmail, password: this.loginPassword })
        this.loginName = '';
        this.loginEmail = '';
        this.loginPassword = '';
        location.href = this.url_sample_id;
      },
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .top-page {
    .title {
      font-size: 36px;
      font-weight: bold;
      text-align: center;
    }
    .header {
        text-align: center;
        font-size:xx-large;
        font-weight: bold;
        color: #5af;
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
        margin-left: 47%;
        margin-bottom: 20px;
        &:hover {
          background-color: #7cf;
        }
    }
    .input-area {
      margin-left: 40%;
    }
    .input-text {
      margin-bottom: 10px;
    }
  }
  </style>
  