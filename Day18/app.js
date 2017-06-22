angular.module("firebaseApp",["firebase"])
.controller("todoCtrl",todoCtrl)


function todoCtrl($firebaseArray,$firebaseAuth){
    var todo = this;
    var auth =  $firebaseAuth();
    todo.login = login;
    todo.loginwithfb = loginwithfb;



function login(){
  var promise = auth.$signInWithPopup("google")

    promise.then(function(result) {
    console.log("Signed in as:", result);
    todo.user = result.user
    })
    .catch(function(error) {
    console.error("Authentication failed:", error);
});
}
function loginwithfb(){
  var promise = auth.$signInWithPopup("facebook")

    promise.then(function(result) {
    console.log("Signed in as:", result);
    todo.user = result.user
    })
    .catch(function(error) {
    console.error("Authentication failed:", error);
});

}
 




}