function calculatePerimetr() {
    let btn = document.querySelector('#calculatePerimetr');
    btn.addEventListener('click', () => {
        let side = document.querySelector('#dataSide');
        let res = document.querySelector('#resultCalculatePerimetr');
        res.value = 4 * Number(side.value);
    });
}

function calculateSquare() {
    let btn = document.querySelector('#calculateSquare');
    btn.addEventListener('click', () => {
        let side = document.querySelector('#dataSide').value;
        let res = document.querySelector('#resultCalculateSquare');
        res.value = Math.pow(Number(side), 2);
    });
}

calculatePerimetr();
calculateSquare();


export { calculatePerimetr };
export { calculateSquare };