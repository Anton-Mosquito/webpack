function minDivisors() {
    let res = document.querySelector('#resultOfMinDividers');
    let btn = document.querySelector('#calcOfMinDividers');
    const nod = (x1, x2) => {
        if (x2 == 0) return x1;
        return nod(x2, x1 % x2);
    }
    btn.addEventListener('click', function() {
        let x = +(document.querySelector('#dataOfMinDididers').value);
        let y = +(document.querySelector('#dataOfMinDididers1').value);
        res.value = (x * y) / nod(x, y);
    });
}
minDivisors();
export default minDivisors;