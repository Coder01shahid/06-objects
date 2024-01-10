let myName = Symbol("key-1")

const myInformation = {
    name:"shahid",
    age:16,
    [myName]:"hello",
    "full name":"shahid chaudhary",
    isLoggedIn:false,
    lastDaysOfLogin:["monday","sunday","friday"]
}


console.log(myInformation.name);
console.log(myInformation["full name"]);
console.log(myInformation[myName]);

Object.freeze(myInformation);
myInformation.age = 21;
console.log(myInformation);