<template>
    <div>
      {{getCoin}}
      <button v-on:click="changeCoin()">点击我切换</button>
    </div>
</template>

<script>
export default {
        name: "a",
        computed:{
            getCoin(){
              return this.$store.getters.getReverseCoin
            }
        },
        methods:{
            initializeCoin () {
                this.$store.commit('changeCoin','1001000100001000001000001');
            },
            changeCoin () {
                this.$store.dispatch('updateCoinSubmit');
                console.log(this.$store.getters.getReverseCoin);
            }
        },
        
        created(){
            this.initializeCoin();
        },
};
    
// function created(){
//     console.log(this.$store.state.people_vuex.coin);
// }
</script>
