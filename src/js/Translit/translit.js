function trasnlit() {
    const area = document.querySelector('#textTranslit');
    let finishText = document.querySelector('#resTextTranslit');
    const check = document.querySelector('#choiseTextTranslit');
    const ru = new Map([
        ['а', 'a'],
        ['б', 'b'],
        ['в', 'v'],
        ['г', 'g'],
        ['д', 'd'],
        ['е', 'e'],
        ['є', 'e'],
        ['ё', 'e'],
        ['ж', 'j'],
        ['з', 'z'],
        ['и', 'i'],
        ['ї', 'yi'],
        ['й', 'i'],
        ['к', 'k'],
        ['л', 'l'],
        ['м', 'm'],
        ['н', 'n'],
        ['о', 'o'],
        ['п', 'p'],
        ['р', 'r'],
        ['с', 's'],
        ['т', 't'],
        ['у', 'u'],
        ['ф', 'f'],
        ['х', 'h'],
        ['ц', 'c'],
        ['ч', 'ch'],
        ['ш', 'sh'],
        ['щ', 'shch'],
        ['ы', 'y'],
        ['э', 'e'],
        ['ю', 'u'],
        ['я', 'ya'],
    ]);
    const eng = new Map([
        ['а', 'a'],
        ['b', 'б'],
        ['v', 'в'],
        ['g', 'г'],
        ['d', 'д'],
        ['е', 'e'],
        ['e', 'є'],
        ['e', 'ё'],
        ['j', 'ж'],
        ['z', 'з'],
        ['i', 'и'],
        ['yi', 'ї'],
        ['i', 'й'],
        ['k', 'к'],
        ['l', 'л'],
        ['m', 'м'],
        ['n', 'н'],
        ['о', 'o'],
        ['p', 'п'],
        ['r', 'р'],
        ['s', 'с'],
        ['t', 'т'],
        ['u', 'у'],
        ['f', 'ф'],
        ['h', 'х'],
        ['c', 'ц'],
        ['ch', 'ч'],
        ['sh', 'ш'],
        ['shch', 'щ'],
        ['y', 'ы'],
        ['e', 'э'],
        ['u', 'ю'],
        ['ya', 'я'],
    ]);
    const rus_to_latin = str => {
        str = str.replace(/[]+/g, '');
        return Array.from(str).reduce((s, l) =>
            s + (
                eng.get(l) ||
                eng.get(l.toLowerCase()) === undefined && l ||
                eng.get(l.toLowerCase()).toUpperCase()), '');
    }
    const latin_to_rus = str => {
        return Array.from(str).reduce((s, l) =>
            s + (
                ru.get(l) ||
                ru.get(l.toLowerCase()) === undefined && l ||
                ru.get(l.toLowerCase()).toUpperCase()), '');
    }
    area.addEventListener('input', function() {
        let str = this.value;
        if (check.checked) {
            finishText.innerHTML = rus_to_latin(str);
        } else {
            finishText.innerHTML = latin_to_rus(str)
        }
    });
};
trasnlit();