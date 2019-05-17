function addWithPromise(a, b) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      if (!a || !b) {
        reject(`This function needs two numbers as paramaters`);
      }
      resolve(a + b);
    }, 1000);
  });
}

addWithPromise(2, 3)
  .then(result => {
    console.log(`Using promise with .then ${result}`);
  })
  .catch(err => console.log(err));

// Using Promise with async  and await

async function getResult() {
  try {
    const result = await addWithPromise(2, 3);
    //await pauses the function. console.log will not run until promise is either resolved or rejected
    console.log(`Using promise with async and await ${result}`);
  } catch (err) {
    console.log(err);
  }
}

getResult();
