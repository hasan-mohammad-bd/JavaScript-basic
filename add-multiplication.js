/*
chairWood = 3cft/chair
tableWood = 10cft/table
bedWood = 50cft/bed

the quantity is changing
*/
//Problem- give to total wood need to make bed table chair

function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
    const parChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    const chairWoodQuantity = chairQuantity * parChairWood;
    const tableWoodQuantity = tableQuantity * perTableWood;
    const bedWoodQuantity = bedQuantity * perBedWood;

    const totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;

    return totalWood;

}

var totalWoodNeeded = woodCalculator(9,7,3);
console.log(totalWoodNeeded);