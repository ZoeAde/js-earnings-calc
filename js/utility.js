//clear button function
function clearValues() {
  for (var i = 0; i < 3; i++) {
    $('input').eq(i).val('');
  }
}

function locate(element, node, getValue) {
  if (getValue === false) {
    return $(element).eq(node);
  } else if (getValue === true) {
    return +$(element).eq(node).val();
  }
}

function tipDollarAmount(total, percent) {
  return total * (percent / 100);
}

modules.export = {
  locate: locate,
  clearValues: clearValues,
  tipDollarAmount: tipDollarAmount
};
