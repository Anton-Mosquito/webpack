function guessNumber() {
    const getRandom = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let findNumber = getRandom(1, 100);
    let btn = document.querySelector('#calcOfNumbers');
    btn.addEventListener('click', function() {
        let dataFromUser = +(document.querySelector('#dataFromUser').value);
        let res = document.querySelector('#resGuessNumber');
        if (dataFromUser < findNumber) {
            res.style.backgroundColor = 'red';
            res.innerHTML = 'Enter the bigger number';
        } else if (dataFromUser > findNumber) {
            res.style.backgroundColor = 'violet';
            res.innerHTML = 'Enter the less number';
        } else {
            res.innerHTML = 'You are guess!';
            res.style.backgroundColor = 'green';
        }
    });
};
guessNumber();