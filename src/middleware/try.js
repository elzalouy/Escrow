module.exports=function(fun) {
    try {
         return fun;
    } catch (error) {
        console.log(error);
        alert(error);
    }
}