# Almatrips — almatrips.kz

Сайт частных туров из Алматы. Astro (статика, без backend), EN/RU, бронирование через WhatsApp.

## Команды

```bash
npm install      # установить зависимости
npm run dev      # локальный сервер http://localhost:4321
npm run build    # собрать прод-версию в dist/
```

## Структура

- `src/data/tours.ts` — **все туры и цены** (EN + RU). Чтобы изменить цену или текст тура — править здесь.
- `src/i18n/ui.ts` — все остальные тексты сайта + номер WhatsApp (`WHATSAPP_NUMBER`) + ссылка на Instagram.
- `src/components/pages/` — страницы (общие для EN и RU).
- `public/images/` — фотографии. Сейчас это плейсхолдеры с Wikimedia Commons (см. `IMAGE_CREDITS.md`) — заменить на свои при первой возможности, имена файлов сохранить.

## Чеклист запуска

1. **Купить домен** `almatrips.kz` (Cloudflare Registrar или Namecheap, ~$10/год). Опционально `almatrips.kz` — для защиты бренда, редирект на .com.
2. **Деплой на Cloudflare Pages** (бесплатно): создать git-репозиторий → подключить в Cloudflare Pages → build command `npm run build`, output `dist` → привязать домен.
3. **WhatsApp Business** на +7 777 150 2025: лого, описание EN, автоприветствие, быстрые ответы, каталог туров.
4. **Instagram @almatrips** — занять имя, поставить ссылку на сайт.
5. **Google Search Console** — добавить сайт, отправить sitemap (`/sitemap-index.xml`).
6. **Google Business Profile** — зарегистрировать «Almatrips» (категория Tour operator, Алматы).
7. **TripAdvisor** — создать листинг компании.
8. После регистрации ИП — выйти на GetYourGuide и Viator (им нужно юрлицо).
9. Заменить фото на собственные, обновить `/credits/` и `IMAGE_CREDITS.md`.
10. Завести рабочую почту (hello@almatrips.kz через Cloudflare Email Routing — бесплатно) и добавить на страницу контактов.

## SEO

Уже встроено: отдельная страница под каждый тур, schema.org (TravelAgency, TouristTrip, FAQPage, BreadcrumbList), hreflang EN/RU, canonical, sitemap, robots.txt, OpenGraph. Дальше главное — блог-статьи на английском и отзывы в Google/TripAdvisor.
# almatrips
