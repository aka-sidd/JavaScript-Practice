const mySym = Symbol("key1");
const JSUser = {
    name : "Siddharth",
    "full Name": "Siddharth Pandey",
    [mySym] : "mykey1",
    location:"delhi",
    age : 21,
    email:"siddharth@gmail.com",
    isLoggedIn : false,
    LastLoginDays : ["Monday","Sunday"]
}
    console.log(JSUser.email);
    console.log(JSUser["emails"]);
    console.log(JSUser["full Name"]);
    console.log(typeof JSUser[mySym]);

    JSUser.email = "siddharth@microsoft.com";
    console.log(JSUser);

    JSUser.greetings = function(){
        console.log("hello Js User" );

    }
    JSUser.greetingsTwo = function(){
        console.log(`Hello JS User, ${this.email}`);
    }
    console.log(JSUser.greetings());
    console.log(JSUser.greetingsTwo());




