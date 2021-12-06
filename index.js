let myCollection = [
    {
      name: "School of Code mug",
      count: 1,
      whatILike: "It has my cute pixel character on it!"
    },
    {
      name: "School of Code hat",
      count: 2,
      whatILike: "An often overlooked fashion accessory"
    },
    {
      name: "School of Code pillow",
      count: 1,
      whatILike: "Eat. Sleep. Code. Repeat :)"
    }
  ];


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


function describeCollection(somearray) {
    for (let i=0; i<somearray.length; i++){
        describeItem(somearray[i]);
    }
}

describeCollection(myCollection);

// 👉 2d. Now make a function called `describeCollection` that takes in an array as a parameter. The function should loop through the array, and for each item, it should call the `describeItem` function so it displays a message according to how many you have in your collection.

// Call your function below where you've defined it, handing in the `myCollection` array.

// Run the file again to see the output and check that it outputs the correct message for each item in your collection (i.e. each object in your `myCollection` array).