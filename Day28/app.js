angular.module("firebaseApp",["firebase"])
.controller("todoCtrl",todoCtrl)


function todoCtrl($firebaseStorage,$firebaseArray){
   
   var todo = this;
 
 var imageRef = firebase.storage().ref("images")
 var pdfRef = firebase.storage().ref("pdf")
 var imageDBRef = firebase.database().ref("images");
 var images = $firebaseArray(imageDBRef);


todo.images = images;

 todo.upload= function(){

 var fileObj = document.getElementById("file").files[0]
 console.log(fileObj);

if(fileObj.type == "application/pdf"){
        var pdfFileRef = pdfRef.child(fileObj.name)
       var file = $firebaseStorage(pdfFileRef)
}else{
        var imageRefFile = imageRef.child(fileObj.name)
       var file = $firebaseStorage(imageRefFile)

}


 var uploadTask = file.$put(fileObj);

 uploadTask.$progress(function(data){
     console.log(data);
     todo.progress =Math.round(data.bytesTransferred*100/data.totalBytes);
 })

uploadTask.$complete(function(){
    file.$getDownloadURL().then(function(url){
        console.log(url)
        images.$add({url:url});
    });
})



 }


}