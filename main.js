// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeHeartBtn = document.querySelectorAll(".like-glyph");
const div = document.querySelector("div")
let i = 0
likeHeartBtn.forEach(element => {
    element.addEventListener("click", function() {
        mimicServerCall()  
            .then(() => {})
            .catch(function(error)  {   
                div.classList.remove("hidden")
                let p = document.createElement("p")
                p.textContent = error;
                div.appendChild(p)
                document.body.append(error)
                setTimeout(function() {   
                    div.classList.add("hidden")

                }, 5000) 
            })
            .then(function() {
                if (i == 1) {
                    element.classList.remove("activated-heart")
                    i = 0
                } else {
                    element.classList.add("activated-heart")
                    i = 1
                }
            })







    })
});




//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
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