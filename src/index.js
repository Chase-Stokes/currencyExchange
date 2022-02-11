import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeAPI from './js/currency.js';

function getAndDisplay(response, amount, target) {

}

async function makeApiCall(amount, target) {
  const response = await ExchangeAPI.getCurrencyAndRate();
  getAndDisplay(response, amount, target);
}

$('document').ready(function(){
  
  $('#formOne').submit(function(event){
    event.preventDefault();
    let amount = $('#amount').val();
    let target = $('target').val();
    makeApiCall(amount, target);

  })
})