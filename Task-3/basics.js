// Scope
var globalVariable = 'I am global';

function exampleScope() {
  var localVariable = 'I am local';
  console.log(localVariable);  // Output: I am local
  console.log(globalVariable); // Output: I am global
}

exampleScope();

// IIFE (Immediately Invoked Function Expression)
(function () {
  console.log('IIFE executed');
})();

// Hoisting
console.log(hoistedVariable); // Output: undefined
var hoistedVariable = 'I am hoisted';

// Closures
function outerFunction(outerParam) {
  return function innerFunction(innerParam) {
    console.log(outerParam + ' ' + innerParam);
  };
}

var closureExample = outerFunction('Hello');
closureExample('World'); // Output: Hello World

// Callbacks
function fetchData(callback) {
  setTimeout(function () {
    callback('Data received');
  }, 1000);
}

function handleData(data) {
  console.log(data);
}

fetchData(handleData);

// Promises
function promiseExample() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('Promise resolved');
    }, 1500);
  });
}

promiseExample().then(function (result) {
  console.log(result);
});

// Async & Await
async function asyncExample() {
  try {
    const result = await promiseExample();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

asyncExample();
