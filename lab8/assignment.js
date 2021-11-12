const { Observable } = rxjs;
window.onload = function () {
  document.getElementById("btn").onclick = function () {
    data();
  };
};
function data() {
  let input = document.getElementById("inp").value;
  fetch("https://randomuser.me/api/?results=" + input)
    .then((res) => res.json())
    .then((data) => dispaly(data.results));
}

function dispaly(arr) {
  let task = new Observable((observe) => {
    observe.next(arr);
  });

  task.subscribe({
    next: (arr) => {
      let card = "";
      for (let i = 0; i < arr.length; i++) {
        card += `
          <div class='row mt-5'> 
          <div class=col-md-4> 
          <h4>${arr[i].name.first}</h4>
          </div>
          <div class=col-md-8>
            <h4>Location</h4>
            <h6>${arr[i].location.street.number} ${arr[i].location.street.name} </h6>
            <h6>${arr[i].location.city} ${arr[i].location.state} ${arr[i].location.country}</h6>
          </div>
          </div>
          <hr>
          `;
      }
      document.getElementById("con").innerHTML = card;
    },
  });
}
