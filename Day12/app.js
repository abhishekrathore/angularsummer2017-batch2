angular.module("todoApp",[])
.controller("todoCtrl",todoCtrl)


function todoCtrl(){
    var todo = this;

    todo.tasks = [];
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