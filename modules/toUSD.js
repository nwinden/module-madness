var toUSD = function(num) {

  return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');

  }

module.exports =  toUSD;
