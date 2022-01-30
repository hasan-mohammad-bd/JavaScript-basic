//break

var i = 0;
while (i < 15){
    console.log(i);
    if (i == 5) { //the loop will stop if the value is equal to 5
        break;
    }
    i++;
}

for(var i = 0; i < 20; i++) {
    console.log(i);
    if (i == 8) {
        break; //the loop will stop if the value is equal to 8
    }
}

var numbers = [47, 33, 34, 56, 91, 66, 35, 522, 100]
for(var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    console.log(number);
    if (number > 90) { //the loop will close if the value is more than 90.
        break;
    }
}

//continue

for(var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 90) {
        continue; //here above value will be "skip" and continue for rest of the value
    }
    console.log(number);    
}

var phones = ["iphone", "shomi", "lg", "samsung", "nokia"]

//to check any item in the array
if(phones.indexOf("lgs") == -1){
    console.log("lgs is missing");
}

if(phones.indexOf("lg") != -1){
    console.log("lg is available");
}

function addNumber(number1, number2) {
    return "Result is " + number1 + number2;
   }
   
   var result = addNumber(5, 4);
   console.log(typeof result);

   function getReminder(number1, number2) {
    number1 % number2;
  }
  
  const reminder = getReminder(12, 2);
  
  console.log(reminder);

  