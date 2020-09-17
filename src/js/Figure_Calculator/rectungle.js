function calculatePerimetrOfRect() {
    let btn = document.querySelector('#calculatePerimetrofRectungle');
    btn.addEventListener('click', () => {
        let side = document.querySelector('#dataSideOfRect1');
        let side1 = document.querySelector('#dataSideOfRect2');
        let res = document.querySelector('#resultCalculatePerimetrOfRect');
        res.value = 2 * (Number(side.value) + Number(side1.value));
    });
}

function calculateSquareOfRect() {
    let btn = document.querySelector('#calculateSquareofRectungle');
    btn.addEventListener('click', () => {
        let side = document.querySelector('#dataSideOfRect1').value;
        let side1 = document.querySelector('#dataSideOfRect2').value;
        let res = document.querySelector('#resultCalculateSquareOfRect');
        res.value = Number(side) * Number(side1);
    });
}
calculatePerimetrOfRect();
calculateSquareOfRect();


export { calculatePerimetrOfRect };
export { calculateSquareOfRect };