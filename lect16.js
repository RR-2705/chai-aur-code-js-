// objects in js
// object bnane ke do tarike hai ek using constructor and 2nd normal
// using constructor ye (singleton) bna deta hai
/*
    "Object.create"  
ye hai using constructor and isme singleton bnta hai
*/


// object literals (dusra method to making objects)


//const jsUser = {}
// ye hua normal method for creating object

// objects me data ko (key: value) ke trh store krte hai

const jsUser = {
    name : "raj",   // values me kch bhi  de skte hain
    "full name" : "rajnish ranjan",
    age : 18,
    location : "patna",
    email : "raj123@gmail.com",
    lastlogindays : ["monday","sunday"]

}


// aksar log ek hi trika jante hai object se data nikalwane ka 

// console.log(jsUser.name);   // output :- raj



/*
//here's a one more method 
// console.log(jsUser["name"]);    // output :- raj


console.log(jsUser["full name"]);  // output :- rajnish ranjan

// jis type se "full name" key me store this is the only way to find the values of key 

// ye ek aur chiz me use hota hai jb symbol datatype ka use hota hai at the place of key
*/


// how to change the values of object 

//jsUser.email = "raj@chatgpt.com"
//console.log(jsUser);  // isme email change hokr print hoga.


/*
// hum object ko aisa bhi bna skte hai ki uska value change hi no paye baad me
// use keyword freeze example is given below

Object.freeze(jsUser)    // () isme us object ka name likhte hain jiska value freeze krna hai 

jsUser.email = "prag123@jldafh.com"  // ab ye value change nhi hopayega bcoz freeze kr chuke hai object ko

console.log(jsUser);
*/


jsUser.greeting = function(){
    console.log("hello js user");
    
}

jsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);     // "this" ke bare me baad me acha se pdhna hai
    
    
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());






