var elInput = document.querySelector("#id-input")
var elSelect = document.querySelector("#id-select")
var elConvertBtn = document.querySelector(".btn")
var elPSum = document.querySelector(".p-sum")
var elPUsd = document.querySelector(".p-usd")
var elPEuro = document.querySelector(".p-euro")
var elSpanSum = document.querySelector(".span-sum")
var elSpanUsd = document.querySelector(".span-usd")
var elSpanEuro = document.querySelector(".span-euro")

var USD = 11400;
var EURO = 12250;


elConvertBtn.addEventListener("click", function(evt){
  evt.preventDefault()

var count = elInput.value.trim()
if(count == ""){
  return;
}
if(isNaN(count)){
  return;
}
 var convert = elSelect.value;
 switch (convert) {
  case "sum":
    var usd = (count / USD).toFixed(2);
    var euro =( count / EURO).toFixed(2)
    elPUsd.style.display = "block"
    elPEuro.style.display = "block"
    elSpanSum.style.display = "none"
    elSpanUsd.textContent = usd;
    elSpanEuro.textContent = euro;
    break;
  case "usd":
    var sum = (count * USD).toFixed(2);
    var euro = (sum / EURO).toFixed(2)
    elPSum.style.display = "block"
    elPEuro.style.display = "block"
    elSpanUsd.style.display = "none"
    elSpanSum.textContent = sum;
    elSpanEuro.textContent = euro;
    break;
 
  case "euro":
    var sum = (count * USD).toFixed(2);
    var euro = (sum / EURO).toFixed(2)
    elPUsd.style.display = "block"
    elPSum.style.display = "block"
    elSpanEuro.style.display = "none"
    elSpanUsd.textContent = usd;
    elSpanSum.textContent = sum;
    break;
  default:
   
  return
    
}


})