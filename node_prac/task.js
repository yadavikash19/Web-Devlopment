const EventEmitter= require("events");

const emitter= new EventEmitter();
let count=0;

const eventCounts= {
    "userLogIN": 0,
    "userLogOut": 0,
    "userPurchase": 0,
    "profileUpdate" :0,
}


emitter.on("login",(obj) =>{
    console.log(`Username is ${obj.username}, who's passwords is ${obj.password} is logged IN`);
    eventCounts.userLogIN++;
    // eventCounts["userLogIN"]++;
})
emitter.on("logout",(obj) =>{
    console.log(`Username is ${obj.username}, who's passwords is ${obj.password} is logged OUT`);
    eventCounts.userLogOut++;
})
emitter.on("purchase",(obj) =>{
    console.log(`Purchases are ${obj.items}`);
    eventCounts.userPurchase++;
})
emitter.on("profile_update",(obj) =>{
    console.log(`Username is ${obj.username}, who's passwords is ${obj.password} is created`);
    eventCounts.profileUpdate++;
})
emitter.on("summary",(obj) =>{
    console.log(`Logins are ${obj.userLogIN}, logouts are ${eventCounts.userLogIN}, purchase event called: ${obj.userPurchase} and profile updated ${obj.profileUpdate} times`);
})
emitter.emit("login", {username:"viki",password:"hustler"});
emitter.emit("logout", {username:"viki",password:"hustler"});
emitter.emit("purchase", {items:"3"});
emitter.emit("profile_update", {username:"viki",password:"hustler"});
emitter.emit("login", {username:"viki",password:"hustler"});
emitter.emit("logout", {username:"viki",password:"hustler"});
emitter.emit("purchase", {items:"3"});
emitter.emit("profile_update", {username:"viki",password:"hustler"});
emitter.emit("login", {username:"viki",password:"hustler"});
emitter.emit("logout", {username:"viki",password:"hustler"});
emitter.emit("purchase", {items:"3"});
emitter.emit("profile_update", {username:"viki",password:"hustler"});
emitter.emit("login", {username:"viki",password:"hustler"});
emitter.emit("logout", {username:"viki",password:"hustler"});
emitter.emit("purchase", {items:"3"});
emitter.emit("profile_update", {username:"viki",password:"hustler"});

emitter.emit("summary", eventCounts);