/*

*/

let size = 8, output = "";

for (let rowCount = 0; rowCount < size; rowCount++)
{
	for(let colCount = 0; colCount < size; colCount++)
	{
		if (rowCount % 2 === 0)
		{
			if(colCount % 2 === 0)
			{
				output += " ";
			}
			else
			{
				output += "#";
			}
		}
		else
		{
			if(colCount % 2 === 0)
			{
				output += "#";
			}
			else
			{
				output += " ";
			}
		}
	}

		output = output + "\n";
}
console.log(output);
