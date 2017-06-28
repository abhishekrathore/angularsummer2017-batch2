angular.module("todoApp",[])
.controller("todoCtrl",todoCtrl)


function todoCtrl($http){
 console.log("todo")
 
 var todo = this;
  var key = "1f1eef6169fc3b523d81a6983f7e14f2"
  var base_url = "https://randomuser.me/api"
  var base_url2 = "https://gateway.marvel.com:443"
 

todo.getData = getData;

function getData(){
  var path = "/v1/public/characters?nameStartsWith="+todo.search+"&apikey="+key;


  var promise = $http.get(base_url2+path)
  promise.then(function(result){
    console.log(result)
    todo.superheros = result.data.data.results

  }).catch(function(err){
   console.log(err);
  })

}

}