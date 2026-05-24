# 🌾 Krishisetu Seeds — Website

A modern, fully responsive multi-page website for **Krishisetu Seeds Pvt. Ltd.** built with pure HTML, CSS and vanilla JavaScript.

---

## 📁 Folder Structure

```
krishisetu-website/
│
├── index.html          # Homepage
├── about.html          # About Us page
├── products.html       # Products listing page
├── contact.html        # Contact page (with form + map)
│
├── css/
│   └── style.css       # All site styles
│
├── js/
│   └── script.js       # Mobile nav, counters, form handler
│
└── images/
    ├── logo.png        # ← Place your Krishisetu logo here
    └── paddy-bag.png   # ← Place your paddy seed bag image here
```

---

## ✅ Step 1 — Add Your Images

Save the images you shared with me into the `images/` folder using these **exact filenames**:

| File              | What to put           |
|-------------------|------------------------|
| `images/logo.png`     | The Krishisetu green/gold logo |
| `images/paddy-bag.png`| The standing paddy bag mockup |

> Other photos (farmers, fields, etc.) are pulled from free Unsplash links so the site looks complete out-of-the-box. You can replace them with your own at any time.

---

## ✅ Step 2 — Preview the Site Locally

Just **double-click `index.html`** — it will open in your browser. That's it!

If you want a proper local server (recommended for the contact form and map to behave correctly):

```bash
cd "/Users/naveennagar/Desktop/krishisetu-website"
python3 -m http.server 8000
```

Then visit **http://localhost:8000** in your browser.

---

## 🎨 Design Features

- ✅ **Modern green + gold theme** matching your logo
- ✅ **Fully responsive** — looks great on mobile, tablet, desktop
- ✅ **Sticky header** with smooth navigation
- ✅ **Hero section** with overlay, call-to-action buttons
- ✅ **Animated stats counters** (Years, Farmers, Varieties, States)
- ✅ **Product cards** with hover effects
- ✅ **Testimonials** from farmers (in Hindi + English)
- ✅ **WhatsApp floating button** linked to `+91 91091 02484`
- ✅ **Google Map** embed on contact page
- ✅ **Working contact form** (front-end only — needs a backend to send real emails)
- ✅ **Font Awesome icons** & **Google Fonts** (Poppins + Playfair Display)
- ✅ **SEO-ready** meta tags and alt attributes

---

## 🔧 Customisation Quick-Reference

| What | Where |
|------|-------|
| Brand colours       | `css/style.css` → `:root` block (top of file) |
| Phone number        | Search & replace `91091 02484` and `919109102484` |
| Email               | Search & replace `info@krishisetuagro.in` |
| Office address      | Search & replace `Vill. & Post, Dist., State - 000000` |
| Hero background image | `index.html` → `.hero-slide` style attribute |
| Add new product     | Copy a `.product-detail` block in `products.html` |
| Google Map location | `contact.html` → change `src` of `<iframe>` |

---

## 🚀 Going Live

1. Buy hosting (or use free hosts like **Netlify**, **Vercel**, **GitHub Pages**, **Hostinger**).
2. Upload the entire `krishisetu-website` folder.
3. Point your domain **www.krishisetuagro.in** to the host.
4. Done! ✅

### To make the contact form actually send emails

You'll need a small backend. Easiest options:
- **Formspree** (formspree.io) — free, no code, paste your form action URL.
- **Web3Forms** (web3forms.com) — similar, free.
- **EmailJS** (emailjs.com) — JavaScript only.

In `contact.html`, change:
```html
<form id="contactForm">
```
to:
```html
<form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

---

## 📞 Contact

**Krishisetu Seeds Pvt. Ltd.**
📞 +91 91091 02484
✉️ info@krishisetuagro.in
🌐 www.krishisetuagro.in

---

_Built with ❤️ for Indian farmers._
