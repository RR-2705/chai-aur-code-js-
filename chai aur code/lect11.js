// in this lect we study about "strings" 
/*
const name = "Raj"
const marks = 90

console.log(name + marks +"value");                     // output:- Raj90value

//but this is little old syntax 
*/




/*
// so the modern syntax is using backticks(``)  it locates in keyboard at before 1 

console.log(`Hello my name is ${name} and my marks is ${marks} `);        // this is a modern syntax but it doesnot means that the old syntax is not used or incorrect


// in the above modern syntax use "${ }"  for  putting the variable's name which have any value 

*/





//another way to define the string is below:
//************ 
const gameName = new String ('rajnish')   // using concept of object 

//console.log(gameName);
//const name = "Raj"              // isme bhi khin na khin backend me above wala concept hi chlta hai 


//*******************
/* how do access each letter in string :-

imp concept is that string ka keys array ke trh store nhi hota hai mtlb index ke form me store nhi hota hai then !!!!!!!!!!!!!!!

store 0123 ke hi form me hoga but in (key value)pairs
*/

// in sb methods se original value me koi change nhi hoga 
//console.log(gameName[0]);                // output :- r

//console.log(gameName.length);            // output:- 7

//console.log(gameName.toUpperCase);       // output:- RAJNISH

//console.log(gameName.charAt(2));        // gives that at key 2 what value will be stored   // output:- j

//console.log(gameName.indexOf('j'));        // isme ek chiz dhyan rkhna hai ki jo bhi keyword dale method me usko single or double inverted comma me dale     // output :- 2                          

/*
//slicing the string 

//const newString = gameName.substring(0,4)      // isme bhi last key(index in python or c++) wale value ko nhi lete hai

//console.log(newString);                  // output :- rajn


//const anotherString = gameName.slice(-7,4)              // isme hmlog negative values bhi daal skte hain mtlb reverse value wala python wala yaad aaya
//-7,4 me kya hua ki 1st letter liye negative indexing se and 2nd wala normal indexing

//console.log(anotherString);                          // output :- rajn
*/

/*
//************concept :- kbhi kbhi kya hota hai ki hm user se input lete hain as a string then user knowingly or unknowingly extra space daal deta hai jo ki nhi cahiye hota hai

const stringOne = "       hitesh       ";

console.log(stringOne);                       // output with spaces 
console.log(stringOne.trim());               // ye kya krega ki extra spaces jo hai usko hta dega   output without spaces.........

*/




/*
//replacing some char or group of char from string

const url = "https://raj.com/raj%20ranjan"

a = url.replace("%20", "-")

console.log(a);                              //output:-  https://raj.com/raj-ranjan
*/


 
//convert string into array using "split()" function

// split function yaa kisi bhi function ko pdhna hai tb search on google as:- split in string mdn "NOTE:- mdn is important in search" 

let name =  "raj-kumar-ranjan"

console.log(name.split('-'));              //ye kya krga jahan jahan'-' aaya hoga wohan ke split kr dega in form of arrays 
                                        //    output :- ['raj','kumar','ranjan']


//THANKS ..................................................