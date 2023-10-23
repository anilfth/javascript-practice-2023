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
        
        let senetence = 'javascript is fun';
        console.log(senetence.trim().length);
         
         
        // to convert toLowerCase--> convert all character in a string to lowercase 
         console.log(senetence.toLowerCase());

         // to convert toUperCase --> conert all character in a string to toUpperCase
          console.log(senetence.toUpperCase());


           // charAt(index) --> returns the character at the specified index in the string
           console.log(senetence.charAt(11));
             
            // substring --> returns a portion of the string starting from startindex to endindex
            console.log(senetence.substring(0,6));
             
            // indexOf 
             console.log(senetence.indexOf('n'));
             console.log(senetence.indexOf('fun'));
             console.log(senetence.indexOf('javascript'));
              
            //   split() --> splits the string into an array of the substring based on the separator 
             console.log(senetence.split('java', 'fun'));
              console.log(senetence.split())
              console.log(senetence.split('javascript'));

            //   trim()--> removes leading and trailing white spaces from the string
              let name = " Lovely professionakl university is  a india largest univesity "
               console.log(name.trim());