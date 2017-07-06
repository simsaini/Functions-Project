// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(num1, num2){
	if (num1 > num2){
		return num1
	}
	else{
		return num2
	}
}

console.log (max(8, 2))
// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(num3, num4, num5){
	if (num3>num4 && num3>num5){
		return num3
	}
	else if (num4> num3 && num4>num5){
		return num4
	}
	else {
		return num5
	}
}
	console.log(maxOfThree(12, 4, 2))
    // Your answer here



// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char){
	if ("char" === "a"||"e"||"i"||"o"||"u"||"A"||"E"||"I"||"O"||"U"){
		return true
	}
	else {
		return false
	}
}
console.log(isVowel("a"))

// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.
function sum(add1,add2){
	return add1 + add2
}
console.log(sum(1,4))


// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.
function avg(p1,p2,p3){
	return (p1+p2+p3)/3
}
console.log(avg(2,2,2))


// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.
function getLength(aString){
	return aString.length
}

console.log(getLength("whats up"))

// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.
function greaterThan(g1, g2){
	if (g1 < g2){
		return true
	}
	else
		return false
}
console.log(greaterThan(1,67))


// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.
function greet(name){
	return "hello " + name + "!";
}

console.log(greet("sim"))


// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.

function madLibs(w1,w2,w3,w4){
	return "The " + w1 + " flew to the " + w2 + " with his " + w3 + " because he wanted a " + w4
}

console.log(madLibs("cat", "yard", "mom", "mouse"))
