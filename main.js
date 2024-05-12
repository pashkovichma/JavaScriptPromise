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

//Task 2: Implement promiseAllSettled Function
function promiseAllSettled(promises) {
  return Promise.all(promises.map(promise => {
      return promise.then(
          value => ({ status: 'fulfilled', value }),
          reason => ({ status: 'rejected', reason })
      );
  }));
}

