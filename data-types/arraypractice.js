 // array.prototype.indexOf()
var myFriendnames = ['vindo', 'nikhil', 'vikky', 'monkey','vikky'];
console.log(myFriendnames.indexOf("vikky", 6));
 
 // array.prototype.lastindexOf()
  var myFriendNames = ['anil','vikky','nikhil','vikky','vindo'];
  console.log(myFriendNames.lastIndexOf('vikky', 0));

   // array.prototype.includes()
    var myFriendNames1 = ['anil','vikky','nikhil','vikky','vindo'];
    console.log(myFriendNames1.includes('anil', 4));

     // array.prototype.find()
      
      const prices = [200, 250,300, 350, 400, 450, 500];
      const findElem = prices.find((currval) => {
        return currval < 400;
      })
       console.log(findElem);

        // array.prototype.findIndex()
         
         console.log(prices.findIndex((currVal)=> currVal < 400));

          // array.prototype.filter()
          const newPriceTag = prices.filter((elem, index) =>{
            return elem < 400 ;
          }) 
          console.log(newPriceTag)