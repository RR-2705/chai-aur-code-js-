const marvel_heros = ["thor", "Ironman", "Spiderman"]
const dc_heros = [ "shaktiman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);     // isme output me  dc_heros pura ek array hi aa jayega

// o/p :-    [ 'thor', 'Ironman', 'Spiderman', [ 'shaktiman', 'flash', 'batman' ] ]

// console.log(marvel_heros[3][1]);     // output :- flash 

 const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);     // output :- [ 'thor', 'Ironman', 'Spiderman', 'shaktiman', 'flash', 'batman' ]

//concat me issue hai ki ek hi value ko add kr skte hai 


//sp we use spread operator 

const all_new_heros = [...marvel_heros, ...dc_heros]  // isme comma lga lga kr aur add krte jaa skte hai 

//console.log(all_new_heros);  //output :- [ 'thor', 'Ironman', 'Spiderman', 'shaktiman', 'flash', 'batman' ] 

//isme sb same hi hua bs difference is isme kitna bhi add kr skte hai comma lga lga kr
// sare elements ko spread krke ek new array bna diya 


// kisi bhi chiz ko array bnane ki ninza technique see below 

 // console.log(Array.from("rajnish"))
 // output :- ['r', 'a', 'j', 'n', 'i', 's','h']

 // so array.from se array me convert kiya jaa skta hai

// agar kch aisa chiz pass kra de jisko array me convert nhi kr pata hai then it returns empty array



 // ek aur method hai array me convert krne ka 
 
 let score1 = 100;
 let score2 = 200;
 let score3 = 300;

 console.log(Array.of (score1,score2,score3));     //output:- [ 100, 200, 300 ]
 
 // thnku //   
