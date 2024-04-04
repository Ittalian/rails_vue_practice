
<template>
  <div class="good-button">
    <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet">
    <i
    class="far fa-heart"
    @click="clickHeart"
    :class="{ 'heart-red' : isLiking }"
    >
    <span class="count">{{ likesCount }}</span>
  </i>
</div>
</template>

<script>
export default {
  props: ["taskId", "taskUserId"],
  data () {
    return {
      likesCount: 0,
      isLiking: false
    }
  },
  created() {
    this.checkLike();
    this.countLike();
  },
  methods: {
    async checkLike() {
      this.isLiking = await this.$store.dispatch('checkLike', {task_id: this.taskId});
    },
    async countLike() {
      this.likesCount = await this.$store.dispatch('countLike', {task_id: this.taskId});
    },
    async clickHeart () {
      this.isLiking = await this.$store.dispatch('giveLike', {task_id: this.taskId});
      this.likesCount = await this.$store.dispatch('countLike', {task_id: this.taskId});
    },
  }
}
</script>

<style>
.good-button {
    width: 45px;
    height: 45px;
    border: solid 2px black;
    border-radius: 100%;
    margin-left: 200px;
    
    .fa-heart {
        margin: 13px 0 0 7px;
        font-size: 20px;
        color: #5F5B5B;
        position: absolute;
    }
    .count {
        color: #5F5B5B;
    }
    .heart-red {
        color: red;
    }
}
</style>

