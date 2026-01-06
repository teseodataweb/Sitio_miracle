# Changelog de Sprints - Concretos Miracle

## Registro de Actualizaciones

Este documento registra todos los cambios realizados durante la corrección del sitio web, organizados por sprints.

---

## Estado General del Proyecto

| Sprint | Estado | Progreso | Fecha Inicio | Fecha Fin |
|--------|--------|----------|--------------|-----------|
| Sprint 1 | COMPLETADO | 7/7 | 12-Dic-2025 | 12-Dic-2025 |
| Sprint 2 | COMPLETADO | 5/5 | 12-Dic-2025 | 12-Dic-2025 |
| Sprint 3 | COMPLETADO | 5/5 | 12-Dic-2025 | 12-Dic-2025 |
| Sprint 4 | COMPLETADO | 6/6 | 12-Dic-2025 | 12-Dic-2025 |
| Sprint 5 | COMPLETADO | 4/4 | 12-Dic-2025 | 12-Dic-2025 |
| Sprint 6 | COMPLETADO | 10/10 | 05-Ene-2026 | 05-Ene-2026 |

---

## Sprint 1: Correcciones Críticas

**Estado:** COMPLETADO
**Objetivo:** Hacer el sitio funcional con correcciones básicas
**Fecha de completado:** 12-Dic-2025

### Tareas del Sprint

| # | Tarea | Estado | Archivos |
|---|-------|--------|----------|
| 1.1 | Cambiar lang="zxx" a lang="es" | COMPLETADO | 6 archivos |
| 1.2 | Corregir "Nostros" → "Nosotros" | COMPLETADO | 6 archivos |
| 1.3 | Corregir mailto incorrecto | COMPLETADO | 6 archivos |
| 1.4 | Corregir callto → tel | COMPLETADO | 6 archivos |
| 1.5 | Corregir botón "Llamar ahora" | COMPLETADO | contact.html |
| 1.6 | Corregir logo móvil | COMPLETADO | 6 archivos |

### Registro de Cambios

#### Tarea 1.1: Idioma HTML
**Antes:**
```html
<html lang="zxx">
```

**Después:**
```html
<html lang="es">
```

**Archivos modificados:**
- [x] index.html (línea 2)
- [x] about.html (línea 2)
- [x] services.html (línea 2)
- [x] projects.html (línea 2)
- [x] blog.html (línea 2)
- [x] contact.html (línea 2)

---

#### Tarea 1.2: Error Ortográfico Navegación
**Antes:**
```html
<li><a href="about.html">Nostros</a></li>
```

**Después:**
```html
<li><a href="about.html">Nosotros</a></li>
```

**Archivos modificados:**
- [x] index.html (línea 118)
- [x] about.html (línea 119)
- [x] services.html (línea 118)
- [x] projects.html (línea 118)
- [x] blog.html (línea 118)
- [x] contact.html (línea 118)

---

#### Tarea 1.3: Enlaces de Email
**Antes:**
```html
<a href="mailto:support@gmail.com">info@concretosmiracle.com</a>
```

**Después:**
```html
<a href="mailto:info@concretosmiracle.com">info@concretosmiracle.com</a>
```

**Ubicaciones por archivo:**
- Header top-right
- Footer footer-text

**Archivos modificados:**
- [x] index.html
- [x] about.html
- [x] services.html
- [x] projects.html
- [x] blog.html
- [x] contact.html

---

#### Tarea 1.4: Enlaces Telefónicos
**Antes:**
```html
<a href="callto:+000(123)45688">+52 (322) 224 7200</a>
```

**Después:**
```html
<a href="tel:+523222247200">+52 (322) 224 7200</a>
```

**Ubicaciones por archivo:**
- Header top-right
- Footer (múltiples lugares)

**Archivos modificados:**
- [x] index.html
- [x] about.html
- [x] services.html
- [x] projects.html
- [x] blog.html
- [x] contact.html

---

#### Tarea 1.5: Botón "Llamar ahora"
**Antes:**
```html
<a href="about.html" class="theme-btn">Llamar ahora<i class="far fa-angle-double-right"></i></a>
```

**Después:**
```html
<a href="tel:+523222247200" class="theme-btn">Llamar ahora<i class="far fa-angle-double-right"></i></a>
```

