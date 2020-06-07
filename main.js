// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

// Your JavaScript code goes here!
let LikeBtnState = false;
handleHeartIconChange = (e) => {
	if (e.target.innerText === EMPTY_HEART) {
		e.target.classList.add('activated-heart');
		e.target.innerHTML = FULL_HEART;
		LikeBtnState = true;
	} else {
		e.target.classList.remove('activated-heart');
		e.target.innerHTML = EMPTY_HEART;
	}
};
const likeBtn = document.querySelectorAll('.like-glyph');

likeBtn.forEach((element) => {
	element.addEventListener('click', (e) => {
		mimicServerCall()
			.then(handleHeartIconChange(e))
			.catch((error) => {
				document.querySelector('#modal').classList.remove('hidden');
				errorMsg = document.querySelector('#modal-message');
				errorMsg.innerHTML = error.message;
				setTimeout(function () {
					document.querySelector('#modal').classList.add('hidden');
				}, 5000);
			});
	});
});
//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url = 'http://mimicServer.example.com', config = {}) {
	console.log('likeBtn clicked');
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			let isRandomFailure = Math.random() < 0.2;
			if (isRandomFailure) {
				reject('Random server error. Try again.');
			} else {
				resolve('Pretend remote server notified of action!');
			}
		}, 300);
	});
}
