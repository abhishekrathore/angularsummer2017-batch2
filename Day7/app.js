angular.module("demo",[])
.controller("firstCtrl",firstCtrl)
.controller("secondCtrl",secondCtrl)



function firstCtrl($scope){

    console.log("helo");
    var first = this;

    var a  =5 ;
    first.b =4;

    first.sum = function(a,b){
        console.log(a+b);
        return a+b;
    }

    // $scope.c =7;

}


function secondCtrl(){
    var second = this;
    second.name = "abc";
}