const keys = document.querySelectorAll('.controlContainer');
console.log(keys);
keys.forEach(control=>{
    control.addEventListener('transitionend',event=>{
        control.classList.remove('playing');
    })
})
document.addEventListener('keyup',event=>{
    const keyId = event.keyCode;
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const label = document.querySelector(`div[data-key="${event.keyCode}"]`);
    if (!audio) return;
    label.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
})
