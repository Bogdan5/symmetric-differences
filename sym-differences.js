
function sym(args) {
  var argums = Array.prototype.slice.call(arguments);
  var result = argums.reduce(function(sdiff,value){
    var diff = [];
    
    function notInArr(a,b){
      a.forEach(function(elem){
        for (var i=0;i<b.length;i++){
          if (elem===b[i]){
            return;
          }
        }
        diff.push(elem);
      });
    }
    notInArr(sdiff,value);
    notInArr(value,sdiff);
    return diff;
  },[]);
  var reduced =[];
  firstloop: for (var i=0;i<result.length;i++){
    for (var j=i+1;j<result.length;j++){
      if (result[i]===result[j]){
        continue firstloop;
      }
    }
    reduced.push(result[i]);
  } 
  
  return reduced;
}

sym([1, 2, 3], [5, 2, 1, 4]);
