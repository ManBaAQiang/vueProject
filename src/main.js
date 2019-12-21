// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import qs from 'qs'; // 引入qs
// import VueAxios from 'vue-axios'
// import 'vant/lib/index.css';

import service from './components/js/publicService'
Vue.use(service);

Vue.config.productionTip = false;

// Vue.use(VueAxios,axios);
// Vue.use(qs);
// Vue.use(Vant);

// axios.defaults.timeout = 5000; 
Vue.prototype.$axios = axios;
Vue.prototype.HOST = '/test';
// axios.defaults.baseURL = '/api';

Vue.prototype.$qs = qs;

//添加请求拦截器
// axios.interceptors.request.use(function (config) {
//   // config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
//   // config.headers['Access-Control-Allow-Origin']= '*'
//   if(config.method === 'post') { // post请求时，处理数据
//       config.data = qs.stringify( {
//           ...config.data //后台数据接收这块需要以表单形式提交数据，而axios中post默认的提交是json数据,所以这里选用qs模块来处理数据，也有其他处理方式，但个人觉得这个方式最简单好用
//       })
//   } 
//   return config;
// }, function (error) {
//   loadinginstace.close()
//   return Promise.reject(error);
// })
// //添加响应拦截器
// axios.interceptors.response.use(function(response){
//   return response;
// },function(error){
//   return Promise.reject(error);
// });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
