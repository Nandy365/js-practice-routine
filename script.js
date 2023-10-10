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

// class Car{

//     static numberOfCars = 0

//     constructor(model){
//         this.model = model;
//         Car.numberOfCars += 1;
//     }
//     startrace(){
//         console.log("3....2....1.GO")
//     }
// }
// const car1 = new Car("lamborghini");
// const car2 = new Car("mustank");
// const car3 = new Car("bugatti")

// console.log(Car.numberOfCars)
// car2.startrace()

//inheritance

// class animal {
//     alive = true;

// eat(){
//     console.log(`now ${this.name} was eating`)
// }
// sleep(){
//     console.log(`now ${this.name} was sleeping`)
// }
// }

// class Rabbit extends animal{


//     name = "rabbit";


//     run(){
//         console.log(`now ${this.name} wsa running`)
//     }
// }

// class Fish extends animal{


//     name = "fish";

//     swim(){
//         console.log(`now ${this.name} wsa swiming`)
//     }
// }

// class Hawk extends animal{

//     name = "hawk";


//     fly(){
//         console.log(`now ${this.name} wsa flying`)
//     }
// }

// const rabbit = new Rabbit();
// const fish = new Fish();
// const hawk = new Hawk();

// console.log(rabbit.alive)

// fish.eat()
// fish.swim()
// console.log(hawk.alive)
// hawk.fly()
// hawk.eat()

// console.log(rabbit.alive)
// rabbit.run()
// rabbit.eat()

//super keyword

// class Animal{

//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
// }

// class Rabbit extends Animal{

//     constructor(name,age,runspeed ){
//         super(name,age)
//         this.runspeed = runspeed;
//     }

// }
// class Fish extends Animal{
//     constructor(name,age,swimspeed){
//         super(name,age)
//         this.swimspeed = swimspeed;
//     }

// }
// class Hawk extends Animal{
//     constructor(name,age,flyspeed){
//         super(name,age)
//         this.flyspeed = flyspeed;
//     }

// }

// const rabbit = new Rabbit("rabbit",2,60);
// const fish = new Fish("fish",1.5,50)
// const hawk = new Hawk("hawk",5,100)

// console.log(fish.name);
// console.log(fish.age);
// console.log(fish.swimspeed);


// console.log(rabbit.name);
// console.log(rabbit.age);
// console.log(rabbit.runspeed);

// console.log(hawk.name);
// console.log(hawk.age);
// console.log(hawk.flyspeed);


//get

// class Car{
//     constructor(power){
//         this._gas = 23
//         this._power = power

//     }
//    get power(){
//         return `${this._power}hp`
//     }
//     get gas(){
//         return `${this._gas} (${this._gas / 50 *100}%)`
//     }
//     set gas(value){
//         if(value > 50){
//         value = 50
//         }
//         else if(value < 0){
//             value = 0
//         }
//         this._gas=value
//     }
// }

// let car = new Car (4000)

// car.gas = -76;

// console.log(car.power)
// console.log(car.gas)

//objects as arguments

// class Car {

// constructor(name,year,color){
//     this.name=name
//     this.year=year
//     this.color=color
// }
// }
// let car1 =new  Car ("lamborghini",2026,"multicolor")
// let car2 =new Car ("G-vagun",2026,"white")
// let car3 =new Car ("Range rover",2026,"matbalck")

// colorChange(car2, "matblack")
// displayCars(car2)

// function displayCars(car){
// console.log(car.name)
// console.log(car.year)
// console.log(car.color)
// }

// function colorChange(car,color){
//     car.color = color
// }
//array of objects

// class Car {

//     constructor(name,year,color){
//         this.name=name
//         this.year=year
//         this.color=color
//     }
//     drive(){
//         console.log(`today i am driving ${this.name}`)
//     }
//     }
//     let car1 =new  Car ("lamborghini",2026,"multicolor")
//     let car2 =new Car ("G-vagun",2026,"white")
//     let car3 =new Car ("Range rover",2026,"matbalck")

//     let cars = [car1, car2,car3]


//     // console.log(cars [0].name)
//     // console.log(cars [1].name)
//     // console.log(cars [2].name)
//     // cars[0].drive()
//     // cars[1].drive()
//     // cars[2].drive()
//     racemood(cars);

//     function racemood(cars){
//         for(const car of cars){
//             car.drive()
//         }
//     }

//anonynous objects

