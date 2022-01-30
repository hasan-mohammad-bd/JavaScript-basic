// variable
 var time = "10:15pm";
 var  bookPrice = 150;
 var isWhiteColor = false;

//  array

var partners = ["sajid", "mojis", "nijid"]
var elementCount = partners.length;
var najidIndex = partners.indexOf("nojid");
partners.push("jakit")
partners.pop();

// conditionnals

if(bookPrice <120) {
    console.log(("I will buy this book"));
}
else {
    console.log("mana, kichu discount den na, apni na mama!");
}

// while / and for loop


var i = 0; 
while(i <= 17){
    console.log(i);
    i++;
}



for (var i=0; i<=17; i++){

}

function isMoonUp(time) {
    if(time >=19 && time <=5){
        return true;
    }
    return false //can be write without else
}

var moonStatus = isMoonUp(21);
console.log(moonStatus);

//var is old way of declearing a variable.
//let can be changed
//const cant be changed