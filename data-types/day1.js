// there a six primiteve data types in javascript 
//  boolean  ==> typeofinstance === "boolean"
 
var myName = "anil"
console.log(myName)
//  types of variable
console.log(typeof(myName))

var myAge = 26
console.log(myAge)
//  types od variable
console.log(typeof(myAge))
var myLpu = true

console.log(myLpu)
//  types of variable 
console.log(typeof(myLpu))


//  challenges time 2 
  ///   1) 10 + "20"
  console.log(10 + "20") // it is called concatination   bcz here  we are adding  number and string so output will be 1020
  
   // 2* 9 - "5"
 console.log(9 - "5") // o/p = 4 its bug
//   3*  "java" + "script" 
 console.log("java"  + "script") /// adding a two strings
   
//   4*  "" + "" 
 console.log(" "  + " ")

 // 5* " " + 0
 console.log( " " + 0)
  
//    6*  "Anl" - "LPU"
console.log("Anil" - "Lpu") // nan -> not a number
// 7*  true + true
 console.log (true + true)
 console.log(true + false)
 console.log(false + true)
 console.log(false - false) 
  
//   NaN practice

// NaN === NaN 
console.log(NaN === NaN)

console.log(Number.NaN === NaN)
console.log(isNaN(NaN))
console.log (Number.isNaN(NaN))
console.log(Number.isNaN(NaN))
 

 var num = 15
 var newNum = num++ + 5
 console.log(num)
 console.log(newNum)

  var num = 15
  var newNum = --num  - 5
  console.log(num)
  console.log(newNum)

   
    // LOGICAL OPERATOR 

// LOGICAL AND OPERATOR (&&)

//  IF THE BOTH CONDITION ARE TRU THEN IT WILL GIVE A TRUE OUTPUT 

 var a = 30
 var b = 20
console.log( (a>b)  && (b>a) ) // here first condition i true and second condtion is false so ouytput will be false  
  console.log(a>b && b < a)   // here both condition are true

                                // LOGIAL OR (||)
  //  IF ONLY ONE CONDITION IS TRUE THEN OUTPUT WILL BE TRUE 
  
    var a = 20
    var b = 30 
    console.log(a > b || b > a) //  here first condition is false and second consition is true  so o/p will be true 
    console.log( (a > b) || (b > a) && (a > b));  //1st conditon is false 2nd is true so o/p true because of we are using or operator and second condition is false so ouptput wwill be false because w are using and operator 


