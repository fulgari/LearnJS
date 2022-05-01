const fs = require("fs");
fs.readFile(".gitignore", (err, data) => {
  if (err) {
    throw new Error(err);
  } else {
    console.log(data);
    return data;
  }
});

const promisify = (fn) => {
  return (...args) =>
    new Promise((resolve, reject) => {
      fn(...args, (err, data) => {
        if (err) {
          reject(err);
        } else {
          console.log(data);
          resolve(data);
        }
      });
    });
};

promisify(fs.readFile)(".gitignore").then((res) => console.log("Hello"));

const callbackify = (fn) => {
  return (...args) => {
    const cb = args[args.length - 1];
    const fnArgs = args.slice(0, -1);

    if (typeof fn !== "function") {
      throw new Error("Callback is not a function");
    }
    fn(...fnArgs)
      .then((value) => {
        cb(undefined, value);
      })
      .catch((err) => {
        cb(err);
      });
  };
};

callbackify(promisify(fs.readFile))(".gitignore", console.log);
