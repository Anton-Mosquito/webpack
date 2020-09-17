function calculateSquareOfTriangle() {
    let btn = document.querySelector('#calculateTriangle');
    btn.addEventListener('click', () => {
        let side1 = document.querySelector('#dataOfTriangle').value;
        let side2 = document.querySelector('#dataOfTriangle1').value;
        let side3 = document.querySelector('#dataOfTriangle2').value;
        let halfPerimetr = (Number(side1) + Number(side2) + Number(side3)) / 2;
        console.log(halfPerimetr);
        let res = document.querySelector('#resultCalculateTriangle');
        res.value = '';
        res.value = Math.sqrt(halfPerimetr * (halfPerimetr - Number(side1)) * (halfPerimetr - Number(side2)) * (halfPerimetr - Number(side3)));
    });
}
calculateSquareOfTriangle();
export default calculateSquareOfTriangle;