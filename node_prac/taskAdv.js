const fs = require("fs");
const EventEmitter = require("events");

const emitter = new EventEmitter();
const eventCounter = require("./taskAdvDB"); // Import event counts

// Function to save event counts to a file
const saveEventCounts = () => {
    fs.writeFileSync("eventData.json", JSON.stringify(eventCounter, null, 2), "utf-8");
};

// Load previous event counts (if exists)
if (fs.existsSync("eventData.json")) {
    const data = fs.readFileSync("eventData.json", "utf-8");
    Object.assign(eventCounter, JSON.parse(data)); // Merge previous data
}

emitter.on("login", (obj) => {
    console.log(`Username is ${obj.username}, who's password is ${obj.password} is logged IN`);
    eventCounter.userLogIN++;
    saveEventCounts(); // Save updated count
});

emitter.on("logout", (obj) => {
    console.log(`Username is ${obj.username}, who's password is ${obj.password} is logged OUT`);
    eventCounter.userLogOut++;
    saveEventCounts();
});

emitter.on("purchase", (obj) => {
    console.log(`Purchases are ${obj.items}`);
    eventCounter.userPurchase++;
    saveEventCounts();
});

emitter.on("profile_update", (obj) => {
    console.log(`Username is ${obj.username}, who's password is ${obj.password} is created`);
    eventCounter.profileUpdate++;
    saveEventCounts();
});

emitter.on("summary", () => {
    console.log(`Summary: \n${JSON.stringify(eventCounter, null, 2)}`);
});

// Simulating events
emitter.emit("login", { username: "viki", password: "hustler" });
emitter.emit("logout", { username: "viki", password: "hustler" });
emitter.emit("purchase", { items: "3" });
emitter.emit("profile_update", { username: "viki", password: "hustler" });

emitter.emit("summary"); // Print summary
