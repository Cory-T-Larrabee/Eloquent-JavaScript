/*
Most data structures provided in a standard JavaScript environment aren’t very well suited for persistent use. Arrays have slice and concat methods, which allow us to easily create new arrays without damaging the old one. But Set, for example, has no methods for creating a new set with an item added or removed.

Write a new class PGroup, similar to the Group class from Chapter 6, which stores a set of values. Like Group, it has add, delete, and has methods.

Its add method, however, should return a new PGroup instance with the given member added and leave the old one unchanged. Similarly, delete creates a new instance without a given member.

The class should work for values of any type, not just strings. It does not have to be efficient when used with large amounts of values.

The constructor shouldn’t be part of the class’s interface (though you’ll definitely want to use it internally). Instead, there is an empty instance, PGroup.empty, that can be used as a starting value.

Why do you need only one PGroup.empty value, rather than having a function that creates a new, empty map every time?
*/
class PGroup {
		constructor (set) {
			this.set = set;
		}
		add(value) {
			if(!this.has(value)) {
				return new PGroup(this.set.concat([value]));
			}
		}
		delete(value) {
			return new PGroup(this.set.filter(x => x !== value));
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
	}
	
PGroup.empty = new PGroup([]);
  
let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false