**Archivos modificados:**
- [x] contact.html (línea 428)

---

#### Tarea 1.6: Logo Móvil
**Antes:**
```html
<div class="mobile-logo">
    <a href="index.html">
        <img src="assets/images/logos/logo.png" alt="Logo" title="Logo">
    </a>
</div>
```

**Después:**
```html
<div class="mobile-logo">
    <a href="index.html">
        <img src="assets/images/logos/logo_miracle.png" alt="Logo Concretos Miracle" title="Concretos Miracle">
    </a>
</div>
```

**Archivos modificados:**
- [x] index.html (línea 93-96)
- [x] about.html (línea 94-97)
- [x] services.html (línea 93-96) - Ya estaba correcto
- [x] projects.html (línea 93-96)
- [x] blog.html (línea 93-96)
- [x] contact.html (línea 93-96)

---

### Resumen Sprint 1

| Métrica | Valor |
|---------|-------|
| Total de cambios | 37 |
| Archivos modificados | 6/6 |
| Líneas cambiadas | ~50 |
| Estado | COMPLETADO |

**Cambios realizados:**
- 6 correcciones de idioma HTML (lang)
- 6 correcciones ortográficas (Nostros → Nosotros)
- 12+ correcciones de enlaces email (mailto)
- 12+ correcciones de enlaces telefónicos (callto → tel)
- 1 corrección de botón "Llamar ahora"
- 5 correcciones de logo móvil

---

## Sprint 2: Formularios y Funcionalidad

**Estado:** COMPLETADO
**Objetivo:** Formularios operativos
**Fecha de completado:** 12-Dic-2025

### Tareas del Sprint

| # | Tarea | Estado | Archivos |
|---|-------|--------|----------|
| 2.1 | Crear backend PHP para formularios | COMPLETADO | assets/php/form-process.php |
| 2.2 | Actualizar formulario principal | COMPLETADO | contact.html |
| 2.3 | Corregir formulario sidebar | COMPLETADO | 6 archivos |
| 2.4 | Implementar newsletter | COMPLETADO | 6 archivos |
| 2.5 | Reemplazar Lorem Ipsum | COMPLETADO | contact.html |

### Registro de Cambios

#### Tarea 2.1: Backend PHP
**Archivo creado:** `assets/php/form-process.php`

**Funcionalidades implementadas:**
- Procesamiento de formulario de cotización (contact.html)
- Procesamiento de formulario sidebar (contacto rápido)
- Procesamiento de formulario newsletter
- Sanitización de datos de entrada
- Validación de email
- Envío de correos con formato estructurado
- Redirección con estado de éxito/error

**Configuración:**
```php
$config = [
    'to_email' => 'info@concretosmiracle.com',
    'from_email' => 'noreply@concretosmiracle.com',
    'from_name' => 'Sitio Web Concretos Miracle'
];
```

---

#### Tarea 2.2: Formulario Principal de Cotización
**Antes:**
```html
<form action="https://html.webtend.net/2024/limestone/assets/php/form-process.php" method="post">
```

**Después:**
```html
<form action="assets/php/form-process.php" method="post">
    <input type="hidden" name="form_type" value="quote">
```

**Archivos modificados:**
- [x] contact.html (línea 315-316)

---

#### Tarea 2.3: Formulario Sidebar
**Antes:**
```html
<form method="post" action="https://html.webtend.net/2024/limestone/contact.html">
    <input type="text" name="text" ...>
    <textarea placeholder="Mensaje" ...>
```

**Después:**
```html
<form method="post" action="assets/php/form-process.php">
    <input type="hidden" name="form_type" value="sidebar">
    <input type="text" name="name" ...>
    <textarea name="message" placeholder="Mensaje" ...>
```

**Cambios adicionales:**
- Corregido `name="text"` → `name="name"`
- Agregado `name="message"` al textarea
- Corregido "Contactanos" → "Contáctanos" (tilde)

**Archivos modificados:**
- [x] index.html
- [x] about.html
- [x] services.html
- [x] projects.html
- [x] blog.html
- [x] contact.html

---

#### Tarea 2.4: Newsletter
**Antes:**
```html
<form class="newsletter-form" action="#">
    <input type="email" placeholder="Correo electrónico" required>
```

