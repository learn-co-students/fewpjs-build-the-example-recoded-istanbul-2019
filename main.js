// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.querySelector('#modal');
const likes = document.querySelectorAll('.like');
const hearts = document.querySelectorAll('.like-glyph');

mimicServerCall().then(res => {
  hearts.forEach(heart => {
    heart.innerHTML = FULL_HEART;
  });
}).catch(err => {
  modal.classList.remove('hidden');
  modal.innerHTML = err;
  setTimeout(() => {
    modal.classList.add('hidden');
  }, 5000);
});

likes.forEach(like => {
  like.addEventListener('click', function (e) {
    e.target.childNodes[1].innerHTML = EMPTY_HEART;
  });
})



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
