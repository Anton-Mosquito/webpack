function nod() {
    let res = document.querySelector('#resultofNOD');
    let btn = document.querySelector('#calcNOD');
    const nod = (x1, x2) => {
        while (x1 != 0 && x2 != 0) {
            if (x1 > x2) {
                x1 = x1 % x2;
            } else {
                x2 = x2 % x1;
            }
        }
        return x1 + x2;
    }
    btn.addEventListener('click', function() {
        let x = +(document.querySelector('#dataOfNOD').value);
        let y = +(document.querySelector('#dataOfNOD1').value);
        res.value = nod(x, y);
    });
}
nod();
export default nod;