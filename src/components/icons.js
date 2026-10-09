const svgAttrs =
  'xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"';

const paths = {
  phone:
    '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.35 1.9.66 2.8a2 2 0 0 1-.45 2.11L8.05 9.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.31 1.84.53 2.8.66A2 2 0 0 1 22 16.92Z"/>',
  clock:
    '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  map:
    '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  menu:
    '<path d="M4 6h16M4 12h16M4 18h16"/>',
  close:
    '<path d="M18 6 6 18M6 6l12 12"/>',
  arrow:
    '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  chevron:
    '<path d="m6 9 6 6 6-6"/>',
  snowflake:
    '<path d="m10 20 2-2 2 2M10 4l2 2 2-2M4 10l2 2-2 2M20 10l-2 2 2 2M12 2v20M2 12h20M5 5l14 14M19 5 5 19"/>',
  bolt:
    '<path d="m13 2-8 12h7l-1 8 8-12h-7l1-8Z"/>',
  droplet:
    '<path d="M12 2.5S5 10 5 15a7 7 0 0 0 14 0c0-5-7-12.5-7-12.5Z"/>',
  wrench:
    '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4L15 12l-3-3 2.7-2.7Z"/>',
  message:
    '<path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z"/>',
  file:
    '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M8 13h8M8 17h6"/>',
  home:
    '<path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/>',
  calendar:
    '<path d="M8 2v4M16 2v4M3 10h18"/><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>',
  clipboard:
    '<path d="M9 4h6a2 2 0 0 1 2 2v1H7V6a2 2 0 0 1 2-2Z"/><path d="M7 5H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><path d="M8 13h8M8 17h5"/>',
  estimate:
    '<path d="M4 4h16v16H4Z"/><path d="M8 8h8M8 12h8M8 16h4"/>',
  "calendar-check":
    '<path d="M8 2v4M16 2v4M3 10h18"/><rect x="3" y="4" width="18" height="18" rx="2"/><path d="m8 16 2.5 2.5L16 13"/>',
  check:
    '<path d="m20 6-11 11-5-5"/>',
  shield:
    '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
  image:
    '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>',
  whatsapp:
    '<path d="M12 2a9.5 9.5 0 0 0-8.11 14.46L3 22l5.68-1.45A9.5 9.5 0 1 0 12 2Z"/><path d="M8.9 8.4c.2-.5.4-.5.7-.5h.5c.2 0 .5.1.6.4l.8 1.9c.1.3 0 .5-.1.7l-.5.6c-.1.1-.2.3-.1.5.4.8 1 1.5 1.7 2 .6.5 1.2.8 1.6 1 .2.1.4.1.5-.1l.8-.9c.2-.2.4-.2.7-.1l1.8.9c.3.1.4.3.4.5 0 .4-.2 1.3-.8 1.7-.5.4-1.3.5-2.1.3-1.8-.4-3.4-1.4-4.8-2.8-1.4-1.4-2.4-3-2.8-4.8-.2-.7-.1-1.5.2-2Z"/>'
};

const serviceIcons = {
  "air-conditioning": "snowflake",
  electrical: "bolt",
  plumbing: "droplet",
  "home-repairs": "wrench"
};

export function icon(name, className = "icon") {
  const key = serviceIcons[name] || name;
  return `<svg class="${className}" ${svgAttrs}>${paths[key] || paths.check}</svg>`;
}
