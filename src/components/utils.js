export const navLinks = [
  { label: "Inicio", href: "#home" },
  { label: "Servicos", href: "#services" },
  { label: "Sobre", href: "#about" },
  { label: "Areas atendidas", href: "#service-areas" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contact" }
];

export function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export function escapeAttr(value) {
  return escapeHtml(value).replaceAll("`", "&#096;");
}

export function digitsOnly(value) {
  return String(value ?? "").replace(/\D/g, "");
}

export function telHref(phone) {
  const digits = digitsOnly(phone);
  return digits ? `tel:${digits}` : "";
}

export function mailHref(email) {
  return email ? `mailto:${email}` : "";
}

export function enabledServices(config) {
  return config.services.filter((service) => service.enabled);
}

export function addressLine(config) {
  const { streetAddress, city, state, postalCode } = config.contact;
  const locality = [city, state].filter(Boolean).join(", ");
  return [streetAddress, locality, postalCode].filter(Boolean).join(" ");
}

export function createWhatsAppUrl(number, message) {
  const digits = digitsOnly(number);
  if (!digits) return "";
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export function buildQuoteMessage(config, values) {
  const lines = [
    `Ola ${config.identity.businessName}, gostaria de solicitar um orcamento.`,
    "",
    `Nome: ${values.fullName}`,
    `Telefone ou WhatsApp: ${values.contactNumber}`,
    values.email ? `Email: ${values.email}` : "",
    `Cidade ou CEP: ${values.location}`,
    `Servico solicitado: ${values.serviceRequested}`,
    `Forma de contato preferida: ${values.preferredContact}`,
    values.description ? `Descricao: ${values.description}` : "",
    "",
    "Entendo que esta mensagem foi preparada pelo site e que preciso revisar e enviar pelo WhatsApp."
  ];

  return lines.filter(Boolean).join("\n");
}

export function serviceNameById(config, serviceId) {
  const service = enabledServices(config).find((item) => item.id === serviceId);
  return service?.name || "";
}

export function isProbablyExternal(url) {
  return /^https?:\/\//i.test(url);
}

export function safeUrl(url) {
  const value = String(url ?? "").trim();
  if (!value) return "";
  if (
    value.startsWith("#") ||
    value.startsWith("/") ||
    value.startsWith("./") ||
    value.startsWith("mailto:") ||
    value.startsWith("tel:") ||
    value.startsWith("https://") ||
    value.startsWith("http://")
  ) {
    return value;
  }
  return "";
}

export function currentYear() {
  return new Date().getFullYear();
}

export function getFocusableElements(container) {
  return Array.from(
    container.querySelectorAll(
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
  ).filter((element) => !element.hasAttribute("hidden") && element.offsetParent !== null);
}
