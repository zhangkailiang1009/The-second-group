<template>
  <div id="zb_app">
    <!-- 头部  -->
    <van-nav-bar title="约课记录" />
    <!-- 导航栏 -->
    <van-tabs v-model="active">
      <van-tab title="待上课"></van-tab>
      <van-tab title="已上课"></van-tab>
      <van-tab title="已取消"></van-tab>
    </van-tabs>
    <!-- 主要区域 -->
    <section>
      <img src="@/assets/222.jpg" class="zb_logo" />
      <p>请登陆后查看相关内容</p>
      <p>
        <button class="zb_btn">登陆/注册</button>
      </p>
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
      active: 2
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
  section {
    width: 100%;
    height: 1000px;
    background: #e9eef3;
    text-align: center;
    .zb_logo {
      margin-top: 80px;
    }
    p {
      .zb_btn {
        background: orange;
        border: 1px;
        color: white;
        border-radius: 3px;
        font-size: 13px;
        width: 80px;
        height: 25px;
        margin-top: 20px;
      }
    }
  }
}
</style>
