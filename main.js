//Task 1: Implement promiseAll Function

function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    let resolvedValues = [];
    let resolvedAmount = 0;
    promises.forEach((promise, index) => {
      promise.then(result => {
        resolvedValues[index] = result;
        resolvedAmount++;
        if (resolvedAmount === promises.length) {
          resolve(resolvedValues);
        }
      }).catch(reject);
    });
  });
}