**Después:**
```html
<form class="newsletter-form" action="assets/php/form-process.php" method="post">
    <input type="hidden" name="form_type" value="newsletter">
    <input type="email" name="email" placeholder="Correo electrónico" required>
```

**Archivos modificados:**
- [x] index.html
- [x] about.html
- [x] services.html
- [x] projects.html
- [x] blog.html
- [x] contact.html

---

#### Tarea 2.5: Reemplazar Lorem Ipsum
**Ubicación:** contact.html línea 425

**Antes:**
```html
<p>Sed ut perspiciatis unde omnis iste natus error voluptatem laudantium totam rem aperiam, eaque inventores</p>
```

**Después:**
```html
<p>Estamos listos para atenderte. Comunícate con nosotros por cualquiera de estos medios y te responderemos a la brevedad.</p>
```

---

### Resumen Sprint 2

| Métrica | Valor |
|---------|-------|
| Total de cambios | 20+ |
| Archivos modificados | 7 (6 HTML + 1 PHP nuevo) |
| Nuevo archivo creado | assets/php/form-process.php |
| Estado | COMPLETADO |

**Cambios realizados:**
- 1 archivo PHP creado (procesador de formularios)
- 1 formulario de cotización actualizado
- 6 formularios de sidebar corregidos
- 6 formularios de newsletter implementados
- 1 texto Lorem Ipsum reemplazado

---

## Sprint 3: Estructura HTML y SEO

**Estado:** COMPLETADO
**Objetivo:** HTML válido y SEO básico
**Fecha de completado:** 12-Dic-2025

### Tareas del Sprint

| # | Tarea | Estado | Archivos |
|---|-------|--------|----------|
| 3.1 | Agregar meta descriptions | COMPLETADO | 6 archivos |
| 3.2 | Corregir HTML mal anidado | COMPLETADO | 3 archivos |
| 3.3 | Corregir IDs duplicados | COMPLETADO | blog.html |
| 3.4 | Cerrar tags HTML | COMPLETADO | contact.html |
| 3.5 | Eliminar comentarios HTTrack | COMPLETADO | 6 archivos |

### Registro de Cambios

#### Tarea 3.1: Meta Descriptions
**Archivos modificados:**
- [x] index.html: "Concretos Miracle - Proveedor líder de concreto premezclado en Puerto Vallarta..."
- [x] about.html: "Conoce Concretos Miracle: más de 25 años de experiencia..."
- [x] services.html: "Productos de Concretos Miracle: concreto convencional, estructural..."
- [x] projects.html: "Proyectos realizados por Concretos Miracle: obras residenciales..."
- [x] blog.html: "Cotiza tu concreto premezclado con Concretos Miracle..."
- [x] contact.html: "Contacta a Concretos Miracle en Puerto Vallarta..."

---

#### Tarea 3.2: HTML Mal Anidado
**Problema:** `<section>` anidado incorrectamente dentro de `<nav>` en page-banner

**Antes:**
```html
<section class="page-banner-area"><h6>...</h6>
<nav aria-label="breadcrumb">
</section>
```

**Después:**
```html
<h6>...</h6>
<nav aria-label="breadcrumb">
    <ol class="breadcrumb">...</ol>
</nav>
```

**Archivos corregidos:**
- [x] services.html
- [x] projects.html
- [x] blog.html

---

#### Tarea 3.3: IDs Duplicados
**Problema:** Dos elementos con `id="collapseOne"` en accordions

**Solución:** Cambiado segundo accordion a `id="collapseFour"`

**Archivo:** blog.html (líneas 488, 492)

---

#### Tarea 3.4: Tags HTML Abiertos
**Problema:** `</ul>` huérfano y `<a>` dentro de `<ul>` sin `<li>`

**Antes:**
```html
<ul class="list pt-15">
    <li>...</li>
    <a href="..." class="theme-btn">Llamar ahora</a>
</ul>
</ul>  <!-- huérfano -->
```

**Después:**
```html
<ul class="list pt-15">
    <li>...</li>
</ul>
<a href="..." class="theme-btn mt-20">Llamar ahora</a>
```

**Archivo:** contact.html (líneas 426-432)

---

