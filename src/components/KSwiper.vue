<template>
  <div class="k-swiper">
    <van-swipe v-if="swiperList.length" :autoplay="2000">
      <van-swipe-item v-for="item in swiperList" :key="item.imgId">
        <img class="img" v-lazy="item.imgUrl" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { SwipeItem, Swipe } from 'vant'
export default {
  name: 'kSwiper',
  props: {
    swiperList: {
      type: Array
    }
  },
  data () {
    return {}
  },
  components: {
    [SwipeItem.name]: SwipeItem,
    [Swipe.name]: Swipe
  }
}
</script>
<style lang="scss">
.k-swiper {
  .van-swipe__indicator {
    width: .2rem;
    height: .2rem;
  }
  .van-swipe__indicators{
    bottom: .3rem;
  }
}
</style>
<style lang="scss" scoped>
.k-swiper {
  .img {
    width: 100vw;
    height: 5.4rem;
  }
}
</style>
