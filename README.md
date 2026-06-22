# Joy Chepkorir Bett — Portfolio Website

**"Building Digital Arks for a Greater Future"**

A futuristic luxury portfolio built on the **Kinetic Prestige** design system — blending Academic Futurism aesthetics with precision engineering.

---

## Design System

### Aesthetic Direction
**Academic Futurism** — the authority of ivory-tower institutions fused with silicon valley precision.

- **Architectural Minimalism**: vast negative space as a luxury feature
- **Subtle Glassmorphism**: exclusively for navigation (`backdrop-filter: blur(20px)`)
- **Modern Editorial**: high-contrast serif/sans pairing with rigid grid discipline
- **Mass-aware Interactions**: elements feel physically weighted

### Typography
| Role | Font | Usage |
|------|------|-------|
| Headlines | Literata (serif) | Display, H1–H3, quotes |
| Body | Hanken Grotesk (sans-serif) | Paragraphs, descriptions |
| Technical | JetBrains Mono | Labels, tags, metadata, code |

### Color Palette (Dark Mode Default)
| Token | Value | Use |
|-------|-------|-----|
| `--surface` | `#141313` | Page background |
| `--on-surface` | `#e5e2e1` | Primary text |
| `--tertiary` | `#e9c349` | Accent gold — active states, highlights |
| `--primary` | `#c8c6c5` | Buttons, headings |
| `--outline-variant` | `#444748` | Borders, separators |

---

## Tech Stack

### Frontend
- **React.js** — Component-based SPA with client-side routing
- **Tailwind CSS / CSS3** — Utility classes + custom CSS variables for theming
- **CSS Animations** — Intersection Observer reveals, ambient gradient animations, hover transitions

### Backend (Contact Form)
- **Django** — REST API for contact form submission
- **Django REST Framework** — `POST /api/contact/` endpoint
- Integrates with email backend (SMTP / SendGrid)

---

## Project Structure

```
portfolio/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Nav.jsx             # Glassmorphism navigation + dark mode toggle
│   │   │   ├── Footer.jsx          # Minimal footer with social links
│   │   │   └── RevealWrapper.jsx   # Intersection Observer scroll animations
│   │   ├── pages/
│   │   │   ├── Home.jsx            # Hero, metrics, bento projects, skills, CTA
│   │   │   ├── About.jsx           # Bio, career timeline, values, quote
│   │   │   ├── Projects.jsx        # Filterable bento grid, project cards
│   │   │   └── Contact.jsx         # Form + contact info + Django API note
│   │   ├── styles/
│   │   │   └── design-system.css   # CSS variables, typography, animations
│   │   └── App.jsx                 # Root with page routing + theme toggle
│   ├── public/
│   └── package.json
├── backend/
│   ├── contact/
│   │   ├── views.py                # ContactFormView (DRF APIView)
│   │   ├── serializers.py          # ContactSerializer
│   │   ├── models.py               # Contact message model
│   │   └── urls.py                 # /api/contact/
│   ├── settings.py
│   └── urls.py
└── README.md
```

---

## Pages

### `/` — Home
- **Hero**: Full-viewport with ambient gradient, architectural grid overlay, cursor glow
- **Impact Metrics**: 4-column stats grid (deployments, leadership years, optimization %, patents)
- **Featured Projects**: Bento-style 12-column grid (2 cards + wide horizontal card)
- **Technical Arsenal**: 4-category skill list with editorial layout
- **CTA**: "Let's build the ark" with contact button

### `/about` — About
- **Hero Split**: 7-col bio + 5-col stats card
- **Career Timeline**: Alternating layout with vertical center line
- **Engineering Values**: 4-card grid
- **Quote**: Full-width editorial blockquote

### `/projects` — Projects
- **Hero**: Display headline + project count metadata
- **Filter Bar**: Pill buttons — All / Sustainability / Blockchain / AI / Hardware
- **Bento Grid**: Mixed card sizes (large 8-col, small 4-col, tall, wide, medium)

### `/contact` — Contact
- **Hero**: "Let's Build the Future of Code"
- **Form**: Underline-style inputs (editorial), inquiry type selector, Django API submission
- **Info Panel**: Contact details, social links, Django endpoint documentation

---

## Django Backend Setup

```bash
# Install dependencies
pip install django djangorestframework django-cors-headers

# Run migrations
python manage.py migrate

# Start development server
python manage.py runserver
```

### Contact API Endpoint

```python
# contact/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import ContactSerializer
from django.core.mail import send_mail

class ContactFormView(APIView):
    def post(self, request):
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            send_mail(
                subject=f"Portfolio Contact: {serializer.data['type']}",
                message=serializer.data['message'],
                from_email=serializer.data['email'],
                recipient_list=['joy@joychepkorir.dev'],
            )
            return Response({'status': 'transmitted'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
```

```python
# contact/serializers.py
from rest_framework import serializers
from .models import ContactMessage

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = ['name', 'email', 'company', 'type', 'message', 'created_at']
```

---

## Features

- **Dark / Light Mode Toggle** — CSS variable switching, persistent preference
- **Fully Responsive** — 12-column grid desktop, 4-column mobile with adaptive typography
- **Scroll Reveal Animations** — Intersection Observer with staggered delays
- **Cursor Glow Effect** — Radial gradient follows cursor (desktop only)
- **Project Filtering** — Client-side category filter with smooth transitions
- **Architectural Grid Overlay** — Subtle 40px grid on hero sections
- **Ambient Background** — Animated radial gradients for depth
- **Glass Navigation** — `backdrop-filter: blur(20px)` with scroll-aware opacity
- **Premium Hover States** — Gold border transitions, scale micro-animations
- **Contact Form** — Underline inputs with gold focus glow, Django REST API integration

---

## Design Tokens Reference

```css
/* Spacing */
--stack-xl: 120px;    /* Between major sections */
--stack-lg: 80px;     /* Between subsections */
--stack-md: 40px;     /* Between components */
--margin-desktop: 80px;
--margin-mobile: 24px;

/* Elevation (tonal, not shadow-based) */
surface-container-lowest: #0e0e0e   /* Cards, footers */
surface-container-low:    #1c1b1b   /* Project cards */
surface-container:        #201f1f   /* Elevated cards */
surface-container-high:   #2b2a2a   /* Active surfaces */

/* Interaction — Gold signifier */
tertiary: #e9c349    /* Active nav, hover borders, tags, icons */
```

---

## Browser Support
Chrome 90+, Firefox 88+, Safari 14+, Edge 90+  
*(backdrop-filter requires prefix for older Safari)*

---

*© 2024 Joy Chepkorir Bett. Building Digital Arks.*
