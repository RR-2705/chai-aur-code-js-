// in this lecture we studied about stack and heap memory 

// primitve data types are stored using "stack memory" and non primitive data types stored in "heap memory"






/*
// -->in stack memory the "copy of data" (it means if data will be changed by other variable then the original data will be safe) will be shared iff required to other variables

let myName = "Rajnish";

let  anotherName = myName;                 // anotherName stored the value which store in myName

anotherName = "raj";                        // new value assigned to anotherName ****** but in myName no value will be changes bcoz of stack memory used in storing the primitive data type

console.log(myName);
console.log(anotherName);


*/









//*******************************************************************************************************************************************************
// --> in heap memory the "reference of data"(it means that if data will change by another variable then the change is actual happens in original data )
 //will be shared among other variables according to uses 

let userOne = {
             email : "abcd@gmail.com",
             name : "raj",
}                                                              // assigned email and name in userOne variable

let userTwo = userOne                                          //  assigned all value of useOne in userTwo ******but it non-primitive datatype so it get the refernce of original data


userTwo.email = "xyz@gmail.com"                                 //(.) using dot you can access your object's elements 
                                                               // assignining new value in email in userTwo (which have access of whole data of userOne so it directly makes changes in userOne)

console.log(userOne);                                  // chanaged email will be the output namw will be same

console.log(userTwo);                                   // chanaged email will be the output namw will be same

