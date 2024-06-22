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




function FetchPart(code) {
    const wrapperClass = code.split('@')[1];
    const target = code.split('@')[0];
     

    document.querySelector('.' + wrapperClass).innerHTML = `<svg class="w3-text-blue" xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24">
	<g stroke="currentColor">
		<circle cx="12" cy="12" r="9.5" fill="none" stroke-linecap="round" stroke-width="3">
			<animate attributeName="stroke-dasharray" calcMode="spline" dur="1.5s" keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1" keyTimes="0;0.475;0.95;1" repeatCount="indefinite" values="0 150;42 150;42 150;42 150" />
			<animate attributeName="stroke-dashoffset" calcMode="spline" dur="1.5s" keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1" keyTimes="0;0.475;0.95;1" repeatCount="indefinite" values="0;-16;-59;-59" />
		</circle>
		<animateTransform attributeName="transform" dur="2s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12" />
	</g>
</svg>`;
   
 
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
