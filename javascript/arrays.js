const fruits=[];
// to add some or more data to this array
fruits.push("apple","strawberry", "guava", "peach")
console.log("Array result push: ", fruits)

console.log("Fruits: ", fruits.at(1))

console.log("Array length before pop: ", fruits.length)
// to remove some data from array the end
// fruits.pop();


// to get length of the array
console.log("Array length: ", fruits.length)

// function displayEachFruit(currentItem,num){

//     console.log("Current fruit is: "+currentItem+" at index "+ num)
// }

// to iterate over each item of the array
// fruits.forEach((item) => {
//     console.log("Current fruit is: "+item)

// })

// to sort data
fruits.sort();


console.log("Fruits after sort: ", fruits)

// to remove data from start
fruits.shift();

console.log("Fruits after shift: ", fruits)

// to reverse elements of the array
fruits.reverse();

console.log("Fruits after reverse: ", fruits)
