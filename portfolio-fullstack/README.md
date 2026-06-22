# Joy Chepkorir Bett — Portfolio Website

> **"Building Digital Arks for a Greater Future"**

A futuristic luxury portfolio built on the **Kinetic Prestige** design system,
blending Academic Futurism aesthetics with silicon-precision engineering.

---

## Project Structure

```
portfolio-project/
├── frontend/                   # React SPA
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Nav.jsx         # Glassmorphism sticky nav + mobile menu
│   │   │   ├── Footer.jsx      # Minimal editorial footer
│   │   │   └── ProjectCard.jsx # Reusable bento project card
│   │   ├── hooks/
│   │   │   └── useReveal.js    # IntersectionObserver scroll-reveal hook
│   │   ├── data/
│   │   │   └── index.js        # Projects, timeline, skills, metrics
│   │   ├── pages/
│   │   │   ├── Home.jsx        # Hero · Metrics · Bento · Skills · CTA
│   │   │   ├── About.jsx       # Bio · Timeline · Values · Quote
│   │   │   ├── Projects.jsx    # Filter bar · Bento project grid
│   │   │   └── Contact.jsx     # Form · Info panel · Django API snippet
│   │   ├── styles/
│   │   │   └── design-system.css  # All CSS variables, tokens, utilities
│   │   ├── App.jsx             # Root — routing + theme toggle
│   │   └── index.js            # ReactDOM entry point
│   └── package.json
│
├── backend/                    # Django REST API
│   ├── portfolio/
│   │   ├── settings.py         # All Django settings
│   │   ├── urls.py             # Root URL conf
│   │   └── wsgi.py
│   ├── contact/
│   │   ├── models.py           # ContactMessage model
│   │   ├── serializers.py      # DRF serializer + field validation
│   │   ├── views.py            # ContactFormView (POST /api/contact/)
│   │   ├── urls.py             # App-level URL conf
│   │   ├── admin.py            # Django admin registration
│   │   ├── apps.py
│   │   └── tests.py            # Full test suite (7 test cases)
│   ├── manage.py
│   ├── requirements.txt
│   └── .env.example
│
├── .gitignore
└── README.md
```

---

## Design System — Kinetic Prestige

### Aesthetic Direction
**Academic Futurism** — the authority of ivory-tower institutions fused with silicon-valley precision.

| Principle | Application |
|-----------|-------------|
| Architectural Minimalism | Vast negative space as a luxury signal |
| Subtle Glassmorphism | Navigation only (`backdrop-filter: blur(20px)`) |
| Modern Editorial | High-contrast serif/sans pairing with 12-col grid discipline |
| Mass-Aware Interactions | Hover states with physics-inspired easing |

### Typography
| Role | Font | Usage |
|------|------|-------|
| Headlines | **Literata** (serif) | Display, H1–H3, blockquotes |
| Body | **Hanken Grotesk** (sans-serif) | Paragraphs, descriptions |
| Technical | **JetBrains Mono** | Labels, tags, metadata, code |

### Color Tokens (Dark Mode Default)
| Token | Value | Semantic Use |
|-------|-------|--------------|
| `--surface` | `#141313` | Page background |
| `--on-surface` | `#e5e2e1` | Primary text |
| `--tertiary` | `#e9c349` | Gold accent — active states, highlights |
| `--primary` | `#c8c6c5` | Buttons, primary elements |
| `--outline-variant` | `#444748` | Borders, separators |
| `--surface-container-low` | `#1c1b1b` | Card backgrounds |

### Spacing Scale
```
--stack-xl:  120px  (major section gaps)
--stack-lg:   80px  (subsection gaps)
--stack-md:   40px  (component gaps)
--margin-desktop: 80px
--margin-mobile:  24px
```

---

## Pages

| Route | Page | Key Sections |
|-------|------|-------------|
| `/` | **Home** | Hero (arch-grid + cursor glow) · Impact metrics · Featured projects bento · Technical arsenal · CTA |
| `/about` | **About** | Bio + stats cards · Career timeline · Engineering values · Editorial quote |
| `/projects` | **Projects** | Category filter bar · Filterable 12-col bento grid |
| `/contact` | **Contact** | Editorial underline form · Contact details · Django REST snippet |

