/*
Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.

Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one runs faster?
*/

let reverseArray = (array) => {
		let newArray = [];
		
		for(let i = array.length - 1; i >= 0; i--)
		{
			newArray.push(array[i]);
		}
		
		return newArray;
	}
	
	let reverseArrayInPlace = (array) => {
		let newArray = [];
		
		for(let i = array.length - 1; i >= 0; i--)
		{
			newArray.push(array[i]);
		}
		
		for(let i = newArray.length - 1; i >= 0; i--)
		{
			array[i] = newArray[i];
		}
	}
	
	console.log(reverseArray(["A", "B", "C"]));
	let arrayValue = [1, 2, 3, 4, 5];
	reverseArrayInPlace(arrayValue);
	console.log(arrayValue);
