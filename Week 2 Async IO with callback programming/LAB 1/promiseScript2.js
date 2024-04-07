const myPromise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 resolved successfully");
  }, 6000);
});

const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 resolved successfully");
  }, 3000);
});

console.log(`BEFORE CALLING THE PROMISE FUNCTION`);

myPromise1.then((successMessage) => {
  console.log(`From Callbacks: ${successMessage}`);
  myPromise2.then((successMessage) => {
    console.log(`From Callbacks: ${successMessage}`);
  });
});

console.log(`AFTER CALLING THE PROMISE FUNCTION`);
