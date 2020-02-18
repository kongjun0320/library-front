<template>
  <van-tabbar v-model="active" active-color="#56C8BE" inactive-color="#000">
    <van-tabbar-item to="/home" icon="wap-home-o">首页</van-tabbar-item>
    <van-tabbar-item to='/collection' icon="notes-o">收藏</van-tabbar-item>
    <van-tabbar-item to='/mine' icon="user-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant'
export default {
  name: 'kTab',
  data () {
    return {
      active: 0,
      activeRoute: { '/home': 0, '/collection': 1, '/mine': 2 }
    }
  },
  watch: {
    $route (to, from) {
      this.active = this.activeRoute[to.path]
    }
  },
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  }
}
</script>

<style lang="scss">
.van-tabbar{
  height: 1.2rem;
  .van-tabbar-item{
    font-size: .4rem;
  }
  .van-tabbar-item__icon{
    font-size: .5rem;
  }
}
</style>
