// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let heartButton = document.querySelectorAll(".like-glyph");

for (const iterator of heartButton) {
  iterator.addEventListener("click", clickButton);
}

function clickButton(click) {
  mimicServerCall()
    .then(() => {})
    .catch(function(error) {
      document.querySelector("div").remove("hidden");
      let p = document.createElement("p").innerHTML = error;
      document.querySelector("div").appendChild(p);
      document.body.append(error)
      setTimeout(function() {
        
      })
    })
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