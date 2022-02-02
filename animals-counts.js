//animal count. the count has different value in different stop's number. its easy as hell 
function animalCount(miles){
    const animalDensityFist10Miles = 10;
    const animalDensitySecond10Miles = 50;
    const animalDensityRestMiles = 100;
    if(miles <= 10){
        const count = miles * animalDensityFist10Miles;
        return count;
    }
    else if ( miles <= 20){
        const firstDenseAnimals = 10 * animalDensityFist10Miles;
        const restMiles =  miles - 10;
        const secondDenseAnimals = restMiles * animalDensitySecond10Miles
        const totalAnimals = firstDenseAnimals + secondDenseAnimals
        return totalAnimals
    }
    else {
        const firstDenseAnimals = 10 * animalDensityFist10Miles;
        const secondDenseAnimals = 10 * animalDensitySecond10Miles
        const restMiles = miles - 20;
        const restDenseAnimals = restMiles * animalDensityRestMiles;
        const totalAnimals = firstDenseAnimals + secondDenseAnimals + restDenseAnimals;
        return totalAnimals
    }
    
}

const animals = animalCount(21)
console.log(animals);