// Code your solutions in this file


const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names, event) {
    let messages = []; // Initialize an empty array to hold the messages.
    for (let i = 0; i < names.length; i++) { // Start the loop at index 0, continue until the end of the names array.
      // Generate a message for each name, incorporating the event name, and add it to the messages array.
      messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    
    return messages; // Return the array containing all messages.
  }
  
  const eventName = "surprise";
  console.log(writeCards(names, eventName));
  

  function countDown(number) {
    while (number >= 0) { 
      console.log(number);
      number--; // Decrease the number by 1.
    }
  }

  countDown(10);