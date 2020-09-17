function quadraticEducation() {
    let res = document.querySelector('#resultquadratic');
    let btn = document.querySelector('#calcQuadratic');
    btn.addEventListener('click', function() {
        let a = +(document.querySelector('#dataOfA').value);
        let b = +(document.querySelector('#dataOfB').value);
        let c = +(document.querySelector('#dataOfC').value);
        let x1 = 0,
            x2 = 0;
        if (a == 0) {
            return res.value = 'First argument cant not be zero';
        }
        let discriminant = Math.pow(-b, 2) - (4 * a * c);
        if (discriminant < 0) {
            res.value = 'quadratiq does not have any square root';
        } else if (discriminant > 0) {
            x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        } else {
            x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        }
        if (x1 && x2) {
            return res.value = `quadratiq has two square root. First = ${x1} Second = ${x2}`
        } else {
            return res.value = `quadratiq has one square root. It's =  ${x1}`;
        }
    });
};
quadraticEducation();
export default quadraticEducation;