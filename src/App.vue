<template>
  <div id="app">
    <transition name="slide">
      <router-view class="view-box" />
    </transition>
    <section
      class="tab-box"
      v-if="!($route.path === '/login') && !($route.path === '/search')"
    >
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
  },
  computed: {
    isShowTab () {
      return this.$route.path !== '/login' && this.$route.path !== '/search'
    }
  }
}
</script>
<style lang="scss">
.slide-enter-active,
.slide-leave-active {
  transition: all 0.8s ease;
  opacity: 0;
  transform: translate(0, 0);
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translate(-100%, 0);
}
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
