module.exports=function(fun) {
    try {
         fun();
    } catch (error) {
        console.log(error);
        alert(error);
    }
}