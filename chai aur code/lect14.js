// arrays in js

// isme bhi pyhton ke jaisa hr trh ka elements ho skta hai mtlb ek hi array me boolean number string sb ho skta hai..




/*
// way to defining the array in js:--

myArr = [0,1,2,3,4,5]

//or

myArr2 = ["shaktiman",2,"spiderman"]

//or 

myArr3 = new Array(1,2,3,4)

console.log(myArr3[1]);  // output:- 2  (isme bhi indexing zero se start hoti hai..)
*/

// javascript arrays are resizable.   ******

/*these lines are from mdn :
JavaScript array-copy operations create shallow copies. 
(All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
         

in above lines the meaning of "shallow copies" & "deep copies" have very important meanings.

 shallow copy:- A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) 
 as those of the source object from which the copy was made. As a result, when you change either the source or the copy,
  you may also cause the other object to change too.


deep copy:-   A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values)
 as those of the source object from which the copy was made. As a result, when you change either the source or the copy,
  you can be assured you're not causing the other object to change too
*/





// ARRAY METHODS:---

const myArr = [0,1,2,3,4,5]
// 1.) push:-                             // new elements ko array me push krta hai  
 
//myArr.push(8)
//console.log(myArr);                       // output:- [0,1,2,3,4,5,8]
  /*
//2.) pop:-                               // isme koi attributes nhi dena hota hai ye simple last element ko array se pop kr deta hai
console.log(myArr);
console.log(myArr.pop());                            // output :- 8 ( means 8 pop ho chuka hai array se means ab arr
console.log(myArr);                
console.log(myArr.pop());
console.log(myArr);
*/



/*
myArr.unshift(9)                           // ye starting index se element ko add kr deta hai
console.log(myArr);                             // output:- [9,0,1,2,3,4,5]
*/



/*
myArr.shift()                // isme koi arguments nhi dete   & ye aage se ek element of remove kr deta hai arrays se

console.log(myArr)
*/



/*
console.log(myArr.includes(9))             // ye btata hai ki kya ye element include hai ya nhi array me 
                                           // it always gives answer in boolean (true or false)

*/



/*
console.log(myArr.indexOf(5));                // gives index of 5 
console.log(myArr.indexOf(9));                // gives -1 bcoz ye element array me present hi nhi hai
*/





/*
//"join" :- ye arrays ke elements ko bind and string me convert kr deta hai
 
const newArr = myArr.join()

console.log(newArr);                    // output:- 0,1,2,3,4,5
console.log(typeof newArr);             // string
*/











/*
//VVVVVIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII......................................

// concept about'slice' and 'splice'




// const myn1 = myArr.slice(1,3)          // 1,3 is index in which '3' index wala element include nhi hoga
// console.log(myn1);                     // slice kya kiya ki  index 1,2, wala element ko print krwa diya ''''' output:- [1,2]


// const myn2 = myArr.splice(1,3)          // 1,3 is index in which '3' index wala element include hoga
// console.log(myn2);                     // splice kya kiya 3rd element ke sath print hua              '''''''''''''output:-[1,2,3]

// concept :- agar interview puchega ki difference beetween slice and splice then bs itna nhi bolna hai ki last index wala include hota hai aur ek me nhi hota hai

// then aur kya hota hai

console.log('original array:-  ' , myArr);


const myn1 = myArr.slice(1,3)         
console.log(myn1);                 
console.log('orginal arr after usinng slice:-    ', myArr);     //output:- [0,1,2,3,4,5]


const myn2 = myArr.splice(1,3)    
console.log(myn2);   
console.log('orginal arr after usinng splice:-    ', myArr);          // output:- [0,4,5]


//
 */
