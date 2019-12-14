<template>
<div>
  <h1>{{ msg }}</h1>

  <input type="text" name="name" v-model="name" @blur="changeName()"/>

  <button type="button" @click="toLife()">回到首页</button>  
</div>
</template>

<script>
  import bus from '@/components/js/eventBus';
    export default {
        name: "usePosts",
        data() {
          return {
            msg: 'usePosts',
            name:'post',
          }
        },
        methods:{
            toLife(){
              this.$router.push("/");
            },
            changeName() {
              bus.$emit('name',this.name);
            }
        }
    }
</script>
