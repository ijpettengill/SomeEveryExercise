//has at least 1 odd number
function hasOddNumber(arr){
    return arr.some(function(val){
      return val % 2 !== 0;
    })
  }

  //has at least 1 zero
  
  function hasAZero(num){
    return num.toString().split('').some(function(val){
      return val === '0';
    })
  }

  //has only odd numbers
  
  function hasOnlyOddNumbers(arr){
    return arr.every(function(val){
      return val % 2 !== 0;
    })
  }

  //has no duplicate numbers
  
  function hasNoDuplicates(arr){
    return arr.every(function(val){
      return arr.indexOf(val) === arr.lastIndexOf(val);
    });
  }

  //has certain keys included
  
  function hasCertainKey(arr, key){
    return arr.every(function(val){
      return key in val
    })
  }

  //has certain values included
  
  function hasCertainValue(arr, key, searchValue){
    return arr.every(function(val){
      return val[key] === searchValue;
    })
  }