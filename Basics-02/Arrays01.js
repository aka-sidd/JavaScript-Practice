// array 

const myArr = [0,1,2,3,4,5];
// console.log(myArr[0]);
// console.log(myArr[2]);
// console.log(myArr[3]);
const myheroes = ["Shaktimaan","IndianArmy"];
const myArr2 = new Array(1,2,3,4);
// console.log(myheroes[0]);

// Array methods
//for add the element we use "push() methods"
//myArr.push() // apppend the value at the end of the array
//for remove the element:// using pop() method
//myArr.push(6);
//console.log(myArr);
//myArr.pop(); //remove the last element at the end of the array
//unshift:- shift the first element and place first position
//myArr.unshift(9); // shift the first element and place first position
//console.log(myArr);
//shift()method to remove the unshift element from array
//myArr.shift();
//console.log(myArr);
//includes:- questionner type methods mainly used for this method is this element present in array or not
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

// join()methods:-> Adds all the elements of an array into a string 
// const newArr = myArr.join();
// console.log(myArr);
// console.log(typeof newArr);

//slice, splice

// console.log("A",myArr);
// const myn1 = myArr.slice(1,3);
// console.log(myn1);
// console.log("B",myArr);
// const myn2 = myArr.splice(1,3);
// console.log(myn1);
// console.log(myn2);


//Length Property(V.Important)
let arr = [1,2,3];
console.log(arr.length); // 3 
console.log(typeof arr);
arr.length = 1;
console.log(arr); //[1]
//It truncates the array
arr.length = 5;
console.log(arr); //It extends with empty slots

// let arr2  = ["a","b","c"];
// console.log(arr2[0]); // a 
// console.log(arr2["0"]); // a

// let Arr = [];
// Arr[0] = "A";
// Arr[5] = "F";
// console.log(Arr);