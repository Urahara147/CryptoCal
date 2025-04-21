let percentEl = document.getElementById("percent")
let withdrewEl = document.getElementById("withdrew")
let btnEl = document.getElementById("btn")
let resultEl = document.getElementById("result")

btnEl.onclick = function(param) {
  let count = percentEl.value / 100 * withdrewEl.value
  count = withdrewEl.value - count
  resultEl.textContent = count
}
