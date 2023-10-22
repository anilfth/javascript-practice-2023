 // No Parameter 
const greet = () =>{
     console.log("good morning ma'am!");
}
greet(); 
 
 // OR
 const greet1 = () => 'Hello, Sir Good morning'
 console.log(greet1());


 // Single Parameter 
  const square = (x) => x * x;
  console.log(square(4));
   
  // OR
   const square1 = x => {
    console.log(x *x);
   }
   square1(5)
    
    // Multiple Parameter 
     const add = (a, b) =>
     a + b;
     console.log(add(2,4));
      
    //  OR
     const sub = (a, b) => {
        let subs = a - b;
        console.log(subs);
     }
      sub(5,2);

       // function body with multiple statements 
        
       const greetperson = name =>{
        const greeting = "Hello" + name + "!";
        return greeting;
       }
       console.log(greetperson('Anil')); 


       //  output string s 
        
        let senetence = 'Javascript is fun';
        console.log(senetence.trim().length);