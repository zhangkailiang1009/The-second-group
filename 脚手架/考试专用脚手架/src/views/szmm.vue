<template>
  <div>
    <div class="title">
      <span class="lefta"><van-icon name="arrow-left" @click="fh"/></span>
      设置密码
    </div>

    <van-form @submit="onSubmit" class="form">
      <van-field v-model="username" name="用户名" placeholder="请输入手机号" />
      <div class="yanzheng">
        <span>获取验证码</span>
      </div>
      <van-field v-model="zkl_yzm" name="密码" placeholder="请输入验证码" />
      <van-field v-model="password" name="密码" placeholder="请输入新密码" />
      <p>6-20位英文,数字,符号,区分大小</p>
      <div style="margin: 16px;" class="btn">
        <van-button block native-type="submit">登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  name: "",
  props: [],
  components: {},
  data() {
    return {
      zkl_yzm: "",
      username: "",
      password: "",
    };
  },
  methods: {
       fh(){
          this.$router.push('/register');
      },
      onSubmit(){
          this.$router.push('/person');
          this.$toast.success('登入成功')
      }
  },
  mounted() {},
  watch: {},
  computed: {},
  filters: {},
};
</script>

<style lang="scss" scoped>
.title {
  background: white;
  text-align: center;
  line-height: 50px;
  font-size: 20px;
  height: 50px;
  position: relative;
  font-size: 16px;
  .lefta {
    position: absolute;
    left: 20px;
    top: 5px;
    width: 20px;
  }
}

p {
  font-size: 13px;
  color: #cccccc;
  padding-left: 18px;
}
.form {
  position: relative;
  .yanzheng {
    position: absolute;
    top: 25px;
    right: 29px;
    color: orangered;
    > span {
      font-size: 12px;
    }
  }
}
.van-button {
  background: orangered;
  border: none;
  color: white;
}
</style>
