const people_mutations={
    updateCoin (people_state) {
        people_state.coin = '2334567889098786545';
    },
    changeCoin (people_state,coin){
        people_state.coin = coin;
    }
};
export default people_mutations;
