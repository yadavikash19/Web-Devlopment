//EventEmitter is a core module in Node.js used to create and handle custom events.- eventEmitter ek class joki hum Event Module se get krenge and iska instance bnayenge joki emitter hoga- emitter object ke under kafi methods hota h
//It is part of the events module and is often used for building event-driven systems in Node.js.

//Key Methods
// 1. emit(eventName, [args])-call krenge funciton ko- Emits (or triggers) an event with the specified eventName. You can also  pass arguments that will be consumed by the listeners. It’s like calling a function, but instead, it triggers all listeners (functions) attached to the specified event.
// 2. on(eventName, listener)-define krenge function ko- Attaches a listener (a function) to a specific eventName. This listener will execute when the event is emitted

/*
Defining a Listener (on): It's like defining a function for an event. The listener will execute when the corresponding event is triggered.
Emitting an Event (emit): It's like calling that event's listener
 */

//Import EventEmitter class
const EventEmitter= require("events");
//Create an instance of EventEmitter
const emitter= new EventEmitter();

//1. Define an event listener (addListener)
emitter.on("greet",() =>{
    console.log("VIKI");
})
//2. Trigger (emit) the "greet" event- emit kro, signal do, produce kro---- yha hum ek function call kr rhe jiska naam h greet
emitter.emit("greet")

// hello viki
// greet();

//* You can also pass argumnets while emittimg
emitter.on("greet2",(username) =>{
    console.log(`Hello ${username}`);
})
emitter.emit("greet2","VIKI");


emitter.on("greet3",(username,prof) =>{
    console.log(`Hello ${username}, who is ${prof}`);
})
emitter.emit("greet3","VIKI","Full Stack Dev");
//but its best idea to take a single argument as an object
emitter.on("greet4",(obj) =>{
    console.log(`Hello ${obj.name}, who is ${obj.prof}`);
})
emitter.emit("greet4", {name:"viki",prof:"hustler"});