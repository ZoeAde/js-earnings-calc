//clear button function
function clearValues() {
  for (var i = 0; i < 3; i++) {
    $('input').eq(i).val('');
  }
}


modules.export = {
  locate: locate,
  clearValues: clearValues,
  tipDollarAmount: tipDollarAmount
};
