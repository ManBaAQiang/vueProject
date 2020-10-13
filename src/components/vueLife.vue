<template>
  <div>

    生命周期函数的演示    ---   {{message}}

    <br>
	<h1></h1>
    <button @click="setMsg()">执行方法改变msg</button>  

	<br>
	<h1></h1>
	<input v-model.lazy="message" >

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

	<h3>模拟评分</h3>
	<div>
		初印象：
		<span v-for="(item, index) in arr1" :key="index" :style="{color:arr1[index]}" @click=changeArr1(index)>       ♥       </span>
		<br /><br />

		颜值：
		<span v-for="(item2, index2) in arr2" :key="index2+5" :style="{color:arr2[index2]}" @click=changeArr2(index2)>       ♥       </span>
		<br /><br />

		性格：
		<span v-for="(item3, index3) in arr3" :key="index3+10" :style="{color:arr3[index3]}" @click=changeArr3(index3)>       ♥       </span>
		<br /><br />
	</div>

  </div>
</template>

<script>
	import localService from './js/service';
    export default {
        name: "vueLife",
        data() {
          return {
			message: 'Vue的生命周期',
			arr1:['blue','blue','blue','blue','blue'],
			arr2:['blue','blue','blue','blue','blue'],
			arr3:['blue','blue','blue','blue','blue']
          }
        },
        methods:{
            setMsg(){
                this.message="我是改变后的数据";
            },
			
			doPublicService(){
				this.service.getMessage("globalService");
			},
			
			doService(){
				localService.getMessage("localService");
			},

			changeArr1(index) {
				console.log(index);
				// for(let i in this.arr1) {
				// 	if(i <= index) {
				// 		this.arr1[i] = 'red';
				// 	}else {
				// 		this.arr1[i] = 'blue';
				// 	}
				// 	this.$set(this.arr1,i,this.arr1[i]);
				// }
				this.arr1.forEach((element,i) => {
					// console.log(element,i);
					if(i <= index) {
						element = 'red';
					}else {
						element = 'blue';
					}
					this.$set(this.arr1,i,element);
				});
			},

			changeArr2(index) {
				
			},

			changeArr3(index) {
				
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
		  console.log(this.$el,this.$data,this.message);    
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
