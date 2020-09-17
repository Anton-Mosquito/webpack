function textAnalyzer() {
    let txtArea = document.querySelector('#textAnalyzer');
    let checkbox = document.querySelectorAll('#chooseSettings [type=checkbox]');
    txtArea.addEventListener('blur', function func() {
        const countWordOrSimbols = (str, flag) => {
            const getSymbolPercent = (arr, simbol) => {
                return simbol + ': ' + Math.round(arr.filter(letter => letter === simbol).length / arr.length * 100) + '% ';
            }
            let arr = [];
            switch (flag) {
                case 'word':
                    arr = str.split(' ');
                    break;
                case 'characters':
                    arr = str.split(' ').join('');
                    break;
                case 'persentage':
                    arr = str.split('');
                    let allSymbols = "abcdefghijklmnopqrstuvwxyz0123456789йцукенгшщзхъфывапролджэячсмитьбю`-=~@#$%^&*()_+;'][\!:ЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮQWERTYUIOPASDFGHJKLZXCVBNM";
                    let symbolsStatistic = '';
                    for (let key of allSymbols) {
                        if (arr.includes(key)) {
                            symbolsStatistic += getSymbolPercent(arr, key);
                        }
                    }
                    return symbolsStatistic;
                default:
                    break;
            }
            return arr
        }
        let x = this.parentNode;
        x.insertAdjacentHTML('beforeend', '<div class="input-field col s12"><input id="dataOfTextArea" type="text" class="validate"><label for="dataOfTextArea" class="black-text"></label></div>');
        let data = document.querySelector('#dataOfTextArea+label');
        let quantity = this.value;
        let res1 = countWordOrSimbols(quantity, 'word');
        let res2 = countWordOrSimbols(quantity, 'characters');
        let res3 = countWordOrSimbols(quantity, 'persentage');
        if (checkbox[0].checked) {
            data.innerHTML += ' This text are contains ' + res1.length + ' words ';
        }
        if (checkbox[1].checked) {
            data.innerHTML += ' This text are contains ' + this.value.length + ' characters ';
        }
        if (checkbox[2].checked) {
            data.innerHTML += ' This text are contains ' + res2.length + ' characters minus spaces ';
        }
        if (checkbox[3].checked) {
            data.innerHTML += ' This text are contains ' + res3;
        }
        this.removeEventListener('blur', func);
    });
}
textAnalyzer();