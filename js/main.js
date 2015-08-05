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

  var subtotalText = $('.totals').find('span').eq(0);
  subtotalText.text(" $" + mealPrice.toFixed(2));

  var tipText = $('.totals').find('span').eq(1);
  var tipTotal = mealPrice * (tipPercent / 100);
  tipText.text(" $" + tipTotal.toFixed(2));

  var totalText = $('.totals').find('span').eq(2);
  var taxTotal = mealPrice * (taxRate / 100);
  totalText.text(' $' + (mealPrice + tipTotal + taxTotal).toFixed(2));

  var totalTipsText = $('.totals').find('span').eq(3);
  storedTotalTips += tipTotal;
  totalTipsText.text(" $" + storedTotalTips.toFixed(2));

  var mealCount = $('.totals').find('span').eq(4);
  storedMealCount += 1;
  mealCount.text(" " + storedMealCount);

  var averageTip = $('.totals').find('span').eq(5);
  storedAverageTips = (storedTotalTips / storedMealCount);
  averageTip.text(" $" + storedAverageTips.toFixed(2));
});


reset.on('click', function() {
  for (var i = 0; i < $('span').length; i++) {
    $('span').text('');
  }
  clearValues();
});

});