#### Tarea 3.5: Comentarios HTTrack
**Eliminados comentarios de scraping:**
```html
<!-- Mirrored from html.webtend.net/2024/limestone/... by HTTrack Website Copier/3.x [XR&CO'2014], ... -->
```

**Archivos:**
- [x] index.html
- [x] about.html
- [x] services.html
- [x] projects.html
- [x] blog.html
- [x] contact.html

---

### Resumen Sprint 3

| Métrica | Valor |
|---------|-------|
| Total de cambios | 18 |
| Archivos modificados | 6/6 |
| Problemas de SEO resueltos | 6 |
| Problemas de HTML resueltos | 5 |
| Estado | COMPLETADO |

---

## Sprint 4: Accesibilidad y UX

**Estado:** COMPLETADO
**Objetivo:** Mejorar accesibilidad
**Fecha de completado:** 12-Dic-2025

### Tareas del Sprint

| # | Tarea | Estado | Archivos |
|---|-------|--------|----------|
| 4.1 | Actualizar redes sociales con URLs reales | COMPLETADO | 6 archivos |
| 4.2 | Mejorar ALT de imágenes | COMPLETADO | 6 archivos |
| 4.3 | Agregar aria-label a iconos | COMPLETADO | 6 archivos |
| 4.4 | Agregar labels a formularios | COMPLETADO | contact.html |
| 4.5 | Corregir input date | COMPLETADO | contact.html |
| 4.6 | Eliminar comentarios HTTrack restantes | COMPLETADO | blog.html, contact.html |

### Registro de Cambios

#### Tarea 4.1: Redes Sociales con URLs Reales
**Cambios realizados:**
- Reemplazados iconos de Twitter y YouTube por Instagram y WhatsApp
- URLs actualizadas en header y sidebar de todos los archivos

**Antes:**
```html
<div class="social-style-one">
    <a href="#"><i class="fab fa-twitter"></i></a>
    <a href="#"><i class="fab fa-youtube"></i></a>
</div>
```

**Después:**
```html
<div class="social-style-one">
    <a href="https://www.facebook.com/concretosmiracle" target="_blank" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
    <a href="https://www.instagram.com/concretosmiracle/" target="_blank" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
    <a href="https://wa.me/523222247200" target="_blank" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
</div>
```

**Archivos modificados:**
- [x] index.html (header + sidebar)
- [x] about.html (header + sidebar)
- [x] services.html (header + sidebar)
- [x] projects.html (header + sidebar)
- [x] blog.html (header + sidebar)
- [x] contact.html (header + sidebar)

---

#### Tarea 4.2: Mejora de ALT de Imágenes
**Antes:**
```html
alt="Logo"
alt="About"
alt="FAQ"
alt="Gallery"
alt="Blog"
```

**Después:**
```html
alt="Logo Concretos Miracle"
alt="Concretos Miracle - Nosotros"
alt="Preguntas frecuentes sobre concreto"
alt="Galería de proyectos"
alt="Concreto premezclado"
```

**Archivos modificados:**
- [x] index.html
- [x] about.html
- [x] services.html
- [x] projects.html
- [x] blog.html
- [x] contact.html

---

#### Tarea 4.3: Aria-labels en Iconos
**Agregados aria-label a todos los iconos de redes sociales para accesibilidad:**
```html
aria-label="Facebook"
aria-label="Instagram"
aria-label="WhatsApp"
```

**Archivos modificados:** Todos (6 archivos)

---

#### Tarea 4.4: Labels en Formularios
**Agregados labels visualmente ocultos para accesibilidad WCAG:**

**Antes:**
```html
<div class="form-group">
    <input type="text" id="name" name="name" placeholder="Nombre completo" required>
</div>
```

**Después:**
```html
<div class="form-group">
    <label for="name" class="visually-hidden">Nombre completo</label>
    <input type="text" id="name" name="name" placeholder="Nombre completo" required>
</div>
```

**Campos con label agregado:**
- Nombre completo
- Empresa
- Teléfono / WhatsApp
- Correo electrónico
- Tipo de concreto requerido
- Cantidad estimada (m³)
- Ubicación de la obra
- Fecha aproximada de vaciado (label visible)
- Comentarios adicionales

**Archivo:** contact.html

---

#### Tarea 4.5: Corrección Input Date
**Problema:** El input type="date" no mostraba placeholder descriptivo

