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
