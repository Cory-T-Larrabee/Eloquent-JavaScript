/*

*/

let arrayToList = (array) => {
	let listObj = null;

	for(let idx = array.length - 1; idx >= 0; idx--)
	{
		listObj = {value: array[idx], rest: listObj};
	}
	
	return listObj;
}

let listToArray = (listObj) => {
	let array = [];

	for(let listNode = listObj; listNode; listNode = listNode.rest)
	{
		array.push(listNode.value);
	}
	
	return array;
}

let prepend = (element, list) => {
	let newList = {};
	
	newList = {value: element, rest: list};
	return newList;
}

let nth = (list, n) => {
	if (!list)
	{
		return undefined;
	}
	else if (n == 0) 
	{
		return list.value;
	}
	else
	{
		return nth(list.rest, n - 1);
	}
}

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));
