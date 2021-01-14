<template>
  <div class="box">
    <div class="img">
      <img
        src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019pILfAg7Avr1567732916.png"
        alt
      />
    </div>
    <!-- 登入 -->
    <van-form style="width:80% margin:0 auto" @submit="onSubmit">
      <van-field
        v-model="username"
        placeholder="请输入手机号"
      />
      <van-field
        v-model="password"
        type="password"
        placeholder="请输入密码"
      />
      <div class="zhaohui">
          <span>找回密码</span>
          <span>注册/验证码登录</span>
      </div>
      <div style="margin: 16px;">
        <van-button round block type="info" class="btn" native-type="submit"
          >登入</van-button
        >
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
        username: "",
        password: ""
    };
  },
  methods: {
      onSubmit(){
          this.$router.push('/person')
      }
  },
  mounted() {},
  watch: {},
  computed: {},
  filters: {},
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  .img {
    width: 100%;
    text-align: center;
    padding: 50px 7%;
    box-sizing: border-box;
    img {
      width: 70%;
    }
  }
}
.zhaohui{
    // text-align: center;
    margin: 0 auto;
    color: #cccccc;
    font-size: 13px;
    margin-top: 8px;
    width: 100%;
    span{
        margin: 50px;
    }
}
.btn{
    background: orangered;
    border: none;
    margin-top: 50px;
}
</style>
