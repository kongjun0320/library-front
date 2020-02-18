<template>
  <div class="mine">
    <k-header title="张三先生">
      <van-icon name="setting-o" slot="right" />
    </k-header>
    <section class="avator">
      <section class="avator-inner-box">
        <img src="../../public/images/avator.jpg" alt="" />
      </section>
    </section>
  </div>
</template>

<script>
import { Icon } from 'vant'
import KHeader from '../components/KHeader'
export default {
  name: 'mine',
  components: {
    KHeader,
    [Icon.name]: Icon
  }
}
</script>

<style lang="scss" scoped>
.mine {
  .avator {
    background-color: #52cac1;
    padding-top: .3rem;
    height: 3rem;
    .avator-inner-box {
      width: 2rem;
      height: 2rem;
      margin: 0 auto;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
  }
}
</style>
