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

//ternary operator

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

// checkwinner(true)

// function checkwinner(win){
//     win ? console.log("you win"):console.log("you lose")
// }

//template literals

// let username = "nandy"
// let age = 22;
// let city ="ooty"

// // console.log(`my name is ${username}`)
// // console.log(`my age is ${age}`)
// // console.log(`my place is ${city}`)

// let all =
// ` my name is ${username} 
// my age is ${age}
// my place is ${city}`

// document.getElementById("mylable").innerHTML=all

//toLocaleString()

//number.toLocaleString(locale, {})

//locale = specify that language ()

// let mynum = 100;

// mynum = mynum.toLocaleString("EN-US")
// mynum = mynum.toLocaleString("hi-IN")
// mynum = mynum.toLocaleString("de-DE")

// mynum = mynum.toLocaleString("en-US",{style: "currency" , currency:"USD"})
// mynum  = mynum.toLocaleString("hi-IN",{style:"currency" , currency:"IND"})
// mynum=mynum.toLocaleString("de-DE",{style:"currency",currency:"EUR"})

// mynum = mynum.toLocaleString(undefined, {style: "percent"})

// mynum = mynum.toLocaleString(undefined, {style:"unit", unit:"celsius"})

// console.log(mynum)


// const answer = Math.floor(Math.random() * 10 + 1);
// let gusses = 0;

// document.getElementById("submitbutton").onclick = function() {

//     let guess = document.getElementById("gussfield").value
//     gusses+=1;

//     if(guess == gusses){
//         alert(`${answer}is the #. It took you ${gusses} guess`)
//     }
//     else if( guess < gusses){
//         alert("it too small")
//     }
//     else{
//         alert(' it too big ')
//     }
// }

//temperature conversion program
// document.getElementById("submitbutton").onclick = function(){

//     let temp;
//     if(document.getElementById("Cbutton").checked){
//         temp = document.getElementById("textBox").value;
//         temp = Number(temp)
//         temp = toCelsius(temp)
//         document.getElementById("templable").innerHTML = temp +"°C"
//     }

//     else if(document.getElementById("Fbutton").checked){
//         temp = document.getElementById("textBox").value;
//         temp = Number(temp)
//         temp = toFahrenheit(temp)
//         document.getElementById("templable").innerHTML = temp +"°F"
//     }

//     else{
//         document.getElementById("temlable").innerHTML +"select a unit "
//     }
// }

// function toCelsius(temp){
//     return(temp -32) *(5/9)
// }
// function toFahrenheit(temp){
//     return temp * 9 / 5 +35
// }


//array

// let cars = ["audi","bmw","lambo"]

// //cars [0] = "coconut"
// cars.push("lemon") //add an element
// cars.pop() //removes last element
// cars.unshift("mango")//add element to beginning
// cars.shift()//remove element from beginning

// let length = cars.length;
// let index = cars.indexOf("bmw")

// console.log(index)

//loop through an array

// let prices = [1,2,3,4,5];

// for(let i = prices.length -1; i >= 0; i-=1){
//     console.log(prices[i])

// }


// let pricess = [1,2,3,4,5]

// for (i = 0; i < pricess.length; i+=1){
//     console.log(pricess[i])
// }

//sort an array of strings

// let cars = ["audi","bmw","benze","tata","rangerover"]

// cars = cars.sort()
// cars = cars.sort().reverse()

// for(let car of cars){
//     console.log(car)
// }


//2D Arrays 

// let vegetable = ["carrots","onions","potatoes"]
// let fruits = ["apple","oranges","bananas"]
// let meats = ["eggs","chicken","fish"]

// let grocery = [vegetable,fruits,meats]

// grocery[2][1]="beef"

// for(let list of grocery){
//     for(let food of list){
//         console.log(food)
//     }
// }-

//spread operato

// let numbers = [1,2,3,4,5,6,7,8,9]

// let maximum = Math.max(...numbers)

// console.log(maximum)


// let class1 = ["nandy","bhuvi","raja"]
// let class2 = ["sundar","ramesh","achu"]

// class1.push(...class2);
// console.log(...class1)

//rest parameters

// let a = 2
// let b = 3
// let c = 5
// let d = 9
// let e = 1

// console.log(sum(a,b,c,d))

// function sum(...number){
//     let total = 0
//     for(let numbers of number)
//     total += numbers
// return(total)
// }


// function sum(a,b){
//     return(a+b)
// }

// function sum(a,b,c){
//     return(a+b+c)
// }
// function sum(a,b,c,d){
//     return(a+b+c+d)
// }

//callback

// let total = sum(2,4)

// displayDOM(total)
// displayConsol(total)

// function sum(x,y){
//     let  result = x+y
//     return result
// }

// sum(4,5,displayDOM,displayConsol)

// function sum(x,y,callback,displayConsol){
//     let result = x+y;
//     callback(result)
//     displayConsol(result)
// }

// function displayConsol(output){
//     console.log(output)
// }

// function displayDOM(output){
//     document.getElementById("templable").innerHTML = output
// }sum(4,5,displayDOM,displayConsol)

// function sum(x,y,callback,displayConsol){
//     let result = x+y;
//     callback(result)
//     displayConsol(result)
// }

// function displayConsol(output){
//     console.log(output)
// }

// function displayDOM(output){
//     document.getElementById("templable").innerHTML = output
// }


//array .forEach

// let  students = ["nandy","bhuvi","sundar"]

