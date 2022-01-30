//if you have to use a calculation over and over, it is easy to write a function

//inch to feet

function inchToFoot(inches) {
    var feet = inches/12;
    return feet;
}

var myinches = 132;
var feet = inchToFoot(myinches);
console.log(feet);

var dadiInches = 144;
var feet = inchToFoot(dadiInches)
console.log(feet);

var naniInhes = 156;
var feet = inchToFoot(dadiInches)

var nanaIches = 168;
var feet = inchToFoot(dadiInches)


//mile to km
function mileToKilometer(miles) {
    var km = miles * 1.609
    return km;
    
}

var marathon = mileToKilometer(26.2);
console.log("marathon in km:",marathon);