import { businessConfig } from "../config/business.js";
import {
  buildQuoteMessage,
  createWhatsAppUrl,
  digitsOnly,
  getFocusableElements,
  serviceNameById
} from "./utils.js";

function setBodyLocked(locked) {
  document.body.classList.toggle("modal-open", locked);
}

function trapFocus(event, container) {
  if (event.key !== "Tab") return;

  const focusable = getFocusableElements(container);
  if (!focusable.length) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

export function initNavigation() {
  const header = document.querySelector("[data-site-header]");
  const toggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-primary-nav]");
  if (!header || !toggle || !nav) return;

  function closeNav() {
    header.classList.remove("nav-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir navegacao");
  }

  function openNav() {
    header.classList.add("nav-open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Fechar navegacao");
  }

  toggle.addEventListener("click", () => {
    if (header.classList.contains("nav-open")) {
      closeNav();
    } else {
      openNav();
      const firstLink = nav.querySelector("a, button");
      firstLink?.focus();
    }
  });

  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeNav();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeNav();
  });
}

export function initAccordion() {
  document.querySelectorAll("[data-accordion-button]").forEach((button) => {
    button.addEventListener("click", () => {
      const panelId = button.getAttribute("aria-controls");
      const panel = panelId ? document.getElementById(panelId) : null;
      if (!panel) return;

      const isOpen = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!isOpen));
      panel.hidden = isOpen;
    });
  });
}

export function initQuoteModal(config = businessConfig) {
  const modalBackdrop = document.querySelector("[data-quote-modal]");
  const modal = modalBackdrop?.querySelector(".quote-modal");
  const form = modalBackdrop?.querySelector("[data-quote-form]");
  const closeButton = modalBackdrop?.querySelector("[data-modal-close]");
  const status = modalBackdrop?.querySelector("[data-form-status]");
  if (!modalBackdrop || !modal || !form || !closeButton || !status) return;

  let lastTrigger = null;

  function clearErrors() {
    form.querySelectorAll("[data-error-for]").forEach((error) => {
      error.textContent = "";
    });
    form.querySelectorAll("[aria-invalid]").forEach((field) => {
      field.removeAttribute("aria-invalid");
    });
    status.textContent = "";
    status.className = "form-status";
  }

  function preselectService(serviceId) {
    if (!serviceId) return;
    const serviceName = serviceNameById(config, serviceId);
    if (!serviceName) return;
    form.elements.serviceRequested.value = serviceName;
  }

  function openModal(serviceId = "") {
    lastTrigger = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    clearErrors();
    preselectService(serviceId);
    modalBackdrop.hidden = false;
    setBodyLocked(true);
    requestAnimationFrame(() => {
      modalBackdrop.classList.add("is-open");
      form.elements.fullName?.focus();
    });
  }

  function closeModal() {
    modalBackdrop.classList.remove("is-open");
    modalBackdrop.hidden = true;
    setBodyLocked(false);
    lastTrigger?.focus();
  }

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-quote-trigger]");
    if (!trigger) return;

    event.preventDefault();
    openModal(trigger.dataset.serviceId || "");
  });

  closeButton.addEventListener("click", closeModal);

  modalBackdrop.addEventListener("mousedown", (event) => {
    if (event.target === modalBackdrop) closeModal();
  });

  modalBackdrop.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      closeModal();
      return;
    }
    trapFocus(event, modalBackdrop);
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    clearErrors();

    const values = Object.fromEntries(new FormData(form).entries());
    Object.keys(values).forEach((key) => {
      values[key] = String(values[key] ?? "").trim();
    });

    const errors = {};
    if (!values.fullName) errors.fullName = "Informe seu nome completo.";
    if (!values.contactNumber) errors.contactNumber = "Informe um telefone ou WhatsApp.";
    if (!values.location) errors.location = "Informe sua cidade ou CEP.";
    if (!values.serviceRequested) errors.serviceRequested = "Selecione o servico desejado.";
    if (!values.preferredContact) errors.preferredContact = "Selecione a forma de contato preferida.";
    if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errors.email = "Informe um email valido ou deixe este campo em branco.";
    }

    Object.entries(errors).forEach(([field, message]) => {
      const input = form.elements[field];
      const error = form.querySelector(`[data-error-for="${field}"]`);
      input?.setAttribute("aria-invalid", "true");
      if (error) error.textContent = message;
    });

    if (Object.keys(errors).length) {
      const firstInvalid = form.querySelector("[aria-invalid='true']");
      firstInvalid?.focus();
      status.textContent = "Corrija os campos destacados antes de preparar a mensagem no WhatsApp.";
      status.classList.add("is-error");
      return;
    }

    if (!digitsOnly(config.contact.whatsappNumber)) {
      status.textContent = config.quoteForm.noWhatsappMessage;
      status.classList.add("is-error");
      return;
    }

    const message = buildQuoteMessage(config, values);
    const whatsappUrl = createWhatsAppUrl(config.contact.whatsappNumber, message);

    if (!whatsappUrl) {
      status.textContent = config.quoteForm.noWhatsappMessage;
      status.classList.add("is-error");
      return;
    }

    status.textContent =
      "O WhatsApp vai abrir com a mensagem preparada. Revise e toque em enviar dentro do WhatsApp.";
    status.classList.add("is-success");
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  });
}

