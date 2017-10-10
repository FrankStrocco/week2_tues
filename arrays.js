
//This function will return the highest number in an array.
function highestNumber(arr) {
  var max
  arr.forEach(function(element){
    if (element > max || max == undefined) {
      max = element;
    }
  });
  console.log(max);
}

var array = [2, 17, 1, 2, -9, -88];


//This function will return the lowest number in an array.
function lowestNumber(arr) {
  var min = arr.pop();
  arr.forEach(function(element){
  if (element < min) {
    min = element;
  }
  });
  console.log("answer is " + min);
}

//This function will return the number in an array that is closest to zero.
function closestToZero(arr) {
  var closest
  arr.forEach(function(element) {
    if (Math.abs(element) < Math.abs(closest) || closest == undefined) {
    closest = element;
    }
  });
  console.log(closest);
}

//This function will return the sum of all numbers in an array.
function sum(arr) {
  var runningTotal = 0;
  arr.forEach(function(element){
    runningTotal += element
})
console.log(runningTotal)
}

// function finds the mean value of a given array

function mean(arr) {
  var sum = 0;
  arr.forEach(function(element){
    sum += element;
  });
  console.log(sum/arr.length)
}

// index of highest number

function highestNumIndex(arr) {
  var max = [];
  for (i=0; i < arr.length; i++){
    if (arr[i] > max[0] || max[0] == undefined) {
      max[0] = arr[i];
      max[1] = i;
    }
  };
  console.log(max[1]);
}


// siblings and parents sorting


var sib = ["Valerie", "Stephanie", "Bill"];
var par = ["William", "Bernadette"];

function sorting(names1, names2) {
  var sorted1 = names1.sort();
  var sorted2 = names2.sort().reverse();
  console.log(sorted1);
  console.log(sorted2);
}
//names1 sorted in order, names2 sorted in reverse order


var sib = ["Valerie", "Stephanie", "Bill"];
var par = ["William", "Bernadette"];


//names1 and names2 joined and then sorted in alphabetical order
function joinAndSort(names1, names2) {
  // var sorted1 = names1.sort();
  // var sorted2 = names2.sort().reverse();
  // console.log(sorted1);
  // console.log(sorted2);
  var joined = names1.concat(names2);
  var sortedJoined = joined.sort();
  console.log(sortedJoined);
}

// checks if search name matches names in arrays

function joinAndSort(names1, names2, search) {
  var joined = names1.concat(names2);
  var sortedJoined = joined.sort();
  var answer = false;
  sortedJoined.forEach(function(element){

    if (search === element){
      answer = true;
      console.log(search + " is one of the names in the list.");
    }

  });
  if (answer == false) {
    console.log("No names match that search!")
  }
}


// even elements only are printed

function evenElements(arr) {
  var resultArray = [];
  arr.forEach(function(el) {
    if (el % 2 == 0) {
      resultArray.push(el);
    }
  });
  return resultArray
}

function oddElements(arr) {
  var resultArray = [];
  arr.forEach(function(el) {
    if (el % 2 == 1) {
      resultArray.push(el);
    }
  });
  return resultArray
}

// function fun(num) {
//   return num * 2
// }

function x(num) {
  return num / 3
}
function mapArray(array, fun){
  var returnArray = [];
  array.forEach(function(element){
    returnArray.push(fun(element));
  });
  console.log(returnArray);
}

var arr = [1, 2, 3];
mapArray(arr, fun);



function isTrue(num) {
  return (num > 6);
}

function trueOnly(arr, funct) {
  var newArr = [];
  arr.forEach(function(el){
    if (funct(el)) {
    newArr.push(el);
    }
  });
  return newArr;
}
