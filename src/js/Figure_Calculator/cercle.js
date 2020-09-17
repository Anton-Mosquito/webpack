function calculateSquareOfCercle() {
    let btn = document.querySelector('#calculateSquareOfCercle');
    btn.addEventListener('click', () => {
        let radius = document.querySelector('#dataOfCercle').value;
        let res = document.querySelector('#resultCalculateSquareOfCercle');
        res.value = '';
        res.value = 2 * Math.PI * Number(radius);
    });
}

function calculateСircumference() {
    let btn = document.querySelector('#calculateСircumference');
    btn.addEventListener('click', () => {
        let radius = document.querySelector('#dataOfCercle').value;
        let diagonal = Number(radius) * 2
        let res = document.querySelector('#resultCalculateСircumference');
        res.value = '';
        res.value += Math.PI * diagonal;
    });
}
calculateSquareOfCercle();
calculateСircumference();


export { calculateSquareOfCercle };
export { calculateСircumference };