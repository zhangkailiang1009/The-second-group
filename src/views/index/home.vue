<template>
  <div id="zb_app">
    <header>
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img src="@/assets/1.jpg" alt class="img-a" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="@/assets/2.jpg" alt class="img-a" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="@/assets/1.jpg" alt class="img-a" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="@/assets/1.jpg" alt class="img-a" />
        </van-swipe-item>
      </van-swipe>
    </header>

    <section>
      <ul class="box-com">
        <li>
          <img src="@/assets/3.jpg" alt class="img-b" />
          <p class="box-zi">特色课</p>
        </li>

        <li>
          <img src="@/assets/4.jpg" alt class="img-b" />
          <p class="box-zi">一对一辅导</p>
        </li>

        <li>
          <img src="@/assets/5.jpg" alt class="img-b" />
          <p class="box-zi">学习日历</p>
        </li>
      </ul>

      <p class="box-zhen">名师阵容</p>
      <el-card class="box-card">
        <ul>
          <li class="left">
            <img src="@/assets/logo.png" />
          </li>
          <li class="right">
            <h3>杨德胜</h3>
            <p
              style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap"
            >杨老师，特级教师，多次被中国数学会评委全国高</p>
          </li>
        </ul>
      </el-card>
      <el-card class="box-card">
        <ul>
          <li class="left">
            <img src="@/assets/logo.png" />
          </li>
          <li class="right">
            <h3>杨德胜</h3>
            <p
              style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap"
            >杨老师，特级教师，多次被中国数学会评委全国高</p>
          </li>
        </ul>
      </el-card>
      <el-card class="box-card">
        <ul>
          <li class="left">
            <img src="@/assets/logo.png" />
          </li>
          <li class="right">
            <h3>杨德胜</h3>
            <p
              style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap"
            >杨老师，特级教师，多次被中国数学会评委全国高</p>
          </li>
        </ul>
      </el-card>
      <p class="box-zhen">精品课程</p>
      <!-- 卡片视图区域 -->
      <el-card class="zb_card">
        <h4>李老师16号到22号地理大课堂开课啦</h4>
        <p style="font-size:14px;">
          <van-icon name="underway-o" />03月16日 18：30~03月22日 15：00 | 共8时
        </p>
        <p class="zb_p">
          <img src="@/assets/tx.jpg" class="zb_logo" /> 李青
        </p>
        <ul>
          <li>177人已报名</li>
          <li style="color:green;">免费</li>
        </ul>
      </el-card>
      <!-- 卡片视图区域 -->
      <!-- 卡片视图区域 -->
      <el-card class="zb_card">
        <h4>李老师16号到22号地理大课堂开课啦</h4>
        <p style="font-size:14px;">
          <van-icon name="underway-o" />03月16日 18：30~03月22日 15：00 | 共8时
        </p>
        <p class="zb_p">
          <img src="@/assets/tx.jpg" class="zb_logo" /> 李青
        </p>
        <ul>
          <li>177人已报名</li>
          <li style="color:green;">免费</li>
        </ul>
      </el-card>
      <!-- 卡片视图区域 -->
      <!-- 卡片视图区域 -->
      <el-card class="zb_card">
        <h4>李老师16号到22号地理大课堂开课啦</h4>
        <p style="font-size:14px;">
          <van-icon name="underway-o" />03月16日 18：30~03月22日 15：00 | 共8时
        </p>
        <p class="zb_p">
          <img src="@/assets/tx.jpg" class="zb_logo" /> 李青
        </p>
        <ul>
          <li>177人已报名</li>
          <li style="color:green;">免费</li>
        </ul>
      </el-card>
      <!-- 卡片视图区域 -->
      <p class="box-zhen">明星讲师</p>
      <!-- 卡片 -->
       <el-card class="box-card">
        <ul>
          <li class="left">
            <img src="@/assets/logo.png" />
          </li>
          <li class="right">
            <h3>杨德胜</h3>
            <p
              style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap"
            >杨老师，特级教师，多次被中国数学会评委全国高</p>
          </li>
        </ul>
      </el-card>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
#zb_app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
section {
  width: 100%;
  height: 2000px;
  overflow: auto;
  background: #e9eef3;
  .box-card {
    width: 96%;
    margin: 0 auto;
    display: flex;
    margin-top: 5px;
    ul {
      width: 100%;
      display: flex;
      justify-content: space-around;
      .left {
        img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
        }
      }
      .right {
        width: 80%;
        h3 {
          font-size: 16px;
          margin-top: 5px;
        }
        p {
          font-size: 12px;
          color: #cccccc;
          padding: 8px;
        }
      }
    }
  }
   // 卡片
    .zb_card {
      width: 90%;
      margin: 0 auto;
      margin-top: 10px;
      //头像
      img {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        position: relative;
        top: 5px;
      }
      p {
        width: 100%;
        height: 50px;
        line-height: 50px;
      }
      .zb_p {
        border-bottom: 1px solid #f0f0f0;
      }
      ul {
        width: 100%;
        height: 40px;
        line-height: 40px;
        display: flex;
        justify-content: space-between;
      }
    }
}
header {
  width: 100%;
  height: 200px;
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    img {
      width: 100%;
      height: 200px;
    }
  }
}
.box-com {
  display: flex;
  justify-content: space-around;
  margin-top: 35px;
  position: relative;
  bottom: 60px;
  z-index: 1;
  li {
    width: 118px;
    height: 118px;
    border-radius: 10%;
    text-align: center;

    background-color: ghostwhite;

    img {
      width: 50px;
      height: 50px;
      border-radius: 10px;
      margin-top: 15px;
    }
    p {
      margin-top: 10px;
    }
  }
}

.box-zhen {
  font-size: 14px;
  border-left: 2px solid orangered;
  padding: 5px;
  box-sizing: border-box;
}


</style>
