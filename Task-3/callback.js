function fetchData(callback) {
  setTimeout(function () {
    callback('Data received');
  }, 1000);
}

function handleData(data) {
  console.log(data);
}

fetchData(handleData);
