async function asyncExample() {
  try {
    const result = await promiseExample();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

asyncExample();
