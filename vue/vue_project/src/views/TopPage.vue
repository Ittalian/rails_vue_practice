<template>
  <div class="top-page">
    <Header class="header"/>
    <div class="title">トップページ</div>
    <!-- <router-link :to="{ name: 'SamplePage' }">サンプルページを見る</router-link> -->
    <router-link :to="{ name: 'SignUpPage' }">新規登録ページ</router-link><br>
    <router-link :to="{ name: 'LoginPage' }">ログインページ</router-link>
      <!-- <div class="input-area">
        <div>
          <label>ユーザー名</label>
          <input class="input-text" type="text" v-model="name">
        </div>
        <div>
          <label>メールアドレス</label>
          <input class="input-text" type="text" v-model="email">
        </div>
        <div>
          <label>パスワード</label>
          <input class="input-text" type="text" v-model="password">
        </div>
      </div>
    <div class="add-button" @click="signUp">新規登録</div>
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
    <div class="add-button" @click="login">ログイン</div> -->
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {

  name: 'TopPage',
  components: {
    Header,
  },
  data() {
    return {
      name: '',
      email: '',
      password: '',
      loginName: '',
      loginEmail: '',
      loginPassword: '',
    };
  },
  methods: {
    async signUp() {
      await this.$store.dispatch('signUp', { name: this.name, email: this.email, password: this.password });
      this.name = '';
      this.email = '';
      this.password = '';
    },
    async login() {
      await this.$store.dispatch('login', { name: this.loginName, email: this.loginEmail, password: this.loginPassword });
      this.loginName = '';
      this.loginEmail = '';
      this.loginPassword = '';
    }
  }
}
</script>

<style lang="scss" scoped>
.top-page {
  text-align: center;
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
  .add-button {
      height: 40px;
      width: 64px;
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
  .input-area {
    margin-left: 40%;
  }
  .input-text {
    margin-bottom: 10px;
  }
}
</style>
