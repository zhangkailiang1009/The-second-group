<template>
  <div id="zb_app">
    <header>
      <!-- 头部  -->
      <van-nav-bar title="特色课">
        <template #right>
          <van-icon name="search" size="18" />
        </template>
      </van-nav-bar>
      <!-- 分类 排序  -->
      <!-- <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
        <van-dropdown-item v-model="value3" :options="option3" />
      </van-dropdown-menu>-->
      <van-dropdown-menu>
        <van-dropdown-item title="分类">
          <!-- 插槽 -->
          <template class="zb_ceng">
            <p style="margin-bottom:5px;">年级</p>
            <ul style="display:flex; flex-wrap: wrap; text-align:center;">
              <li style="width:25%;">
                <button style="width:80px;">初一</button>
              </li>
              <li style="width:25%;">
                <button style="width:80px;">初二</button>
              </li>
              <li style="width:25%;">
                <button style="width:80px;">初三</button>
              </li>
              <li style="width:25%;">
                <button style="width:80px;">高一</button>
              </li>
              <li style="width:25%;">
                <button style="width:80px; margin-top:10px;">高二</button>
              </li>
            </ul>
            <p style="margin-top:10px; margin-bottom:5px;">学科</p>
            <ul style="display:flex; flex-wrap: wrap; text-align:center;">
              <li style="width:25%;">
                <button style="width:80px;">语文</button>
              </li>
              <li style="width:25%;">
                <button style="width:80px;">数学</button>
              </li>
              <li style="width:25%;">
                <button style="width:80px;">英语</button>
              </li>
              <li style="width:25%;">
                <button style="width:80px;">化学</button>
              </li>
              <li style="width:25%;">
                <button style="width:80px; margin-top:10px;">物理</button>
              </li>
            </ul>
            <p
              style="margin-top:20px; display:flex;  justify-content: space-between; margin-bottom:30px;"
            >
              <button style="width:190px">重置</button>
              <button style="width:190px; background:orangered;">确定</button>
            </p>
          </template>
        </van-dropdown-item>
        <van-dropdown-item v-model="value2" :options="option2" />

        <van-dropdown-item title="筛选">
          <!-- 插槽 -->
          <template>
            <ul class="zb_ul">
              <li>
                <button>全部</button>
              </li>
              <li>
                <button>大班课</button>
              </li>
              <li>
                <button>小班课</button>
              </li>
              <li>
                <button>公开课</button>
              </li>
              <li>
                <button>点播课</button>
              </li>
              <li>
                <button>面授课</button>
              </li>
              <li>
                <button>音频课</button>
              </li>
              <li>
                <button>系统课</button>
              </li>
              <li>
                <button>图文课</button>
              </li>
              <li>
                <button>会员课</button>
              </li>
            </ul>
          </template>
        </van-dropdown-item>
      </van-dropdown-menu>
    </header>
    <!-- 主要区域 -->
    <section>
      <!-- 卡片视图区域 -->
      <router-link to="/detail1">
      <el-card class="box-card">
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
      </router-link>
      <!-- 卡片视图区域 -->
      <el-card class="box-card">
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
      <el-card class="box-card">
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
      <el-card class="box-card">
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
      <el-card class="box-card">
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
      <el-card class="box-card">
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
      <el-card class="box-card">
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
      <el-card class="box-card">
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
      <el-card class="box-card">
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
      <el-card class="box-card">
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
    </section>
  </div>
</template>

<script>
export default {
  // 组件名称
  name: "",
  // 组件参数 接收来自父组件的数据
  props: [],
  // 局部注册的组件
  components: {},
  // 组件状态值
  data() {
    return {
      value: 0,
      switch1: false,
      switch2: false,
      value2: "a",
      value3: "A",
      option2: [
        { text: "排序", value: "a" },
        { text: "综合排序", value: "b" },
        { text: "最新", value: "c" },
        { text: "最热", value: "d" },
        { text: "价格从低到高", value: "e" },
        { text: "价格从高到低", value: "f" }
      ]
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {},
  // 以下是生命周期钩子   注：没用到的钩子请自行删除
  /**
   * 在实例初始化之后，组件属性计算之前，如data属性等
   */
  beforeCreate() {},
  /**
   * 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
   */
  created() {},
  /**
   * 在挂载开始之前被调用：相关的 render 函数首次被调用。
   */
  beforeMount() {},
  /**
   * el 被新创建的 vm.$ el 替换，并挂载到实例上去之后调用该钩子。
   * 如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$ el 也在文档内。
   */
  mounted() {},
  /**
   * 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。
   * 你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。
   */
  beforeUpdate() {},
  /**
   * 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
   * 当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。
   */
  updated() {},
  /**
   * keep-alive 组件激活时调用。 仅针对keep-alive 组件有效
   */
  activated() {},
  /**
   * keep-alive 组件停用时调用。 仅针对keep-alive 组件有效
   */
  deactivated() {},
  /**
   * 实例销毁之前调用。在这一步，实例仍然完全可用。
   */
  beforeDestroy() {},
  /**
   * Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，
   * 所有的事件监听器会被移除，所有的子实例也会被销毁。
   */
  destroyed() {}
};
</script>

<style lang="scss" scoped>
#zb_app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  // 头部
  header {
    width: 100%;
    height: 100px;
  }
  // 主要区域
  section {
    width: 100%;
    flex: 1;
    overflow: auto;
    background: #9999;
    // 卡片
    .el-card {
      width: 90%;
      margin: 0 auto;
      margin-top: 10px;
      //头像
      .zb_logo {
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
}
.zb_ul{
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  height: 150px;
  li{
    width: 25%;
    margin-top: 8px;
    button{
      width: 60px;
    }
  }
}
</style>
