let receiveEl = document.getElementById("received")
let withdrewEl = document.getElementById("withdrew")
let btnEl = document.getElementById("btn")
let resultEl = document.getElementById("result")

btnEl.onclick = function (param) {
  let count = receiveEl.value / withdrewEl.value * 100
  count = 100 - count
  resultEl.textContent = count
}
