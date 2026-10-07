---
title: "Simplicity Systems | Internal tools"
summary: "A management system the Ayres Dorados front desk uses every day to enter bookings, track availability and generate PDF vouchers."
category: client
order: 3
image: ../../../assets/projects/simplicity_systems.png
highlight: "In use at Ayres Dorados"
role: "Full design and development"
technologies: ["Astro SSR", "React 19", "React-PDF", "Google Sheets", "Apps Script"]
github: "https://github.com/juanicenteno/simplicity_systems"
website: "https://simplicitysystems.vercel.app/"
---

## The challenge

The Ayres Dorados front desk needed a simple way to enter bookings, know what was available and hand guests clean vouchers, without paying for a full hotel management system.

## What I did

I designed and built a suite of internal tools, kept separate from the hotel's public website. The front desk uses it every day to:

- **Enter bookings** through a quick form with real-time date and capacity validation.
- **Track availability**: bookings are stored in a Google Sheets spreadsheet the hotel can view and edit.
- **Generate PDF vouchers** with guest details, service breakdown, deposits and dates, ready to print or send by WhatsApp or email.

## Technical decisions

- **Google Sheets as the database.** Bookings are sent to the spreadsheet through a Google Apps Script webhook. No database server, no fixed cost, and data the hotel can open and edit.
- **PDF generated in the browser** with `@react-pdf/renderer`: the voucher builds with a live preview as the form is filled in, and downloads as A4 without a server.
- **Separate from the public website.** Operational tools add no weight or risk to the site travelers see.
- **Demo mode.** The public version simulates the whole flow without touching real data, so anyone can try it.

## Result

The Ayres Dorados front desk uses it every day for bookings, availability and vouchers, with no fixed software costs. The [public demo](https://simplicitysystems.vercel.app/) shows the same flow with sample data.