**Solución:** Se agregó label visible para indicar el propósito del campo

**Antes:**
```html
<input type="date" id="pour_date" name="pour_date" class="form-control" placeholder="Fecha aproximada de vaciado" required>
```

**Después:**
```html
<label for="pour_date">Fecha aproximada de vaciado</label>
<input type="date" id="pour_date" name="pour_date" class="form-control" required>
```

**Archivo:** contact.html

---

#### Tarea 4.6: Eliminación de Comentarios HTTrack Restantes
**Eliminados comentarios de HTTrack que habían quedado:**
```html
<!-- Mirrored from html.webtend.net/2024/limestone/... by HTTrack Website Copier/3.x [XR&CO'2014], ... -->
```

**Archivos:**
- [x] blog.html
- [x] contact.html

---

### Resumen Sprint 4

| Métrica | Valor |
|---------|-------|
| Total de cambios | 50+ |
| Archivos modificados | 6/6 |
| Mejoras de accesibilidad | 30+ |
| Redes sociales actualizadas | 12 (6 header + 6 sidebar) |
| Estado | COMPLETADO |

**Cambios realizados:**
- 12 bloques de redes sociales actualizados con URLs reales
- 30+ atributos ALT mejorados con descripciones contextuales
- 12+ aria-labels agregados para lectores de pantalla
- 9 labels agregados al formulario de cotización
- 1 corrección de input date con label visible
- 2 archivos con comentarios HTTrack eliminados

---

## Sprint 5: Optimización y Limpieza

**Estado:** COMPLETADO
**Objetivo:** Performance y producción
**Fecha de completado:** 12-Dic-2025

### Tareas del Sprint

| # | Tarea | Estado | Archivos |
|---|-------|--------|----------|
| 5.1 | Renombrar favicon (typo) | COMPLETADO | 6 archivos + imagen |
| 5.2 | Renombrar imagen con espacio | COMPLETADO | blog.html + imagen |
| 5.3 | Agregar lazy loading | COMPLETADO | 6 archivos |
| 5.4 | Actualizar footer bottom con redes sociales | COMPLETADO | 6 archivos |

### Registro de Cambios

#### Tarea 5.1: Renombrar Favicon
**Problema:** El favicon tenía un typo "niracle" en lugar de "miracle"

**Antes:**
```
assets/images/logos/favicon_niracle.png
```

**Después:**
```
assets/images/logos/favicon_miracle.png
```

**Referencias actualizadas en:**
- [x] index.html
- [x] about.html
- [x] services.html
- [x] projects.html
- [x] blog.html
- [x] contact.html

---

#### Tarea 5.2: Renombrar Imagen con Espacio
**Problema:** Nombre de archivo con paréntesis y espacio causa problemas en URLs

**Antes:**
```
assets/images/about/about-6 (1).png
```

**Después:**
```
assets/images/about/about-6.png
```

**Referencia actualizada en:** blog.html

---

#### Tarea 5.3: Agregar Lazy Loading
**Mejora:** Atributo `loading="lazy"` agregado a imágenes below-the-fold para mejor performance

**Categorías de imágenes con lazy loading:**
- Galería del footer (6 imágenes × 6 archivos)
- Testimonios
- FAQs
- Proyectos
- Sección About
- Blog
- Contacto

**Total:** ~60+ imágenes optimizadas

---

#### Tarea 5.4: Actualizar Footer Bottom con Redes Sociales
**Problema:** El footer bottom todavía tenía Twitter y YouTube con enlaces vacíos

**Antes:**
```html
<li><a href="#"><i class="fab fa-facebook"></i> Facebook</a></li>
<li><a href="#"><i class="fab fa-twitter"></i> Twitter</a></li>
<li><a href="#"><i class="fab fa-youtube"></i> Youtube</a></li>
```

**Después:**
```html
<li><a href="https://www.facebook.com/concretosmiracle" target="_blank"><i class="fab fa-facebook"></i> Facebook</a></li>
<li><a href="https://www.instagram.com/concretosmiracle/" target="_blank"><i class="fab fa-instagram"></i> Instagram</a></li>
<li><a href="https://wa.me/523222247200" target="_blank"><i class="fab fa-whatsapp"></i> WhatsApp</a></li>
```

**Archivos modificados:** 6 archivos HTML principales

