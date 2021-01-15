<template>
  <div class="wrapper">
    <div class="title">
      <span><van-icon class="addz" name="arrow-left" @click="fh" /></span>
      个人信息
    </div>
    <div class="zong">
      <div class="a">
        <span>头像</span>
        <div class="aa">
          <van-uploader  result-type="file">
            <img width="37px" src="../assets/1.gif" alt="" />
          </van-uploader>
          <span><van-icon name="arrow" class="addy" /></span>
        </div>
      </div>
      <div class="a">
        <span>昵称</span>
        <div class="aa">
          <span>张凯亮</span>
          <span><van-icon name="arrow" class="addy" /></span>
        </div>
      </div>
      <div class="a">
        <span>手机号</span>
        <div class="aa">
          <span>178****3524</span>
          <span><van-icon name="arrow" class="addy" /></span>
        </div>
      </div>
      <div class="a">
        <span>性别</span>
        <div class="aa">
          <span>男</span>
          <span><van-icon name="arrow" class="addy" /></span>
        </div>
      </div>
      <div class="a">
        <span>出生日期</span>
        <div class="aa">
          <span>1999-10-09</span>
          <span><van-icon name="arrow" class="addy" /></span>
        </div>
      </div>
      <div class="a">
        <span>所在城市</span>
        <div class="aa">
          <span>山西</span>
          <span><van-icon name="arrow" class="addy" /></span>
        </div>
      </div>

      <div class="a">
        <span>学科</span>
        <div class="aa">
          <span>研究生</span>
          <span>
            <van-icon name="arrow" class="addy" />
          </span>
        </div>
      </div>
      <div class="a">
        <span>年级</span>
        <div class="aa">
          <span>大学</span>
          <span><van-icon name="arrow" class="addy" /></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: [],
  data() {
    return {

    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
      fh(){
          this.$router.push('person');
      }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  background: #eeeeee;
  min-height: 100vh;
}
.title {
  background: white;
  text-align: center;
  line-height: 50px;
  font-size: 20px;
  height: 50px;
  position: relative;
  .addz {
    position: absolute;
    left: 20px;
    top: 18px;
    width: 20px;
  }
}
.zong {
  margin-top: 10px;
  background: white;
  height: 100%;
  > .a {
    color: #8c8c8c;
    box-sizing: border-box;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    height: 60px;
    background: white;
    border-bottom: 1px solid #eeeeee;
    .addy {
      border-radius: 50%;
      margin-top: 25px;
      padding: 0px 7px;
      height: 39px;
    }
    .img {
      height: 19px;
    }
    > .aa {
      display: flex;
      align-items: center;
    }
  }
}
</style>
