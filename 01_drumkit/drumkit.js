const keys = document.querySelectorAll('.controlContainer');
console.log(keys);

keys.forEach(key => {
    key.addEventListener('click', (event) => {
        const keyId = event.target.dataset.key;
        const audio = document.querySelector(`audio[data-key="${event.target.dataset.key}"]`);
        if (!audio) return;

        //key.classList.add('playing');
        audio.currentTime = 0;
        audio.play();
    })
})