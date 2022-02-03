//৭. তোমাকে যদি বলে একটা while লুপ দিয়ে ৭ থেকে ১৯ পর্যন্ত যতগুলা বিজোড় সংখ্যা আছে সেগুলা দেখাতে। তুমি কি সেটা দেখাতে পারবে? পারলে সেই কোড লিখে ফেলো। 

i = 7
while (i <= 19){
    if(i % 2 == 1){
        console.log(i);
    }
    i++;
}

//৮. তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে। 

const anArray = ["hasan", "yahya", "imad", "abrar", "mohammad"]

console.log(anArray.length); //answer

let count = 0;
 for(let element of anArray){
    count++;
}
console.log(count); //answer

anArray[4]="hasan Mohammad"
console.log(anArray); //answer

anArray.push("Raihan", "Rakib")
console.log(anArray); //answer

anArray.pop()
console.log(anArray); //answer

//৯. তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে। সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো। 
 
const theArray = ["best", "good", "better", "bad", "worst", "nothing"]

let newArray = []
for(let element of theArray){
    newArray.push(element);
    
}
console.log(newArray); //answer

//১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো 

const numbers = [84, 389,11, 45, 63, 333, 6322, 62]

for(let element of numbers) {
    if(element > 80){
        console.log(element); //answer
    }
}

//১১. তিনটা সংখ্যার গুনফল বের করে ফাইনাল রেজাল্ট আউটপুট হিসেবে রিটার্ন করতে হবে। তুমি কি সেই কোড লিখতে পারবে। যদি পারো তাহলে সেই কোড লিখে ফেলো। 

function multiply(num1, num2, num3) {
    let multiply = num1 * num2 * num3;
    return multiply
}

console.log(multiply(2,2,2)); //answer

//১২. একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে। এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা। 

const anHasan = {
    name:"Hasan",
    location:"Dhaka",
    phone:45678
}

anHasan.fullName = anHasan.name
delete anHasan.name
console.log(anHasan); //answer




