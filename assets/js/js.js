










function FetchPart(code) {
    const wrapperClass = code.split('@')[1];
    const target = code.split('@')[0];
    fetch('./layouts/' + target + '.html').then(function (response) {
        return response.text();
    }).then(function (part) {
        document.querySelector('.' + wrapperClass).innerHTML = part;
        Translate([
            {
                "en": "new",
                "fa": "جدید"
            },
            {
                "en": "Public",
                "fa": "عمومی"
            },
            {
                "en": "Components",
                "fa": "کامپوننت ها"
            },
            {
                "en": "write less do more with EasyJS",
                "fa": "کمتر کد بزن بیشتر اجرا کن"
            },
            {
                "en": "beta",
                "fa": "پایه"
            },
        ])
    })
}

FetchPart('sidebar@side-wrapper');
FetchPart('sidebar@side-mobile-wrapper');
FetchPart('header@header-wrapper');
FetchPart('footer@footer-wrapper');



export function Translate(translatesObject = {}) {
    const lang = (new URLSearchParams(location.search)).get('lang') ?? 'en';
    if (lang === 'en') {
return;
    }
    const translate = translatesObject;
    document.querySelectorAll('*').forEach(function (element) {
        if (lang === 'fa') {
            element.style.textAlign = 'right';
            element.style.direction = 'rtl';
            if (element.tagName === 'PRE') {
                element.style.textAlign = 'left';
                element.style.direction = 'ltr';
            }
        }
        const current = element.textContent.trim().replace(/\s+/g, ' ');
        translate.forEach(function (translation) {
            if (current === translation.en) {
                element.textContent = translation[lang];
            }
        });
    });

}
