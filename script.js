function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
	  5:['IX',9],
	  6:['VIII',8],
	  7:['VII',7],
	  8:['VI',6],
	  9:['V',5],		
      10:['IV', 4], 
	  11:['III', 3], 
	 12:['II', 2], 
	 13:['I', 1], 
    };
	let res="";
	for(let i of obj){
		const[key,value]=obj[i];
		while(num>=value){
			res+=key;
			num-=value;
		}
	}
	return res;

  //your code here

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
