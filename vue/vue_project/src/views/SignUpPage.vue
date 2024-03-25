<template>
    <div class="top-page">
      <Header class="header"/>
      <div class="title">新規登録</div>
        <div class="input-area">
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
    </div>
  </template>
  
  <script>
  import Header from '@/components/Header'
  
  export default {
  
    name: 'SignUpPage',
    components: {
      Header,
    },
    data() {
      return {
        name: '',
        email: '',
        password: '',
        url_sample_id: '/todo'
      };
    },
    methods: {
      async signUp() {
        if (!this.name) {
          return window.alert('テキストを入力してください');
        }
        await this.$store.dispatch('signUp', { name: this.name, email: this.email, password: this.password });
        this.name = '';
        this.email = '';
        this.password = '';
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
  