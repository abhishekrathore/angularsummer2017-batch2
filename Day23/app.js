angular.module("storage",[])
.controller("demoCtrl",demoCtrl)

function demoCtrl(){
  var demo = this;
 var person = {name :"abc"}
var p = JSON.stringify(person) 
 localStorage.setItem("person",p);
 console.log(p);
 name  = localStorage.getItem("person")
  demo.name  = JSON.parse(name).name

   localforage.setItem("people",{name:"xyz"})
   var p = localforage.getItem("people",function(err,data){
    console.log(err);
    console.log(data);


   });

   console.log("hello")



}