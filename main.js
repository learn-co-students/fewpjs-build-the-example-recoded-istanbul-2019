// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
let lis =  document.getElementsByClassName('like-glyph');
// Your JavaScript code goes here!
function fclicked(event){
  mimicServerCall()
    .then(function(serverMessage){
     // let res = document.getElementsByClassName('like-glyph')[0];
     let res = event.target;
      if(res.innerText == FULL_HEART){
        res.innerText = EMPTY_HEART;
        res.classList.remove('activated-heart');
      }
      else{
       res.innerText = FULL_HEART ;
       res.classList.add('activated-heart');
      }
    })
    .catch(function(error) {
      let mod = document.getElementById('modal') ; 
      mod.classList.remove('hidden');
      mod.innerText = error;
      setTimeout(function(){ mod.classList.add('hidden'); }, 5000);
    });
}

for (let lib of lis) {
  lib.addEventListener("click", fclicked);
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
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
