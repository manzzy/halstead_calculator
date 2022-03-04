/**
 *  let variables
 *  n1 = unique number of operators
 *  n2 = unique number of operands
 *
 *  q1 = total occurance of operators
 *  q2 = total occurance of operands
 *
 */

let n1, n2, q1, q2;

/**
 * Formula Variables
 * N = Program Size
 * V = Vocuablury Size
 * Vol = Volume
 * D = Difficulty
 * L = Level
 * E = Effort
 * T = Time
 * B = Bugs
 */

let N, V, Vol, D, L, E, T, B;

function programSize() {
  N = q1 + q2; // where N is Program size
  document.getElementById("pl").innerText = `${N}`;
}

function vocublary() {
  V = n1 + n2; // Where V is Voucablary Size
  document.getElementById("vs").innerText = V;
}

function volume() {
  Vol = N * Math.log2(V);
  document.getElementById("pv").innerText = Vol.toFixed(2);
}

function diffuclty() {
  D = (n1 / 2) * (q2 / n2);
  document.getElementById("pd").innerText = D.toFixed(2);
}

function level() {
  L = 1 / D;
  document.getElementById("plevel").innerText = L.toFixed(2);
}

function effort() {
  E = Vol / L;
  document.getElementById("pe").innerText = E.toFixed(2);
}

function time() {
  T = E / 18;
  document.getElementById("pt").innerText = T.toFixed(2);
}

function bugs() {
  B = Math.pow(E, 2 / 3) / 3000;
  document.getElementById("pb").innerText = B.toFixed(2);
}

function submitMethod() {
  // e.preventDefault();
  n1 = Number(document.getElementById("n1").value);
  n2 = Number(document.getElementById("n2").value);
  q1 = Number(document.getElementById("q1").value);
  q2 = Number(document.getElementById("q2").value);

  programSize();
  vocublary();
  volume();
  diffuclty();
  level();
  effort();
  time();
  bugs();
}

function bringDataFromAPI(){
  let codes  = document.getElementById('txt-area').value;
  let str = {
    code: codes
  }
  let code = JSON.parse(str);

  console.log(code)
  fetch("http://localhost:3000/api", {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: {
      code
    }
  }).then(response => response.json())
  .then(json => {
    alert(json);
  }).then(err => alert("PLease insert proper data"))
}

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  submitMethod();
});

document.getElementById("form-code").addEventListener("submit", (e) => {
  e.preventDefault();
  bringDataFromAPI();
});

let load = false;
if (!load) {
  document.getElementById("modal").style.display = "flex";
}

document.getElementById("close_btn").addEventListener("click", (e) => {
  document.getElementById("modal").style.display = "none";
  load = true;
});

window.onclick = function (event) {
  if (event.target == modal) {
    document.getElementById("modal").style.display = "none";
  }
};
