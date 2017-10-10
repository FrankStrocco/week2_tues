



var i = 0
while (i < 10) {
  console.log(i)
  i++
}

for (var a = 10; a > 0; a--) {
  console.log(a);
}



// duplicate removal array function


function mergeArray (arr1, arr2) {
  var newArr = arr1.concat(arr2);
  var resultArr = [];
  newArr.forEach(function(element){
    if (!resultArr.includes(element)) {
      resultArr.push(element);
    }
  });
  return resultArr;
}


function fillArray(value, quantity) {
  var array = [];
    while (quantity > 0) {
      array.push(value);
      quantity--
    }
  console.log(array)
}

//
// function isFalse(el) {
//   return el == false;
// }
// function isNull(el) {
//   return el == null;
// }
// function isZero(el) {
//   return el == 0;
// }
// function isBlank(el) {
//   return el == "";
// }
//
// function filterArray(arr){
//   var newArray = [];
//     arr.filter(isFalse);
//     arr.filter(isNull); && (arr.filter(isZero)) && (arr.filter(isBlank))) {
//       newArray.push(element);
//     }
//     console.log(newArray);
//   });
// }