---

### Resumen Sprint 5

| Métrica | Valor |
|---------|-------|
| Archivos renombrados | 2 |
| Referencias actualizadas | 7 |
| Imágenes con lazy loading | 60+ |
| Footer bottom actualizados | 6 |
| Estado | COMPLETADO |

**Cambios realizados:**
- 2 archivos renombrados (favicon y about-6)
- 7 referencias HTML actualizadas
- ~60 imágenes con lazy loading para mejor performance
- 6 footer bottom actualizados con redes sociales reales

---

## Sprint 6: SEO Avanzado y Correcciones Finales

**Estado:** COMPLETADO
**Objetivo:** SEO avanzado, Open Graph, Schema markup y correcciones HTML
**Fecha de completado:** 05-Ene-2026

### Tareas del Sprint

| # | Tarea | Estado | Archivos |
|---|-------|--------|----------|
| 6.1 | Agregar meta keywords | COMPLETADO | 6 archivos |
| 6.2 | Agregar Open Graph tags | COMPLETADO | 6 archivos |
| 6.3 | Crear sitemap.xml | COMPLETADO | sitemap.xml (nuevo) |
| 6.4 | Crear robots.txt | COMPLETADO | robots.txt (nuevo) |
| 6.5 | Agregar Schema markup LocalBusiness | COMPLETADO | index.html, contact.html |
| 6.6 | Implementar Analytics | YA IMPLEMENTADO | Todos los archivos |
| 6.7 | Eliminar comentarios HTTrack residuales | COMPLETADO | index.html, about.html |
| 6.8 | Corregir IDs duplicados en accordions | COMPLETADO | index.html, about.html |
| 6.9 | Corregir HTML mal anidado en banners | COMPLETADO | about.html, contact.html |
| 6.10 | Corregir estructura HTML rota | COMPLETADO | about.html, services.html |

### Registro de Cambios

#### Tarea 6.1: Meta Keywords
**Agregado a todos los archivos principales:**
```html
<meta name="keywords" content="concreto premezclado, Puerto Vallarta, concretos Miracle, construcción, concreto estructural, concreto MR, obra, cemento, Jalisco">
<meta name="author" content="Concretos Miracle">
```

**Archivos modificados:**
- [x] index.html
- [x] about.html
- [x] services.html
- [x] projects.html
- [x] blog.html
- [x] contact.html

---

#### Tarea 6.2: Open Graph y Twitter Cards
**Agregado a todos los archivos:**
```html
<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://concretosmiracle.com/">
<meta property="og:title" content="Concretos Miracle | Proveedor de Concreto Premezclado">
<meta property="og:description" content="Proveedor líder de concreto premezclado en Puerto Vallarta.">
<meta property="og:image" content="https://concretosmiracle.com/assets/images/logos/logo-miracle-new.png">
<meta property="og:locale" content="es_MX">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Concretos Miracle">
<meta name="twitter:description" content="Proveedor líder de concreto premezclado.">
<meta name="twitter:image" content="https://concretosmiracle.com/assets/images/logos/logo-miracle-new.png">
```

---

#### Tarea 6.3: Sitemap.xml
**Archivo creado:** sitemap.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://concretosmiracle.com/</loc>
        <priority>1.0</priority>
    </url>
    <!-- + 6 URLs más -->
