<template>
  <div class="knav-box">
    <van-row>
      <van-col span="8">
        <span>分类榜</span>
        <img src="../../public/images/n1.jpg" alt="" />
      </van-col>
      <van-col span="8">
        <span>借阅榜</span>
        <img src="../../public/images/n2.jpg" alt="" />
      </van-col>
      <van-col span="8">
        <span>新书榜</span>
        <img src="../../public/images/n3.jpg" alt="" />
      </van-col>
    </van-row>
  </div>
</template>

<script>
import { Col, Row } from 'vant'
export default {
  name: 'kNav',
  components: {
    [Col.name]: Col,
    [Row.name]: Row
  }
}
</script>
<style lang="scss">
.knav-box {
  .van-col {
    position: relative;
    span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      margin: auto;
      color: #fff;
      font-size: 0.5rem;
    }
    img{
      width:100%;
    }
    &:nth-of-type(2) {
      img {
        margin-top: 0.05rem;
      }
    }
    &:nth-of-type(3) {
      img {
        margin-top: 0.09rem;
      }
    }
  }
}
</style>
<style lang="scss" scoped></style>
