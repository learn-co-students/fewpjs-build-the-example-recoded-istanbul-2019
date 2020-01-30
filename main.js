// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const likes = document.querySelectorAll(".like span");
for(like of likes){
  like.addEventListener("click" , (e)=> {
    e.stopPropagation();
    mimicServerCall()
    .then(data => {
      e.target.classList.toggle("activated-heart");
      e.target.innerHTML=FULL_HEART;
    })
    .catch(err => {
      document.querySelector("div#modal").className="";
      setTimeout(() => {
      document.querySelector("div#modal").className="hidden";
        
      }, 5000);
    });
  
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
