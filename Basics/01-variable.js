const accountId = 12673;
let accountEmail = "Siddharth@gmail.com"
var accountPassword = "Siddharth@123"
accountCity = "Bangalore"
accountPassword = "Siddharth@456"
accountEmail = "siddharth.updated@gmail.com"
accountCity = "Gonda"
let accountState;
console.table([accountId, accountEmail, accountPassword, accountCity,accountState])

/* 
Prefer not to use var, as it has function scope and can lead to unexpected behavior.
Use const for variables that won't be reassigned, and let for variables that will be reassigned.
*/