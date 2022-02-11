import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeAPI from './js/currency.js';

function getAndDisplay(response, amount, target) {
  if (response.result) {
    $('.output').text(`$${amount} USD, would be ${Math.round(response.conversion_result)} in ${target}. With a conversion rate of ${response.conversion_rate}.`);
  } else {
    $('.errors').text(`There was an error: ${response}`);
  }
}

async function makeApiCall(amount, target) {
  const response = await ExchangeAPI.getCurrencyAndRate(amount, target);
  getAndDisplay(response, amount, target);
}

$('document').ready(function(){
  
  $('#formOne').submit(function(event){
    event.preventDefault();
    let amount = $('#amount').val();
    let target = $('#target').val();
    console.log(amount, target)
    makeApiCall(amount, target);

  })
})