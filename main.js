// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const heart = document.querySelector(".like-glyph")

//Adds an event listener on click to heart
heart.addEventListener("click", ()=>{
  mimicServerCall()
  .then(res => {
    const heartProperty = heart.innerHTML
    if(heartProperty === FULL_HEART) {
      heart.innerHTML = EMPTY_HEART
      heart.className = ""
    }
    else {
      heart.innerHTML = FULL_HEART;
      heart.className = "activated-heart";
    }
  })
  .catch(error => {
    const modal = document.querySelector("#modal");
    modal.className = "";
    const p = document.querySelector("#modal-message");
    p.innerHTML = error;
    setTimeout(errorMessage,3000)
  })
})

function errorMessage() {
  modal.className = "hidden";
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
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
