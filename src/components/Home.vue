<template>
<div id = "home">
    <h2>555 </h2>
   <van-button type="default" @click="btnclick">点击</van-button>
    <van-button type="default" @click="btnclick2">就</van-button>
     <van-button type="default" @click="btnclick3">增加年龄</van-button>
   <h1>{{ count }}</h1>
   <router-link :to="{path:'/mine',query:{num:123}}">显示登录页面</router-link>
</div>
</template>

<script>
import { Button } from 'vant';
  export default {
    name: "Home",
    components:{
       [Button.name]:Button
    },
    methods:{
      btnclick:function() {
      this.$router.push('/mine')
      },
      btnclick2:function() {
      this.$router.push('/action')
      },
      btnclick3:function() {
      this.$store.commit('SET_USERAGE',1)
      }
    },
    computed:{
        count(){
            return this.$store.state.userAge
        }
    }
  }
</script>

<style scoped>

</style>