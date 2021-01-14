<template>
  <div id="zb_app">
    <!-- 头部 -->
    <header>
      <van-nav-bar title="练习" />
    </header>
    <!-- 主要区域 -->
    <section>
      <!-- 卡片视图区域 -->
      <el-card class="box-card" style="margin-top:10px;">
        <ul>
          <router-link to="/detail" tag="li">
            <img src="@/assets/11 (3).jpg" alt />
            <p>考点专练</p>
          </router-link>
          <router-link to="/detail" tag="li">
            <img src="@/assets/11 (4).jpg" alt />
            <p>套卷练习</p>
          </router-link>
          <router-link to="/detail" tag="li">
            <img src="@/assets/11 (5).jpg" alt />
            <p>仿真模考</p>
          </router-link>
          <router-link to="/detail" tag="li">
            <img src="@/assets/11 (6).jpg" alt />
            <p>错题练习</p>
          </router-link>
          <router-link to="/detail" tag="li">
            <img src="@/assets/11 (1).jpg" alt />
            <p>测评记录</p>
          </router-link>
          <router-link to="/detail" tag="li">
            <img src="@/assets/11 (2).jpg" alt />
            <p>习题收藏</p>
          </router-link>
        </ul>
      </el-card>
      <div class="zb_container">
        <p style="padding:10px; color:#9999;">近期模考</p>
        <ul>
          <li style="color:orangered;">默认排序</li>
          <li>时间</li>
        </ul>
        <div>
          <img src="@/assets/3333.jpg" alt />
          <p>暂无模考安排，敬请期待</p>
        </div>
      </div>
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
    return {};
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
// 大盒子
#zb_app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  // 头部
  header {
    width: 100%;
    height: 40px;
  }
  //主要区域
  section {
    width: 100%;
    height: 2000px;
    overflow: auto;
    background: #e9eef3;
    .el-card {
      width: 96%;
      margin: 0 auto;
      ul {
        width: 100%;
        height: 150px;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        li {
          width: 25%;
          height: 75px;
          text-align: center;
          img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
          }
          p {
            font-size: 14px;
          }
        }
      }
    }
    .zb_container {
      width: 100%;
      height: 250px;
      background: white;
      margin-top: 10px;
      ul {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 10px;
        box-sizing: border-box;
      }
      div {
        text-align: center;
        img {
          margin-top: 10px;
        }
        p {
          font-size: 14px;
          margin-top: 5px;
          color: #9999;
        }
      }
    }
  }
}
</style>
