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
