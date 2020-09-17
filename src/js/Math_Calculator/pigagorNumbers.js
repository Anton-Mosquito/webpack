function pifagorNumbers() {
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
    let res = document.querySelector('#resultDigitsOfPifagor');
    let btn = document.querySelector('#calcDigitsOFPifagor');
    btn.addEventListener('click', function() {
        let a = +(document.querySelector('#dataOfFirstDigit').value);
        let b = +(document.querySelector('#dataOfSecondDigit').value);
        let c = +(document.querySelector('#dataOfThirdDigit').value);
        let maxCheckNumber = 100;
        let resulst = nod(nod(a, b), c);
        if (resulst == 1) {
            for (a = 1; a < maxCheckNumber; a++) {
                for (b = a; b < maxCheckNumber; b++) {
                    for (c = b; c < maxCheckNumber; c++) {
                        if ((c * c) == (a * a) + (b * b)) {
                            res.value = 'This number are Pythagorean triplets';
                        } else {
                            res.value = 'This number are not Pythagorean triplets';
                        }
                    }
                }
            }
        }
        return res.value;
    });
}
pifagorNumbers()
export default pifagorNumbers;