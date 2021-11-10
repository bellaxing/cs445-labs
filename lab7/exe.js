window.onload = function () {
  data();
  document.getElementById("btn").onclick = data;
};

function data() {
  fetch("https://randomuser.me/api/?results=5")
    .then((res) => res.json())
    .then((data) => dispaly(data.results));
}

function dispaly(arr) {
  let card = "";
  for (let i = 0; i < arr.length; i++) {
    card += `
        
        <div class ='row'> 

        <div class=col-md-4> 
        <img src=${arr[i].picture.large} />
        </div>
        <div class=col-md-8> 
        <h4>${(arr[i].name.first, arr[i].name.last)} </h4>
        <h6>${arr[i].cell} </h6>
        <h6>${arr[i].email} </h6>
        </div>
        
        </div>
        <hr>

        `;
  }
  document.getElementById("con").innerHTML = card;
}
