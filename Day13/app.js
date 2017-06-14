angular.module("services",[])
.controller("firstCtrl", firstCtrl )
.controller("secondCtrl", secondCtrl )
.factory("dataService",dataService)


function dataService(){

return {};

}
function todoFx(dataService){

return {
    addTask : function(){

    },
};

}



function firstCtrl(dataService,todoFx){
    var first = this;
    todo.addTask = todoFx.addTask;
    first.person = dataService;
    first.person.name = "abc";


 console.log("first")   
}

function secondCtrl(dataService){
    var second = this;
    second.person = dataService;
    second.person.name = "xyz";

 console.log("second");
}