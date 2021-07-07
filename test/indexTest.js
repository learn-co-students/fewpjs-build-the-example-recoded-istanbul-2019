const sinon = require( 'sinon' );
const helpers = require( './helpers' );
const chai = require( 'chai' );
const spies = require( 'chai-spies' );

chai.use( spies );

describe( "main.js", () => {
  it("contains a hidden modal", () => {
    let modal = document.querySelector('.hidden')
    expect(modal).not.to.equal(null)
  } )
} )
function HiddenErrorModal(){

document.addEventListener('DOMContentLoaded', function(){
  createLikeEvents();  
});

function createLikeEvents(){
  document.querySelectorAll("li.like").forEach(function(likeButton){
    likeButton.addEventListener('click', function(){
      mimicServerCall()
      .then(function(response){
        let likeHeart = likeButton.children[0];
        if(likeHeart.innerHTML == EMPTY_HEART){
          likeHeart.innerHTML = FULL_HEART;
          likeHeart.className = 'activated-heart';
        } else {
          likeHeart.innerHTML = EMPTY_HEART;
          likeHeart.className = '';
        }
      })
      .catch(function(error){
        displayError(error);
      });      
    });
  });
}

function displayError(errorText){
  document.getElementById('modal').className = '';
  document.getElementById('modal-message').innerHTML = errorText;
  setTimeout(hideErrorModal, 5000);
};

function hideErrorModal(){
  document.getElementById('modal').className = 'hidden';
}
}