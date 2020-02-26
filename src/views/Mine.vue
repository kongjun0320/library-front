<template>
  <div class="mine" v-if="loginUser">
    <k-header :title="loginUser.nickname + '同学'">
      <van-icon name="setting-o" slot="right" />
    </k-header>
    <section class="avator">
      <section class="avator-inner-box">
        <img src="../../public/images/avator.jpg" alt="" />
      </section>
    </section>
    <section class="read-info">
      <section class="item item1">
        <span>可借次数</span>
        <span>12</span>
      </section>
      <section class="item item2">
        <span>逾期数</span>
      <span>1</span>
      </section>

      <section class="item item3">
        <span>正在借阅书</span>
        <span>2</span>
      </section>
    </section>
    <section class="info" v-if="loginUser">
      <van-cell-group>
        <van-cell title="姓名" :value="loginUser.nickname" />
        <van-cell title="性别" :value="loginUser.gender" />
        <van-cell title="学号" :value="loginUser.studentDI" />
        <van-cell title="学院" :value="loginUser.college" />
        <van-cell title="班级" :value="loginUser.grades" />
      </van-cell-group>
    </section>
  </div>
</template>

<script>
import { Icon, Cell, CellGroup } from 'vant'
import KHeader from '../components/KHeader'
export default {
  name: 'mine',
  components: {
    KHeader,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  },
  data () {
    return {
      loginUser: null
    }
  },
  mounted () {
    this.loginUser = JSON.parse(localStorage.getItem('loginUser'))
  }
}
</script>
<style lang="scss">
.mine {
  .van-cell {
    line-height: 1rem;
    font-size: 0.5rem;
  }
}
</style>
<style lang="scss" scoped>
.mine {
  .avator {
    background-color: #52cac1;
    padding-top: 0.3rem;
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
  .read-info {
    padding: .5rem .6rem;
    display: flex;
    justify-content: space-between;
    .item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 0.4rem;
      flex: 1;
      border-right: 1px solid #ccc;
      span{
        color: #333;
        &:last-child{
          margin-top: .1rem;
          color: #999
        }
      }
    }
    .item3{
      border-right: none;
    }
  }
}
</style>
