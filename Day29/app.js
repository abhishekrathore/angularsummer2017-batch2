angular.module("todoApp",[])
.controller("todoCtrl",todoCtrl)


function todoCtrl(){
    var todo = this;
     todo.submit = function(form){
         console.log(form)
     }
  
   


}