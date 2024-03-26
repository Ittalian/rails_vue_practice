<template>
  <div class="top-page">
    <Header class="header"/>
    <div class="title">トップページ</div>
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
    margin-top: 100px;
    margin-right: 15px;
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
