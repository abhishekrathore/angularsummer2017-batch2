angular.module("todoApp",['ngRoute'])
.config(function($routeProvider){

$routeProvider
    .when("/",{templateUrl:"views/home.html"})
    .when("/list/:listname",{templateUrl:"views/list.html"})
    .otherwise({redirectTo:"/"});




})
.controller("todoCtrl",todoCtrl)
.controller("homeCtrl",homeCtrl)
.factory("lists",lists)
.factory("todolists",todolists)



function lists(){
    return []
}


function todolists(){
    return []
}

function homeCtrl(lists,todolists){
    var home = this;
    home.lists= lists;
   
    home.add = function(listItem){
       home.lists.push(listItem);
       todolists.push({name:listItem,data:[]})
       console.log(home.lists);
   }

}

function todoCtrl(todolists,$routeParams){
    var todo = this;

    todo.tasks = [];
    console.log($routeParams);
    todo.name = $routeParams.listname

for(i=0;i<todolists.length;i++){
    if(todo.name == todolists[i].name){
            todo.tasks = todolists[i].data;

    }
}

    todo.editMode = false;
    var savedIndex =0;

    todo.addTask = addTask;

    function addTask(){
        var obj = {};
        obj.title = todo.task;
        obj.status = false;
        todo.tasks.push(obj);
        todo.task = "";
        console.log(todo.tasks);
    }

    todo.deleteTask = function(i){
        todo.tasks.splice(i,1);
        console.log(todo.tasks);
    }

    todo.editTask = function(i){
       todo.editMode = true;
       savedIndex = i;
       todo.task = todo.tasks[i].title;
    }

     todo.setStatus = function(i){
      todo.tasks[i].status = !todo.tasks[i].status;
      console.log(todo.tasks);
    }


   todo.updateTask = function(){
       todo.editMode = false;
       todo.tasks[savedIndex].title = todo.task
       todo.task = "";

    }




    console.log("todo");

   


}