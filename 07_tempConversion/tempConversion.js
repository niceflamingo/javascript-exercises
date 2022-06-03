function ftoc(Number) {
  let tempConversion = (Math.round(Number - 32) * 5/9)
  let roundedConversion = tempConversion.toFixed(1)
  return parseFloat(roundedConversion)
}

function ctof(Number) {
let tempConversion = ((Number * 9/5) +32)
let roundedConversion = (tempConversion).toFixed(1)
console.log(roundedConversion);
return parseFloat(roundedConversion)
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
