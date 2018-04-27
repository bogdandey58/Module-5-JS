const keyboard = {
    layouts: {
        en: {
            topRow: [],
            middleRow: [],
            bottomRow: []
        },
        ru: {
            topRow: [],
            middleRow: [],
            bottomRow: []
        },
        ua: {
            topRow: [],
            middleRow: [],
            bottomRow: []
        }
    },
    langs: ['en', 'ru', 'ua'],
    currentLang: ''
};

const ALPHABETS = {
    en: "qwertyuiop[]asdfghjkl;'zxcvbnm,./",
    ru: 'йцукенгшщзхъфывапролджэячсмитьбю.',
    ua: 'йцукенгшщзхїфiвапролджэячсмитьбю.'
};

// Выбор языка
const selectLang = () => {
    let lang = prompt('Select language: EN->0, RU->1, UA->2', '0');
    switch (lang) {
        case '0':
            keyboard.currentLang = 'en';
            break;
        case '1':
            keyboard.currentLang = 'ru';
            break;
        case '2':
            keyboard.currentLang = 'ua';
            break;
        default:
            alert('Select language');
            selectLang();
    }
};

selectLang();
//
const feelKeyFoo = (keyboardLayouts, alphabets) => {
    const alphaSplitOnRow = alphabets => {
        const btn = {};
        btn.topRow = alphabets.slice(0, 12);
        btn.middleRow = alphabets.slice(12, 23);
        btn.bottomRow = alphabets.slice(23);
        return btn;
    };
    Object.keys(alphabets).map(lang => {
        keyboardLayouts[lang] = alphaSplitOnRow(alphabets[lang]);
    });
};

feelKeyFoo(keyboard.layouts, ALPHABETS);

let getRandCharInAlph = (alphabet, keyboardCurrentLang) => {
    Object.keys(alphabet).map(lang => {
        if (keyboardCurrentLang == lang) {
            let rnd = Math.floor(Math.random() * alphabet[lang].length);
            console.log('alphabet[rnd]: ', alphabet[lang][rnd]);
            document.write('alphabet[rnd]: ', alphabet[lang][rnd]);
            return alphabet[lang][rnd];
        }
    });
};

getRandCharInAlph(ALPHABETS, keyboard.currentLang);
