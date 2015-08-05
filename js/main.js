

$(document).on('ready', function() {
  console.log('sanity check!');

  var submit = $('input').eq(3);
  var clear = $('input').eq(4);
  var reset = $('input').eq(5);

  var storedTotalTips = 0;
  var storedAverageTips = 0;
  var storedMealCount = 0;

  clear.on('click', function() {
    clearValues();
  });

  reset.on('click', function() {
    for (var i = 0; i < $('span').length; i++) {
      $('span').not('.small').text('');
    }
    clearValues();
    storedTotalTips = 0;
    storedMealCount = 0;
    storedAverageTips = 0;
  });

  submit.on('click', function(event) {
    event.preventDefault();

    var mealPrice = +$('input').eq(0).val();
    var taxRate = +$('input').eq(1).val();
    var tipPercent = +$('input').eq(2).val();

    var subtotalText = $('.totals').find('span').eq(0);
    subtotalText.text(" $" + mealPrice.toFixed(2));

    var tipText = $('.totals').find('span').eq(1);
    var tipTotal = getPercent(mealPrice, tipPercent);
    tipText.text(" $" + tipTotal.toFixed(2));

    var totalText = $('.totals').find('span').eq(2);
    var taxTotal = getPercent(mealPrice, taxRate);
    totalText.text(' $' + (mealPrice + tipTotal + taxTotal).toFixed(2));

    var totalTipsText = $('.totals').find('span').eq(3);
    storedTotalTips = storeTotal(storedTotalTips, tipTotal);
    totalTipsText.text(" $" + storedTotalTips.toFixed(2));

    var mealCount = $('.totals').find('span').eq(4);

    storedMealCount = storeTotal(storedMealCount);
    mealCount.text(" " + storedMealCount);

    var averageTip = $('.totals').find('span').eq(5);

    storedAverageTips = storeAvgTips(storedTotalTips, storedMealCount);

    averageTip.text(" $" + storedAverageTips.toFixed(2));
    clearValues();
  });






  function clearValues() {
    for (var i = 0; i < 3; i++) {
      $('input').eq(i).val('');
    }
  }

});
