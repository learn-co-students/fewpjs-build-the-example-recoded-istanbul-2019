// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let err = document.querySelector('#modal')
function hide () {
  err.setAttribute("class","hidden")
}
hide()
document.addEventListener("DOMContentLoaded",function (){

  let array = document.querySelectorAll(".like-glyph")
  for (let index = 0; index < array.length; index++) {
    array[index].addEventListener("click",function (e){
      heart = e.target
      mimicServerCall()
      .then(function(){
        if (heart.innerHTML === FULL_HEART){
          heart.innerHTML = EMPTY_HEART
          heart.classList.remove("activated-heart")
        }else{

          alert("heloooo")
          heart.innerHTML = FULL_HEART
          heart.setAttribute("class",'activated-heart')
        }

      })
      .catch(() => {
        err.classList.remove("hidden")
        setTimeout(hide,5000)
      })
    })
    
  }
})




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
