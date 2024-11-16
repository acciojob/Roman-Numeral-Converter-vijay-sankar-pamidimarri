function convertToRoman(num) {
    const obj = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];

  let res = "";

  // Loop through the array of Roman numeral-value pairs
  for (const [roman, value] of obj) {
    // While the number is greater than or equal to the value, append the Roman numeral
    while (num >= value) {
      res += roman;  // Append the Roman numeral
      num -= value;  // Subtract the value from the number
    }
  }

  return res; 

  //your code here

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
