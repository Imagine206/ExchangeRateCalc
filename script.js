const currencyEl_one = document.getElementById('currency-one')
const currencyEl_two = document.getElementById('currency-two')
const amountEl_one = document.getElementById('amount-one')
const amountEl_two = document.getElementById('amount-two')


const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');



// Fetch Exchange and upadte the DOM
function calculate(){
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_one.value;

    console.log(currency_one, currency_two)

}


// Event Listeners
currencyEl_one.addEventListener('change', calculate)
currencyEl_two.addEventListener('change', calculate)
amountEl_one.addEventListener('input', calculate)
amountEl_two.addEventListener('input', calculate)
calculate();