/*
The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:
console.log(sum(range(1, 10)));

Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

*/

	let range = (start, end, step = 1) => {
			let rng = [];

			if((start > end && step > 0) || (start < end && step < 0) || (step == 0))
			{
				return rng;
			}
			else
			{
				if (step > 0)
				{
					for(let num = start; num <= end; num += step)
					{
						rng.push(num);
					}
					return rng;
				}
				else
				{
					for(let num = start; num >= end; num += step)
					{
						rng.push(num);
					}
					return rng;			
				}
			}

		}
		
		let sum = (range) => {
			let sum = 0;
			
			for(let number of range)
			{
				sum += number;
			}
			
			return sum;
		}
		
		console.log(range(1,10));
		console.log(range(5,2, -1));
		console.log(sum(range(1, 10)));
