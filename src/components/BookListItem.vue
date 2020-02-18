<template>
  <div class="book-list-item">
    <van-row class="k-row">
      <van-col span="6">
        <img class="img" :src="item.img" alt="" />
      </van-col>
      <van-col class="desc" span="14">
        <p class="name">{{ item.name }}</p>
        <p class="author">{{ item.author }}</p>
        <p class="where">{{ item.where }}</p>
        <p class="index">{{ item.index }}</p>
      </van-col>
      <van-col span="4" class="handle-cls">
        <span class="zt">置顶</span>
        <van-checkbox v-model="isCollect"  checked-color="#52C9C3"></van-checkbox>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import { Col, Row, Checkbox } from 'vant'
export default {
  name: 'book-list-item',
  components: {
    [Col.name]: Col,
    [Row.name]: Row,
    [Checkbox.name]: Checkbox
  },
  props: {
    item: {
      type: Object
    }
  },
  data () {
    return {
      isCollect: true
    }
  }
}
</script>
<style lang="scss">
.book-list-item {
  .van-checkbox__icon {
    font-size: 0.6rem;
    margin-top: 0.4rem;
  }
}
</style>
<style lang="scss" scoped>
.book-list-item {
  padding: 0.4rem 0.4rem 0;
  .k-row {
    padding-bottom: 0.4rem;
    border-bottom: 1px solid #f0f0f0;
    .img {
      width: 100%;
    }
    .desc {
      padding-left: 0.3rem;
      .name {
        color: #3f3f3f;
        font-size: 0.5rem;
        line-height: 1.3rem;
      }
      .author {
        color: #757575;
        font-size: 0.4rem;
        line-height: 0.7rem;
      }
      .where {
        color: #757575;
        font-size: 0.4rem;
        line-height: 0.7rem;
      }
      .index {
        color: #757575;
        font-size: 0.4rem;
        line-height: 0.7rem;
      }
    }
    .handle-cls {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .zt {
      background-color: #64d1cb;
      font-size: 0.3rem;
      color: #fff;
      border-radius: 0.03rem;
      padding: 0.06rem 0.2rem;
    }
  }
}
</style>
