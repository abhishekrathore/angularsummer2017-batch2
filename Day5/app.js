var a=5;
var b=6;
console.log(a,b);

var cities =  ["jaipur","delhi","pune"];
console.log(cities);

var name  = "youstart"
console.log(name);

var speak = function(){
    console.log("hello");
}


var person = {};
person.name = "abc";
person.age = 20;
person.subject = "angular";
person.add = speak;

//console.log(person.add(1,2));
console.log(person.add());

console.log(person);




function talk(){
    console.log("talk");
}

speak();
talk();
//Hoisting
function sum(a,b){    
    return a+b;
}
function diff(a,b){    
    return a-b;
}


function push(a){
    arr[arr.length] = a;
    return arr.length;
}

console.log(sum("hello","world"));

console.log(sum);

function calc(fx,a,b){
    return fx(a,b)
}

console.log(calc(diff,1,2));

//TIMER

setTimeout(sum,2000)
console.log("world");



var human = person;
console.log(human.name);
human.name ="xyz";
console.log(human.name);
console.log(person.name);



