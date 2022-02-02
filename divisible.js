//problems- set foobar there 5 and 3 can be deviled, set foo where 3 can be divided, set bar where 5 can be divided

for(i = 1; i<=50;i++){
    if (i % 3 == 0 && i % 5 == 0){
        console.log("foobar");
    }
    else if(i % 3 == 0) {
        console.log('foo');
    }
    else if (i % 5 == 0){
        console.log("bar");
    }

    else {
        console.log(i);
    }

    }
    console.log(i);
