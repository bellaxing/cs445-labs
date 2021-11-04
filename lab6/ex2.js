Array.prototype.removeDuplicatesAsync = function () {
  new Promise((resolve, reject) => {
    resolve(console.log(this.filter((a, b) => this.indexOf(a) === b)));
  });
};

async function removeDuplicatesAsync() {
  try {
    let n = await removeDuplicatesAsync();
    console.log(n);
  } catch (err) {
    console.log(err);
  }
}
console.log("start");
[1, 2, 3, 4, 1, 2, 3, 4].removeDuplicatesAsync();
console.log("end");
