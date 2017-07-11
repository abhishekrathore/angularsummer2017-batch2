/**
 * Created by abhishekrathore on 6/23/16.
 */
var app = angular.module("test",['firebase','ngRoute']);


app.controller("testCtrl",function($firebaseArray){

var test = this;
var listRef = firebase.database().ref("lists");
var lists = $firebaseArray(listRef);
test.lists = lists;



})