</urlset>
```

---

#### Tarea 6.4: Robots.txt
**Archivo creado:** robots.txt
```
User-agent: *
Allow: /
Disallow: /assets/php/
Disallow: /dist/
Sitemap: https://concretosmiracle.com/sitemap.xml
```

---

#### Tarea 6.5: Schema Markup LocalBusiness
**Agregado JSON-LD a index.html y contact.html:**
```json
{
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Concretos Miracle",
    "telephone": "+52-322-224-7200",
    "email": "info@concretosmiracle.com",
    "address": {
        "streetAddress": "Agua Zarca 1050, Colonia Educación",
        "addressLocality": "Puerto Vallarta",
        "postalCode": "48338"
    }
}
```

---

#### Tarea 6.7: Comentarios HTTrack Residuales
**Eliminados comentarios al final de:**
```html
<!-- Mirrored from html.webtend.net/2024/limestone/... by HTTrack Website Copier/3.x -->
```

**Archivos:** index.html, about.html

---

#### Tarea 6.8: IDs Duplicados
**Problema:** Dos elementos con `id="collapseOne"` en cada archivo
**Solución:** Renombrado segundo accordion a `id="collapseFour"`

**Archivos:** index.html, about.html

---

#### Tarea 6.9: HTML Mal Anidado en Banners
**Problema:** `<section>` anidado incorrectamente dentro del banner
**Solución:** Eliminado section innecesario, corregido cierre de tags

**Archivos:** about.html, contact.html

---

#### Tarea 6.10: Estructura HTML Rota
**about.html:** `</div>` cerrado prematuramente en línea 630
**services.html:** `</ul>` huérfano sin lista abierta

---

### Resumen Sprint 6

| Métrica | Valor |
|---------|-------|
| Archivos nuevos creados | 2 (robots.txt, sitemap.xml) |
| Meta tags agregados | 30+ |
| Schema markup implementado | 2 archivos |
| Errores HTML corregidos | 6 |
| Estado | COMPLETADO |

---

## Historial de Actualizaciones

| Fecha | Sprint | Acción | Detalles |
|-------|--------|--------|----------|
| 12-Dic-2025 | - | Creación | Documento inicial creado |
| 12-Dic-2025 | 1 | Inicio | Sprint 1 iniciado |
| 12-Dic-2025 | 1 | Completado | 7/7 tareas completadas exitosamente |
| 12-Dic-2025 | 2 | Inicio | Sprint 2 iniciado - Backend PHP |
| 12-Dic-2025 | 2 | Completado | 5/5 tareas completadas - Formularios funcionales |
| 12-Dic-2025 | 3 | Inicio | Sprint 3 iniciado - SEO y HTML |
| 12-Dic-2025 | 3 | Completado | 5/5 tareas completadas - HTML válido y SEO básico |
| 12-Dic-2025 | 4 | Inicio | Sprint 4 iniciado - Accesibilidad y UX |
| 12-Dic-2025 | 4 | Completado | 6/6 tareas completadas - Redes sociales, ALT, aria-labels, labels |
| 12-Dic-2025 | 5 | Inicio | Sprint 5 iniciado - Optimización y limpieza |
| 12-Dic-2025 | 5 | Completado | 4/4 tareas completadas - Favicon, lazy loading, footer |
| 05-Ene-2026 | 6 | Inicio | Sprint 6 iniciado - SEO Avanzado y Correcciones Finales |
| 05-Ene-2026 | 6 | Completado | 10/10 tareas completadas - OG tags, Schema, sitemap, robots.txt, HTML fixes |

---

## Notas y Observaciones

### Decisiones Tomadas
**Sprint 1:**
- Se corrigió el logo móvil en 5 archivos (services.html ya tenía el logo correcto)
- Se detectó un enlace telefónico adicional en contact.html que usaba formato callto:+523222247200

**Sprint 2:**
- Se eligió PHP como backend para formularios (decisión del cliente)
- Se implementó newsletter funcional (en lugar de eliminarlo)
- Se corrigió ortografía "Contactanos" → "Contáctanos" en sidebar

### Problemas Encontrados
**Sprint 1:**
- services.html ya tenía el logo móvil correcto (no requirió cambio)
- contact.html tenía un enlace telefónico adicional con el número correcto pero formato incorrecto

**Sprint 2:**
- Formulario sidebar tenía `name="text"` incorrecto (debía ser `name="name"`)
- Textarea del sidebar no tenía atributo `name`

**Sprint 4:**
- Cliente proporcionó URLs de redes sociales:
  - Facebook: https://www.facebook.com/concretosmiracle
  - Instagram: https://www.instagram.com/concretosmiracle/
  - WhatsApp: +52 (322) 224 7200
- Se reemplazaron Twitter y YouTube por Instagram y WhatsApp (más relevantes para el negocio)
- Se utilizó formato wa.me para WhatsApp (enlace directo a chat)

### Pendientes para Discutir
- Verificar que el servidor tenga PHP y función mail() habilitada
- Considerar Sprint 5 para optimización de imágenes
- Considerar Sprint 6 para SEO avanzado (sitemap, robots.txt, Schema)

---

**Última actualización:** 12 de Diciembre, 2025
