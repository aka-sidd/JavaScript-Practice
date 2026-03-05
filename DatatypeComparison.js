console.log(2>1);
console.log(2<1);
console.log(2>=1);
console.log(2<=1);
console.log(2==1);
console.log(2!=1);
// When comparing a string to a number, JavaScript attempts to convert the string to a number before making the comparison. If the string cannot be converted to a valid number, it will be treated as NaN (Not-a-Number), which will result in false for all comparisons except for !=, which will return true.
console.log("2">1);
console.log("2"<1);
console.log("02">1);
console.log("02"<1);
console.log("2"==1);
console.log("2"!=1);
console.log(null>0);
console.log(null<0);
console.log(null==0);
console.log(undefined>0);
console.log(undefined<0);
console.log(undefined==0);
// null and undefined are only equal to themselves and each other, but not to any other value.