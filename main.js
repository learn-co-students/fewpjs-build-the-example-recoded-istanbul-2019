// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let likeHeart = document.querySelectorAll('.like-glyph');
// let redHeart = document.createTextNode(FULL_HEART);
// likeHeart[0].appendChild(redHeart)
for (let element of likeHeart) {
  console.log(element)
  element.addEventListener('click', function(e){
     mimicServerCall()
    //  .then(function(res) {
    //    return res.json();
    //  })
     .then(function(){
       likeHeart = !likeHeart
       if (likeHeart) {
         element.setAttribute('class', 'activated-heart')
         element.innerHTML = FULL_HEART             //setAttribute('class', 'activated-heart')
       }else {
        element.setAttribute('class', 'like-glyph')
         element.innerHTML = EMPTY_HEART
       }
     })
     .catch(function(error) {
       
       if (error){
        console.log(error)
        let modalDiv = document.querySelector('#modal');
        modalDiv.classList.remove('hidden');
        modalDiv.innerHTML = error
        setTimeout(() => {
          modalDiv.classList.add('hidden')
        }, 5000);

       }

       

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
