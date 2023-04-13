const price = document.getElementById('price');
const numberPeople = document.getElementById('number_of_people');
const tip = document.getElementsByClassName('calculator__tip');
const tipAmount = document.getElementById('tipAmount');
const total = document.getElementById('total');
const reset = document.getElementById('reset');
const error = document.getElementById('error') 


function customTip() {
  const custom = document.getElementById('custom').value;
  if(custom>=0){
    percentaje(custom)
  }
  else{
  }
}

function validation(){
  console.log("hola")
  const numberPeople2 = document.getElementById('number_of_people'); 
  if(numberPeople2.value <= 0){
    numberPeople.classList.add("calculator__input-field-error")   
    error.style.display = "inline-block";
  }else{
    error.style.display = "none";
    numberPeople.classList.remove("calculator__input-field-error")   
  }
}


function percentaje(val) {
  let percentaje;
  reset.classList.add('button-active');
  for (let i = 0; i < tip.length; i++) {
    tip[i].classList.remove('button-active');
  }
  


  if (val == 5) {
    tip[0].classList.add('button-active');
    percentaje = 0.05;
  } else if (val == 10) {
    tip[1].classList.add('button-active');
    percentaje = 0.10;
  } else if (val == 15) {
    tip[2].classList.add('button-active');
    percentaje = 0.15;
  } else if (val == 25) {
    tip[3].classList.add('button-active');
    percentaje = 0.25;
  } else if (val == 50) {
    tip[4].classList.add('button-active');
    percentaje = 0.50;
  } else {
    percentaje = parseFloat(custom.value) / 100;
  }
  tipAmount.textContent = ((price.value * percentaje) / numberPeople.value).toFixed(2);
  total.textContent = (parseFloat(tipAmount.textContent) + (price.value / numberPeople.value)).toFixed(2);
}

function resetAll() {
  price.value = "";
  numberPeople.value = "";
  tipAmount.textContent = "0.00";
  total.textContent = "0.00";
  for (let i = 0; i < tip.length; i++) {
    tip[i].classList.remove('button-active');
  }

}

