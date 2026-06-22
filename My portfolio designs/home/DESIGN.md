---
name: Kinetic Prestige
colors:
  surface: '#141313'
  surface-dim: '#141313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2b2a2a'
  surface-container-highest: '#353434'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c7c7'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c8c6c5'
  primary: '#c8c6c5'
  on-primary: '#313030'
  primary-container: '#1a1a1a'
  on-primary-container: '#848282'
  inverse-primary: '#5f5e5e'
  secondary: '#c9c6c1'
  on-secondary: '#31312d'
  secondary-container: '#474743'
  on-secondary-container: '#b7b5b0'
  tertiary: '#e9c349'
  on-tertiary: '#3c2f00'
  tertiary-container: '#cca730'
  on-tertiary-container: '#4f3e00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#e5e2dc'
  secondary-fixed-dim: '#c9c6c1'
  on-secondary-fixed: '#1c1c18'
  on-secondary-fixed-variant: '#474743'
  tertiary-fixed: '#ffe088'
  tertiary-fixed-dim: '#e9c349'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#574500'
  background: '#141313'
  on-background: '#e5e2e1'
  surface-variant: '#353434'
typography:
  display-xl:
    fontFamily: Literata
    fontSize: 80px
    fontWeight: '700'
    lineHeight: 92px
    letterSpacing: -0.04em
  display-xl-mobile:
    fontFamily: Literata
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Literata
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Literata
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  title-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
    letterSpacing: 0em
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0em
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 32px
  margin-desktop: 80px
  margin-mobile: 24px
  stack-xl: 120px
  stack-lg: 80px
  stack-md: 40px
  stack-sm: 16px
---

## Brand & Style

The design system is a high-performance, editorial framework tailored for a tech entrepreneur who bridges the gap between sophisticated software engineering and visionary leadership. It draws heavily from the "Academic Futurism" aesthetic—blending the timeless authority of ivory-tower institutions with the precision of cutting-edge silicon valley labs.

The visual language is characterized by **Architectural Minimalism**. It uses vast white space (or deep charcoal voids) to create a sense of scale and importance. Interaction design should feel weighted and intentional, utilizing "Mass-aware" transitions where elements appear to have physical substance. 

The core style is a hybrid of **Modern Editorial** (high-contrast typography and rigid grids) and **Subtle Glassmorphism**, used exclusively for high-level navigational elements to provide a sense of technical depth without cluttering the structural integrity of the layout.

## Colors

The palette is built on a foundation of "Rich Charcoal" and "Warm Cream," moving away from sterile pure blacks and whites to achieve a more bespoke, luxury feel. 

- **Primary & Secondary:** These define the canvas. In Dark Mode, Charcoal dominates with Cream used for high-contrast legibility. In Light Mode, Ivory and Cream provide a warm, gallery-like backdrop.
- **Elegant Gold (#D4AF37):** Used sparingly as a "Signifier of Excellence." It is reserved for active states, premium badges, or subtle border highlights.
- **Sophisticated Deep Blue (#003366):** Represents the technical "Full Stack" depth. It is used for code-related elements, technical links, and deep-shadow tints to add dimension to the charcoal surfaces.
- **Functional Grays:** Used strictly for low-hierarchy metadata and structural borders.

## Typography

This system employs a "Sophisticated Contrast" strategy:

1.  **Headlines (Literata):** A refined serif that feels authoritative and literary. Use these for storytelling, section headers, and quotes. The tight letter-spacing in larger sizes mimics high-end print journalism.
2.  **Body (Hanken Grotesk):** A modern sans-serif that ensures absolute clarity for technical documentation and entrepreneurial strategy. It provides a clean, neutral counter-balance to the expressive serif.
3.  **Technical Labels (JetBrains Mono):** Reserved for technical metadata, code snippets, and UI labels. Using a monospaced font for these details reinforces the "Full Stack" identity of the brand.

**Scaling:** On mobile, display sizes should aggressively shrink while increasing letter-spacing slightly to maintain readability on smaller screens.

## Layout & Spacing

The layout is governed by a **Strict 12-Column Grid** on desktop and a **4-Column Grid** on mobile. 

- **Immersive Heroes:** Content should frequently "break" the container to bleed to the edge of the screen, particularly for high-quality imagery or large typography.
- **The "Stripe" Offset:** Use asymmetrical layouts where the primary text occupies 6-7 columns and supporting data or imagery occupies the remaining space, shifted slightly on the vertical axis.
- **Whitespace as a Feature:** Never crowd the elements. "Stack-xl" (120px) should be the standard padding between major sections to emphasize the luxury of space.
- **Alignment:** All technical data (Mono font) should be aligned to a strict vertical axis to create an "architectural" feel.

## Elevation & Depth

This design system avoids heavy drop shadows in favor of **Tonal Elevation** and **Optical Layers**:

- **Primary Surface:** The lowest level. In dark mode, this is `#0D0D0D`.
- **Secondary Surface (Floating):** Elements like cards or modals use `#1A1A1A` with a 1px solid border of `#2E2E2E` (or Elegant Gold for primary focus).
- **Glassmorphism:** Use a `backdrop-filter: blur(20px)` with a 10% opacity white/black tint for navigation bars and overlays. This creates a sense of "Futuristic Transparency."
- **Interactive Depth:** On hover, cards should not lift with a shadow; instead, they should transition their border color to Gold or Deep Blue, and slightly shift their internal content (2-4px) to simulate mechanical precision.

## Shapes

The shape language is **Precise and Sharp**. 

- **Structural Elements:** Main containers and large sections use 0px radius (Sharp) to maintain an architectural, solid look.
- **Interactive Elements:** Buttons and cards use a "Soft" radius (0.25rem/4px). This subtle rounding prevents the UI from feeling hostile while maintaining a professional, serious tone.
- **Pill Elements:** Reserved exclusively for status indicators (e.g., "Live," "In Progress") to provide a clear visual departure from the rigid grid.

## Components

### Buttons
- **Primary:** Warm Cream background with Charcoal text. No border. On hover, the background transitions to Elegant Gold.
- **Secondary/Ghost:** 1px border of Deep Blue or Cream. Text in corresponding color. Fill appears on hover with 5% opacity.

### Technical Cards
Cards should feel like a "Terminal Window" in a luxury car. Use a dark background, the JetBrains Mono font for titles, and a very thin Deep Blue border.

### Input Fields
Inputs are underlined rather than boxed (Editorial style). The focus state changes the underline from Soft Gray to Elegant Gold with a subtle glow effect.

### Chips & Tags
Monospaced text, all-caps, with a background color that matches the text at 10% opacity. For example, a "React" tag would use Deep Blue text on a faint blue background.

### Hero Interactive
A signature component: A large display headline where specific words (e.g., "Innovation", "Code") can be hovered to reveal a background blur effect or a technical "peek" into the underlying code of that section.