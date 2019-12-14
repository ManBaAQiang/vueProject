<template>
<div>
  <h1>{{ msg }}</h1>

  <button type="button" @click="goBack()">goBack!</button>  
</div>
</template>

<script>
    export default {
        name: "useProfile",
        data() {
          return {
            msg: 'useProfile',
          }
        },
        methods:{
            goBack(){
              // this.$router.push("/");
              this.$router.go(-1);
              
            }
        }
    }
</script>
