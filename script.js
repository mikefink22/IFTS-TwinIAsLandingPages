const PROMPT_EN = `Using a Japandi design aesthetic — the refined fusion of Japanese minimalism and Scandinavian warmth — conceive and build a complete, single-page landing page for an artisanal interior design consultancy that specializes in creating intentional, calming living spaces for urban professionals. The landing page must include: a sticky navigation header with logo and smooth-scroll anchor links; a hero section with a powerful headline, a short subheading, and a primary call-to-action button; an "About Us" section describing the studio's philosophy; a services or features section showcasing at least three core offerings; a testimonials section with at least two client reviews; a visual contact form (name, email, message fields and a submit button — no backend required); and a footer with social media links. As visitors arrive and scroll through this single cohesive page, they should feel a quiet sense of arrival — the visual calm of an uncluttered room, the warmth of natural textures translated into digital form. The color palette must incorporate earthy, muted tones: warm off-whites, sage greens, clay terracotta, and deep charcoal, used sparingly and with intention. Typography and spacing should create generous breathing room, guiding the eye downward with the ease of flipping through a handcrafted book.  All written content on the landing page — headings, body text, navigation labels, button text, testimonials, form placeholders, and footer — must be written in Spanish (Latin American)

The design philosophy must honor the Japandi principle that beauty lives in restraint. Typography should feel neither cold nor decorative — choose a serif for headlines that carries quiet authority, like ink pressed deliberately into fine paper, and a clean sans-serif for body text that is welcoming and unhurried. All micro-interactions and hover states should feel like a gentle exhale: smooth, slow transitions (300–500ms ease) with no sudden jumps or aggressive effects. The single-page scrolling experience should progress as an emotional arc — from an initial feeling of stillness and curiosity in the hero, through a growing sense of trust and warmth in the about and services sections, into the grounded intimacy of testimonials, arriving finally at a contact form that feels like an open, unhurried invitation. Every section transition should feel inevitable, not abrupt, as if the page breathes between its own parts.

Draw inspiration from the emotional quality of a carefully arranged tea room, where every object placed has a reason and every empty surface is as deliberate as the filled ones — the Japanese concept of ma, the power of negative space. Reference the sensory atmosphere of a Scandinavian design studio in winter: indirect natural light, raw linen, pale wood, the smell of cedar — translated not literally but in spirit into generous whitespace, warm neutral backgrounds, and tactile-feeling surface treatments achieved through subtle border radii and refined shadow-free depth. The craftsmanship philosophy of slow, purposeful making should permeate every detail: text at optical sizes that reward reading rather than skimming, section headers that feel hand-lettered in their precision, spacing that never feels rushed. The result must be a single scrolling page that feels less like a website and more like a beautifully designed object — something that earns quiet admiration through its restraint. 

Generate the landing page as a structured web project with separate files: index.html for the markup, styles.css for all styling, and script.js for any smooth-scroll or interaction behavior. Use semantic HTML5 elements. CSS must be written without any framework — pure CSS only, using custom properties for the color palette. No external CSS libraries. JavaScript must be vanilla only, no dependencies. All files must be linked correctly in the index.html. 

The layout must be fully responsive and mobile-first. Use rem units for all font sizes and spacing. Use CSS custom properties for all colors, font stacks, and spacing scales. Breakpoints should be defined with min-width media queries at 480px, 768px, and 1024px. All sections must reflow gracefully on screens as narrow as 320px with no horizontal overflow.`;

