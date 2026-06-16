/**
 * TARAJ CONSULTING - REFERENCE EXTRACTION SCRIPTS
 * Run these in your browser console on https://elpisinsuranceagency.co.ke/
 */

// 1. Extract All Sections & Headings (To see the structure)
console.log("--- SITE STRUCTURE ---");
[...document.querySelectorAll('section')].map(s => ({
  id: s.id,
  className: s.className,
  heading: s.querySelector('h1, h2, h3')?.innerText.trim()
})).forEach(s => console.table(s));

// 2. Extract Service Cards
console.log("--- SERVICES ---");
const services = [...document.querySelectorAll('.elementor-element-populate .elementor-widget-container')]
  .filter(el => el.innerText.length > 20 && el.innerText.length < 500)
  .map(el => el.innerText.split('\n').filter(t => t.trim() !== ''));
console.log(services);

// 3. Extract Statistics/Counters
console.log("--- STATS ---");
[...document.querySelectorAll('*')]
  .filter(el => /\d+\+/.test(el.textContent))
  .map(el => el.textContent.trim())
  .filter((v, i, a) => a.indexOf(v) === i);

// 4. Extract Testimonials
console.log("--- TESTIMONIALS ---");
[...document.querySelectorAll('.elementor-testimonial-content, .testimonial-text')]
  .map(el => el.innerText.trim());

// 5. Extract Form Fields (for Quote request)
console.log("--- FORM FIELDS ---");
[...document.querySelectorAll('form input, form select, form textarea')]
  .map(el => ({
    name: el.name || el.id,
    placeholder: el.placeholder,
    type: el.type
  }));
