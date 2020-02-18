<template>
  <div class="k-header">
    <slot name="left"></slot>
    <span class="title">{{ title }}</span>
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {
  name: 'kHeader',
  props: {
    title: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.k-header {
  width: 100vw;
  height: 1.2rem;
  color: #fff;
  font-size: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #52cac1;
  padding: 0 0.2rem;
  position: relative;
  .title{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%)
  }
}
</style>
