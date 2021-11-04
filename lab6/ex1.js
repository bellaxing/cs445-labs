function isPrime(num) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) {
          reject({ prime: false });
        } else {
          resolve(num > 1);
        }
    });
  });
}

async function isPrimeAsync(number) {
  try {
    let message = await isPrime(number);
    console.log(message);
  } catch (err) {
    console.log(err);
  }
}
console.log("start");
isPrimeAsync(7);
console.log("end");
