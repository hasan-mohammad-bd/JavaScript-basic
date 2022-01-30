//factorial, it is a number multiple by the privious number;

var factoril = 1; //this should be set outside of an loop/ because the variable will be decleared again and again.
for (var i = 1; i <= 7; i++){
    factoril = factoril * i;
}
console.log(factoril);