// class Cards {
//     constructor(value, suit) {
//         this.value = value
//         this.suit = suit
//     }
// }




// let cards = [new Cards("A", "king"), new Cards("b", "king"), new Cards("c", "king"), new Cards("e", "king"), new Cards("f", "king"), new Cards("g", "king"), new Cards("h", "king")]

// cards.forEach(card => console.log(`${card.value} ${card.suit}`))


//error 


//can`t open a file
//  lose connection 
//  user types  incorrect input 
//  type error 


// try{
//     let x = window.prompt("enter a number #")
//     x = Number(x)

//     if (isNaN(x)) throw "that wasn`t number plz enter a number"
//     if (x == "") throw "thar is no number"
//     console.log(`${x} is a number`)
// }
// catch(error){
// console.log(error)
// }
// finally{
//     console.log("this always executes")
// }


//set Timeout()
// let item ="vip range rover"
// let price = `50000000 k+tax`

// let timer1 = setTimeout(firstMessage,6000 ,item,price)
// let timer2 = setTimeout(secuondMessage,9000)
// let timer3 = setTimeout(thirdMessage,9000)

// function firstMessage(item,price){
//     alert(`buy this ${item} for ${price}`)
// }
// function secuondMessage(){
//     alert(`this car for only vips`)
// }
// function thirdMessage(){
//     alert(`only 10 cars left buy it now`)
// }
// document.getElementById("mybutton").onclick = function(){
//     clearTimeout(timer1)
//     clearTimeout(timer2)
//     clearTimeout(timer3)
//     alert('thanks for buning this')
// }

//setInterval

// let count = 0;
// let max =window.prompt("enter the number")
// max = Number(max)

// let mytimer = setInterval(countUp,1000);

// function countUp(){
//     count += 1
//     console.log(count)
//     if(count >= max){
//         clearInterval(mytimer)
//     }
// }

//date objects = date and time 


// let date = new Date();
// let date = new Date(2001,0,2, 9, 3, 4, 6);
// let date = new Date("january 1, 2023 00:00:00");


// let year = date.getFullYear();
// let dayfomonth = date.getMonth();
// let dayofweek = date.getDay();
// let month = date.getMonth();
// let hours = date.getHours();
// let minutis = date.getMinutes();
// let sec = date.getSeconds();
// let ms = date.getMilliseconds();

// date.setFullYear(2026)
// date.setMonth(4);
// date.setDate(1);
// date.setHours(1);
// date.setMinutes(43);
// date.setSeconds(55);
// date.getMilliseconds(77)
// date = date.toLocaleString()



// function formatDate(date){
//     let day =date.getDate()
//     let month = date.getMonth()+2;
//     let year = date.getFullYear()
//     return `${day}/${month}/${year}`
// }
// function formatTime(date){
//     let hours = date.getHours();
//     let minutis = date.getMinutes();
//     let seconds = date.getSeconds();
//     let amORpm = hours >= 12 ? "pm" : "am"

//     hours = (hours %  12) || 12;

//     return `${hours}/${minutis}/${seconds}/${amORpm}`
// }

// document.getElementById("myLable").innerHTML = formatTime(date);


//clock program 

// const myLable = document.getElementById("myLable")

// update();

// setInterval(update,1000)

// function update(){

//     let date = new Date();
//     myLable.innerHTML = formateTime(date)

//     function formateTime(date){
//         let hours = date.getHours();
//         let minutes = date.getMinutes();
//         let secouds = date.getSeconds();
//         let amorpm = hours >= 12 ? "pm" : "am"

//         hours = (hours % 12) || 12;

//         hours = formatzeroes(hours)
//         minutes = formatzeroes(minutes)
//         secouds = formatzeroes(secouds)

//         return `${hours}:${minutes}:${secouds} ${amorpm}`
//     }
//     function formatzeroes(time){
//         time = time.toString()
//         return time.length < 2 ? "0" +time : time;
//     }

// }


// asynchronous 
// console.log("nandy")

// setTimeout(() => console.log("hello guys "),9000)

//console.time method

// console.time("the response")

// setTimeout(()=> console.log("time line") ,5000)

// console.timeEnd("the response")


//promise 

// const promise = new Promise((resolve,reject) =>{

//     let fileloaded = false;

//     if(fileloaded){
//         resolve("this file was loaded")
//     }
//     else{
//         reject("this file not loaded")
//     }
// })


