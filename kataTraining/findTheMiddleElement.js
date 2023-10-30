// Doc
// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// function gimme(triplet) {
//   if (triplet[0] < triplet[1] && triplet[1] < triplet[2]) {
//     console.log(1);
//     return 1;
//   } else if (triplet[0] > triplet[1] && triplet[1] > triplet[2]) {
//     console.log(1);
//     return 1;
//   } else if (triplet[1] < triplet[2] && triplet[2] < triplet[0]) {
//     console.log(2);
//     return 2;
//   } else if (triplet[1] > triplet[2] && triplet[2] > triplet[0]) {
//     console.log(2);
//     return 2;
//   } else {
//     console.log(0);
//     return 0;
//   }
// }
function gimme(triplet) {
    const arr = [...triplet].sort((a, b) => a > b);
    for (let i = 0; i < triplet.length; i++) {
      if (triplet[i] === arr[1]) {
        console.log(i)
        return i;
      }
    }
  }
//best solutions
// function gimme(a) {
//     return a.indexOf(a.concat().sort(function(a, b) { return a - b })[1])
//   }
gimme([-2, -3, -1]);
// gimme([2.1, 3.2, 1.4]);
gimme([-5, -10, -14]);
