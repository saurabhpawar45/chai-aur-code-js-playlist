 //singleton
 //object.create

//object literals
const mySym = Symbol("key1");
const user = {
    name : "saurabh",
    age : 26,
    email : "saurabh@gmail.com",
    isLoggedIn : false,
    friends : {
        name : "siddhi",
        age : "26"
    },
    [mySym] : "symbolcheck",
    showDetails() {
        console.log(`Name: ${this.name}`);
    }

}

// console.log(user["name"]);
// console.log(user["friends"]["name"]);

// Object.freeze(user)
// user.name = "saurabh1"
//console.log(user[mySym]);
console.log(user.showDetails());
