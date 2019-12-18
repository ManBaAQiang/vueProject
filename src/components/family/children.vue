<template>
<div>
  <h1>{{ msg }}</h1>

  <h2>fatherName:{{ fatherName }}</h2>

   <input type="text" name="name" v-model="childrenName" @blur="changeName()"/>
  <h2>childrenName:{{ childrenName }}</h2>

  <h3>传递的message:{{ message }}</h3>

</div>
</template>

<script>

    export default {
        name: "children",
        props:{
            message:{
              type:String,
              default:"vue"
            }
        },
        data() {
          return {
            msg: 'Children',
            fatherName:'',
            childrenName:'',
          }
        },
        methods:{
            toLife(){
              this.$router.push("/");
            },
            changeName() {
              console.log("childrenName");
              this.$emit('name',this.childrenName);
            },
            refsTest() {
              console.log("refsTest");
            }
        }
    }
</script>
