# Pets Travel website starter

A responsive starter website for a UK-wide pet transport business, with a public booking enquiry form and a basic admin dashboard.

## Run it
1. Unzip the folder.
2. Open `index.html` in a modern browser to preview the public website.
3. Open `admin.html` to view the admin dashboard.
4. Demo password: `ChangeMe123!`

## Included
- `index.html` — public website and booking enquiry form
- `styles.css` — responsive design
- `app.js` — booking form and browser storage
- `admin.html` — admin sign-in and dashboard
- `admin.css` — dashboard styles
- `admin.js` — dashboard functions

## Important demo limitations — read before going live
This starter stores booking requests and settings in the browser's `localStorage`. That means:
- A customer's booking is saved only in the browser/device they used.
- The business owner will not automatically receive an email or see a booking made on a customer's separate device.
- The demo password is visible in client-side JavaScript and is NOT secure authentication.
- There is no database, server-side validation, email delivery, payment processing or file upload.

**Do not publish this version as a live customer booking system or collect real customer/pet data with it.** Before launch, connect a secure backend/database, server-side admin authentication, spam protection, privacy notice and a transactional email service. Use HTTPS and restrict admin access. A developer or suitable managed platform can implement these pieces.

## Customise
Use the admin dashboard to change the displayed business name, contact email, phone and tagline in this local demo. To make those settings shared across all visitors and devices, they must be stored in a hosted database via a backend.

## Before publishing
Add the real business phone and email, confirm the service area and operating arrangements, add genuine photos, and review the wording to ensure it accurately describes the service you can provide. If transporting animals commercially in the UK, check the relevant animal welfare, transport, insurance and licensing requirements for your operation.
