const names = ["abul", "babul", "cabul", "dabul", "ebul", "fabul", "babul", "ebul", "babul", "gabul", "abul", "habul", "dabul"];

function removeDuplicate(names) {
    const unique = []; //here [] is default value.
    /*
    for(let i = 0; i < names.length; i++){
        const element = names[i];
        console.log(element);
    } 
    */
    for(const element of names){
        if(unique.indexOf(element) == -1){//here which element has no place in the unique list/array. the element will get into the unique array, if the unique array has the index before, the element items will not going to enter in that list.
            unique.push(element);
        }
    }
    return unique
}

const uniqueNames = removeDuplicate(names)
console.log(uniqueNames);