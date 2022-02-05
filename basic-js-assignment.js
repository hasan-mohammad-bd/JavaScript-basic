//Problem-1: 

function anaToVori(ana){

    //input error control
    if(ana <= 0){
        return "Please give correct amount"
    }

    //formula
    var vori = ana * 0.0625;
    return vori;
}


//for checking purpose;
console.log(anaToVori(2));




//Problem-2 

function pandaCost(shingara, somucha, jelapi){

    //input error control
    if(shingara <= 0){
        return "Please put correct Amount";
    } else if (somucha <= 0){
        return "Please put correct Amount";
    } else if (jelapi <= 0){
        return "Please put correct Amount";
    }

    //Amount of per pcs
    var shingaraPrice =7;
    var smouchaPrice = 10;
    var jelapiPrice = 15;

    //Total amount of a single item.
    var totalPriceOfShingara = shingaraPrice * shingara;
    var totalPriceOfSomucha = smouchaPrice * somucha;
    var totalPriceOfJelapi = jelapiPrice * jelapi;

    //Total amount calculation.
    var totalPrice = totalPriceOfShingara + totalPriceOfSomucha + totalPriceOfJelapi;
    return totalPrice;
}

//for checking purpose
console.log(pandaCost(1,2,11));



//problem-3 

function picnicBudget(person){

    //input error control
    if(typeof person != "number"){
        return "please give valid amount";
    } else if (person <= 0) {
        return "Please give valid input"
    }

    //calculation for first 100 person.
    if( person <= 100){
        var perPersonCostUpto100 = 5000;
        var totalCost = person * perPersonCostUpto100;
        return totalCost
    }
    //calculation second 100 person.
    else if(person <= 200){
        var totalCostFor100Person = 100 * 5000;
        var remainingPerson = person - 100;
        var perPersonCostUpto200 = 4000;
        var totalCostFor200Person = remainingPerson * perPersonCostUpto200;
        var totalCost = totalCostFor200Person + totalCostFor100Person;
        return totalCost;
    }
    //calculation for more than 200 person.
    else if(person > 200){
        var totalCostFor100person = 100 * 5000;
        var totalCostFor200person = 100 * 4000;
        var remainingPerson = person - 200;
        var perPersonCostOver200Person = 3000;
        var totalCostForOver200Person = remainingPerson * perPersonCostOver200Person;
        var totalCost = totalCostFor100person + totalCostFor200person + totalCostForOver200Person
        return totalCost
    }
}

//for checking purpose
console.log(picnicBudget(250));



//problem-4

function oddFriend(array){

    //input error control
    if(Array.isArray(array) == false){
        return "Please give correct information"
    }

    //finding odd number
    var oddName;
    for(let name of array){
        if(name.length % 2 == 1){
            oddName = name;
            return oddName;
        }
    }
}

//for checking purpose
const friends = ["Bony","Rony", "Samira", "Yahya", "John", "Hasan"]
console.log(oddFriend(friends));






