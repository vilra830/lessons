// What is promise hell?
// A situation where we have multiple promises, and the next promise needs the value of the previous one

// we have a function that returns a promise
// another function that returns a promise but needs the value of the previous promise

// the only place we can access a resolved promise value in inside .then
// which means I would need to call my second function inside the first function's .then

const rememberName = (input) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof input !== "string") {
                reject("This is not a name, something went wrong");
            } else {
                resolve(input);
            }
        }, 2000);
    });
};

// rememberName(1234)
//     .then((name) => {
//         console.log(`Hello, how are you ${name}?`);
//     })
//     .catch(console.log);

const rememberLocation = (name) => {
    const locations = {
        martyna: "Melbourne",
        alex: "Adelaide",
        remi: "London",
    };

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (locations[name.toLowerCase()]) {
                resolve(locations[name.toLowerCase()]);
            } else {
                reject(new Error("Sorry, I don't know where you live"));
            }
        }, 2000);
    });
};

// THIS IS WRONG
// remember name returns a promise
// so if we do it like this
// we pass the Promise object as a parameter
// which means we cannot call .toLowerCase on it etc..
const name = rememberName("Alex");
// console.log(name, "name");
// rememberLocation(name);

// What we have to do instead
// is call remember name - wait for the promise to resolve before calling remember location

rememberName("Val")
    .then((name) => {
        console.log(name);
        console.log(`Hello, ${name}`);
        // this si the only place I can access the value of my resloved promise, so name
        rememberLocation(name)
            .then((location) => {
                console.log(location);
                console.log(`How is the weather in ${location}?`);
                // someOtherFuncThatNeedsLocation(location).then((val) =>{ console.log(value)})
            })
            .catch((e) => {
                console.log("Remember Location error", e);
            });
    })
    .catch((e) => {
        console.log("Error: ", e);
    });

// PROMISE.ALL - reminder

// a bit of a solution
// we can return from .then
rememberName("Val")
    .then((name) => {
        console.log("Resolved value fo a promise:", name);
        return name;
    })
    .then((name) => {
        console.log("Name in second .then: ", name);
        return rememberLocation(name);
    })
    .then((location) => {
        console.log(location, "location from third .then");
        // const fromFunctionThatNeedsLocation = functionThatNeedsLocation(location)
        // return fromFunctionThatNeedsLocation
    })
    .catch((e) => {
        console.log("ERROR: ", e);
    });

// Code like this si hard to read and debug
