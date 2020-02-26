<template>
  <div class="search-box">
    <section class="hd">
      <van-button class="cancel-btn" color="#64d1cb" @click="$router.go(-1)">返回</van-button>
      <van-search
      class="my-input"
        v-model="value"
        shape="round"
        placeholder="请输入搜索关键词"
        @input="searchHandle"
      />

    </section>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="我是有底线的"
    >
      <book-list-item
        v-for="item in newBookLists"
        :key="item.id"
        :item="item"
      ></book-list-item>
    </van-list>
  </div>
</template>

<script>
import { Icon, List, Search, Button } from 'vant'
import BookListItem from '../components/BookListItem'
export default {
  name: 'Search',
  components: {
    BookListItem,
    [Icon.name]: Icon,
    [List.name]: List,
    [Search.name]: Search,
    [Button.name]: Button
  },
  data () {
    return {
      value: '',
      loading: false,
      finished: true,
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
      ],
      newBookLists: []
    }
  },
  mounted () {
    this.initCollectBookList()
  },
  methods: {
    initCollectBookList () {
      this.$axios.get('/api/bookCollect').then(result => {
        if (result.code === 0) {
          this.booklists = result.list
          this.newBookLists = this.booklists
        } else {
          this.booklists = []
        }
      })
    },
    searchHandle () {
      if (this.value.trim()) {
        this.newBookLists = this.booklists.filter(item => (
          item.bookName.indexOf(this.value) > -1
        ))
      } else {
        this.newBookLists = this.booklists
      }
    }
  }
}
</script>
<style lang="scss">
.search-box {
  .van-icon-search{
    margin-top: 0.12rem;
     font-size: 0.6rem;
  }
  .van-field__control {
    font-size: 0.5rem;
  }
  .van-button__text{
    font-size: .4rem;
  }
}
</style>
<style lang="scss" scoped>
.search-box {
  .hd {
    display: flex;
    align-items: center;
    // padding-right: .2rem;
    .cancel-btn {
      width: 2rem;
      height: 1rem;
    }
    .my-input{
      flex: 1
    }
  }
}
</style>
