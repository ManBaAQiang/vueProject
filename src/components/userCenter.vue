<template>
<div>
  <h1>{{ msg.split('').reverse().join('') }}</h1>

  <div>UserId {{ userID }}</div>
  
  <button type="button" @click="goBack()">goBack!</button>
  <br>

  <input type="text" name="count" v-model="count" />
  <div v-if="count == 0">
    count等于0，count值为{{count}}
  </div>
  <div v-else-if="count > 0">
    count大于0，count值为{{count}}
  </div>
  <div v-else>
     count小于0，count值为{{count}}
  </div>

  <button type="button" @click.once="showMe()">show!</button>

  <div>childrenName: {{ childrenName }}</div>

  <button type="button" @click.stop="toFamily()">toFamily!</button>

  <router-view></router-view>

</div>
</template>

<script>
 import eventBus from '@/components/js/eventBus';
    export default {
        name: "userCenter",
        data() {
          return {
            msg: 'UserCenter',
            count:{
              type:Number,
              default:10
            },
            userID:this.$route.params.id || 0,
            childrenName:'',
          }
        },
        methods:{
            goBack(){
              // this.$router.push("/");
              this.$router.go(-1);
            },
            toFamily() {
              this.$router.push("/father");
            },
            showMe() {
              // this.$emit('name',this.msg);
              console.log(this.msg);
            }
        },
        created: function() {
          let that = this;
          eventBus.$on('name',function(name){
            console.log("aaa",name);
            that.childrenName = name;
          });
        },
    }
</script>

<style scoped>

</style>
