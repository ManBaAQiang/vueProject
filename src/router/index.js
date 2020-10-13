 /* jshint esversion: 6 */ 

import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import userCenter from '@/components/userCenter';
import userProfile from '@/components/user/userProfile';
import userPosts from '@/components/user/userPosts';
import vueLife from '@/components/vueLife';
import father from '@/components/family/father';
import Home from '@/template/Home';
import vuexTest from '@/components/test/a';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/helloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'vuexTest',
      component: vuexTest
    },{
      path: '/user/:id',
      name:'userCenter',
      component: userCenter,
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'profile',
          component: userProfile
        },
        {
          path: 'posts',
          component: userPosts
        }
      ]
    },{
      path: '/life',
      // redirect:{
      //   name:''
      // },
      name: 'vueLife',
      component: vueLife
    },{
      path: '/father',
      // redirect:{
      //   name:''
      // },
      name: 'father',
      component: father
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
  }
});
