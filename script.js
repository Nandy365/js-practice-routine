// let firstname ="nandy"
// let number = 1;
// let student = "true"
// number=number+21
// console.log(firstname)
// console.log(number)
// console.log(student)

// document.getElementById("p1").innerHTML="my name is"+firstname;
// document.getElementById("p2").innerHTML="my age "+number;
// document.getElementById("p3").innerHTML="i am self thought developer"+student;

//arithmetic

//let student = 40;
//student=student+1;
//student=student-21;
//student=student*2
//let extra = student/2
//let extra = student%3

// student +=20;
// console.log(student)

// let student = 2+3 * (2/3)

// console.log(student)

//how to accept user input
//let username = window.prompt("what is your name")

//console.log(username)
// let username;
// document.getElementById("submitbutton").onclick = function(){
//     username = document.getElementById("name").value;
//     console.log(username);
//     document.getElementById("username").innerHTML="hello"+ username;
// }

//type conversion

//(string,numbers,boolean)

// let age = window.prompt("how old are you")
// console.log(typeof age)
// age = Number(age)
// age +=1
// console.log("Happy birthday bro you are "+age+" year old")

// let x;
// let y;
// let z;

// x = Number("212")
// y = String(212)
// z = Boolean("")

// console.log(x, typeof x)
// console.log(y, typeof y)
// console.log(z, typeof z)

//const = a variable that can't be changed 

// const PI = 3.14159
// let radius;
// let circumference;

// radius = window.prompt("enter the radius of a circle")
// radius = Number(radius)
// //PI = 2.21
// circumference = 2 * PI + radius;

// console.log("the circle is",circumference)

//Math

// let x = 8.99
// let y = 9
// let z =11
// let maximum
// let minimum

// //x = Math.round(x)
// //x = Math.random(x)
// //x = Math.abs(x)

// //x = Math.cos(x)

// //x = Math.pow(x)

// //maximum = Math.max(x,y,z)
// minimum = Math.min(x,y,z)

// console.log(minimum)

// let a;
// let b;
// let c;

// a = window.prompt("Enter A")
// a =Number(a)

// b = window.prompt("Enter B")
// a =Number(b)

// c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))

// console.log("side c: ",c)


// 
// let count = 0;

// document. getElementById("increasebutton").onclick = function() {
//     count +=1;
//     document.getElementById("countlable").innerHTML = count
// }

// document. getElementById("resetbutton").onclick =function(){
//     count =0;
//     document.getElementById("countlable").innerHTML = count
// }
// document.getElementById("decreasebutton").onclick =function(){
//     count -=1;
//     document.getElementById("countlable").innerHTML = count
// }

// random number generator
// let x ;
// let y ;
// let z ;

// document.getElementById("clickbutton").onclick = function(){

// x = Math.floor(Math.random() * 6) +1
// y = Math.floor(Math.random() * 6) +1
// z = Math.floor(Math.random() * 6) +1

// document.getElementById("xlable").innerHTML = x

// document.getElementById("ylable").innerHTML = y

// document.getElementById("zlable").innerHTML =z

// }

//usefull string properties & methods
// let myname ="nandhakumar"
// let phonenumber = "111-23334-55667"

// console.log(myname.length)
// console.log(myname.charAt(4))
// console.log(myname.indexOf("k"))
// console.log(myname.lastIndexOf('k'))
// console.log(myname.trim())

// myname = myname.toLocaleUpperCase()
// myname = myname.toLocaleLowerCase()
// phonenumber=phonenumber.replaceAll("-","/")

// console.log(phonenumber)

// slice()

let fullname ="nandhakumar"
let firstname;
let lastname;

//lastname=fullname.slice(6)
//firstname=fullname.slice(0, 6)

firstname =fullname.slice(0,fullname.indexOf(" "))
lastname =fullname.slice(fullname.indexOf(" ")+1)

console.log(firstname)