export function initGalleryLightbox(config = businessConfig) {
  const gallery = config.gallery || [];
  const lightboxBackdrop = document.querySelector("[data-lightbox]");
  if (!gallery.length || !lightboxBackdrop) return;

  const image = lightboxBackdrop.querySelector("[data-lightbox-image]");
  const title = lightboxBackdrop.querySelector("[data-lightbox-title]");
  const caption = lightboxBackdrop.querySelector("[data-lightbox-caption]");
  const closeButton = lightboxBackdrop.querySelector("[data-lightbox-close]");
  const prevButton = lightboxBackdrop.querySelector("[data-lightbox-prev]");
  const nextButton = lightboxBackdrop.querySelector("[data-lightbox-next]");
  let activeIndex = 0;
  let lastTrigger = null;

  function renderActive() {
    const item = gallery[activeIndex];
    image.src = item.image;
    image.alt = item.alt;
    title.textContent = item.title;
    caption.textContent = item.caption;
  }

  function openLightbox(index, trigger) {
    activeIndex = index;
    lastTrigger = trigger;
    renderActive();
    lightboxBackdrop.hidden = false;
    setBodyLocked(true);
    requestAnimationFrame(() => {
      lightboxBackdrop.classList.add("is-open");
      closeButton?.focus();
    });
  }

  function closeLightbox() {
    lightboxBackdrop.classList.remove("is-open");
    lightboxBackdrop.hidden = true;
    setBodyLocked(false);
    lastTrigger?.focus();
  }

  function move(direction) {
    activeIndex = (activeIndex + direction + gallery.length) % gallery.length;
    renderActive();
  }

  document.querySelectorAll("[data-gallery-index]").forEach((button) => {
    button.addEventListener("click", () => {
      openLightbox(Number(button.dataset.galleryIndex), button);
    });
  });

  closeButton?.addEventListener("click", closeLightbox);
  prevButton?.addEventListener("click", () => move(-1));
  nextButton?.addEventListener("click", () => move(1));

  lightboxBackdrop.addEventListener("mousedown", (event) => {
    if (event.target === lightboxBackdrop) closeLightbox();
  });

  lightboxBackdrop.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      closeLightbox();
      return;
    }
    if (event.key === "ArrowLeft") move(-1);
    if (event.key === "ArrowRight") move(1);
    trapFocus(event, lightboxBackdrop);
  });
}

function readStoredConsent(storageKey) {
  try {
    const raw = localStorage.getItem(storageKey);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function saveStoredConsent(storageKey, preferences) {
  try {
    localStorage.setItem(storageKey, JSON.stringify(preferences));
    return true;
  } catch {
    return false;
  }
}

function loadGtagMeasurement(id) {
  if (!id || document.querySelector(`[data-measurement-id="${CSS.escape(id)}"]`)) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
  script.dataset.measurementId = id;
  document.head.append(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag() {
      window.dataLayer.push(arguments);
    };
  window.gtag("js", new Date());
  window.gtag("config", id, { anonymize_ip: true });
}

function applyConsent(config, preferences) {
  if (preferences.analytics && config.consent.analytics.enabled) {
    loadGtagMeasurement(config.consent.analytics.measurementId);
  }

  if (preferences.advertising && config.consent.advertising.enabled) {
    loadGtagMeasurement(config.consent.advertising.measurementId);
  }
}

export function initCookieConsent(config = businessConfig) {
  const banner = document.querySelector("[data-consent-banner]");
  if (!banner) return;

  const accept = banner.querySelector("[data-consent-accept]");
  const reject = banner.querySelector("[data-consent-reject]");
  const customize = banner.querySelector("[data-consent-customize]");
  const panel = banner.querySelector("#consent-panel");
  const save = banner.querySelector("[data-consent-save]");
  const analytics = banner.querySelector('[data-consent-category="analytics"]');
  const advertising = banner.querySelector('[data-consent-category="advertising"]');
  const openButtons = document.querySelectorAll("[data-open-consent]");
  const storageKey = config.consent.storageKey;

  function showBanner(openPanel = false) {
    banner.hidden = false;
    document.body.classList.add("consent-visible");
    panel.hidden = !openPanel;
    customize.setAttribute("aria-expanded", String(openPanel));
    if (openPanel) analytics.focus();
  }

  function hideBanner() {
    banner.hidden = true;
    document.body.classList.remove("consent-visible");
  }

  function savePreferences(preferences) {
    saveStoredConsent(storageKey, {
      essential: true,
      analytics: Boolean(preferences.analytics),
      advertising: Boolean(preferences.advertising),
      savedAt: new Date().toISOString()
    });
    applyConsent(config, preferences);
    hideBanner();
  }

  const stored = readStoredConsent(storageKey);
  if (stored) {
    analytics.checked = Boolean(stored.analytics);
    advertising.checked = Boolean(stored.advertising);
    applyConsent(config, stored);
  } else {
    showBanner(false);
  }

  accept.addEventListener("click", () => {
    analytics.checked = true;
    advertising.checked = true;
    savePreferences({ analytics: true, advertising: true });
  });

  reject.addEventListener("click", () => {
    analytics.checked = false;
    advertising.checked = false;
    savePreferences({ analytics: false, advertising: false });
  });

  customize.addEventListener("click", () => {
    const isOpen = !panel.hidden;
    panel.hidden = isOpen;
    customize.setAttribute("aria-expanded", String(!isOpen));
  });

  save.addEventListener("click", () => {
    savePreferences({ analytics: analytics.checked, advertising: advertising.checked });
  });

  openButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const latest = readStoredConsent(storageKey);
      analytics.checked = Boolean(latest?.analytics);
      advertising.checked = Boolean(latest?.advertising);
      showBanner(true);
    });
  });
}
