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

// let fullname ="nandhakumar"
// let firstname;
// let lastname;

// //lastname=fullname.slice(6)
// //firstname=fullname.slice(0, 6)

// firstname =fullname.slice(0,fullname.indexOf(" "))
// lastname =fullname.slice(fullname.indexOf(" ")+1)

// console.log(firstname)

//method chaining

// let username = "max";

// let letter = username.charAt(0).toUpperCase().trim();

// console.log(letter)

//if statement

// let age =0;

// if(age >=65){
//     console.log("you are old man")
// }

// else if(age >= 19){
//     console.log("you are a adult")
// }
// else if (age < 0 ){ 
//     console.log("you are a child")
// }
// else{
//     console.log("you are not born")
// }


// let online = false;

// if(online){
//     console.log("your are online bro ")
// }
// else{
//     console.log("you are offline bro")
// }

// document.getElementById("submitbtn").onclick = function(){

//     if(document.getElementById("clickbtn")){
//         console.log("your are clicked")
//     }
//     else{
//         console.log("your not clicked")
//     }
// }

//checkbox propertty

// document.getElementById("submitbtn").onclick = function(){

//     const visabtn = document.getElementById("visabtn")
//     const mastercardbtn = document.getElementById("mastercardbtn")
//     const gpaybtn = document.getElementById("gpaybtn")

//     if(visabtn.checked){
//         console.log("your paying with visa")
//     }

//     else if(mastercardbtn.checked) {
//         console.log("your paying with mastercard")
//     }
//     else if(gpaybtn.checked) {
//         console.log("your paying with gpay")
//     }

//     else{
//         console.log("you must select a payment type")
//     }
// }

//switch


// let grade =90

// switch(true){
//     case grade >= 90:
//         console.log("you are very very good")
//     brack;
//     case grade >= 70:
//         console.log("you are very good")
//     brack;
//     case grade >= 80:
//         console.log("you are good")
//     brack;
//     case grade >= 60:
//         console.log("you are ok")
//     brack;
//     case grade >= 30:
//         console.log("you are fail")
//     brack;
//     default:
//         console.log("is not a number grde")
// }

//and or logical operators


// let temp = 50;
// let sunny = true;

// if(temp <= 0 || temp >= 30 && sunny == true){
//     console.log("to sunny")
// }
// else{
//     console.log("it so cold")
// }

//NOT logical operators

// let temp = -50;
// let sunny = false;

// if(!(temp >= 0)){
//     console.log("its cold out side ")
// }
// else{
//     console.log("its warm out side ")
// }

// if(!sunny){
//     console.log("its cold out side ")
// }
// else{
//     console.log("its sunny out side ")
//}

//while loops 

// let username =""

// while(username == "" || username == null){
//     username = window.prompt("enter your name")
//     console.log("hello "+username+"bro")
// }

//do while loop  
// let username

// do{
//     username = window.prompt("enter your name")
// }while(username)

// console.log("hello"+ username)


//for loop

// for(let i = 1; i < 100; i += 1){

//     console.log(i)
// }

//brack and continue

// for(let i = 1; i <= 30; i+=1){

//     if(i == 29 ){
//        // break;
//        continue;
//     }
//     console.log(i)
// } 

//nested loop

// let symbol = window.prompt("enter a symbol")
// let row = window.prompt("enter a row")
// let colam = window.prompt("enter a colam")

// for(let i = 1; i<=row; i +=1){
//     for(let j =1; j<=colam; j +=1 ){
//     document.getElementById("mylable").innerHTML +=symbol;
//     }
//     document.getElementById("mylable").innerHTML +="<br>"
// }

// sto()

// function sto(){
//     let name = " nandy "
//     let day = " have a grat day"
// lambo(name,day)
// }

// function lambo(name,day){
//     console.log("good")
//     console.log("morning"+name+day)
// }

//return statement

// let area ;
// let width;
// let hight;


// width=window.prompt("enter a width")
// hight=window.prompt("enter a hight")

// area=getarea(width,hight)

// console.log(area)

// function getarea(width,hight){
//      return width*hight
// }

// let adult = checkage(19);
// console.log(adult)

// function checkage(age){
//     if(age >= 23){
//         return true;
//     }
//     else{
//     return false;
//     }
// }

checkwinner(true)

function checkwinner(win){
    win ? console.log("you win"):console.log("you lose")
}