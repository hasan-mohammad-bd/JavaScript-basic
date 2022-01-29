var color = "yellow";

if (color == "blue") {
    console.log("color is blue");
}
else if (color == "red"){
    console.log("color is green");
}
else if (color == "white") {
    console.log("color is white");
}
else if ( color == "megenta")
    console.log("color is megenta");

else if (color == "yellow") {
    console.log("color is yellow");
}
else {
    console.log("color is black");
}

//efficient way to do this //in switch, the other options are not being chacked.dricly go to the courrect opton.

switch(color) {
    case "blue":
        console.log("color is blue");
        break;
    case "red":
        console.log("color is red");
        break;
    case "white":
        console.log("color is white");
        break;
    case "megenta":
        console.log("color is megenta");
        break;
    case "yellow":
        console.log("color is yellow");
        break;
    default:
        console.log("color is black");
}