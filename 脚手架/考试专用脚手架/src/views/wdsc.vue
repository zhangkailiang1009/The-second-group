<template>
  <div class="box">
    <!-- 头部 -->
    <div class="title">
      <span class="lefta"><van-icon name="arrow-left" @click="fh"/></span>
      我的收藏
    </div>

    <!-- 内容 -->
    <div class="goods">
      <ul>
        <li>
          <div class="con">
            <div class="goods_header">
              <p style="width:90%"></p>
              <p></p>
            </div>
            <p>共10课时</p>
          </div>
          <div class="goods_con">
            <img src="../assets/2.webp" alt />
            <!-- <div> -->
            <p></p>
            <!-- </div> -->
          </div>
          <div class="goods_foot">
            <p>5人已报名</p>
            <p style="color:green">免费</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { wdsc } from "../util/http";
export default {
  components: {},
  data() {
    return {
      page: 0,
      limit: 10,
      list: [],
    };
  },
  created() {
    wdsc().then(res => {
      console.log(res)
    });
  },
  mounted() {},
  methods: {
    fh() {
      this.$router.push("person");
    },
  },
};
</script>

<style scoped lang="scss">
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

.icon-wujiaoxing- {
  color: orange;
}
.iconfont {
  font-size: 30px;
}
.goods_header {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.box {
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
}
.goods {
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  .con {
    width: 100%;
    box-sizing: border-box;
    padding: 20px 0;
    p:nth-child(1) {
      font-size: 26px;
    }
  }
  .goods_foot {
    width: 100%;
    height: 100px;
    border-top: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  ul {
    width: 100%;
    li {
      margin-bottom: 20px;
      width: 100%;
      height: 400px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      // align-items: center;
      box-sizing: border-box;
      padding: 0 20px;
      background-color: white;
      margin-bottom: 20px;
      .goods_con {
        display: flex;
        align-items: center;
        div {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
        }
      }
    }
  }
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 20px;
  }
}
</style>
