function sum (x, y, z){
    return x+y+z;
}
const numbers =[1,2,3];
console.log(sum(...numbers));
console.log(sum.apply(null, numbers));

 const colors = ['red', 'green', 'blue', 'black','pink'];
 const myColors = ['red', 'green', 'blue', 'black', 'pink', 'yellow','white'];
 const myFavColors = [...colors, 'yelow', 'white'];
 console.log(myFavColors);