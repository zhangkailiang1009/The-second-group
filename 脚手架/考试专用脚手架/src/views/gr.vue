<template>
  <div class="wrapper">
    <div class="title">
      <span><van-icon class="addz" name="arrow-left" @click="fh"/></span>
      个人信息
    </div>
    <div class="zong">
      <div class="a">
        <span>头像</span>
        <div class="aa">
          <van-uploader :after-read="tx" result-type="file">
            <img width="37px" :src="dalist.avatar" alt="" />
          </van-uploader>
          <span><van-icon name="arrow" class="addy"/></span>
        </div>
      </div>
      <div class="a" @click="username">
        <span>昵称</span>
        <div class="aa">
          <span>{{ dalist.nickname }}</span>
          <span><van-icon name="arrow" class="addy"/></span>
        </div>
      </div>
      <div class="a">
        <span>手机号</span>
        <div class="aa">
          <span>{{ obj.mobile }}</span>
          <span><van-icon name="arrow" class="addy"/></span>
        </div>
      </div>
      <div class="a">
        <span>性别</span>
        <div class="aa">
          <span>{{ obj.sex == 0 ? "男" : "女" }}</span>
          <span><van-icon name="arrow" class="addy"/></span>
        </div>
      </div>
      <div class="a">
        <span>出生日期</span>
        <div class="aa">
          <span>{{ obj.birthday }}</span>
          <span><van-icon name="arrow" class="addy"/></span>
        </div>
      </div>
      <div class="a">
        <span>所在城市</span>
        <div class="aa">
          <span>{{ obj.province_name }}</span>
          <span><van-icon name="arrow" class="addy"/></span>
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
          <span><van-icon name="arrow" class="addy"/></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { grzy, xgtx, xgxx } from "../util/http";
export default {
  name: "",
  components: {},
  props: [],
  data() {
    return {
      obj: [],
      dalist: [],
    };
  },
  created() {
    this.obj = JSON.parse(localStorage.getItem("data"));
    grzy().then((res) => {
      console.log(res);
      this.dalist = res;
      for(const i in this.dalist.attr){
        console.log(this.dalist.attr[i].attr_value);
      }
    });
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {
    fh() {
      this.$router.push("person");
    },
    //换头像
    tx(e) {
      let content = e.file;
      let data = new FormData();
      data.append("file", content);
      xgtx(data).then((res) => {
        console.log(res);
        this.$toast.success("修改成功");
        xgxx({ avatar: res.path }).then((res) => {
          console.log(res);
        });
        this.data.avatar = res.path;
        localStorage.setItem("data", JSON.stringify(this.data));
      });
    },
    //修改名称
    username() {
      this.$router.push({
        name: "nickname",
        params: {
          nickname: this.dalist.nickname,
        },
      });
    },
  },
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
