 
function playSound (e) {
    //console.log(e.keyCode) will show us the keycode
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if(!audio) return; //stops function from running. 
    audio.currentTime = 0; //rewind to the start
    audio.play();
    // console.log(key) 
    key.classList.add('playing');
}

function removeTransition(e){
    // console.log(e)
    if (e.propertyName !== 'transform') return; //skip it if its not a transition
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
//each key gets an event listenere added to it called transitionend, and when the transition ends we will remove it  
window.addEventListener('keydown', playSound)