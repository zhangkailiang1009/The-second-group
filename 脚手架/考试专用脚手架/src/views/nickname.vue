<template>
  <div style="font-size: 16px; text-align: center">
    <span style="padding-left: 95px; font-size: 20px">修改个人信息</span
    ><span style="padding-left: 50px" @click="bc">保存</span>
    <van-cell-group style="margin-top: 20px">
      <van-field v-model="name" label="" placeholder="请输入用户名" />
    </van-cell-group>
  </div>
</template>

<script>
import { xgxx } from "../util/http";
export default {
  name: "",
  components: {},
  props: [],
  data() {
    return {
      name: "",
    };
  },
  computed: {},
  watch: {},
  created() {
    this.name = this.$route.params.nickname;
  },
  mounted() {},
  methods: {
    bc() {
      xgxx({ nickname: this.name }).then((res) => {
        console.log(res);
        if (res) {
          this.$toast.success("修改成功");
          this.$router.go(-1);
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
