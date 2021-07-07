// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!




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
        let wri=document.querySelectorAll('.like-glyph');
        for(let i=0;i<wri.length;i++)
        {
          wri[i].className+=" activated-heart"; 
        }
      }
    }, 300);
  });
}
mimicServerCall()
  .then(function(serverMessage){
      alert(serverMessage);
    })
.catch(function() {
let err=document.getElementById('modal');
err.className="";
setTimeout(function(){ err.className="hidden"; }, 5000);
  
}   );

 let wri=document.querySelectorAll('.like-glyph');
        for(let i=0;i<wri.length;i++)
        {
          wri[i].addEventListener('click',function(){
          wri[i].className+="like-glyph"; });
        }
