<template>
  <div class="box">
    <header>
      <p>给我们留言</p>
      <p class="iconfont icon-arrow-down" @click="back"></p>
    </header>
    <!-- 简书 -->
    <div class="jian">
        <p>您好，很抱歉我们暂时无法为您提供服务，如需帮助，请留言，我们将尽快联系并解决您的问题</p>
    </div>
    <div class="phone">
        <p>手机</p>
        <input type="text" placeholder="请输入">
    </div>
    <div class="liu">
        <p>留言内容</p>
        <textarea placeholder="请输入" cols="30" rows="10"></textarea>
    </div>
    <button>提交</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    back() {
      this.$router.back();
    }
  }
};
</script>

<style scoped lang="scss">

.box {
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
  header {
    width: 100%;
    height: 100px;
    background-color: #007aff;
    color: white;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 30px;
    align-items: center;
    p:nth-child(1) {
      font-size: 30px;
    }
    p:nth-child(2) {
      font-size: 40px;
    }
  }
  .jian{
      width: 100%;
      height: 200px;
      box-sizing: border-box;
      padding: 20px;
  }
  .phone{
      width: 100%;
      input{
          width: 100%;
          height: 80px;
          border: none;
      }
  }
  .liu{
      width: 100%;
      textarea{
          width: 100%;
          border: none;
      }
  }
  button{
      width: 80%;
      margin: 50px 10%;
      background-color: #007AFF;
      color:white;
      border: none;
      height: 50px;
      border-radius: 10px;
  }
}
</style>