---

## Frontend Setup

### Requirements
- Node.js 18+ and npm

### Install & Run

```bash
cd frontend
npm install
npm start          # development server → http://localhost:3000
```

### Build for Production

```bash
npm run build      # outputs to frontend/build/
```

### Environment Variables (frontend)

Create `frontend/.env`:

```env
# Django API base URL (leave empty to use the CRA proxy)
REACT_APP_API_URL=http://localhost:8000
```

The `package.json` already includes:

```json
"proxy": "http://localhost:8000"
```

so in development you can omit `REACT_APP_API_URL` and the dev server will
proxy `/api/*` requests to Django automatically.

---

## Backend Setup

### Requirements
- Python 3.11+

### Install & Run

```bash
cd backend

# Create and activate a virtual environment
python -m venv .venv
.venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Copy and configure environment
cp .env.example .env
# Edit .env and set your SECRET_KEY, email credentials, etc.

# Apply database migrations
python manage.py migrate

# Create a superuser for the admin panel (optional)
python manage.py createsuperuser

# Start the development server
python manage.py runserver     # → http://localhost:8000
```

### Run Tests

```bash
python manage.py test contact
```

### API Reference

#### `POST /api/contact/`

Submit a contact form message.

**Request body:**
```json
{
  "name":    "Joy Chepkorir Bett",
  "email":   "sender@example.com",
  "company": "Acme Corp",
  "type":    "Consulting",
  "message": "I'd love to work with you on an exciting project."
}
```

**Success — 201 Created:**
```json
{ "status": "transmitted", "id": 42 }
```

**Validation error — 400 Bad Request:**
```json
{
  "errors": {
    "email": ["Enter a valid email address."],
    "message": ["Message must be at least 10 characters."]
  }
}
```

#### Rate Limiting
The endpoint is throttled to **10 requests per hour per IP** to prevent abuse
(configurable in `settings.py` → `REST_FRAMEWORK.DEFAULT_THROTTLE_RATES`).

#### Django Admin
Visit `http://localhost:8000/admin/` to view, search, and manage all contact
messages. Mark messages as read using the bulk action.

---

## Features

| Feature | Detail |
|---------|--------|
| Dark / Light Mode | CSS variable switching; persists via React state |
| Fully Responsive | 12-col desktop grid → single-col mobile |
| Scroll Reveal | IntersectionObserver with staggered delays |
| Cursor Glow | Radial gradient tracks cursor (desktop only) |
| Project Filtering | Client-side category filter with smooth transitions |
| Architectural Grid | Subtle 40 px grid on hero sections |
| Ambient Blobs | Animated radial gradients for atmospheric depth |
| Glass Navigation | `backdrop-filter: blur(20px)` |
| Premium Hover States | Gold border transitions, scale micro-animations |
| Contact Form | Field validation + Django REST API integration |
| Email Notification | Triggered on every successful form submission |
| Admin Panel | Full Django admin for contact message management |
| Test Suite | 7 automated API tests covering happy path and edge cases |

---

## Production Deployment Checklist

- [ ] Set `DEBUG=False` in `.env`
- [ ] Set a strong `DJANGO_SECRET_KEY`
- [ ] Update `ALLOWED_HOSTS` and `CORS_ALLOWED_ORIGINS`
- [ ] Switch to PostgreSQL (uncomment `psycopg2-binary` in `requirements.txt`)
- [ ] Configure SMTP / SendGrid in `.env`
- [ ] Run `python manage.py collectstatic`
- [ ] Serve with **gunicorn** behind **nginx**
- [ ] Run `npm run build` and serve `frontend/build/` as static files
- [ ] Set `REACT_APP_API_URL` to your production API domain

---

## Browser Support

Chrome 90 · Firefox 88 · Safari 14 · Edge 90  
*(Safari requires `-webkit-backdrop-filter` prefix — already included in the CSS)*

---

*© 2024 Joy Chepkorir Bett. Building Digital Arks.*
