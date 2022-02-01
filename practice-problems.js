
//১. তোমাকে ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে। তুমি ক্যালকুলেশন করে তাপমাত্রা ফারেনহাইট এ কনভার্ট করে সেটার আউটপুট রিটার্ন করবে.

function findTemplate(celsius){
    var ferenhite = (celsius * 1.8) + 32;
    return ferenhite;
}

var theTemperature = findTemplate(9);
console.log(theTemperature);



//২. একইভাবে উল্টা হিসাব করবে। যাতে তোমাকে ফারেনহাইট হিসেবে তাপমাত্রা দিলে সেটাকে সেলসিয়াস এ কনভার্ট করে আউটপুট দিবে। 

function findTemperatur(ferenhite){
    var celsius = (ferenhite-32) * 0.5555555555555556;
    return celsius;
}

var theTemperatureinF = findTemperatur(48.2);
console.log(theTemperatureinF);


//৩. কেউ ১০০ এর মধ্যে কত মার্ক্স্ পেয়েছে সেটা তোমাকে বলে দিবে। তুমি একটা ফাংশন দিয়ে বলে দিবে সে এ+ পাবে নাকি অন্য কোন গ্রেড পাবে।

function theGread(numbers){
    if(numbers => 80){
        return "He got A+"
    }
    else if (number < 80){
        return "He missed the A+"
    }
}

var theConfermation = theGread(79);
console.log(theConfermation);

//৪. সুদের হিসাব করবে। জাস্ট হিসাব কেমনে করতে হয়। সেই চিন্তায় করবে। সুদ ভালো না খারাপ সেটা এখন চিন্তা করার দরকার নাই। জাস্ট একটা ফর্মুলা থাকলে সেটা কিভাবে কোড এ লিখতে হয় সেই এঙ্গেল থেকে করার চেষ্টা করো। 


function shud(money,months) {
    var shuderHar = 1.5;
        shuderHar = (shuderHar * money) * (months * 0.2) ;
    
    return shuderHar
}


var shudKoto = shud(100, 3);
console.log(shudKoto);
