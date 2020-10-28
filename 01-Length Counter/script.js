// write function to create a tweet and calculate its length
const calculateCharacter = () =>{
  let name=prompt("Enter your name");
  let tweet=prompt("Enter your tweet");

  let tweetCount=tweet.length;
  //calculate how many  char left
  let tweetleft=150-tweetCount;
    
 alert("Hi "+ name+" You have written " +tweetCount + " characters, you have "+ tweetleft+ " charecters remaining.")
}


// Invoke the function when button is clicked

btn.addEventListener('click', calculateCharacter);
   