// promise.then(value => console.log(value))
// .catch(error => console.log(error))


// const wait = time => new Promise ( resolve =>{
//     setTimeout(resolve, time)
// })

// wait(5000) .then(() => console.log("thans for waiting") )

//async make a function return a promise

// async function Loadfile(){


//     let fileloaded = true;

//     if(fileloaded){

//         return "file was loaded"

//     }

//     else{

//         throw "file not loaded"

//     }
// }

// async function process(){

//     try{
//     let message = await Loadfile()
// console.log(message)
//     }
//     catch(error){
//         console.log(error)
//     }
// }
// process()
// import{PI,getCircumference,getArea} from "./math_util.js"
// import *as all from "./math_util.js"

// console.log(all.PI)
// let circumference =all.getCircumference(44)

// console.log(circumference)

// let area =all.getArea(44)

// console.log(area)

//document.title ="nandy"
//document.location = "http://www.google.com"
// document.body.style.backgroundColor = "yellow";
//document.getElementById("myLable").innerHTML = "rest in peace ramesh good bye my friend " 


// let element = document.getElementById("mycar")

// element.style.backgroundColor="lightblue"

// let fruits = document.getElementsByName("fruits")

// fruits.forEach(fruit => {
//     if(fruit.checked){
//         console.log(fruit.value)
//     }
// })

// let vegetables = document.getElementsByTagName("li")
// vegetables[0].style.backgroundColor="orange"
// vegetables[1].style.backgroundColor="yellow"
// vegetables[2].style.backgroundColor="pink"

// let desserts = document.getElementsByClassName("desserts")

// desserts[0].style.backgroundColor="pink"
// desserts[1].style.backgroundColor="brown"
// desserts[2].style.backgroundColor="purple"

// let element = document.querySelector("[for]")

// element.style.backgroundColor="red"


// let element = document.querySelectorAll("li")
// element.forEach(element => {
//     element.style.background="red"
// }


// let element = document.querySelector("#vegetable");
// let parent= element.parentElement
// parent.style.backgroundColor="green"

// let element = document.querySelector("#vegetable");
// let sibling= element.nextElementSibling
// sibling.style.backgroundColor="green"

// let element = document.querySelector("#vegetable");
// let children = Array.from(element.children)
// children.forEach(child => child.style.backgroundColor="green")

//parentElement
//nextElementSibling

//add/change HTML elements

// const tagname =document.childElementCount("h1")
// tagname.innerHTML="hello guys"
// document.body.append(tagname)

// const mylist = document.querySelector("#fruit")
// const listitem = document.createElement("li")
// //listitem.textContent ="mango"
// listitem.textContent ="lemon"
// //mylist.append(listitem) //add item on last
// //mylist.prepend(listitem) // add item on front

// mylist.insertBefore(listitem,mylist.getElementsByTagName("li")[3])

//add/change CSS properties

// const title = document.getElementById("myLable")

// title.style.backgroundColor ="black"
// title.style.color="rgb(22,333,545)"
// title.style.fontFamily="consolas"
// title.style.textAlign="center"
// title.style.border = "2px solid"
// title.style.display= "block"

//events

// const element = document.getElementById("mybutton")
// element.onclick = dosomething;

// const element = document.body
// element.onload =dosomething

// const element = document.getElementById("mytext")

// element.onchange = dosomething;
// const element = document.getElementById("mydiv")
// element.onmouseover = dosomething;
// element.onmouseout =donothing

// const element = document.getElementById("mydiv")
// element.onmousedown = dosomething;
// element.onmouseup =donothing



// function dosomething(){
//     element.style.backgroundColor="green"
// }
// function donothing(){
//     element.style.backgroundColor="cyan"
// }

//.addEventListener(event,function, useCapture)
 
// const innerDiv = document.getElementById("innerDiv")

// innerDiv.addEventListener("mouseover",changeyellow)
// innerDiv.addEventListener("mouseout",changered)

// function changeyellow(){

//     innerDiv.style.backgroundColor = "yellow"
// }
// function changered(){

//     innerDiv.style.backgroundColor = "red"
// }

const innerDiv = document.getElementById("innerDiv")
const outerDiv = document.getElementById("outerDiv")

innerDiv.addEventListener("click",changered)
outerDiv.addEventListener("click",changered, true)


function changered(){ 
    alert(`you selected ${this.id}`)
    this.style.backgroundColor="red"
}
