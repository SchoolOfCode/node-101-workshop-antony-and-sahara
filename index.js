
import myCollection from "./collection.js";
  
  
  
console.log(myCollection);

//2c. Create a function called `describeItem`, which should take in an item as a parameter 
function describeItem(item){        // describe item taking in an object
  if (item.count === 1){
  console.log(`I have a ${item.name}. Here's what I like about it: ${item.whatILike}`)    // if the item count property === 1, console log this
  }else{
  console.log(`I have ${item.count} ${item.name}'s. Here's what I like about them: ${item.whatILike}`)  // otherwise, console log this
  }
}

describeItem(myCollection[0]);  //calling the function with the first object in "myCollection"


function describeCollection(somearray) {       // function takes an array
    for (let i=0; i<somearray.length; i++){     // i goes through the length of the array
        describeItem(somearray[i]);            // each time i increases, it looks at the next thing in the array (e.g. somearray[0]. somearray[1])
    }
}

describeCollection(myCollection);                // calling function on my Collection



// moved myCollection to collection.js