<template>
  <div class="login">
    <h1 class="title">东理图书</h1>
    <section class="logo">
      <img src="../../public/images/logo.jpg" alt="" />
    </section>
    <van-form @submit="onSubmit">
      <van-field
        v-model="user.username"
        name="用户名"
        :rules="usernameRules"
        label="用户名"
        placeholder="用户名"
      />
      <van-field
        v-model="user.password"
        type="password"
        name="密码"
        :rules="passwordRules"
        label="密码"
        placeholder="密码"
      />
      <van-button block native-type="submit">
        提交
      </van-button>
    </van-form>
  </div>
</template>

<script>
import { Form, Field, Button, Notify } from 'vant'
export default {
  name: 'login',
  components: {
    [Form.name]: Form,
    [Field.name]: Field,
    [Button.name]: Button,
    [Notify.name]: Notify
  },
  data: function () {
    this.usernameRules = [
      { required: true, message: '请填输入用户名' }
    ]
    this.passwordRules = [{ required: true, message: '请填输入密码' }]
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit () {
      const params = this.user
      this.$axios.post('/api/user/login', params).then(result => {
        if (result.code === 0) {
          Notify({ type: 'success', message: '登录成功', duration: 1000 })
          localStorage.setItem('loginUser', JSON.stringify(result.list))
          this.$router.push('/home')
        }
      })
    }
  }
}
</script>
<style lang="scss">
 .van-notify{
    line-height: .8rem;
    font-size:.4rem;
  }
.login {
  padding: 0.1rem;
  .van-cell {
    font-size: 0.4rem;
  }
  .van-button {
    height: 1.2rem;
    font-size: 0.4rem;
    margin-top: 0.1rem;
  }
  .van-field__label {
    width: 1.6rem;
  }
  .van-cell__title,
  .van-field__body {
    height: 1.2rem;
    line-height: 1.2rem;
  }
  .van-cell:not(:last-child)::after {
    bottom: 1px;
  }
  .van-button--default{
    background-color: #54C9C1;
    color: #fff;
  }
}
</style>
<style lang="scss" scoped>
.login {
  height: 100vh;
  background-image: url("../../public/images/login-bg.jpg");
  .title {
    text-align: center;
    font-size: 1rem;
    color: #333;
    font-weight: normal;
    padding: 1rem 0 .6rem;
  }
  .logo {
    text-align: center;
    margin-bottom: .4rem;
  }
}
</style>
