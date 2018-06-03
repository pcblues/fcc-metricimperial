/*
*
*
*       Complete the handler logic below
*       
*       
*/

const kg='kg'
const lb='lbs'
const mi = 'mi'
const km='km'
const l = 'l'
const gal = 'gal'
const invalidNumber = 'invalid number'
const invalidUnit = 'invalid unit'
const invalidBoth = 'invalid number and unit'
const validUnits = ['l','mi','gal','km','kg','lbs']

function fractionToDecimal(f) {
  return f.split('/').reduce((n, d, i) => n / (i ? d : 1))
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function ConvertHandler() {
  var getItem=function(input,getValue) {
    var value = ''
    var unit = ''
    for (var c=0;c<input.length;c++)
    {
   
      if (isNumeric(input[c])==true ||
        input[c]==='.' ||
        input[c]==='/') {
        value = value+input[c]
      } else  {
          // unit
          unit = unit+input[c]
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
    if (result=='') {
      result = '1'
    }
    if(result.split('/').length>2) {
      result = invalidNumber
    } else {
      result = fractionToDecimal(result)
    }
    if (isNumeric(result)==false) {
      result=invalidNumber
    }
    
    return result
  }
  
  this.getUnit = function(input) {
    var result = getItem(input,false)
    if (validUnits.indexOf(result.toLowerCase())<0){
      result = invalidUnit
    }
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var unit = initUnit.toLowerCase()
    var result=''
    if (unit==kg) {
      result=lb  
    }
    if (unit==lb) {
      result=kg  
    }
    if (unit==l) {
      result=gal  
    }
    if (unit==gal) {
      result=l
    }
    if (unit==mi) {
      result=km  
    }
    if (unit==km) {
      result=mi  
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result='invalid unit'
    if (unit==mi){
      result = 'miles'
    }
    if (unit==l){
      result = 'liters'
    }
    if (unit==km){
      result = 'kilometers'
    }
    if (unit==lb){
      result = 'pounds'
    }
    if (unit==gal){
      result = 'gallons'
    }
    if (unit==kg){
      result = 'kilograms'
    }
    
    return result;
  }
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result=''
    if (initNum!==invalidNumber) {

      var num = initNum
      initUnit=initUnit.toLowerCase()

      if (initUnit===l) {
        result = num/galToL
      }

      if (initUnit===gal) {
        result = num*galToL  
      }

      if (initUnit===kg) {
        result = num/lbsToKg
      }

      if (initUnit===km) {
        result = num/miToKm
      }

      if (initUnit===mi) {
        result = num*miToKm
      }

      if (initUnit===lb) {
        result = num*lbsToKg
      }
      if (result!='') {
        result = parseFloat(result.toFixed(5)) 
      }
    }
    return result
  }
   
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result
    if (initNum==invalidNumber && initUnit==invalidUnit) {
      result=invalidBoth
    }else if (initNum==invalidNumber) {
      result= invalidNumber
    } else if (initUnit==invalidUnit) {
      result = invalidUnit
    } else {
      
    result = initNum+' '+this.spellOutUnit(initUnit)+' converts to '+returnNum+' '+this.spellOutUnit(returnUnit)
    }
    return result;
  }
  
}

module.exports = ConvertHandler;
