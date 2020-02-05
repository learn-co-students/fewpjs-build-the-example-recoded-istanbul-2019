// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


document.addEventListener("DOMContentLoaded", function() {
  
  document.querySelector('#modal').classList.add('hidden');

  for (const glyph of document.querySelectorAll('.like-glyph')) {
    glyph.onclick = () => {
      mimicServerCall()
      .then(() => {
        if (glyph.classList.contains('activated-heart')) {
          glyph.classList.remove('activated-heart');
        } else {
          glyph.classList.add('activated-heart');
        }
      })
      .catch((err) => {
        document.querySelector('#modal').classList.remove('hidden');
        document.querySelector('#modal-message').textContent = err.message;
        setTimeout(function(){ document.querySelector('#modal').classList.add('hidden'); }, 5000);
      })
    };
  }

});
done();
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

