









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
