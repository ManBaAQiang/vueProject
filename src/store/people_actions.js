import people_state from './people_state';
const people_actions={
    updateCoinSubmit ({ commit }) {
        setTimeout(() => {
            commit('updateCoin');
            console.log(people_state.coin);
        }, 1000);
    }
};
export default people_actions;
