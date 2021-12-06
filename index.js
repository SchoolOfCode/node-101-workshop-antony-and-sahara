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

