
        let bioData = {
            myName: 'Anil',
            myage: 23,
            getdata: function(){
                console.log(`my name is ${bioData.myName} and my age is ${bioData.myage}`);
            }
        }
        bioData.getdata();
   // 2nd ways no need to write function as well after ES6
   let bioData1 = {
    myName : 'Anubhav',
    myAge : 23,
    getData(){
        console.log(`my name is ${bioData1.myName} and my age is ${bioData1.myAge}`);
    }
   }
   bioData1.getData();

   // what if we wnat objects as a value inside an object.
    let bioData2 = {
        myName : {
            realName: "Alisha",
            surName: 'Khan',

        },
        myAge1: '45',
        getData() {
            console.log(`my name ${bioData2.myName.realName} and age is ${bioData2.myAge1}`);

        }
    }
    console.log(bioData2.myName.surName);
    bioData2.getData();

  