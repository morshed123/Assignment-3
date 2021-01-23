 
// 1. kilometerToMeter

function kilometerToMeter (kilometer){   
  var meter = (kilometer*1000);
   return meter;
  
}
var meter = kilometerToMeter(10);
console.log("Convert kilometer to meter =", meter ,"m");  


// 2. budgetCalculator

function budgetCalculator(watch,mobile,laptop) {
   var result = watch + mobile + laptop;
    return result;
}

var result= budgetCalculator(50,100,500);
console.log("Total of the Budget:", result,"Taka");


// 4. megaFriend

function megaFriend(index) {
  var name = index[0];
  for (i = 0; i < index.length; i++) {
    if (index[i].length > name.length) {
      name = index[i];
    }
  }
  return name;
}
var char =["Morshed", "Afsana", "Mimi", "Khanom", "Mister"];
console.log(megaFriend(char));



