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

function homeCtrl(lists){
    var home = this;
    home.lists= lists;
   
    home.add = function(listItem){
       home.lists.push(listItem);
       console.log(home.lists);
   }

}

function todoCtrl(todolists,$routeParams){
    var todo = this;

    console.log($routeParams);
    todo.name = $routeParams.listname

    todo.tasks = todolists;
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