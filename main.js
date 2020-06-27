// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeButton = document.querySelectorAll(".like")
console.log(likeButton[0].childNodes[0]);
let full = false;
for(let i = 0; i < likeButton.length; i++){
  likeButton[i].childNodes[1].addEventListener("click", e => {
    mimicServerCall()
      .then(changeheart(e))
      .catch(error => {
        document.querySelector("#modal").classList.remove("hidden");
        errorMsg = document.querySelector("#modal-message")
        errorMsg.innerHTML = error.message;
        setTimeout(function() {querySelector("#modal").classList.add("hidden")}, 5000)
      })
  })
}

changeheart = e => {
  if (full === false) {
    e.target.classList.add("activated-heart");
    full = true;
  } else {
    e.target.classList.remove("activated-heart");
  }
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
