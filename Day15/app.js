angular.module("firebaseApp",["firebase"])
.controller("todoCtrl",todoCtrl)


function todoCtrl($firebaseArray){
   
   var todo = this;
   // reference to database path
  var students = firebase.database().ref("students");
  //parsing the reference to an array
   todo.students   =  $firebaseArray(students)

   todo.students.$add({name:"abc",age:20});

   console.log(todo.students);






   console.log("todo");


}