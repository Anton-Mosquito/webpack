function commonDivisors() {
    let res = document.querySelector('#resultListOfСommonDivisors');
    let btn = document.querySelector('#calcListOfСommonDivisors');
    const arrayDivisors = x => {
        let arr = [];
        for (let index = x; index > 0; index--) {
            if (x % index == 0) {
                arr.push(index);
            }
        }
        // arr.sort((a, b) => a - b);
        return arr;
    }
    const getArrCrossing = (...rest) => {
        const isArray = (elem, arr) => {
            return arr.indexOf(elem) !== -1
        }
        const isArrays = (elem, arr) => {
            for (const iterator of arr) {
                if (!isArray(elem, iterator)) {
                    return false
                }
            }
            return true;
        }
        let arr = [];
        let arr0 = rest.shift();
        for (const iterator of arr0) {
            if (isArrays(iterator, rest)) {
                arr.push(iterator);
            }
        }
        return arr;
    }
    btn.addEventListener('click', function() {
        let x = +(document.querySelector('#dataListOfСommonDivisors').value);
        let y = +(document.querySelector('#dataListOfСommonDivisors1').value);
        let divisorsX = arrayDivisors(x);
        let divisorsY = arrayDivisors(y);
        res.value = getArrCrossing(divisorsX, divisorsY);
    });
}
commonDivisors();
export default commonDivisors;