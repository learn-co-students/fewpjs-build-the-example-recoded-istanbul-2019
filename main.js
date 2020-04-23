// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let errorh= document.querySelector('#modal');
errorh.classList.add("hidden");

let hearts= document.querySelectorAll(".like-glyph");
for (const element of hearts){
  element.addEventListener("click",function(){
    mimicServerCall().then(()=>{
      if(element.textContent===EMPTY_HEART){
        element.textContent= FULL_HEART;
        element.classList.add('activated-heart');
      }
      else{
        element.textContent= EMPTY_HEART;
        element.classList.remove('activated-heart');
      }
     
    })
     .catch((error) => {
       errorh.classList.remove("hidden");
       errorh.textContent=error;
       setTimeout(function(){errorh.classList.add("hidden");}, 5000);
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
