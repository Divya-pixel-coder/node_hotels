
// // function add(a,b){
// //     return a+b;
// // }
// // var add=function(a,b){
// //     return a+b;
// // }
// var add=(a,b)=>{return a+b}//shorthand
// // var add=(a,b)=>return a+b
// var result=add(2,7);
// console.log(result);

// (function(){
//     console.log('divya');
    
// })();



//callback
//callback function is a function thst is used to call after executing a particular worl/function
// function callback(){
//     console.log('divya is calling a callback function');
    
// }

// const add =function (a,b,callack) {
//     var result=a+b;
//     console.log('result:' +result);
//     callback();
    
// }
// add(3,4,callback);

//next callback func
// const add=function(a,b,divya){
//     var result=a+b;
//     console.log('result:' +result);
//     divya();
    
// }
// //inline function
// // add(2,3,function(){
// //     console.log('add completed');
    
// // })

// //shorthand for inline
// add(2,3,() => {console.log('add completed');});

// var fs=require('fs');
// var os=require('os');

// var user=os.userInfo();
// console.log(user);
// console.log(user.username);

// fs.appendFile('greeting.txt', 'hi ' +  user.username + '!\n',() => {
//   console.log('file is created');
  
// }
// );
// console.log(os);
// console.log(fs);


const { json } = require('express');
const notes=require('./notes');

var _=require('lodash')//used to manage data

console.log('server file is available');

var age=notes.age;
console.log(age);

var result=notes.addNumber(age+18,10);
console.log('result is now: '+result);

var data=["person","person",1,2,1,2,'name','age','2'];
var filter=_.uniq(data);
console.log(filter);

console.log(_.isString('divya'));


console.log(typeof JSON);
console.log(typeof json);

//inter conversion json to an object in node.js
//convert json string to object
const jsonString='{"name": "divya","age": 19,"city":"kurukshetra"}';
const jsonObject=JSON.parse(jsonString);//convert json string to object
console.log(jsonObject);
console.log(jsonObject.name);

//convert object to jsonstring
const objectToConvert={ 
    name:"divya",
    age:19
};
const jsonStringified=JSON.stringify(objectToConvert);//convert object to jsonstring
console.log(jsonStringified);
console.log(typeof json);


