/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

// function maxOfTwoNumbers(numA, numB) {
//     let larger
//     if(numA > numB) {
//         larger = numA
//     } else if (numB > numA) {
//         larger = numB
//     } else {
//         larger = numA
//     }
//     return larger
// }

function maxOfTwoNumbers(numA, numB) {

    if(numA > numB) {
        return numA
    } else if (numB > numA) {
        return numB
    } else {
        return numA
    }

}
  
console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));
  
  