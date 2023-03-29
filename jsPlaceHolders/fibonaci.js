// index = non-zero, positive number
let fibonaci = (index) => {
	if (index === 1 || index === 2) return 1
	return fibonaci(index - 1) + fibonaci(index - 2)
}

// for (let i = 1; i < 21; i++) {
// 	console.log(fibonaci(i))
// }

let fibNums = [ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233] 
let fibNumsTen = [ 10, 10, 20, 30, 50, 80, 130, 210, 340, 550, 890, 1440, 2330] 
// 13 prime and a fib number. 13 numbers in the array.

module.exports = { fibNums }
