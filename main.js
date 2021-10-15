function updateInventory(arr1, arr2) {
  for (let i = 0; i < arr2.length; i++) {
    let inventoryExist = arr1.every(function (element) {
      return arr2[i][1] != element[1];
    });
    if (inventoryExist) {
      arr1.push(arr2[i]);
    } else {
      let indexVal = arr1.findIndex(function (element) {
        return element[1] === arr2[i][1];
      });
      arr1[indexVal][0] += arr2[i][0];
    }
  }
  return arr1.sort(function (a, b) {
    a[1] < b[2] ? -1 : 1;
  });
}

var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"],
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"],
];

console.log(updateInventory(curInv, newInv));
