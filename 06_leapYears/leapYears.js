function leapYears(year) {
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year);
        return true
    }  else  { console.log(year);
                return false
            }
        }
    

// Do not edit below this line
module.exports = leapYears;
