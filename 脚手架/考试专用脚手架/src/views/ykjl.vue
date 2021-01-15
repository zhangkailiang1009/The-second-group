<template>
  <div class="box">
    <div class="title">
      <span class="lefta"><van-icon name="arrow-left" @click="fh"/></span>
      约课记录
    </div>
    <!-- nav -->
    <van-tabs v-model="active">
      <van-tab title="待上课">
        <van-empty description="描述文字">
          <van-Button round type="danger" class="bottom-button" @click="zkl_yk"
            >立即约课</van-Button
          >
        </van-empty>
      </van-tab>
      <van-tab title="已上课">
        <van-empty description="描述文字">
          <van-button round type="danger" class="bottom-button" @click="zkl_yk"
            >立即约课</van-button
          >
        </van-empty>
      </van-tab>
      <van-tab title="已取消">
        <van-empty description="描述文字">
          <van-button round type="danger" class="bottom-button" @click="zkl_yk"
            >立即约课</van-button
          >
        </van-empty>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      active: 0,
    };
  },
  created() {},
  mounted() {},
  methods: {
    zkl_yk() {
      this.$router.push("/yk");
    },
    fh(){
          this.$router.push('person');
      }
  },
};
</script>

<style scoped lang="scss">
.box {
  width: 100%;
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
}
</style>
