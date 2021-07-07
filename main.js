// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let like = document.querySelectorAll(".like");

function addHeart(e) {
  let heart = e.target;
  console.log(heart.innerText)

  mimicServerCall()
    .then(function () {
      if (heart.innerText === EMPTY_HEART) {
        heart.innerText = FULL_HEART;
        heart.className = "activated-heart"
      }
      else {
        heart.innerText = EMPTY_HEART;
        heart.className = ""
      }

    })
    .catch(function (error) {
      console.log("error");
      document.getElementById("modal").className = "";
      setTimeout(() => {
        document.getElementById("modal").className = "hidden";
      }, 5000)

    });
}
console.log(like)
like.forEach((el) => {
  el.addEventListener("click", addHeart)
})

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
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
