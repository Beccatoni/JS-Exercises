/* Write a JS program to check two
 numbers and return true if one of the numbers
is 100 or if the sum of the two numbers is 100
*/

const isEqualTo100 = (a,b) => a === 100 || b === 100 || a + b === 100;
//     {
//     if(a === 100 || b === 100 || a + b === 100 ){
//         return true;
//     } else{
//         return false;
//     }
// }
console.log(isEqualTo100(34,0));