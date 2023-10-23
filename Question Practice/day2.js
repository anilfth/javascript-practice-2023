// How to add and removes objects dynamically in javascript 
//   four wayto add and removes object in javascript 

 const obj = {
    name: 'Anil',
    age: '24'
 }
//   using dot notation
  obj.Job = 'Software developer'; 
 console.log(obj);

 // using bracket notation 
  const obj1 = {
    name: 'Anubhav',
    age: 24,
  }
  obj1['job'] = 'coder';
  obj1['salary'] = '25k';
  obj1['location'] = 'pune'
  console.log(obj1)


  // using Object.assign() 
  const obj2 = {
    name: 'Ayush',
    age: 22
  };
  const newObj = Object.assign({}, obj2, {job:'coder'}, {salary:'255k'},{location:'kanpur'});
  console.log(newObj);