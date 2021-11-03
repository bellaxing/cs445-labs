Array.prototype.removeDuplicatesAsync = function () {
  new Promise((resolve, reject) => {
    resolve(this);
  }).then(() => {
    console.log(this.filter((a, b) => this.indexOf(a) === b));
  });
};

[1, 2, 3, 4, 1, 2, 3, 4].removeDuplicatesAsync();
