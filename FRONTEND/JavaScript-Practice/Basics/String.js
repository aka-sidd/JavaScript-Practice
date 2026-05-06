let str = "Javascript";
let result = str.slice(-6);
console.log(result);
const name = "Siddharth";
console.log(name);
const repoCount = 50;
console.log(name + repoCount + "Value");
console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);
const gameName = new String ("Siddharth");
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
const anotherString = gameName.slice(-8,4);
console.log(anotherString); 
const anotherString2 = gameName.slice(-4);
console.log(anotherString2); 
const newStringOne = "   hitesh   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https:// www.youtube.com/channel/UCwfaAHyS1p3vN0UZeYpE_AQ";
const newUrl = url.replace("https://", "");
console.log(newUrl);

newUrl.includes("youtube") ? console.log("url is correct") : console.log("url is not correct");
console.log(gameName.split(""));
