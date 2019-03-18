/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {

  let validUnits = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
  
  this.getNum = function(input) {
    var result;
    let reg = /[A-Za-z]/;
    let ind = input.search(reg);
    result = input.substring(0, ind);
    if (result == '') return 1;
    if(result.indexOf('/') != -1) {
      let nums = result.split('/');
      if (nums.length > 2) return 'invalid number';
      result = nums[0] / nums[1];
    }
    if (result) return result
    return 'invalid number';
  };
  
  this.getUnit = function(input) {
    var result;
    let reg = /[A-Za-z]/;
    let ind = input.search(reg);
    result = input.substring(ind);
    if (validUnits.includes(result)) return result;
    else return 'invalid unit';
  };
  
  this.getReturnUnit = function(initUnit) {
    switch(initUnit.toLowerCase()) {
      case 'gal': return 'l';
      case 'l': return 'gal';
      case 'lbs': return 'kg';
      case 'kg': return 'lbs';
      case 'mi': return 'km';
      case 'km': return 'mi';
      default: return 'invalid unit';
    }
  };

  this.spellOutUnit = function(unit) {
    switch (unit.toLowerCase()) {
      case 'gal': return 'gallons';
      case 'l': return 'litres';
      case 'lbs': return 'pounds';
      case 'kg': return 'kilograms';
      case 'mi': return 'miles';
      case 'km': return 'kilometers';
      default: return 'invalid unit';
    }
  };
  
  this.convert = function(initNum, initUnit) {
    if (initNum == 'invalid number') return 'invalid number'
    if (!initNum) initNum = 1;
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    switch (initUnit.toLowerCase()) {
      case 'gal': return initNum*galToL;
      case 'l': return initNum/galToL;
      case 'lbs': return initNum*lbsToKg;
      case 'kg': return initNum/lbsToKg;
      case 'mi': return initNum*miToKm;
      case 'km': return initNum/miToKm;
      default: return 'invalid unit';
    }
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };
  
}

module.exports = ConvertHandler;
