
// Event Module
// Node.js has a built-in module, called "Events",
// where you can create-, fire-, and listen for- your opwn events.

// Example 1- Registering for the event to be fired only one time using once.
// Example 2- Create an event emitter instance and register a couple of callbacks
// Example 3- Registering for the event with callback parameters

// const event = require("events");
// const EventEmitter = new event.EventEmitter();
//or
const EventEmitter = require("events");
const event = new EventEmitter();


// Define function always before calling the function.
// event.on('sayMyName', () => {
//     console.log("You are Node");
// })

// event.on('sayMyName', () => {
//     console.log("This is NodeJS Tutorial.");
// })

// event.on('sayMyName', () => {
//     console.log("This is EventModule.");
// })

// event.emit('sayMyName');

event.on('checkPage', (sc, msg) => {
    console.log(`status code is ${sc} and the page is ${msg}`);
})

event.emit("checkPage", 200, "ok");
// The concept is quite simple: Emitter objects emit named events that causes previously registered listeners to be called. So, an emitter object basically has two main features:
//1.Emitting name events.
//2.Registering and unregistering listener function.