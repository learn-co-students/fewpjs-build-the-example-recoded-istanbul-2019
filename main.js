// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
//added hidden class to error modal in html 
//when a user clicks on empty heart Recognizing events- invoke mimicServerCall
//mimicServerCall randomly fails to stimultae faulty network conditions
//- When the server returns a failure status -> 
//respond to error using .catch(() => {}) block after then.(()=> {})
//dipslay error modal by removing hidden class
//display server error message in modal
//use setTimeout to hide modal after 5 seconds 
//when server rreturns a success status change heart to full heart
// add .activated-heart class to make the heart appear red
// when user clicks on full heart change heart back to empty heart 
//remove .activated-heart class 

let heartButton = document.querySelectorAll(".like-glyph")

for (let i of heartButton){
  i.addEventListener("click", redHeart)
}

function redHeart(element){
  mimicServerCall() 
  .then(() => {
    if(element.target.innerText === EMPTY_HEART){
      element.target.innerText = FULL_HEART
      element.target.classList.add("activated-heart");
    }
    else{
      element.target.innerText === EMPTY_HEART
      element.target.classList.remove("activated-heart")
    }
  })
  .catch((error)=> {
    console.log(error)
    setTimeout(()=> document.querySelector("#modal").classList.add("hidden"),5000)
  });
}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
