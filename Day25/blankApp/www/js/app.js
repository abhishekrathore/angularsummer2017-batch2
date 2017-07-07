// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
}).controller("demoCtrl",demoCtrl)

function demoCtrl($scope,$ionicPopup,$cordovaGeolocation,$cordovaLaunchNavigator,$cordovaCamera
){


   var demo  = this;
  var myPopup = $ionicPopup.show({
    template: '<input type="password" ng-model="data.wifi">',
    title: 'Enter Wi-Fi Password',
    subTitle: 'Please use normal things',
    scope: $scope,
    buttons: [
      { text: 'Cancel' },
      {
        text: '<b>Location</b>',
        type: 'button-positive',
        onTap: function(e) {
           location()
        }
      }
    ]
  });


  var posOptions = {timeout: 10000, enableHighAccuracy: false};
 function location(){
  $cordovaGeolocation
    .getCurrentPosition(posOptions)
    .then(function (position) {
      var lat  = position.coords.latitude
      var long = position.coords.longitude
      navigation(lat,long);
      console.log(lat,long);
    })
 }

 function navigation(lat,long){
     var start = [lat, long];
	var destination = "Delhi";
  console.log(lat,long)
    $cordovaLaunchNavigator.navigate(destination, start).then(function() {
      console.log("Navigator launched");
    }, function (err) {
      console.log(err);
    });
 }

demo.capture = capture;
 function capture(){

 var options = {
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 200,
      targetHeight: 200,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false,
	  correctOrientation:true
    };

    $cordovaCamera.getPicture(options).then(function(imageData) {
      var image = document.getElementById('img');
      image.src = "data:image/jpeg;base64," + imageData;
    }, function(err) {
      console.log(err)
    });

  



 }


}
