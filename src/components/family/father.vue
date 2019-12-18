<template>
<div>
  <button type="button" @click="goBack()">goBack!</button>

  <h1>{{ msg }}</h1>
  <input type="text" v-model="msg"/>
  
  <h2>fatherName:{{ fatherName }}</h2>
  <input type="text" name="name" v-model="fatherName" @blur="changeName()"/>

  <h2>########################</h2>
  <h2>childrenName:{{ childrenName }}</h2>

  <children ref="children" :message="msg" @name="getChildrenName"></children>

  <button type="button" @click="getDataAndFunction()">getChilren!</button>

</div>
</template>

<script>
import children from '@/components/family/children';
    export default {
        name: "father",
        components:{
          children
        },
        data() {
          return {
            msg: 'Father',
            fatherName:'',
            childrenName:'',
          }
        },
        methods:{
            toLife(){
              this.$router.push("/");
            },
            getChildrenName(data) {
              console.log("getChildrenName",data);
              this.childrenName = data;
            },
            changeName() {
              console.log("fatherName");
            },
            goBack(){
              // this.$router.push("/");
              this.$router.go(-1);
            },
            //ref的作用   ref="children" 
            getDataAndFunction() {
              //获取dom元素
              console.info(this.$refs.children);
              //获取子组件中的data
              console.info(this.$refs.children.msg);
              //调用子组件中的方法
              this.$refs.children.refsTest()
            }
        },
        // created: function() {
        //   this.$on('name',function(name){
        //     console.log("aaa");
        //     this.childrenName = name;
        //   });
        // },
    }
</script>
