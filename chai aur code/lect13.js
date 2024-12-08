//Dates & Time :-------------------------------





//NOTE :- a important leraning about whole js is that click "ctrl+space"  while writing methods it suggest you fuctions to use its make easy to code




//NOTE :- in javascript 'months' zero se start hote hai means 0 -> Jan, 11 -> Dec.. (note :- jb hm array ke form me likhte hain tbhi aisa hota hai otherwise normally chlta hai. )






// NOTE:-  In mdn its noted that in future the date will be an object hence isko use kr pana aasan ho jayega using methods jaise "Math" ko use kr paa rhe the.......



let myDate = new Date();
//console.log(myDate);             // output is not readable smjh me hi nhi ayega 

console.log(myDate.toString());         // its makes little readable output.
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toJSON());
console.log(myDate.toISOString());




/*
//important question of interview
 
//ye pucha jata hai ki date  kis type ka datatype hai the answer is "object"
console.log(typeof myDate);                   // output is "object"
*/

/*
let mynewDate = new Date(2023,0,22)     // here 0 means jan.........

console.log(mynewDate.toDateString());         // output:- Sun Jan 22 2023
*/
/*
let mynewDate = new Date(2023,0,23 ,5,3)         //learn only formats...
 
console.log(mynewDate.toLocaleString());        
*/
/*
let mynewDate = new Date("2003-5-27")

console.log(mynewDate.toLocaleString())
*/

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Time Stamp

//let myTimeStamp = Date.now()
//console.log(myTimeStamp);               // answer comes in milliseconds calculated from 1/1/1970

//this thing use when u make a webpage in which a room booking or ticket booking is done then we compare the time in milliseconds
// it is important that always compare the time in milliseconds.....

//console.log(Date.now());           // ye output dega in milliseconds between 1/1/1970 to today's date

// what iff we want output in seconds

//console.log(Date.now()/1000);            // isme output seconds me to aayega but decimal me hoga

//so for removing the decimal use Math.floor() methods

//console.log(Math.floor(Date.now()/1000));

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// again comes on date (little more discussion)

let newDate = new Date()
//console.log(newDate.getMonth());            // output:- gives month of current time in which u code ( note that month start from 0 so it gives 1 value less)

console.log(newDate.getDay())                 //output:- in number value // gives day means monday tuesday ..........note that in javascript date start from monday (hence 1-> mon,2-> tuesday)




