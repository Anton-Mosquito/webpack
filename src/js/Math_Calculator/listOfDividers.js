function listOfDividers() {
    let res = document.querySelector('#resultListOFdividers');
    let btn = document.querySelector('#calcListOFdividers');
    btn.addEventListener('click', function() {
        let x = +(document.querySelector('#dataListOfDividers').value);
        let arr = [];
        for (let index = x; index > 0; index--) {
            if (x % index == 0) {
                arr.push(index);
            }
        }
        arr.sort((a, b) => a - b);
        res.value = arr.map(elem => elem + ' ');
    });
}
listOfDividers();
export default listOfDividers;