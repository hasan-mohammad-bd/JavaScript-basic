//max number have to find among the variable.
const business = 450;
const minister = 550;
const army = 600;

//comparison/normal 
 if (business > minister){
     console.log("Business person er pola is bigger");
 }
 else { 
     console.log("Ministry er ploa is bigger");
 }

 //comparison with three condition.

 if(business > minister && business > army ){
     console.log("business is bogger");
 }
 else if (minister > business && minister > army)
    console.log("misnister is bigger");

else {
    console.log("army is bigger");//dont need to write condition, because if above two is false, this third will be right;
}

//with math

var max = Math.max(business, minister, army);
console.log("the largest is", max); //largest value is be shown.

//with function
function findLargest(first, second) {
    if(first > second){
        return first;
    }
    else{
        return second;
    }
    
}

const larger = findLargest(346,787);
console.log(larger);

//homework 
//creat a function that take threw number as input parameter amd returns you the largest number if three.
// write a function to find the smallest of three numbers.