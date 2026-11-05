# Customer Editing Guide — meadow-nikah (Dr Saqib & Dr Aleena)

This template is an Islamic meadow/garden Nikah & Walima invitation configured for **Dr Saqib Pervez & Dr Aleena Khan's Dawat-e-Walima** at Safed Baradari, Qaiserbagh, Lucknow. It features an interactive intro gate, Quranic verses, couple introduction cards, countdown timer, venue details with QR code & directions, RSVP, With Best Compliments From (W.B.C.F.), photo gallery, and Google Calendar integration.

---

## Normal Customer Changes

All routine customer edits are configured in:
→ `editable/wedding-data.js`

### Couple Profiles
Edit `couple.groom` and `couple.bride` in `editable/wedding-data.js`:
- `name`: Short display name (e.g. `"Saqib"`, `"Aleena"`)
- `fullName`: Full legal / formal name (e.g. `"Dr Saqib Pervez"`, `"Dr Aleena Khan"`)
- `line`: Family lineage / parent names (e.g. `"Son of Late Pervez Alam Khan"`, `"Daughter of Khan Mansur Abbas"`)
- `blurb`: Short personal bio
- `photo`: Path to profile photo (`./editable/assets/groom.jpg`, `./editable/assets/bride.jpg`)

### Host & Invitation
Edit `invitation` in `editable/wedding-data.js`:
- `host`: Host name (`"Mrs. Ateequn Nisa"`)
- `relation`: Relationship (`"W/o Late Alamgeer Khan"`)
- `intro`: Invitation text (`"cordially invites you to grace the auspicious occasion of the"`)
- `event`: Occasion (`"Dawat-e-Walima"`)
- `subtitle`: Subtitle (`"of her beloved grandson"`)

### Dates, Time & Countdown
Edit `wedding` in `editable/wedding-data.js`:
- `dateISO` & `endISO`: ISO timestamp string with timezone (e.g. `"2026-12-08T19:00:00+05:30"`), drives countdown timer
- `dateLabel`: Formatted date string (`"Tuesday, 8 December 2026"`)
- `timeLabel`: Formatted time string (`"Dinner at 7:00 PM onwards"`)

### Venue & Map
Edit `venue` in `editable/wedding-data.js`:
- `name`: Venue name (`"Safed Baradari"`)
- `address`: Full address string (`"Safed Baradari, Qaiserbagh, Lucknow, Uttar Pradesh 226001"`)
- `mapsUrl`: Google Maps directions URL
- `qrUrl`: QR code destination (`"https://scan.page/Fzb4BU"`)
- `qrImage`: Venue QR code image path (`"./editable/assets/venue-qr.png"`)
- `preview`: Map thumbnail image path

### RSVP & Compliments
Edit `rsvp` and `wbcf` in `editable/wedding-data.js`:
- `rsvp.note`: `"Taluqdar's Family with near & Dear"`
- `wbcf.members`: `["Dr. Jawed Alam", "Dr. Shariq Pervez", "Ishrat Jawed, Rimsha Jawed"]`

### Images & Gallery
Replace files directly in `editable/assets/` or update paths in `editable/wedding-data.js`:
- Hero art illustration: `editable/assets/hero.jpg`
- Intro cover picture: `editable/assets/ChatGPT Image Aug 12, 2026 at 11_08_45 PM.png`
- Intro video: `editable/assets/Continuous_wedding_invitation_an…_202608122343.mp4`
- Gallery images (6 photos): `editable/assets/gallery-1.jpg` through `gallery-6.jpg`
