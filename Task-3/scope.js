var globalVariable = 'I am global';

function exampleScope() {
  var localVariable = 'I am local';
  console.log(localVariable);  // Output: I am local
  console.log(globalVariable); // Output: I am global
}

exampleScope();
