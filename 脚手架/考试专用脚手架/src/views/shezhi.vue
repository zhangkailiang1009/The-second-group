<template>
 <div>
   <div class="title">
      <span class="lefta"><van-icon name="arrow-left" @click="fh" /></span>
      设置
    </div>

   <!-- <p>设置</p> -->
      <el-button @click="tuic">退出登入</el-button>
 </div>
</template>

<script>
 export default {
   name: '',
   props: [
   ],
   components: {

   },
   data () {
     return {

     }
   },
   methods: {
      tuic(){
        this.$router.push('/my')
        window.sessionStorage.clear();
        this.$toast.success('退出成功');
      },
      fh(){
          this.$router.push('person');
      }
   },
   mounted() {

   },
   watch: {

   },
   computed: {

   },
   filters: {

   }
 }
</script>

<style lang='scss' scoped>
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
p{
  text-align: center;
  font-size: 18px;
}
.el-button{
  width: 200px;
  text-align: center;
  margin-left: 70px ;
  background: rgba(255, 68, 0, 0.685);
  border:none
}
</style>