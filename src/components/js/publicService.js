//全局service
export function install (Vue, options) {
    Vue.prototype.service= {
        getUserInfo(item){
            console.log(item);
        },
    
        getMessage(uid){
            console.log(uid);
        }
    }
}