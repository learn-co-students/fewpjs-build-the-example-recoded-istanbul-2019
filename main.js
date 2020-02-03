// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

//Add the `.hidden` class to the error modal in the HTML so it
//does not appear when the page first loads
let errorModal = document.querySelector('#modal');
let errorMessage = document.querySelector('#modal-message');
errorModal.className = 'hidden';
let getHearts = document.querySelectorAll('.like-glyph');
let getAllli = document.getElementsByTagName('li');
let isRed = false;

//------------Invoke mimicServerCall to simulate making a server request----

mimicServerCall().then(e => {
/**
 *  When the server returns a success status
      * Change the heart to a full heart
      * Add the `.activated-heart` class to make the heart appear red
 */

 for(let i =0 ; i < getHearts.length; i++){
   getHearts[i].textContent = FULL_HEART;
   getHearts[i].addEventListener('click', event => {
     if(isRed === true){
        getHearts[i].className = 'like-glyph';
        isRed =false;
     } else {
      getHearts[i].className = 'activated-heart';
      isRed =true;
     }
   })
 }

 

 

}).catch(err => {
  errorModal.className = '';
  errorModal.textContent = err;
  showError();
 
})

//      * Use `setTimeout` to hide the modal after 5 seconds (add the `.hidden` class)

function showError(){
  setTimeout(() => {
  errorModal.className ='hidden';
  }, 5000);
}

function changeHeart(){

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
