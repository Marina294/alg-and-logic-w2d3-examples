let arr2 = [56, 98, 65, 3, 4, 58, 68, 90, 12, 34, 45];

const selectionSort = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minimum = i;
    for (let j = i; j < arr.length; j++){
      if (arr[j] < arr[minimum]) {
        minimum = j;
      }
    }

    if (minimum != i) {
      let currentI = arr[i];
      arr[i] = arr[minimum];
      arr[minimum] = currentI;
    }
  }
  return arr
};

console.log(selectionSort(arr2));