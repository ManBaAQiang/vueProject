//全局service
exports.install = function (Vue, options) {
    Vue.prototype.service= {
        getUserInfo(item){
            console.log(item);
        },
    
        getMessage(uid){
            console.log(uid);
        }
    }
}