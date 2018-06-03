/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  var getItem=function(input,getValue) {
    var value = ''
    var unit = ''
    for (var c=0;c<input.length;c++)
    {
      if (Number.isNumeric(input[c])==true ||
        input[c]==='.' ||
        input[c]==='/') {
        value = value+input[c]
      } else  {
          // unit
          unit = unit+String.toLowerCase(input[c])
        }
      }
    if (getValue===false) {
      return unit
    } else {
      return value    
    }
  }
    
    
  
  
  this.getNum = function(input) {
    var result = getItem(input,true)
    return result
  }
  
  this.getUnit = function(input) {
    var result = getItem(input,false)
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var unit = getItem(initUnit,false)
    
    var result=''
    if (unit==='kg') {
      result='lb'  
    }
    if (unit==='lb') {
      result='kg'  
    }
    if (unit==='l') {
      result='gal'  
    }
    if (unit==='gal') {
      result='l'  
    }
    if (unit==='mi') {
      result='km'  
    }
    if (unit==='km') {
      result='mi'  
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result='invalid unit'
    if (unit==='mi'){
      result = 'miles'
    }
    if (unit==='l'){
      result = 'liters'
    }
    if (unit==='km'){
      result = 'kilometers'
    }
    if (unit==='lb'){
      result = 'pounds'
    }
    if (unit==='gal'){
      result = 'gallons'
    }
    if (unit==='kg'){
      result = 'kilograms'
    }
    
    return result;
  }
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result=0.0
    var num = eval(initNum)
    
    if (initUnit==='l') {
      result = num/galToL
    }

    if (initUnit==='gal') {
      result = num*galToL  
    }

    if (initUnit==='kg') {
      result = num/lbsToKg
    }
    
    if (initUnit==='km') {
      result = num/miToKm
    }
    
    if (initUnit==='mi') {
      result = num*miToKm
    }
    
    if (initUnit==='lb') {
      result = num*lbsToKg
    }

    return result.toFixed(5);
  }
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result = initNum+' '+this.spellOutUnit(initUnit)+' converts to '+returnNum+' '+this.spellOutUnit(returnUnit)
    return result;
  }
  
}

module.exports = ConvertHandler;
