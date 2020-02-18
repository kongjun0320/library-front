<template>
  <div class="home">
    <k-swiper :swiperList="swiperList"></k-swiper>
    <van-search
      @focus="toSearchhandle"
      class="search-box"
      shape="round"
      placeholder="请输入搜索关键词"
    />
    <k-nav></k-nav>
    <!-- <book-type :bookType="bookType" :bookTypeData="bookTypeData"></book-type>
    <book-type :bookType="bookType" :bookTypeData="bookTypeData"></book-type>
    <book-type :bookType="bookType" :bookTypeData="bookTypeData"></book-type>
    <book-type :bookType="bookType" :bookTypeData="bookTypeData"></book-type> -->
    <template v-if="bookTypeData.length">
      <book-type
        v-for="item in bookTypeData"
        :key="item.id"
        :bookType="item.bookTypeName"
        :item="item"
      ></book-type>
    </template>
  </div>
</template>

<script>
import KSwiper from '../components/KSwiper'
import KNav from '../components/KNav'
import BookType from '../components/BookType'
import { Search } from 'vant'
export default {
  name: 'Home',
  components: {
    KSwiper,
    KNav,
    BookType,
    [Search.name]: Search
  },
  data () {
    return {
      bookTypeData: {
        bookType: '大学必读',
        titleData: {
          img: '/images/t1-1.jpg',
          name: '最后的孩子',
          author: '接力出版社',
          description:
            '核爆炸发生后，世界一片狼藉。12岁的男孩罗兰德开始了一个人的拯救之旅：长途跋涉去找外公外婆，冒着被传染的危险去医院当护工，把活命的土豆让给更小的孩子，和爸爸在废墟上创办学校……<br>    古德伦·鲍瑟王编著的《最后的孩子》为全球最早涉及核战争题材的科幻小说之一。《最后的孩子》通过一个12岁男孩的眼睛，扫描幻想中残酷的世界，虽然很多语言和细节描写让人不寒而栗，但作者却借此呼唤着灾难中的人性和温暖，让读者在恐惧中磨炼意志，面对惨不忍睹的核战争场面，品味、珍惜当下甜蜜温馨的和平时光。'
        },
        list: [
          { img: '/images/t2-1.jpg' },
          { img: '/images/t-2-2.jpg' },
          { img: '/images/t-2-3.jpg' }
        ]
      },
      swiperList: []
    }
  },
  mounted () {
    this.getSwiperList()
    this.getBookTypeList()
  },
  methods: {
    toSearchhandle () {
      console.log('ddd')
    },
    getSwiperList () {
      this.$axios.get('/api/swiper').then(result => {
        if (result.code === 0) {
          this.swiperList = result.list
        } else {
          this.swiperList = []
        }
      })
    },
    getBookTypeList () {
      this.$axios.get('/api/bookType').then(result => {
        if (result.code === 0) {
          this.bookTypeData = result.list
        } else {
          this.bookTypeData = []
        }
      })
    }
  }
}
</script>
<style lang="scss">
.home {
  .van-icon {
    font-size: 0.4rem;
    // margin-top: 0.12rem;
  }
  .van-icon-search{
    margin-top: 0.12rem;
  }
}
</style>
<style lang="scss" scoped>
.home {
  .search-box {
    position: absolute;
    left: 1rem;
    right: 1rem;
    top: 0.3rem;
    border-radius: 1rem;
  }
  .van-cell {
    font-size: 0.4rem;
  }
}
</style>
