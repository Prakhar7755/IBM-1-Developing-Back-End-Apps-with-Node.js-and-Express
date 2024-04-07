//Creating a promise method. The promise will get resolved when timer times out after 6 seconds.
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved");
  }, 6000);
});

//Console log before calling the promise
console.log("Before calling promise");

//Call the promise and wait for it to be resolved and then print a message.
myPromise
  .then((successMessage) => {
    console.log("From Callback " + successMessage);
  })
  .catch((errorMessage) => {
    console.log(errorMessage);
  });

//Console log after calling the promise
console.log("After calling promise");
