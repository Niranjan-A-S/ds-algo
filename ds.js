//!Array
//Array Big 0 Time Complexities
/**
 * Insert/Remove from End - O(1)
 * Insert/Remove from Start - O(n)
 * Access - O(1)
 * Search - O(n)
 * Push/Pop - O(1)
 * Shift/Unshift/Splice/Slice - O(n)
 * Map/Filter/Reduce/ForEach - O(n)
 */

//!Object
//Object Big 0 Time Complexities
/**
 * Insert/Remove - O(1)
 *  Access - O(1)
 *  Search - O(n)
 * Object.keys() - O(n)
 * Object.values() - O(n)
 * Object.entries() - O(n)
 */

//!Set
// A set is a collection of unique values. Characteristics of a set are:
/**
 * A set is  a data structure that holds a collection of values. However, the values must be unique.
 * Set can contain a mix of different data types. You can store strings, numbers, booleans or any other data type in the same set.
 * Sets are dynamically sized. You don't need to specify the size of the set before creating it.
 * Sets are iterable. You can use a for...of loop to iterate over the set.
 * Sets don't maintain insertion order. The order in which you add values to the set is not guaranteed.
 * 
 */

const set = new Set();
const obj = { name: 'Sachin' };
set.add(obj);
set.delete({ name: 'Sachin' }); //!Very important
for (const item of set) {
    console.log(item);
}

//!Map
/**
 * A map is a collection of key-value pairs. Characteristics of a map are:
 * Objects are unordered whereas maps are ordered.
 * Keys in object can only be strings or symbols but in maps they can be any data type
 * Objects are not iterable while maps are.
 * An object has a prototype and may contain a few default keys which may collide with your own keys if you are not careful.
 * A map on the other hand does not contain any keys by default.
 * The number of items in an object must be determined manually whereas it is readily available with the size property in maps.
 * Apart from storing data you can attach functionality to an object whereas maps are restricted to storing data.   
 */

const map = new Map([['a', 1], ['b', 2]]);
map.set('c', 3);
map.delete('a');
console.log(map.has('a'));

for (const [key, value] of map) {
    console.log(`${key}: ${value}`);
}