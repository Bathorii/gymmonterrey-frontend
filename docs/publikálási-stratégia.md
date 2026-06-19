# GymBogotá.co – Publikálási és SEO stratégia

**Létrehozva:** 2026-05-17  
**Domain indulás:** 2026-05-17 (innen számítjuk a Google Sandbox periódust)  
**Cél:** organikus forgalom felépítése Bogotá fitneszpiacon, Google-barát, fenntartható módszerrel

---

## ⚠️ Kötelező alapelv – Thin Content tilalom

A Google 2024 márciusi „Scaled Content Abuse" spam policy frissítése után a programmatikusan generált, tartalom nélküli oldalak (pl. üres gym profilok) **rankingelimináló** kockázatot jelentenek.

**Tilos indexelni:**
- Üres vagy közel üres gym profilt (hiányzó leírás, fotók, nyitvatartás)
- Olyan lokalidad-oldalt, ahol kevesebb mint 5 aktív, teljes profil van
- Olyan kategória-oldalt, ahol kevesebb mint 3 aktív, teljes profil van

**Minden publikus oldal minimumkövetelménye:**
- Legalább 150 szó egyedi leírás (nem csak cím + cím)
- Legalább 1 fotó
- Nyitvatartás (ha elérhető)
- LocalBusiness Schema markup

---

## 3 fázisú publikálási ütemterv

### 1. Fázis – Alap (2026-05-17 → 2026-08-17, ~3 hónap)

**Cél:** 50–100 magas minőségű oldal, amely mérhető forgalmat hoz.

**Mit indexelünk:**
- Csak a legjobban feltöltött, legtöbb Google Reviews-szal rendelkező edzőtermek profiljait
- Fő hub oldalak: `/localidades/` (Bogotá kerületei), `/categorias/` (gimnasios, crossfit, yoga, pilates, boxeo)
- Statikus tartalom: főoldal, `/privacidad/`, `/contacto/`, `/sobre-nosotros/`

**Mit NEM indexelünk (noindex):**
- Félkész gym profilok
- Kevesebb mint 5 tagot tartalmazó kategória/localidad oldalak

**Feladatok:**
- [ ] Google Search Console regisztráció (első nap!)
- [ ] Sitemap.xml csak a kész oldalakkal
- [ ] robots.txt: `/api/`, `/admin/` tiltva
- [ ] LocalBusiness Schema minden gym profilon
- [ ] Google Business Profile ellenőrzés (own a listinget ahol lehet)

---

### 2. Fázis – Növekedés (2026-08-17 → 2026-11-17, ~3 hónap)

**Cél:** 300–500 oldal, ha a Sandbox periódus lejárt és vannak első orgánus kattintások.

**Feltétel a léptetéshez:**
- GSC-ben legalább 100 impresszió/nap organikusan
- Legalább 5 gyűjtött felhasználói értékelés a platformon (trust jel)

**Mit indexelünk:**
- Minden teljesen feltöltött gym profil
- Localidad × kategória kombinált oldalak (pl. `/chapinero/crossfit/`)
- Blog / editorial tartalom (legalább havi 2 cikk Bogotá fitnesz témában)

**Blog témák (javaslat):**
- "Los mejores gimnasios en Chapinero 2026"
- "Diferencia entre CrossFit y gimnasio tradicional en Bogotá"
- "Cuánto cuesta el gimnasio en Bogotá"

---

### 3. Fázis – Teljes skála (2026-11-17 →)

**Cél:** Minden oldal indexelve, hosszú farok kulcsszavak lefedése.

**Mit indexelünk:**
- Maradék gym profilok (minimum quality bar teljesítése után)
- Összes lokalidad × kategória kombináció
- Keresési intention alapú landing oldalak

---

## Backlink stratégia

**Prioritás sorrend (Bogotá-fókusz):**

1. **Lokális médium és blogok** – Bogotá-specifikus lifestyle blogok, El Tiempo, Semana egészség rovat
2. **Gym tulajdonosok saját weboldalai** – "Enlistados en GymBogotá.co" badge + link
3. **Fitness influencerek** (Instagram + TikTok Bogotá fitness creators) – ne fizetett, hanem értékalapú
4. **Localidad.com / City guides** – ingyen direktória linkek
5. **Google Business Profile** – minden gym-nél töltsd ki a website mezőt gymbogota.co-ra is

