<template>
  <div id="app">
    <router-view class="view-box" />
    <section class="tab-box" v-if="!($route.path==='/login')">
      <k-tab></k-tab>
    </section>
  </div>
</template>
<script>
import KTab from './components/KTab'

export default {
  name: 'app',
  components: {
    KTab
  }
}
</script>
<style lang="scss">
#app {
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  .view-box {
    flex: 1;
    padding-bottom: 1.2rem;
  }
  .tab-box {
    height: 1.2rem;
  }
}
</style>
