// add scripts
var code = require('utility.js');

$(document).on('ready', function() {
  console.log('sanity check!');

var storedTotalTips = 0;
var storedMealCount = 0;
var storedAverageTips = 0;

var submit = $('input').eq(3);
var clear = $('input').eq(4);
var reset = $('input').eq(5);



clear.on('click', function() {
  clearValues();
});

submit.on('click', function(event) {
  event.preventDefault();

  var mealPrice = +$('input').eq(0).val();
  var taxRate = +$('input').eq(1).val();
  var tipPercent = +$('input').eq(2).val();

  var subtotalText = $('.totals').find('p').eq(0);
  subtotalText.text("Subtotal: $" + mealPrice);

  var tipText = $('.totals').find('p').eq(1);
  var tipTotal = mealPrice * (tipPercent / 100);
  tipText.text("Tip: $" + tipTotal.toFixed(2));

  var totalText = $('.totals').find('p').eq(2);
  var taxTotal = mealPrice * (taxRate / 100);
  totalText.text('Total: $' + (mealPrice + tipTotal + taxTotal));

  var totalTipsText = $('.totals').find('p').eq(3);
  storedTotalTips += tipTotal;
  totalTipsText.text("Total Tips: $" + storedTotalTips);

  var mealCount = $('.totals').find('p').eq(4);
  storedMealCount += 1;
  mealCount.text("Meal count: " + storedMealCount);

  var averageTip = $('.totals').find('p').eq(5);
  storedAverageTips = (storedTotalTips / storedMealCount);
  averageTip.text("Average tip: $" + storedAverageTips.toFixed(2));
});


reset.on('click', function() {
  for (var i = 0; i < $('.totals').find('p').length; i++) {
    $('.totals').find('p').text('');
  }
});

});