**Kerülendő:**
- Tömeges direktória link building
- PBN (private blog network) linkek
- Fizetett cikkek "dofollow" linkkel (Google spam policy)

---

## Schema markup kötelező elemek

Minden gym profilon:

```json
{
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  "name": "Gym neve",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "...",
    "addressLocality": "Bogotá",
    "addressRegion": "Cundinamarca",
    "addressCountry": "CO"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "...",
    "longitude": "..."
  },
  "telephone": "...",
  "url": "https://gymbogota.co/gimnasios/slug",
  "openingHoursSpecification": [...],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.5",
    "reviewCount": "120"
  }
}
```

Hub oldalakra (LocalBusiness helyett BreadcrumbList + ItemList):

```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Mejores gimnasios en Chapinero, Bogotá",
  "itemListElement": [...]
}
```

---

## Internal linking – Hub & Spoke modell

```
Főoldal
├── /localidades/ (hub)
│   ├── /chapinero/ (spoke) → gym profilok
│   ├── /usaquén/ (spoke)
│   └── ...
├── /categorias/ (hub)
│   ├── /gimnasios/ (spoke)
│   ├── /crossfit/ (spoke)
│   └── ...
└── /blog/ (hub)
    └── [cikkek visszalinknek a spoke oldalakra]
```

**Szabály:** Minden gym profil linkeljen vissza saját localidad + kategória oldalára. Minden localidad oldal linkeljen a főoldalra.

---

## Google Search Console – azonnali teendők

1. Regisztráció: search.google.com/search-console → Add property → Domain
2. DNS TXT rekord hitelesítés (Cloudflare/domain kezelő)
3. Sitemap beküldés: `https://gymbogota.co/sitemap.xml`
4. **Core Web Vitals figyelés** – Next.js statikus build = jó alapból, de ellenőrizd
5. Heti GSC ellenőrzés – Coverage hibák, Manual Actions panel

---

## Mikor tekinthető sikeresnek a Sandbox periódus?

- **3. hónap vége** (2026-08-17): GSC-ben első organikus kattintások
- **6. hónap** (2026-11-17): 500+ organikus kattintás/hó, ha a 2. fázis tartalma kész
- **12. hónap** (2027-05-17): 5000+ organikus kattintás/hó = komoly direktória forgalom

---

## Ami garantáltan nem működik

| ❌ Elkerülendő | Miért |
|---|---|
| Minden oldal egyszerre indexelve | Thin content → spam filter |
| AI-generált leírások emberi szerkesztés nélkül | Scaled content abuse policy |
| Tömeges link vásárlás | Penguin penalty |
| Kulcsszó stuffing a title/h1-ben | On-page spam |
| Valós felhasználói értékelések nélkül indulni | Trust jelek hiánya |


---

## ⚠️ BARRIO DEPLOY ELŐTT KÖTELEZŐ ELLENŐRZÉS (2026-06-15)

> ✅ **Kerület (localidad) réteg KÉSZ:** mind az 5 portálon minden tervezett kerület live.
> Bogotá: 20 | CDMX: 16 | Lima: 18 | Santiago: 18 | CABA: 15

A barrio draft fájlokban **intro hátralék** van — a deploy előtt pótolni kell:

| Portal | Rövid intro (<200 szó) |
|---|---|
| bogota | 59 / 685 (9%) |
| cdmx | **152 / 570 (27%)** — legtöbb javítandó |
| lima | **92 / 470 (20%)** |
| santiago | 44 / 550 (8%) |
| caba | 23 / 400 (6%) |

**Teendő barrio deploy előtt:**
1. Futtasd az intro-bővítő workflow-t (barrio_expand_v3.js vagy aktuális verziója)
2. Ellenőrizd audittal: `python3 /tmp/full_seo_audit.py`
3. Csak ha minden intro >=200 szó → mehet a deploy_varosresz.sh
