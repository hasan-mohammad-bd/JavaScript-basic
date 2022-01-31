var hello = 0.3334433;
var hi = 0.33344;

var sum = hello + hi;
console.log(parseFloat(sum.toFixed(2)));

let total = [84,39,39,48,37,83,89];
console.log(total.indexOf(39));
console.log(total[4]);
total[0]="hello";
console.log(total);
total.push("haha")
console.log(total);
total.pop();
console.log(total);

//problem-1 
//The appointment of the school headmaster is from 8:00 -to 10:00,Write a condition, would you meet with him. write 3 message upon his appointment status before 8pm, during his meeting time, and after his meeting time. the time will be 24 hours basis.

function meetingTime(time) {
    if (time < 8){
        return "Please wait, the meeting time will start from 8:00p.m.";
    }
    else if (time > 10){
        return "the appointment time is over"
    } 
    
    else if (time >= 8 && time <= 10) {
        return "You can meet with the headmaster"
    }

    
}

var yourTime = meetingTime(8)
console.log(yourTime);

//while Loop

//Problem-2
//count the class 5 students with role number from 1 to 10. use while and for loop for the same tusk.log

var students = ["Rohim", "Korim", "Jafor" , "Koddus", "Shorifa", "Kajol", "Afrin","Kafrin","Mokles", "bela"]

//with while loop
var i = 0;
while ( i < students.length) {
 var student =  i+1 +":"+students[i]; 
 console.log(student);
 i++;
}

//with for loop
for (i = 0; i < students.length; i++) {
    var student = i + 1 + ":" + students[i];
    console.log(student)
}

//Problem-3 
// write a program where student are more than 23 years old, use while and for loop instead

//with while loop  
var studentAge = [19,20,31,83,98,23,32]

var i = 0;
while (i < studentAge.length) {
    var student = studentAge[i];
    if (studentAge[i] > 23){
        console.log(student);
    }
    i++;
}

//with for loop
for(i=0; i<studentAge.length; i++){
    var student = studentAge[i];
    if (studentAge[i] >= 23){
        console.log(student);
    }
}


// make factorial
// make a factorial function

function factorialOutput(number){
    var factorial = 1;
    var i = 1;
    while(i <= number){
        factorial = factorial * i;
        i++;
    }
    return factorial;

}

var answer = factorialOutput(7)
console.log(answer);

// factorial with for loop

var factorial = 1;
function findFactorial(number){
    for(var i = 1; i <= number; i++) {
         factorial = factorial * i;

    }
    return factorial;
}

var answer = findFactorial(8)
console.log(answer);

//reverse factorial with for Loop

var factorial = 1;
function factorialReverse(number) {
    for(i = number; i >= 1; i--) {
        factorial = factorial * i
    }
    return factorial;
}

var theReverseFactorial= factorialReverse(7)
console.log(theReverseFactorial);

//reverse factorial with while Loop

var factorial = 1;
function factorialReverseWhile(number) {
    var i = number;
    while(i >= 1){
        factorial = factorial * i;
        i--
    }
    return factorial;
}

var theReverseWhile = factorialReverseWhile(9)
console.log(theReverseWhile);