// students.forEach(capitlize)
// students.forEach(print)

// function capitlize(element,index,array){
//     array[index] = element[0].toUpperCase() + element.substring(1)
// }

// function print(element){
//     console.log(element)
// }


//array map 

// let numbers = [3,4,5,6,7,8,9]

// let squares = numbers.map(square)

// let cubes =numbers.map(cube)

// cubes.forEach(print)

// function square(element){
//     return Math.pow(element, 2)
// }

// function cube (element){
//     return Math.pow(element, 6) 
// }
// function print(element){
//     console.log(element)
// }   


// array filter()


// let ages = [12,33,66,75,89,]
// let adults = ages.filter(checkAge)

// adults.forEach(print)

// function checkAge(element){
//     return element >= 18
// }

// function print(element){
//    console.log(element)
//}

//array.reduce

// let prices = [1,3,4,6,7,944,5,]
// let total = prices.reduce(checkOut)

// console.log(`this is your total; bill $`+total)

// function checkOut(total,element){
//     return total+element
// }

// sort an array of numbers

// let grades = [100,80,70,60,50]

// grades = grades.sort(aescendingSord)

// grades.forEach(print)

// function descendingSord(x,y){
//     return x -y;
// }

// function aescendingSord(x,y){
//     return y - x
// }

// function print(element){
//     console.log(element)
// }
//function expression

// let counts = 0;

// function increaseCounts() {
//     counts +=1
//     document.getElementById("myLable").innerHTML = counts
// }

// function decreaseCounts() {
//     counts -=1
//     document.getElementById("myLable").innerHTML = counts
// }

// let count = 0;


// document.getElementById("increasebutton").onclick = function() {
//     count +=1
//     document.getElementById("myLable").innerHTML = count
// }

// document.getElementById("decreasebutton").onclick = function() {
//     count -=1
//     document.getElementById("myLable").innerHTML = count
//}
 

//arrow function 

// const hello = (username) =>console.log(`my name is ${username
// }`)

// hello("Nandy")

// let grades = [20,30,69,57,76,89]

// grades.sort((x,y) => x-y )
// grades.forEach((element)=> console.log(element))


 //shuffle an array

// let cards = ["22","2","3","4","5","h","g","8","9"]

// shuffle(cards);

// cards.forEach(card => console.log(card))

// function shuffle(array){
//     let currentIndex = array.length;

//     while(currentIndex != 0){
//         let randomIndex = Math.floor(Math.random() * array.length)
//         currentIndex -=1

//         let temp = array[currentIndex];
//         array[currentIndex] = array[randomIndex];
//         array[randomIndex] = temp
//     }
//     return array;
// }



// let userName = "nandy"
// let userAge = 22;

// login();


// function login(){

// displayuserage();
// displayusername();

    
// function displayusername(){
//     console.log(`My name is ${userName}`)
// }

// function displayuserage(){
//     console.log(`My age is ${userAge}`)
// }
// }




// const store = new Map([
//     ["lambo",200000],
//     ["bmw",333],
//     ["audi",332],
//     ["benze",3332]
// ])

// //store.set("RR",657576)
// //store.delete("bmw")
// //console.log(store.has("lambo"))

// console.log(store.size)

// // let shopingcart = 0

// // shopingcart +=store.get("lambo")
// // shopingcart +=store.get("bmw")

// // console.log(shopingcart)

// store.forEach((value,key)=>console.log(`${value} ${key}`))

//
//Object 

// const car = {
//     model:"mustank",
//     color:"black",
//     year:"2017",

//     driver : function(){
//         console.log("you need driver this car you need driving license ")
//     },
//     brack :function(){
//         console.log("good brake in this car")
//     }
// }
// console.log(car.model)
// console.log(car.year)
// console.log(car.color)

// car.driver()
// car.brack()

// const car1 = {
//     model:"lamborghini",
//     color:"black",
//     year:"2017",

//     driver : function(){
//         console.log("you need driver this car you need driving license ")
//     },
//     brack :function(){
//         console.log("good brake in this car")
//     }
// }

// console.log(car1.model)
// console.log(car1.year)
// console.log(car1.color)

// car1.brack()
// car1.driver()

//this 

// this.name ="nandy"

// console.log(this.name)


// class players{
//     score = 0;

//     pause(){
//         console.log("you pause the game")
//     }
//     exit(){
//         console.log("player exit the game")
//     }
// }

// const player1 = new players()
// const player2 = new players()

// player1 .score += 22
// player2 .score = 0
// console.log(player1.score)
// console.log(player2.score)

// player1.pause()
// player2.exit()

//constructor

// class student{

//     constructor(name,age,gpa){
//         this.name = name
//         this.age = age
//         this.gpa = gpa
        
//     }
//     study(){
//         console.log(`${this.name} started studing`)
//     }
// }

// const student1 = new student("nandy",22,10)
// const student2 = new student("bhuvi",22,10)

// console.log(student1.name)
// console.log(student1.age)
// console.log(student1.gpa)

// console.log(student2.name)
// console.log(student2.age)
// console.log(student2.gpa)

// student1.study()

//static keyword

class Car{

    static numberOfCars = 0

    constructor(model){
        this.model = model;
        Car.numberOfCars += 1;
    }
    startrace(){
        console.log("3....2....1.GO")
    }
}
const car1 = new Car("lamborghini");
const car2 = new Car("mustank");
const car3 = new Car("bugatti")

console.log(Car.numberOfCars)
car2.startrace()