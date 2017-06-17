angular.module("todoApp",[])
.controller("todoCtrl",todoCtrl)


function todoCtrl(){
 
var todo = this;
todo.cart = []
todo.total = 0;
todo.items = [
    {
        name:"hidenseek",
        rate:10
    },
    {
        name:"bottle",
        rate:30
    }
]

todo.add = function(p){
    todo.cart.push(p);
    todo.product = {};
    total();
}


function total(){
    todo.total =0;
    for(var i=0;i<todo.cart.length;i++){
        todo.total += todo.cart[i].quan * todo.cart[i].rate
    }
}






}