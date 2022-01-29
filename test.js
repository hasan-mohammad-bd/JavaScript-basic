var roastGiven = 0;

while (roastGiven < 7) {
    console.log("roast den");
    roastGiven++;
    console.log(roastGiven);
}

var hello = 0;

while (hello <= 20) {
    console.log(hello);
    hello = hello + 2;
}

for (i = 0; i < 10; i++) {
    console.log(i);
}

// even number
for (i = 0; i < 10; i = i + 2){
    console.log(i);
}

for (var i = 1; i <= 10; i = i + 2){
    console.log(i);
}

var number1 = [38, 93, 20, 39, 39, 302, 209]
for (var i= 0; i < number1.length; i++){
    var element = number1[i]
    console.log(element)
}