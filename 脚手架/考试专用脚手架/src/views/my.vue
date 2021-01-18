<template>
  <div style="text-align: center">
    <img
      style="width: 80%; text-align: center; margin-top: 60px"
      src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019pILfAg7Avr1567732916.png"
      alt=""
    />
    <van-form @submit="onSubmit" style="margin-top: 40px">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
      />
      <van-cell-group class="zhuce">
        <p>找回密码</p>
        <p @click="zhuce">注册/验证码登陆</p>
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          登陆
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { loginpassword } from "../util/http";
export default {
  name: "",
  components: {},
  props: [],
  data() {
    return {
      username: "13845683276",
      password: "6666666666",
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    onSubmit(values) {
      console.log("submit", values);
      let obj = {
        mobile: values.用户名,
        password: values.密码,
        type: 1,
        client: 1,
      };
      loginpassword(obj).then((res) => {
        console.log(res);
        if (res) {
          this.$toast.success("登陆成功");
          localStorage.setItem("adminToken", res.remember_token);
          localStorage.setItem("data", JSON.stringify(res));
          this.$router.push("/person");
        }
      });
    },
    zhuce() {
      this.$router.push("/register");
    },
  },
};
</script>

<style lang='scss' scoped>
.zhuce {
  box-sizing: border-box;
  padding: 0px 20px;
  font-size: 12px;
  justify-content: space-between;
  display: flex;
  color: #969799;
}
</style>
