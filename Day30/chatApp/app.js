/**
 * Created by abhishekrathore on 6/23/16.
 */
angular.module("test",['ngRoute','firebase'])
.factory("user",function(){
    return {}
})
.config(function($routeProvider){

   $routeProvider
   .when("/login",{
       templateUrl:"login.html",
       controller:"loginCtrl",
       controllerAs:"login"
   })
   .when("/chat",{
       templateUrl :"chat.html",
       controller:"testCtrl",
       controllerAs:"test",
       resolve : {
           loggedInUser : function($firebaseAuth){
               return $firebaseAuth().$waitForSignIn();
           },
           chatData : function($firebaseArray){
                var chatsRef = firebase.database().ref('chats');
                var chats = $firebaseArray(chatsRef);
                return chats.$loaded();
           }
       }
   })
   .otherwise({redirectTo:"/login"})

})
.controller("loginCtrl",function($firebaseAuth,user,$location){
    var login = this;
    var auth = $firebaseAuth();

    login.google = function(){


    auth.$signInWithPopup("google",[]).then(function(result) {
    console.log("Signed in as:", result.user.uid);
    user.data = result.user;
    $location.path("/chat");
    }).catch(function(error) {
    console.error("Authentication failed:", error);
    });



    }
})
.controller("testCtrl",function($firebaseArray,user,loggedInUser,chatData,$location,$firebaseAuth){

var test = this;

console.log(loggedInUser);
if(loggedInUser==null){
    $location.path("/login")
}




test.chats = chatData;

var listRef = firebase.database().ref("lists");
var lists = $firebaseArray(listRef);
test.lists = lists;
test.user = loggedInUser;


test.addChat = function(input){
        test.chats.$add({text:input,user:test.user.uid})
        test.input = ""
}

test.logout = function(){
    $firebaseAuth().$signOut();
    $location.path("/login");
}


})