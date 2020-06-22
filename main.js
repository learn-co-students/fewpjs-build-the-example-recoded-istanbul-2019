// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const likeBtn = document.querySelector('.like-glyph');
const modal = document.querySelector('#modal');
modal.classList.add('hidden');
let flag = true;

  likeBtn.addEventListener('click' , function(e){
    
    mimicServerCall()
    .then((data) =>{console.log(data)})
    .catch((error) =>{
      setTimeout(function(){
        modal.classList.remove('hidden');
      } , 5000)  
  
    })
    if(flag){
      flag = false;
      likeBtn.innerText = FULL_HEART;
    }else{
      flag = true;
      likeBtn.innerText = EMPTY_HEART;
    }
    
  
  
});



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
