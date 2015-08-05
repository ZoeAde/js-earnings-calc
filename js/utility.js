var getPercent = function(price, percent) {
  return price * (percent / 100);
};

var storeTotal = function(itemTotal, increment) {
  if (increment === undefined) {
    return itemTotal += 1;
  } else {
    return itemTotal += increment;
  }
};

var storeAvgTips = function(storedTotalTips, storedMealCount) {
  return storedTotalTips / storedMealCount;
};


module.exports = {
  getPercent: getPercent,
  storeTotal: storeTotal,
  storeAvgTips: storeAvgTips
};
