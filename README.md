# Event Studio

Лендинг агентства з організації корпоративних заходів, днів народження та весіль: про компанію, послуги, відповіді на поширені питання, відгуки клієнтів.

Демо: https://ikrablobster.github.io/event_studio/

## Стек

HTML, SCSS (методологія БЕМ), JavaScript без бібліотек, збирання через Gulp (компоненти `gulp-include`, SVG-спрайт, зображення в AVIF/WebP).

## Що зроблено

- адаптивна верстка (десктоп, планшет, телефон);
- мобільне меню з керуванням з клавіатури (`aria-expanded`, закриття по `Esc` і по кліку на пункт);
- плавна прокрутка до секцій, підкреслення в меню та hover іконок на `transform`;
- семантична розмітка: один `h1`, заголовки секцій `h2`/`h3`, `aria-label` для іконок-посилань;
- зображення з `width`/`height` і `loading="lazy"`, шрифти з `font-display: swap`;
- SEO-мета: `description`, Open Graph, favicon;
- підтримка `prefers-reduced-motion`.

## Структура

- `app/pages`, `app/components` — HTML-джерела;
- `app/scss`, `app/js/main.js` — стилі та скрипт;
- `app/index.html`, `app/css/style.min.css`, `app/js/main.min.js` — зібрані файли, які віддає GitHub Pages;
- `index.html` у корені — перенаправлення на `app/index.html`.
