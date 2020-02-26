<template>
  <div class="collection-box">
    <k-header :title="title">
      <van-icon @click="$router.push('/search')" name="search" slot="left" />
      <span slot="right">编辑</span>
    </k-header>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="我是有底线的"
      @load="onLoad"
    >
      <book-list-item
        v-for="item in booklists"
        :key="item.id"
        :item="item"
      ></book-list-item>
    </van-list>
  </div>
</template>

<script>
import { Icon, List } from 'vant'
import KHeader from '../components/KHeader'
import BookListItem from '../components/BookListItem'
export default {
  name: 'collection',
  components: {
    KHeader,
    BookListItem,
    [Icon.name]: Icon,
    [List.name]: List
  },
  data () {
    return {
      loading: false,
      finished: false,
      title: '收藏',
      booklists: [
        {
          id: 1,
          img: 'images/t1-1.jpg',
          name: 'Linux就该这么学',
          author: '人民邮电出版社',
          where: '图书馆1楼',
          index: '1234'
        },
        {
          id: 2,
          img: 'images/t-1-2.jpg',
          name: '穿过云朵的少女',
          author: '接力出版社',
          where: '图书馆2楼',
          index: '123234'
        }
      ]
    }
  },
  mounted () {
    this.initCollectBookList()
  },
  methods: {
    onLoad () {
      this.loading = true
      setTimeout(() => {
        // 加载状态结束
        this.loading = false
      }, 1000)
      this.finished = true
    },
    initCollectBookList () {
      this.$axios.get('/api/bookCollect').then(result => {
        if (result.code === 0) {
          this.booklists = result.list
        } else {
          this.booklists = []
        }
      })
    }
  }
}
</script>
<style lang="scss">
.collection-box {
  .van-icon-search {
    font-size: 0.7rem;
  }
}
</style>
<style lang="scss" scoped></style>
