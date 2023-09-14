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

                      // LOGICAL Notification(!)
                      //  IT IS CONVERT TRUE TO FALSE AND FALSE T9O  TRUE 
       var  a  = 10
        var b = 20 
         console .log(! ((a > b) || (b > a)) )


//  
// STRING CANCATINATION 
  
 console.log("hello world")
  console.log("hello " + "World")
   var myName = " Anil"
    console.log(myName + " Nishad")
     
    //  EXPONENTIATION
     
    console.log(3**3)  // base ^ exponent 
     console.log(9**2);
      console.log( 100**-1)
      //  write a program to swap  a two number 
       var a = 10
        var b = 20 
        var c = b; // c =20
        b = a // b = 10
        a = c // a =20
         console.log("the va,ue of a is " + a);
          console.log("the value of b is " + b );

          //  write a program swap two number withoou using third variable 

           var a = 5 
            var b = 10
             a = a + b // a =15 
              b = a - b  // b = 5 
               a = a - b // a 10 
                console.log( "the value of a " + a)
                 console.log( "the value of the b is " + b)
                  
                //  write a  program to check a yera is a leap year is not 

      var year = 2020;
       if ( year % 4 === 0){
         if (year % 100 === 0 ){
          if(year % 400 === 0 ){
             console.log("the year is" + year + "is a leap year");
          }else {
             console.log("the year is" + year + "is not leap year")
             }
          }
           else{
            console.log("the year is" + year + "is a  yaer is leap year")
           }
         }
        else{
          console.log("the year is" + year + " is not a a leap year")
        }
                


          // TERNARY OPEARTOR 
    // SYNTAX ==>   VARAIBLENAME = (CONDITION)? VALUE1:VALUE2
       
     var age = 17
     console.log ((age >= 18)? "you can vote":"you can't vote")

      // using switch statement find the are a of the circle tringle and recatnagel 
       
      var area  = "tringle"
      var pi=3.14,r=4, l=3, b=4;
      switch(area){
        case 'circle':
          console.log("the area of circle:" + (pi*r**2))
          break;
          case 'tringle':
            console.log("the area of the tringle:" + (l*b)/2)
            break
            case 'rectangle':
              console.log("the are of the recatngle:" + (l*b))
              break
              default:
                console.log("please enter a valid data")
      }
      //  while loop
//  ==> first check condition then print the output
       var num = 0;
       // block scope 
         while( num <= 10){
          console.log(num);
          num++
         }

          // do-while loop
          //  this loop first print the output then check  condition
          var a = 100;
          do{
            console.log(a)
            a++;
          }
          while(a <=10) 

         
          // function ?
         


 function sum()  // this called function definitaion
 {
  var a = 10;
  var b = 10
  var total = a + b;
   console.log(total)
 }

  sum();  // ths is called function  calling

  















