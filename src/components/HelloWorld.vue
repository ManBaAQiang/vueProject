<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
        <!-- 集合了来自社区贡献的数以千计的插件和库。 -->
          awesome-vue
        </a>
      </li>
    </ul>
    <h2>Route</h2>
    <ul>
      <li>

        <router-link to="/life">vueLife</router-link>
      </li>
      <li>

        <button @click="handleClick()">userCenter</button>
      </li>
    </ul>
    <h2>Ajax</h2>
    <ul>
      <li>
        <button @click="getData()">getData</button>
      </li>
      <li>

        <button @click="postData()">postData</button>
      </li>
      <li>

        <button @click="doAllAjax()">执行多个并发请求</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      userId:123
    }
  },
  methods: {
    handleClick() {
      // 事件页面跳转
      this.$router.push({ path: 'user/'+this.userId});

      // //字符串
      // this.$router.push('user');
      // // 对象
      // this.$router.push({ path: 'user' });
      // // 命名的路由
      // this.$router.push({ name: 'user', params: { userId: '123' }});
      // // 带查询参数，变成 /user?userId=123
      // this.$router.push({ path: 'user', query: { userId: '123' }});

    },

    //Axios
    getData() {
      //get请求
      this.$axios.get('/api/new/expert/home?raceType=1'
      // , {
      //     params: {
      //       raceType: 1
      //     }
      //   }
        ).then(function (response) {
          console.log(response);
        }).catch(function (error) {
          console.log(error);
        });

      // 可选地，上面的请求可以这样做
      // axios.get('/user', {
      //     params: {
      //       ID: 12345
      //     }
      //   }).then(function (response) {
      //     console.log(response);
      //   }).catch(function (error) {
      //     console.log(error);
      //   });
    },
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
      return this.$axios.get('/api/new/expert/home?raceType=1');
    },
    getUserPermissions() {
      return this.$axios.get('/api/new/expert/home?raceType=2');
    },
    //执行多个并发请求
    doAllAjax() {
      this.$axios.all([this.getUserAccount(), this.getUserPermissions()]
      ).then(this.$axios.spread(function (acct, perms) {
        // 两个请求现在都执行完成
      }));
    }

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
