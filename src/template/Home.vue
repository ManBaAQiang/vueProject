<template>
  <div class="hello">
    <h1 v-red>{{ msg }}</h1>
    <h2 v-test="userId">Ecosystem</h2>
  </div>
</template>

<script>
import homeService from '../service/homeService';
import Vue from 'vue';
export default {
  name: 'Home',
  data () {
    return {
      msg: 'index',
      userId:123456
    }
  },
  //局部注册自定义指令
  directives:{
  	red:{
	    inserted:function(el){
        el.style.background = 'red';
    }
  	}
  },
  methods: {
  
    postData() {
      //post请求
      let params = {
        gameIndex: 401,
        issueNo: 19175
      };
      params = this.$qs.stringify(params);
      this.$axios.post(this.HOST+'/open/historyIssue.do', params
      ).then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      });
    },

    // 使用 asyns/await 将axios异步请求同步化处理
    async getUserAccount() {
      return this.$axios.get('/api/new/expert/home?raceType=3');
    },
  },

  mounted:function() {
    //获取首页数据
    homeService.getHomeData().then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      });
  }

}
</script>

<style scoped>

</style>
