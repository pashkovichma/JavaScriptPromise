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

//Task 3: Implement Chaining of Promises as a Separate Function
function chainPromises(functionsArray) {
  return new Promise((resolve, reject) => {
      let promiseResult = Promise.resolve();

      functionsArray.forEach(func => {
        promiseResult = promiseResult.then(func);
      });

      promiseResult.then(resolve).catch(reject);
  });
}

//Task 4: Implement promisify Function
function promisify(callbackStyleFunction) {
  return function (...args) {
      return new Promise((resolve, reject) => {
          callbackStyleFunction(...args, (error, result) => {
              if (error) {
                  reject(error);
              } else {
                  resolve(result);
              }
          });
      });
  };
}