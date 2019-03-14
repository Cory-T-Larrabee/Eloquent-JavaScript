/*
Make the Group class from the previous exercise iterable. Refer to the section about the iterator interface earlier in the chapter if you aren’t clear on the exact form of the interface anymore.

If you used an array to represent the group’s members, don’t just return the iterator created by calling the Symbol.iterator method on the array. That would work, but it defeats the purpose of this exercise.

It is okay if your iterator behaves strangely when the group is modified during iteration.
*/
class Group {
	constructor () {
		this.set = [];
	}
	add(value) {
		if(!this.has(value)) {
			this.set.push(value);
		}
	}
	delete(value) {
		this.set.splice(this.set.indexOf(value),1);
	}
	has(value) {
		return this.set.includes(value);
	}
	static from (set) {
		let group = new Group;
		for(let val of set)
		{
			group.add(val);
		}
		return group;
	}
	[Symbol.iterator]() {
		return new GroupIterator(this);
	}
}
	
class GroupIterator {
	constructor(group) {
		this.pos = 0;
		this.group = group;
	}

	next() {
		if (this.pos >= this.group.set.length) {
			return {done: true};
		}
		else
		{
			let result = {value: this.group.set[this.pos], done: false};
			
			this.pos++;

			return result;
		}
	}
}
  
for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