const PROMPT_ES = `Usando una estética de diseño Japandi — la refinada fusión del minimalismo japonés y la calidez escandinava — concebí y construí una landing page completa de una sola página para una consultora de diseño de interiores artesanal especializada en crear espacios de vida intencionales y serenos para profesionales urbanos. La landing page debe incluir: un encabezado de navegación fijo con logo y enlaces de desplazamiento suave; una sección hero con un título impactante, un subtítulo breve y un botón de llamada a la acción principal; una sección "Sobre Nosotros" que describa la filosofía del estudio; una sección de servicios o características que muestre al menos tres ofertas principales; una sección de testimonios con al menos dos reseñas de clientes; un formulario de contacto visual (campos de nombre, email, mensaje y botón de envío — sin backend requerido); y un pie de página con enlaces a redes sociales. A medida que los visitantes lleguen y recorran esta página cohesiva, deben sentir una quieta sensación de llegada — la calma visual de una habitación sin desorden, la calidez de las texturas naturales traducidas a formato digital. La paleta de colores debe incorporar tonos terrosos y apagados: blancos cálidos, verdes salvia, terracota arcillosa y carbón profundo, usados con moderación e intención. Todo el contenido escrito en la página de destino (landing page) —encabezados, texto del cuerpo, etiquetas de navegación, texto de botones, testimonios, marcadores de posición de formularios y pie de página — debe estar escrito en español (latinoamericano).

La filosofía de diseño debe honrar el principio Japandi de que la belleza vive en la contención. La tipografía no debe sentirse ni fría ni decorativa — elegí una serif para los títulos que transmita autoridad silenciosa, como tinta presionada deliberadamente sobre papel fino, y una sans-serif limpia para el cuerpo del texto que sea acogedora y pausada. Todas las microinteracciones y estados hover deben sentirse como una exhalación suave: transiciones lentas y fluidas (300–500ms ease) sin saltos bruscos ni efectos agresivos. La experiencia de desplazamiento debe progresar como un arco emocional — desde una sensación inicial de quietud y curiosidad en el hero, pasando por una creciente sensación de confianza y calidez en las secciones de sobre nosotros y servicios, hasta la intimidad arraigada de los testimonios, llegando finalmente a un formulario de contacto que se sienta como una invitación abierta y tranquila.

Inspirate en la calidad emocional de una sala de té cuidadosamente dispuesta, donde cada objeto tiene una razón de ser y cada superficie vacía es tan deliberada como las llenas — el concepto japonés de ma, el poder del espacio negativo. Referenciá la atmósfera sensorial de un estudio de diseño escandinavo en invierno: luz natural indirecta, lino crudo, madera pálida — traducidos no literalmente sino en espíritu en generosos espacios en blanco, fondos neutros cálidos y tratamientos de superficie de aspecto táctil logrados mediante bordes redondeados sutiles y profundidad sin sombras. El resultado debe ser una página que se sienta menos como un sitio web y más como un objeto bellamente diseñado.

Generá la landing page como un proyecto web estructurado con archivos separados: index.html para el marcado, styles.css para todos los estilos, y script.js para el desplazamiento suave y comportamiento interactivo. Usá elementos semánticos HTML5. El CSS debe escribirse sin ningún framework — CSS puro únicamente, usando propiedades personalizadas para la paleta de colores. Sin librerías CSS externas. El JavaScript debe ser vanilla únicamente, sin dependencias.

El diseño debe ser completamente responsivo (adaptable) y seguir el enfoque mobile-first (priorizando dispositivos móviles). Utilice unidades rem para todos los tamaños de fuente y espaciados. Utilice propiedades personalizadas de CSS para todos los colores, conjuntos de fuentes (font stacks) y escalas de espaciado. Los puntos de interrupción (breakpoints) deben definirse mediante consultas de medios (media queries) de tipo min-width a los 480px, 768px y 1024px. Todas las secciones deben refluir de manera fluida en pantallas tan estrechas como 320px sin generar desbordamiento horizontal.`;

let isTerminal = false;
let isEN = true;
let isOpen = false;
const year = new Date().getFullYear();

function updateFooter() {
    document.getElementById('footer-note').innerHTML = isTerminal
        ? `// modo terminal activo &nbsp;·&nbsp; Desarrollado por MikeFink © ${year}`
        : `Estilo Japandi &nbsp;/&nbsp; <span style="opacity:0.9">Desarrollado por MikeFink © ${year}</span>`;
}

function toggleTheme() {
    isTerminal = !isTerminal;
    document.body.classList.toggle('terminal', isTerminal);
    document.getElementById('toggle-label').textContent = isTerminal
        ? 'cambiar a japandi'
        : 'cambiar a terminal';
    updateFooter();
}

function togglePrompt(e) {
    isOpen = !isOpen;
    const card = document.querySelector('.card-prompt');
    card.classList.toggle('open', isOpen);
    if (isOpen) {
        document.getElementById('prompt-text').textContent = isEN ? PROMPT_EN : PROMPT_ES;
    }
}

function toggleLang(e) {
    e.stopPropagation();
    isEN = !isEN;
    document.getElementById('lang-label').textContent = isEN ? 'EN' : 'ES';
    document.getElementById('lang-btn').textContent = isEN ? 'ver en español' : 'view in english';
    document.getElementById('prompt-text').textContent = isEN ? PROMPT_EN : PROMPT_ES;
}

updateFooter();