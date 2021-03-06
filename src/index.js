import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeAPI from './js/currency.js';

function displayErrors(error) {
  console.log(error)
  if (parseInt(error) === 400) {
    $(".errors").text(`Error ${error}! That was a bad request!`);
  } else if (parseInt(error) === 403) {
    $(".errors").text(`Error ${error}! Your API key is invalid!`);
  } else if (parseInt(error) === 404) {
    $(".errors").text(`Error ${error}! That currency is not vaild!`);
  } else if (error != error.ok){
    $(".errors").text(`${error}!`);
  }
}
function getAndDisplay(response, amount, target, baseCode) {
  if (response.result) {
    $('.output').text(`$${amount} ${baseCode}, would be ${response.conversion_result} in ${target}. With a conversion rate of ${response.conversion_rate}.`);
  } else {
    displayErrors(response);
  }
}

async function makeApiCall(amount, baseCode, target) {
  const response = await ExchangeAPI.getCurrencyAndRate(amount, baseCode, target);
  getAndDisplay(response, amount, target, baseCode);
}

$('document').ready(function(){
  
  $('#formOne').submit(function(event){
    event.preventDefault();
    let amount = $('#amount').val();
    let baseCode = $('#baseCode').val();
    let target = $('#target').val();
    makeApiCall(amount, baseCode, target);
    $('.box1').show();
    $('#amount').val("");
    $(".errors").html("");
    $(".output").html("");
  });
});