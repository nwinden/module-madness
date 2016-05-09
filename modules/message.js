var randomNumber = require('./randomNumber');

var toUSD = require('./toUSD');

var message = {

 getRandomUSD : function(){
  return toUSD(randomNumber(100,1000000));
},

 balance : function(){
  return 'Account Balance:\n';
}
};

module.exports = message;
