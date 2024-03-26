<template>
    <div class="tasks" >
      <div class="tasks-title">{{ task.title }}</div>
      <div class="complete-button" @click="completeTask">完了</div>
    </div>
</template>

  <script>
  export default {
    name: 'TaskCard',
    components: {},
    props: {
      task: {
        type: Object,
        default: () => {},
      },
    },
    methods: {
      async completeTask() {
        if (confirm("このタスクを完了しますか?")) {
          await this.$store.dispatch('completeTask', { title: this.task.title });
          alert("完了したタスクを削除しました");
        }

        location.reload();
      },
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .tasks {
    position: relative;
    width: 300px;
    height: min-content;
    min-height: 100px;
    background-color: white;
    padding: 24px;
    box-sizing: border-box;
    border: 1px solid #eee;
    border-radius: 8px;
    box-shadow: 2px 2px 4px #bbb;
    cursor: pointer;

    .complete-button {
        height: auto;
        width: 50px;
        margin-left: 80%;
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
  
    &-title {
      font-size: 16px;
      font-weight: bold;
      user-select: none;
    }
  
    &:hover {
      right: 4px;
      bottom: 4px;
    }
  }
  </style>
  