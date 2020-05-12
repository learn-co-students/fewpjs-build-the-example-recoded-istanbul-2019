// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorModal = document.getElementById('modal') // Error Node
errorModal.className = 'hidden'
const heartBtn = document.querySelectorAll('span.like-glyph') //heart buttons span elements

let glyphStates = {
  EMPTY_HEART: FULL_HEART,
  FULL_HEART: EMPTY_HEART
};

let colorStates = {
  "red" : "",
  "": "red"
};

document.addEventListener('DOMContentLoaded', event => {
  errorModal.hidden = true
  heartClick() // Turn Heat Red On Click
})

function heartClick() {// forEach span, if clicked invoke function
    heartBtn.forEach(span => {
    span.addEventListener('click', callback);
  })
}

function callback(e){
  let heart = e.target
  mimicServerCall()
  .then(message => { // DO THIS WHEN PROMISE IS FULFILLED
    heart.innerText = glyphStates[heart.innerText] // just switch current to new text/html
    heart.style.color = colorStates[heart.style.color] // just switch current to new color
    console.log('Promise Fulfilled')
  })
  .catch(message => { // DO THIS WHEN PROMISE IS REJECTED
    errorModal.hidden = false
    console.log("Promise Rejected")
    setTimeout(function(){
      errorModal.hidden = true
    },5000)
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
