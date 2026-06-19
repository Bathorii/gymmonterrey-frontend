@AGENTS.md

## ⚠️ KÖTELEZŐ: Publikálási és SEO stratégia

**Minden tartalom-publikálási döntés előtt olvasd el:**  
[`docs/publikálási-stratégia.md`](docs/publikálási-stratégia.md)

**Ezt a stratégiát KÖTELEZŐ alkalmazni** minden új oldal, gym profil, kategória-oldal vagy lokalidad-oldal indexelésekor.

**Indulás dátuma:** 2026-05-17 (ebből számítjuk a Google Sandbox periódust és a fázishatárokat)

**Legfontosabb szabályok (részletek a fenti dokumentumban):**
- Thin content tilos indexelni (üres/félkész profilok → `noindex`)
- 3 fázisú ütemterv: Alap (3 hónap) → Növekedés (3 hónap) → Teljes skála
- LocalBusiness / SportsActivityLocation Schema markup minden gym profilon
- Google Search Console beállítása az első naptól
- Fázisváltás csak mérhetőható organikus forgalom után

---

## ⚠️ LocalidadPage — kritikus kódszabályok (gymcdmx-specifikus)

### 1. Meta description DESC template

❌ **TILOS** — `stats.value` puszta szám kontextus főnév nélkül:
```tsx
// "50+ en Cuauhtémoc, CDMX." → Googlenak értelmetlen!
const DESC = `${localidadContent.stats.eventos[0].value} en ${localidadContent.nombre}...`
```
✅ **KÖTELEZŐ** — kontextus főnév a szám után, vagy inkább mondattal kezd:
```tsx
// "50+ eventos al año en Cuauhtémoc, CDMX."
const DESC = `50+ eventos al año en Cuauhtémoc, CDMX. Box en la Arena México...`
```

### 2. Meta description hossz mérése

```bash
# MINDIG python3-mal mérj — wc -c BÁJT, nem karakter!
python3 -c "print(len('A leírás szövege'))"
# SEO limit: ≤ 160 unicode karakter
```

### 3. Adathozzáférés — gymcdmx struktúra ⚠️ TELJESEN ELTÉRŐ!

**CDMX adatstruktúra alapvetően más, mint a többi portálé:**

```tsx
import { localidadContent, faq } from '@/data/bogota/localidad-cuauhtemoc'

// ⚠️ localidadContent.gimnasios → SIMA STRING, nem objektum!
intro={localidadContent.gimnasios}           // ← direkt string!

// ⚠️ stats külön namespace alatt van!
stats={localidadContent.stats.gimnasios}     // ← stats.{kategória}!

// ✅ vecinos és categoriaLinks TOP-LEVEL
vecinos={localidadContent.vecinos}
categoriaLinks={localidadContent.categoriaLinks}

// ⚠️ faq külön exportált objektum!
faq={faq.gimnasios}                          // ← import { faq } szükséges!

// ❌ NEM létezik: localidadContent.gimnasiosH1, localidadContent.gymMetaDesc
// ❌ A LocalidadPage NEM fogad canonicalUrl propot — ha ott van, távolítsd el!
```

### 4. Teljes LocalidadPage integráció → ld. checklist

`gymbogota-frontend/docs/uj-portal-inditasi-checklist.md` — **8. fejezet** tartalmazza az összes portál adatstruktúráját, a LocalidadPageProps interfészt és az élő audit parancsokat.
---

## ⚠️ SEO / OG / AEO — kötelező szabályok (2026-05-29 frissítve)

**Teljes referencia:** `gymbogota-frontend/docs/uj-portal-inditasi-checklist.md` — **9. fejezet**

### Gyors emlékeztető — leggyakoribb hibák:

| Hiba | Helyes |
|---|---|
| `locale: city.lang` | `locale: city.lang.replace('-', '_')` — OG spec aláhúzást vár |
| Hiányzó `openGraph:` egy page.tsx-ből | `openGraph: baseOpenGraph({...})` — NEM örökölhető layout-ból |
| Hiányzó `twitter:` egy page.tsx-ből | `twitter: { card: 'summary_large_image' as const, images: [OG_IMAGE] }` |
| `ItemList` ListItem url nélkül | `url: \`\${city.baseUrl}/\${SLUG}/\${loc.slug}/\`` hozzáadandó |
| Hardcode brand (pl. `GymCABA.com`) | `${city.siteName}` — minden utility page.tsx-ben |
| Raw Unsplash URL metadata-ban | `import { OG_IMAGE } from '@/lib/metadata'` — konstans |
| `IN_LANGUAGE`, `ADDRESS_COUNTRY`, `CITY_NAME_LONG` konstansok | Törölve! → `city.lang`, `city.country`, `city.name` automatikus |

### Audit futtatása deploy előtt:

```bash
python3 << 'EOF'
import os, glob, re
base = '/Users/bathoriistvan/Desktop/gym-portalok'
portals = ['gymbogota', 'gymcaba', 'gymcdmx', 'gymlima', 'gymsantiago']
issues = []
for portal in portals:
    portal_base = f"{base}/{portal}-frontend/src"
    for path in glob.glob(f"{portal_base}/**/*.tsx", recursive=True):
        with open(path) as f: content = f.read()
        rel = path.replace(portal_base + '/', f'{portal}/')
        if re.search(r"locale: city\.lang(?!\.replace)", content): issues.append(f"❌ locale hyphen: {rel}")
        if 'export const metadata' in content and 'openGraph:' not in content and 'layout.tsx' not in path: issues.append(f"❌ missing openGraph: {rel}")
        if 'export const metadata' in content and 'twitter:' not in content and 'layout.tsx' not in path: issues.append(f"❌ missing twitter: {rel}")
        for brand in ['GymCABA.com', 'GymCDMX.mx', 'GymLima.com', 'GymSantiago.com', 'GymBogota.co']:
            if brand in content: issues.append(f"⚠️  hardcoded brand: {rel}")
        if "'@type': 'ItemList'" in content and "url: `${city.baseUrl}" not in content: issues.append(f"⚠️  ItemList no url: {rel}")
print('\n'.join(issues) if issues else "✅ CLEAN — zero issues across all 5 portals.")
EOF
```

