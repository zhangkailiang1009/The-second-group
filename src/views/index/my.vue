<template>
  <div class="wrapper">
    <div id="app">
      <div class="top">
        <router-link to="/info" tag="div" class="topa">
          <img src="@/assets/1.gif" alt="" />
          <div class="topb">
            <p style="font-size: 4.26667vw; margin-left: 10px">
              178****3524
            </p>
            <p class="p2"></p>
          </div>
          <div class="top_right" style="font-size: 3vw">去约课</div>
        </router-link>
        <div class="topb">
          <div class="diva">
            <p>0</p>
            <p>我的特色课</p>
            <p>已购特色课程的学习</p>
          </div>
          <div class="diva">
            <p>0</p>
            <p>一对一辅导</p>
            <p>我的一对一老师辅导</p>
          </div>
          <div class="diva">
            <p>0</p>
            <p>剩余的学习币</p>
            <p>查看剩余的学习币</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 邀请好友区域 -->
    <div class="box">
      <div class="boxa">
        <van-icon name="send-gift-o" size="25" />
        <div>
          <p>邀请好友注册APP，享多重好礼</p>
          <p>限时特惠，多邀多得</p>
        </div>
      </div>
    </div>
    <!-- 课程相关 -->
    <ul class="menu-box">
      <li>
        <p class="title">课程相关</p>
        <div class="item-box">
          <div class="item">
            <van-icon name="friends-o" size="25" />
            <p>关注老师</p>
          </div>
          <div class="item">
            <van-icon name="send-gift-o" size="25" />
            <p>我的收藏</p>
          </div>
        </div>
      </li>
      <li>
        <p class="title">订单相关</p>
        <div class="item-box">
          <div class="item">
            <van-icon name="newspaper-o" size="25" />
            <p>关注老师</p>
          </div>
          <div class="item">
            <van-icon name="send-gift-o" size="25" />
            <p>我的收藏</p>
          </div>
          <div class="item">
            <van-icon name="send-gift-o" size="25" />
            <p>约课订单</p>
          </div>
        </div>
      </li>
      <li>
        <p class="title">我的账户</p>
        <div class="item-box">
          <div class="item">
            <van-icon name="friends-o" size="25" />
            <p>关注老师</p>
          </div>
          <div class="item">
            <van-icon name="send-gift-o" size="25" />
            <p>我的收藏</p>
          </div>
          <div class="item">
            <van-icon name="send-gift-o" size="25" />
            <p>我的收藏</p>
          </div>
        </div>
      </li>
      <li>
        <p class="title">自助服务</p>
        <div class="item-box">
          <div class="item">
            <van-icon name="friends-o" size="25" />
            <p>关注老师</p>
          </div>
          <div class="item">
            <van-icon name="send-gift-o" size="25" />
            <p>我的收藏</p>
          </div>
          <div class="item">
            <van-icon name="send-gift-o" size="25" />
            <p>我的收藏</p>
          </div>
          <div class="item">
            <van-icon name="send-gift-o" size="25" />
            <p>我的收藏</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "",
  props: [],
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {},
  filters: {},
};
</script>

<style lang="scss" scoped>
.wrapper {
  padding-bottom: 1.333rem;
}
#app {
  position: relative;
  background: url(https://wap.365msmk.com/img/user_bg.ab306a5c.png) no-repeat
    top;
  background-size: 100%;
  height: 58vw;
}
img {
  display: block;
  width: 5.333vw;
  height: 4.8vw;
}
.top {
  z-index: 1;
  width: 92vw;
  position: absolute;
  bottom: 0;
  left: 50%;
  background-color: #fff;
  //水平锤子居中
  transform: translateX(-50%);
  border-radius: 0.13333rem;
  border-radius: 1.33333vw;
  height: 46vw;
  > .topa {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 50%;
    > img {
      width: 15vw;
      height: 15vw;
      border-radius: 50%;
    }
    > .topb {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    > .p2 {
      background: red 50% no-repeat;
      width: 4vw;
      width: 4.13333vw;
      height: 4.13333vw;
      background-size: 4vw 4.13333vw;
      margin-left: 3px;
    }
  }
  .top_right {
    color: white;
    position: absolute;
    background: #eb6100;
    right: 0;
    width: 14.8vw;
    height: 6.66667vw;
    line-height: 8vw;
    text-align: center;
    border-top-left-radius: 2.7vw;
    border-bottom-left-radius: 2.7vw;
  }

  > .topb {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 50%;
    background: white;
    > .diva {
      font-size: 12px;
      width: 30%;
      text-align: center;
      > p {
        margin: 0;
        padding: 0;
      }
      > p:nth-child(1) {
        font-size: 25px;
        color: #eb6100;
      }
      > p:nth-child(3) {
        padding-top: 3px;
        width: 108px;
        color: #b7b7b7;
      }
    }
  }
}
.box {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 60px;
  position: relative;
  // background-color: red;
  box-sizing: border-box;
  > .boxa {
    bottom: 0px;
    position: absolute;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    height: 11.73333vw;
    background: linear-gradient(-90deg, #f2995a, #eb6100);
    border-radius: 5.86667vw;
    img {
      display: block;
      width: 5.33333vw;
      height: 4.8vw;
    }
    div {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      border: 0;
      margin-right: 30px;
      font-size: 70%;
      p {
        color: #fff;
        font-size: 3.2vw;
        line-height: 3.2vw;
      }
    }
  }
}
.menu-box {
  width: 100%;
  height: 2000px;
  padding: 0 4vw;
  background-color: #fff;
  box-sizing: border-box;
  overflow: auto;
  > li {
    border-bottom: 1px solid #eee;
    > .title {
      font-family: PingFangSC-Medium;
      font-size: 4.26667vw;
      color: #333;
      line-height: 4.26667vw;
      margin-top: 20px;
    }
    > .item-box {
      display: flex;
      justify-content: flex-start;
      width: 100%;
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
      outline: none;
      > .item {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-direction: column;
        width: 25%;
        height: 16vw;
        text-align: center;
        p {
          margin-top: 2.66667vw;
          font-size: 3.2vw;
          color: #666;
          line-height: 3.2vw;
        }
        img {
          width: 5.8vw;
          height: 5.6vw;
        }
      }
    }
  }
}
</style>
