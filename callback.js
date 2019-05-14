let result = undefined;

function add(a, b, sum){
    sum = a + b;
}

//Simulte a server API CALL
// setTimeout(() => add(2, 3, result), 1000);

// console.log(`Syncrhonous result: ${result}`);
// console.log(`Running some code here`);

//using call backs

function addWithCallBack(a, b, callback){
    const sum = a + b;
    callback(sum);
}

function printResult(value){
    console.log(`Callback result ${value}`);

}

setTimeout(() => addWithCallBack(5, 7, printResult), 0);
setTimeout(() => addWithCallBack(2, 3, printResult), 0);

console.log(`Running some more code`)


function addWithPromise (c, d,){
const total = c + d;
return total

}

// function printTotal(ans){
//     console.log(`Promise successful here is the total ${ans}`)
// }




let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(addWithPromise(20, 30)), 10);
    
  });
  // resolve settimeout addwithPromises 5 +7 // 13 wait none
  // settimeout resolve addwithpromsies 5 + 7 //13 
  // resolve runs the first function in .then
  promise.then(
    result => console.log(`Promise successful here is the total ${result}`), 
    error => console.log(error) 
  );

  let promise1 = new Promise(function(resolve, reject){
    setTimeout(() => resolve(addWithPromise(30, 30)), 0);
  })

  promise1.then(
      result => console.log(`Promise successful here is the total ${result}`), 
      error => console.log(error)
  )