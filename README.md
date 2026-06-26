# PFO2 · Prompt Engineering en Agentes de IA

| Campo | Detalle |
| --- | --- |
| Estudiante | Miguel Angel Flores |
| Comisión | Lunes |
| Institución | IFTS N.º 29 |
| Entrega | 26/06/2026 |

🔗 **[Ver sitio en Vercel](https://ifts-twin-ia-landing-pages.vercel.app/)**

---

## Estructura del proyecto

```text
twinIAs/
├── index.html       → portada de acceso
├── prompt.txt       → prompt utilizado
├── agent1/
│   ├── index.html   → landing · Agente 1
│   └── styles.css
├── agent2/
│   ├── index.html   → landing · Agente 2
│   └── styles.css
├── imgs/            → capturas
└── README.md
```

---

## Agentes utilizados

| # | Plataforma | Modelo |
| --- | --- | --- |
| Agente 1 | Codex (OpenAI) | GPT-5.5 · razonamiento medio |
| Agente 2 | Cursor | Composer 2.5 Fast (Kimi K2.5) |

---

## Ingeniería del prompt

**Estilo elegido: Japandi** — fusión de minimalismo japonés y calidez escandinava.

Se eligió un estilo con filosofía propia (el concepto de *ma*, el espacio negativo como elemento activo) porque obliga al prompt a describir sensaciones y atmósferas en lugar de listar colores y fuentes. Esto produce instrucciones más ricas y outputs más diferenciados entre agentes — a diferencia de los estilos que los modelos tienden a defaultear (neobrutalism, dark mode con acento neón, fondos crema con serif de alto contraste).

**Fuentes aplicadas:** [Anthropic Prompt Engineering Guide](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview) · [OpenAI Prompt Engineering Guide](https://platform.openai.com/docs/guides/prompt-engineering)

| Principio | Aplicación en el prompt |
| --- | --- |
| Instrucciones claras y específicas | Cada requisito de la landing se describió de forma explícita, sin ambigüedad |
| Contexto rico | Concepto de negocio concreto (consultora de diseño de interiores) como marco semántico |
| Separación de responsabilidades | Tres bloques diferenciados: requisitos funcionales, filosofía de diseño, restricciones técnicas |
| Restricciones técnicas explícitas | Stack acotado al final: HTML/CSS/JS vanilla, sin frameworks, mobile-first con `rem` |
| Prompt en inglés | Los modelos fueron entrenados con documentación técnica en inglés; términos como `hero section`, `sticky nav` o `micro-interactions` tienen correspondencia directa con los patrones que el agente reconoce. El idioma del contenido generado se separó con la instrucción explícita: *"All written content must be written in Spanish (Latin American)"* |

### Prompt utilizado

<details>
<summary><strong>Ver prompt completo (inglés)</strong></summary>

Using a Japandi design aesthetic — the refined fusion of Japanese minimalism and Scandinavian warmth — conceive and build a complete, single-page landing page for an artisanal interior design consultancy that specializes in creating intentional, calming living spaces for urban professionals.

The landing page must include: a sticky navigation header with logo and smooth-scroll anchor links; a hero section with a powerful headline, a short subheading, and a primary call-to-action button; an "About Us" section describing the studio's philosophy; a services or features section showcasing at least three core offerings; a testimonials section with at least two client reviews; a visual contact form (name, email, message fields and a submit button — no backend required); and a footer with social media links.

As visitors arrive and scroll through this single cohesive page, they should feel a quiet sense of arrival — the visual calm of an uncluttered room, the warmth of natural textures translated into digital form. The color palette must incorporate earthy, muted tones: warm off-whites, sage greens, clay terracotta, and deep charcoal, used sparingly and with intention. Typography and spacing should create generous breathing room, guiding the eye downward with the ease of flipping through a handcrafted book. All written content on the landing page — headings, body text, navigation labels, button text, testimonials, form placeholders, and footer — must be written in Spanish (Latin American).

The design philosophy must honor the Japandi principle that beauty lives in restraint. Typography should feel neither cold nor decorative — choose a serif for headlines that carries quiet authority, like ink pressed deliberately into fine paper, and a clean sans-serif for body text that is welcoming and unhurried. All micro-interactions and hover states should feel like a gentle exhale: smooth, slow transitions (300–500ms ease) with no sudden jumps or aggressive effects.

The single-page scrolling experience should progress as an emotional arc — from an initial feeling of stillness and curiosity in the hero, through a growing sense of trust and warmth in the about and services sections, into the grounded intimacy of testimonials, arriving finally at a contact form that feels like an open, unhurried invitation. Every section transition should feel inevitable, not abrupt, as if the page breathes between its own parts.

Draw inspiration from the emotional quality of a carefully arranged tea room, where every object placed has a reason and every empty surface is as deliberate as the filled ones — the Japanese concept of ma, the power of negative space. Reference the sensory atmosphere of a Scandinavian design studio in winter: indirect natural light, raw linen, pale wood, the smell of cedar — translated not literally but in spirit into generous whitespace, warm neutral backgrounds, and tactile-feeling surface treatments achieved through subtle border radii and refined shadow-free depth.

The craftsmanship philosophy of slow, purposeful making should permeate every detail: text at optical sizes that reward reading rather than skimming, section headers that feel hand-lettered in their precision, spacing that never feels rushed. The result must be a single scrolling page that feels less like a website and more like a beautifully designed object — something that earns quiet admiration through its restraint.

Generate the landing page as a structured web project with separate files: index.html for the markup, styles.css for all styling, and script.js for any smooth-scroll or interaction behavior. Use semantic HTML5 elements. CSS must be written without any framework — pure CSS only, using custom properties for the color palette. No external CSS libraries. JavaScript must be vanilla only, no dependencies.

All files must be linked correctly in the index.html. The layout must be fully responsive and mobile-first. Use rem units for all font sizes and spacing. Use CSS custom properties for all colors, font stacks, and spacing scales. Breakpoints should be defined with min-width media queries at 480px, 768px, and 1024px. All sections must reflow gracefully on screens as narrow as 320px with no horizontal overflow.

</details>

> *A diferencia de enfoques orientados a la especificación técnica exhaustiva, el prompt adoptó una estrategia basada en atmósfera y filosofía de diseño: en lugar de instruir al agente sobre **cómo** construir, se le describió **cómo debía sentirse** el resultado. Esto priorizó evaluar la capacidad creativa autónoma del agente — nombre de marca, identidad visual, jerarquía tipográfica — en lugar de su capacidad para seguir instrucciones puntuales.*

---

## Capturas

### Agente 1 — Codex · Casa Madori

| Vista general | Nav responsive | Menú | Footer |
| --- | --- | --- | --- |
| ![Desktop](./img/casa_madori_desktop.gif) | ![Nav mobile](./img/responsive_nav_madori.gif) | ![Menú](./img/menu_madori.gif) | ![Socials](./img/socials-madori.gif) |

### Agente 2 — Cursor · Ma Espacios

| Vista desktop 1 | Vista desktop 2 | Formulario | Menú | Footer |
| --- | --- | --- | --- | --- |
| ![Desktop 1](./img/ma_espacios_dk1.gif) | ![Desktop 2](./img/ma_espacios_dk2.gif) | ![Formulario](./img/forms_ma_espacios.gif) | ![Menú](./img/menu_error_ma_espacios.gif) | ![Socials](./img/ma_espacios_socials.gif) |

---

## Análisis comparativo

Ambos agentes cumplieron los 7 requisitos de la consigna y mostraron alta fidelidad al estilo Japandi. Las diferencias aparecen en decisiones creativas y arquitectura técnica.

### Identidad visual

| | Codex · Casa Madori | Cursor · Ma Espacios |
| --- | --- | --- |
| **Nombre** | *Casa* + *madori* (間取り: distribución del espacio) | *Ma* (間: espacio negativo como elemento activo) |
| **Logo** | Círculo partido por diagonal en terracota | — |
| **Tipografía** | `Avenir Next` / `Georgia` (sistema, sin Google Fonts) | `Cormorant Garamond` + `DM Sans` (Google Fonts) |
| **Asset generado** | SVG ilustración de sala Japandi (no solicitado) | Forma abstracta CSS pura en sección "Nosotros" |

### Arquitectura técnica

| | Codex | Cursor |
| --- | --- | --- |
| **CSS tokens** | Paleta + `rem`, conciso | Escala completa: 9 niveles de espaciado, tipografía `--text-xs` a `--text-hero`, variables de easing |
| **JavaScript** | `IntersectionObserver` para reveal al scroll | IIFE + scroll throttling con `requestAnimationFrame`, `history.replaceState`, cierre con `Escape` |
| **Formulario** | Validación nativa HTML (atributos del navegador) | Validación JS manual: mensajes de error en español, foco automático, estados visuales diferenciados |
| **Footer icons** | Texto / enlaces | SVG inline para redes sociales |
| **Tiempo de generación** | ~11 minutos · 4 archivos | Considerablemente más rápido |

### Conclusión

No hay un ganador absoluto. **Codex** mostró mayor autonomía creativa (generó un asset visual sin que se lo pidieran). **Cursor** mostró mayor rigor técnico y atención al detalle de UX. El prompt funcionó en ambos — las diferencias reflejan las fortalezas propias de cada modelo.
