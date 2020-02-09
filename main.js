// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!;
let errorModal= document.getElementById("modal");
errorModal.className="hidden";
let modal = document.querySelector(".hidden");
// document.addEventListener("DOMContentLoaded",function(){
//     return 
// })

let likeHeart = document.querySelector(".like-glyph");

likeHeart.onclick=function(){
    mimicServerCall().then(function(res){
        likeHeart.className="activated-heart ";
        console.log("good")
    }).catch(()=>{
        let msg = "sorry bro";
        console.log(msg);
        errorModal.classList.remove("hidden");
        document.getElementById("modal-message").innerHTML=msg;
        setTimeout(function(){
            errorModal.className="hidden";
            
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
