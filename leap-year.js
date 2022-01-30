//leap-year
function isLeapYer(year) {
    if(year % 4 == 0 ){
        return true
    }
    return false
}

const thisYear = 2022;
const isThisLeapYear = isLeapYer(this);
console.log(isThisLeapYear);