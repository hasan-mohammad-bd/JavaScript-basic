 //factorial with normal loop;
 //4! = 4*3*2*1
 let factorial =1;
 for(let i = 4; i >= 1; i--){
     factorial = factorial * i;
 }

 console.log(factorial);


 //factorial with recursion

 function factorial(i){
    if(i == 1){
        return 1;
    }
    return i * factorial(--i);
 }

 console.log(factorial(4));

