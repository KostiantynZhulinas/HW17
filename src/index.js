function sumArrayPromise(arr) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Array.isArray(arr)) {
          const sum = arr.reduce((acc, num) => acc + num, 0);
          resolve(sum);
        } else {
          reject(new Error('Input is not an array'));
        }
      }, 3000);
    });
  }
  
  sumArrayPromise([1, 2, 3, 4, 5])
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.error(error.message);
    });
 