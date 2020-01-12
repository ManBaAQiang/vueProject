import people_state from './people_state';
const people_getters={
    getReverseCoin: people_state => {
        if(people_state.coin)
        {
            people_state.coin = people_state.coin.toString().replace(/\$|\,/g,'');
            if(''==people_state.coin || isNaN(people_state.coin)){return 'Not a Number ! ';}
            var sign = people_state.coin.indexOf("-")> 0 ? '-' : '';
            var cents = people_state.coin.indexOf(".")> 0 ? people_state.coin.substr(people_state.coin.indexOf(".")) : '';
            cents = cents.length>1 ? cents : '' ;
            people_state.coin = people_state.coin.indexOf(".")>0 ? people_state.coin.substring(0,(people_state.coin.indexOf("."))) : people_state.coin ;
            if('' == cents){ if(people_state.coin.length>1 && '0' == people_state.coin.substr(0,1)){return 'Not a Number ! ';}}
            else{if(people_state.coin.length>1 && '0' == people_state.coin.substr(0,1)){return 'Not a Number ! ';}}
            for (var i = 0; i < Math.floor((people_state.coin.length-(1+i))/3); i++)
            {
                people_state.coin = people_state.coin.substring(0,people_state.coin.length-(4*i+3))+','+people_state.coin.substring(people_state.coin.length-(4*i+3));
            }
            return (sign + people_state.coin + cents);
        }
        return people_state.coin;
    },
};
export default people_getters;
