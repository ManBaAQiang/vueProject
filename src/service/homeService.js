import axios from 'axios';
import qs from 'qs';
export default {
    getHomeData:function(){
        return axios.get('/yaq/index');
    }
 }