// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


let likeBtns = document.querySelectorAll('.like')


for( let btn of likeBtns){
  btn.addEventListener('click',likeBtnCall)
}

function likeBtnCall(e){
  mimicServerCall()
  .then(()=>{
    if(e.target.className = ''){
      e.target.innerText = FULL_HEART
      e.target.className = 'activated-heart'
      e.target.style.color ='red'
     
    }
    else{
      e.target.innerText = EMPTY_HEART
      e.target.className = ''
      e.target.style.color = ''
    }
   
  })
  .catch((error)=>{
    console.log(error)
    setTimeout(document.querySelector('#modal').className='', 5000)
    
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
