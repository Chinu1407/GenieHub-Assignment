function outerFunction(outerParam) {
  return function innerFunction(innerParam) {
    console.log(outerParam + ' ' + innerParam);
  };
}

var closureExample = outerFunction('Hello');
closureExample('World'); // Output: Hello World
