// in this lecture we study abot functions


/*
function addTwoNUmbers(num1,num2){            // here num1 and num2 is called parameters.
    console.log(num1+num2);
    
}

// addTwoNUmbers();                          // output:- nhi aayega isse bcoz arguments me kch nhi dale
 addTwoNUmbers(3,5)                        // output :- 8
*/
/*
function addTwoNUmbers(num1,num2){
    console.log(num1+num2);
}

const result = addTwoNUmbers(3,8)          // ab iss result ko to hm kisi variable me bhi store kr hi skte hain 

console.log("result: ", result);                 // iska output undefined aayega. bcoz jb tk function kch "return" nhi krega tb tk wo koi value nhi add kr skta hai kisi constant me .

*/






/*
// so the actual code is this
function addTwoNUmbers(num1,num2){
    return(num1+num2);
}
const result = addTwoNUmbers(3,8) 
console.log("result: ", result);       // output :- result : 11 

*/



/*
// one more thing to learn in function 
function addTwoNUmbers(num1,num2){
    console.log("rajnish");            // iska output aa jayega bcoz ye return ke phle aaya hai..
    return num1+num2;
    console.log("rajnish");          // ye kch output nhi de payega bcoz agar ek baar function me return statement aa jata hai then uske niche ka code ka koi mtlb nhi rh jata
    
}
const result = addTwoNUmbers(3,8) 
console.log("result: ", result);  
*/
/*
function loginUSer (username){
    return `${username} just logged in.` 
}

loginUSer("raj") 
  // kya lga ye code kch output de payega !!!!! answer is nhi bcoz return to kr diya function chl bhi gya call bhi ho gya 
//   but code se output nikalne ke liye to console.log ka use krte hai joki kiya hi nhi ho gya na mistake abhi upr wale code me smjhaya tha

*/

function loginUSer (username){
    return `${username} just logged in.` 
}
 // ya to isko direct console.log krwa do yaa kisi variable me store krwa kr 
 console.log(loginUSer("raj") )       // output:-  raj just lohhed in.





///////////thanku/////////////////