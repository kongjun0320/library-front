<template>
  <div class="book-type-box">
    <section class="title">
      <span class="type-cls">{{ bookType }}</span>
      <section class="more"><span>更多</span><van-icon name="arrow" /></section>
    </section>
    <section class="content-box">
      <section class="img-title">
        <van-col span="7">
          <img class="img" :src="item.titleImg" alt="" />
        </van-col>
        <van-col span="17">
          <section class="desc-box">
            <p class="name">{{ item.titleName }}</p>
            <p class="author">{{ item.titleAuthor }}</p>
            <p class="description">{{ item.titleDescription }}</p>
          </section>
        </van-col>
      </section>
      <section class="img-box">
        <!-- <van-col
          span="7"
          v-for="(item, index) in bookTypeData.list"
          :key="index"
        >
          <img class="img" :src="item.img" alt="" />
        </van-col> -->

        <van-col span="7">
          <img class="img" :src="item.img1" alt="" />
        </van-col>
        <van-col span="7">
          <img class="img" :src="item.img2" alt="" />
        </van-col>
        <van-col span="7">
          <img class="img" :src="item.img3" alt="" />
        </van-col>
      </section>
    </section>
  </div>
</template>

<script>
import { Icon, Col, Row } from 'vant'
export default {
  name: 'bookType',
  props: {
    bookType: {
      type: String
    },
    item: {
      type: Object
    }
  },
  components: {
    [Icon.name]: Icon,
    [Col.name]: Col,
    [Row.name]: Row
  }
}
</script>

<style lang="scss" scoped>
.book-type-box {
  .title {
    padding: 0 0.1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .type-cls {
      color: #6a6a6a;
      font-size: 0.5rem;
      padding-left: 0.36rem;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        top: 0.1rem;
        left: 0.1rem;
        display: block;
        width: 0.1rem;
        height: 0.5rem;
        background: #4dc8c3;
      }
    }
    .more {
      color: #b6b6b6;
      font-size: 0.4rem;
      position: relative;
      span {
        margin-right: 0.4rem;
      }
      .van-icon {
        position: absolute;
        top: 0.1rem;
        right: 0;
      }
    }
  }
  .content-box {
    padding: 0 0.14rem;
    margin-top: 0.4rem;
    .img {
      width: 100%;
    }
    .img-title {
      overflow: hidden;
      margin-bottom: 0.4rem;
    }
    .img-box {
      overflow: hidden;
      display: flex;
      justify-content: space-between;
    }
    .desc-box {
      margin-left: 0.3rem;
      .name {
        color: #3e3e3e;
        font-size: 0.6rem;
      }
      .author {
        color: #acacac;
        margin: 0.1rem 0 0.16rem;
        font-size: 0.3rem;
      }
      .description {
        color: #858585;
        white-space: normal;
        overflow: hidden;
        text-overflow: ellipsis;
        height: 2.6rem;
        font-size: 0.4rem;
      }
    }
  }
}
</style>
