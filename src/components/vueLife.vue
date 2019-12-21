<template>
  <div>

    生命周期函数的演示    ---   {{msg}}

    <br>
	<h1></h1>
    <button @click="setMsg()">执行方法改变msg</button>  

	<br>
	<h1></h1>
	<input v-model.lazy="msg" >

	<h1></h1>
	<div>
		<router-link to="/user/110/profile">userCenter1</router-link>
	</div>
	<h1></h1>
	<div>
		<router-link to="/user/120/posts">userCenter2</router-link>
	</div>

	<h1></h1>
	<div>
		<button @click="doPublicService()">全局service</button>  
	</div>

	<h1></h1>
	<div>
		<button @click="doService()">局部service</button>  
	</div>
  </div>
</template>

<script>
	import localService from './js/service';
    export default {
        name: "vueLife",
        data() {
          return {
            msg: 'Vue的生命周期'
          }
        },
        methods:{
            setMsg(){
                this.msg="我是改变后的数据";
            },
			
			doPublicService(){
				this.service.getMessage("globalService");
			},
			
			doService(){
				localService.getMessage("localService");
			}
			
        },
        //钩子
        beforeCreate: function() {	//进行初始化事件，进行数据的观测
		  console.group('------beforeCreate创建前状态------');
		  console.log("%c%s", "color:red" , "el     : " + this.$el); //undefined
		  console.log("%c%s", "color:red","data   : " + this.$data); //undefined 
		  console.log("%c%s", "color:red","message: " + this.message) 
		},
		created: function() {
		  console.group('------created创建完毕状态------');
		  console.log("%c%s", "color:red","el     : " + this.$el); //undefined
		  console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化 
		  console.log("%c%s", "color:red","message: " + this.message); //已被初始化
		},
		
		beforeMount: function() {
		  console.group('------beforeMount挂载前状态------');
		  console.log("%c%s", "color:red","el     : " + (this.$el)); //已被初始化		此处存在异议
		  console.log(this.$el);
		  console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化  
		  console.log("%c%s", "color:red","message: " + this.message); //已被初始化  
		},
		mounted: function() {
		  console.group('------mounted 挂载结束状态------');
		  console.log("%c%s", "color:red","el     : " + this.$el); //已被初始化
		  console.log(this.$el);    
		  console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
		  console.log("%c%s", "color:red","message: " + this.message); //已被初始化 
		},
		beforeUpdate: function () {			//beforeUpdate是检测到data变化但是view还没有重新渲染，并且可以修改data的最后时机，updated是view重新渲染后触发的。
		  console.group('beforeUpdate 更新前状态===============》');
		  console.log("%c%s", "color:red","el     : " + this.$el);
		  console.log(this.$el);   
		  console.log("%c%s", "color:red","data   : " + this.$data); 
		  console.log("%c%s", "color:red","message: " + this.message); 
		},
		updated: function () {
		  console.group('updated 更新完成状态===============》');
		  console.log("%c%s", "color:red","el     : " + this.$el);
		  console.log(this.$el); 
		  console.log("%c%s", "color:red","data   : " + this.$data); 
		  console.log("%c%s", "color:red","message: " + this.message); 
		},
		beforeDestroy: function () {
		  console.group('beforeDestroy 销毁前状态===============》');
		  console.log("%c%s", "color:red","el     : " + this.$el);
		  console.log(this.$el);    
		  console.log("%c%s", "color:red","data   : " + this.$data); 
		  console.log("%c%s", "color:red","message: " + this.message); 
		},
		destroyed: function () {
		  console.group('destroyed 销毁完成状态===============》');
		  console.log("%c%s", "color:red","el     : " + this.$el);
		  console.log(this.$el);  
		  console.log("%c%s", "color:red","data   : " + this.$data); 
		  console.log("%c%s", "color:red","message: " + this.message)
		}
    }
		
</script>

<style scoped>
.router-link-active {
	color: red;
}
</style>
