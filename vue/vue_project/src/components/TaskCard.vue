<template>
    <div class="tasks">
      <div class="tasks-title">{{ task.title }}</div>
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
  