<template>
  <div class="sample-page">
    <Header class="header"/>
    <div class="title">これはサンプルページです</div>
    <router-link :to="{ name: 'TopPage' }"> トップページに戻る</router-link>
    <div class="sample-item-form">
      <input class="input-sample-item-text" type="text" v-model="inputText">
      <div class="add-button" @click="addSampleItem">追加</div>
      <div class="add-button" @click="logout">ログアウト</div>
    </div>
    <div class="sample-item-cards">
      <SampleItemCard
        v-for="(sampleItem, index) in sampleItems"
        :key="index"
        :sampleItem="sampleItem"
      />
    </div>
  </div>
</template>

<script>
import SampleItemCard from '@/components/SampleItemCard'
import Header from '@/components/Header'

export default {
  name: 'SamplePage',
  components: {
    SampleItemCard,
    Header,
  },
  data() {
    return {
      sampleItems: [],
      inputText: '',
      url_top_id: '/',
    };
  },
  created() {
    this.loadSampleItems();
  },
  methods: {
    async loadSampleItems() {
      this.sampleItems =  await this.$store.dispatch('loadSampleItems');
    },
    async addSampleItem() {
      if (!this.inputText) {
      return window.alert('テキストを入力してください');
      }
      await this.$store.dispatch('addSampleItem', { text: this.inputText });
      this.inputText = '';
    },
    async logout() {
        await this.$store.dispatch('logout');
        location.href = this.url_top_id;
    }
  }
}
</script>

<style lang="scss" scoped>
.sample-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
  min-height: 100vh;
  background-color: #efe;
  padding: 36px;
  box-sizing: border-box;

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

  .sample-item-form {
    display: flex;
    gap: 36px;
    align-items: center;

    .input-sample-item-text {
      height: 36px;
      width: 300px;
      font-size: 16px;
      padding: 0 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
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

      &:hover {
        background-color: #7cf;
      }
    }
  }

  .sample-item-cards {
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
    width: 1000px;
  }
}
</style>
