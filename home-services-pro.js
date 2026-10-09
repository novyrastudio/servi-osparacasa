/**
 * Configuracao central do cliente para o template Home Services Pro.
 *
 * Substitua todos os placeholders antes de publicar para uma empresa real. Os
 * valores padrao evitam avaliacoes, certificacoes, premios, notas, licencas,
 * atendimento emergencial ou provas de obra que nao tenham sido fornecidas.
 */

/**
 * @typedef {Object} Service
 * @property {string} id
 * @property {string} name
 * @property {string} shortcutLabel
 * @property {boolean} enabled
 * @property {string} description
 * @property {string[]} includedTasks
 * @property {string} image
 * @property {string} alt
 */

/**
 * @typedef {Object} Differentiator
 * @property {string} title
 * @property {string} description
 * @property {string} icon
 */

/**
 * @typedef {Object} GalleryImage
 * @property {string} title
 * @property {string} caption
 * @property {string} image
 * @property {string} alt
 * @property {boolean} placeholder
 */

/**
 * @typedef {Object} Testimonial
 * @property {string} displayName
 * @property {string} text
 * @property {string} [sourceUrl]
 */

const businessConfig = {
  template: {
    name: "Home Services Pro",
    studio: "Novyra Studio",
    isTemplatePreview: true,
    showDevelopmentPlaceholders: true,
    showAttribution: true
  },

  identity: {
    businessName: "Substituir Pelo Nome Da Empresa",
    shortTagline: "Servicos residenciais profissionais com comunicacao clara.",
    logoPath: "",
    mainServiceCategory: "Servicos Residenciais"
  },

  contact: {
    primaryPhone: "(555) 010-1234",
    whatsappNumber: "15550101234",
    email: "contato@exemplo-servicos.com",
    streetAddress: "",
    city: "Sua Cidade",
    state: "UF",
    postalCode: "00000",
    primaryServiceArea: "Regiao Metropolitana de Sua Cidade",
    additionalServiceAreas: ["Zona Norte", "Zona Oeste", "Centro", "Bairros proximos"],
    googleMapsUrl: "",
    socialUrls: {
      facebook: "",
      instagram: "",
      linkedin: "",
      youtube: ""
    }
  },

  hours: {
    display: "Seg-sex, 8h as 17h",
    isEmergencyAvailable: false,
    structured: [
      { day: "Monday", opens: "08:00", closes: "17:00" },
      { day: "Tuesday", opens: "08:00", closes: "17:00" },
      { day: "Wednesday", opens: "08:00", closes: "17:00" },
      { day: "Thursday", opens: "08:00", closes: "17:00" },
      { day: "Friday", opens: "08:00", closes: "17:00" }
    ]
  },

  topBar: {
    enabled: true,
    serviceAreaLabel: "Atendimento na Regiao Metropolitana de Sua Cidade",
    hoursLabel: "Seg-sex, 8h as 17h",
    phoneLabel: "(555) 010-1234"
  },

  hero: {
    eyebrow: "ESPECIALISTAS LOCAIS EM SERVICOS RESIDENCIAIS",
    headline: "Servicos residenciais confiaveis. Bem executados.",
    description:
      "Servicos residenciais profissionais com comunicacao clara, execucao cuidadosa e um processo simples para solicitar orcamento.",
    primaryCtaLabel: "Solicitar orcamento",
    secondaryCtaLabel: "Ver servicos",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1500&q=82",
    imageAlt:
      "Tecnico profissional de servicos residenciais trabalhando com cuidado dentro de uma casa",
    trustItems: [
      "Substituir por credenciais verificadas do cliente",
      "Escopo claro antes do agendamento",
      "Atendimento residencial cuidadoso"
    ]
  },

  services: /** @type {Service[]} */ ([
    {
      id: "air-conditioning",
      name: "Ar-condicionado",
      shortcutLabel: "Ar-condicionado",
      enabled: true,
      description:
        "Instalacao, manutencao e suporte para sistemas residenciais de climatizacao.",
      includedTasks: ["Diagnostico do sistema", "Verificacao de filtros e fluxo de ar", "Planejamento de instalacao"],
      image:
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80",
      alt: "Tecnico inspecionando equipamento residencial de ar-condicionado"
    },
    {
      id: "electrical",
      name: "Servicos eletricos",
      shortcutLabel: "Eletrica",
      enabled: true,
      description:
        "Suporte pratico para diagnosticos eletricos, atualizacoes de pontos e reparos domesticos.",
      includedTasks: ["Tomadas e interruptores", "Atualizacao de iluminacao", "Diagnostico basico"],
      image:
        "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=900&q=80",
      alt: "Eletricista usando ferramentas perto de um quadro eletrico residencial"
    },
    {
      id: "plumbing",
      name: "Reparos hidraulicos",
      shortcutLabel: "Hidraulica",
      enabled: true,
      description:
        "Atendimento para reparos comuns em torneiras, ralos, conexoes e linhas de agua.",
      includedTasks: ["Reparo de pecas e metais", "Avaliacao de vazamentos", "Suporte para ralos"],
      image:
        "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=900&q=80",
      alt: "Encanador reparando uma tubulacao abaixo de uma pia residencial"
    },
    {
      id: "home-repairs",
      name: "Reparos residenciais",
      shortcutLabel: "Reparos",
      enabled: true,
      description:
        "Suporte pratico para manutencoes e pequenas demandas do dia a dia da casa.",
      includedTasks: ["Pequenos reparos", "Montagem e instalacao", "Lista de manutencao"],
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80",
      alt: "Profissional de reparos residenciais medindo e preparando materiais"
    }
  ]),

  differentiators: /** @type {Differentiator[]} */ ([
    {
      title: "Comunicacao clara",
      description:
        "O visitante entende o processo, o escopo e o proximo passo antes de solicitar atendimento.",
      icon: "message"
    },
    {
      title: "Orcamentos objetivos",
      description:
        "A solicitacao coleta as informacoes necessarias para uma conversa comercial mais objetiva.",
      icon: "file"
    },
    {
      title: "Cuidado com a casa",
      description:
        "A comunicacao reforca cuidado, organizacao e atendimento adequado ao ambiente residencial.",
      icon: "home"
    },
    {
      title: "Agendamento pratico",
      description:
        "As chamadas para acao ficam proximas dos momentos em que o visitante decide avancar.",
      icon: "calendar"
    }
  ]),

  process: [
    {
      title: "Conte o que voce precisa",
      description:
        "Informe o tipo de servico, a localizacao e alguns detalhes sobre o problema ou projeto.",
      icon: "clipboard"
    },
    {
      title: "Receba a estimativa",
      description:
        "A empresa analisa a solicitacao e retorna com os proximos passos para definir o escopo.",
      icon: "estimate"
    },
    {
      title: "Agende o atendimento",
      description:
        "Combine um horario conveniente depois que o escopo e as expectativas estiverem claros.",
      icon: "calendar-check"
    }
  ],

  about: {
    headline: "Sua casa merece cuidado profissional",
    body:
      "Use esta secao para apresentar a empresa real, sua abordagem e o tipo de experiencia que os clientes podem esperar. Substitua este texto por informacoes verificadas antes de publicar.",
    supportingText:
      "Evite historias, credenciais ou qualificacoes inventadas. Mantenha o texto especifico para o cliente quando os dados reais estiverem disponiveis.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=82",
    imageAlt:
      "Equipe de servicos residenciais revisando detalhes de um projeto em um ambiente organizado",
    ctaLabel: "Solicitar orcamento"
  },

  gallery: /** @type {GalleryImage[]} */ ([
    {
      title: "Substituir por foto real do projeto",
      caption:
        "Imagem de demonstracao do template. Substitua por uma foto de projeto aprovada pelo cliente antes de publicar.",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=80",
      alt: "Espaco de manutencao residencial limpo usado como placeholder",
      placeholder: true
    },
    {
      title: "Substituir por foto real de instalacao",
      caption:
        "Imagem de demonstracao do template. Nao apresente foto de banco de imagens como trabalho realizado pelo cliente.",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80",
      alt: "Ferramentas profissionais e materiais de servicos residenciais usados como placeholder",
      placeholder: true
    },
    {
      title: "Substituir por foto real de reparo",
      caption:
        "Imagem de demonstracao do template. Use apenas trabalhos que o cliente tenha permissao para exibir.",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1000&q=80",
      alt: "Cenario de reparo residencial usado como placeholder",
      placeholder: true
    }
  ]),

  testimonials: /** @type {Testimonial[]} */ ([]),

  faq: [
    {
      question: "Quais areas voces atendem?",
      answer:
        "Atualize a configuracao com a cidade principal e as regioes atendidas pelo cliente. O template exibira apenas as areas configuradas."
    },
    {
      question: "Como posso solicitar um orcamento?",
      answer:
        "Use o formulario de orcamento para preparar uma mensagem no WhatsApp com seus dados de contato, tipo de servico, localizacao e uma breve descricao."
    },
    {
      question: "Quais servicos voces oferecem?",
      answer:
        "A lista de servicos e controlada na configuracao central da empresa. Desative qualquer servico que o cliente nao ofereca."
    },
    {
      question: "Como posso agendar uma visita?",
      answer:
        "Depois que a mensagem do WhatsApp for revisada e enviada pelo visitante, a empresa pode retornar diretamente para combinar a disponibilidade."
    }
  ],

  quoteForm: {
    title: "Solicitar orcamento",
    description:
      "Preencha o formulario para preparar uma mensagem no WhatsApp. Voce vai revisar e enviar a mensagem dentro do WhatsApp.",
    submitLabel: "Preparar mensagem no WhatsApp",
    contactMethods: ["Telefone", "WhatsApp", "Email"],
    noWhatsappMessage:
      "O numero de WhatsApp ainda nao foi configurado. Adicione um numero em src/config/business.js antes de publicar este fluxo."
  },

  privacy: {
    policyRoute: "#privacy",
    policyLabel: "Privacidade",
    content:
      "Este template nao armazena solicitacoes de orcamento no navegador e nao envia detalhes do formulario para ferramentas de analytics. Scripts opcionais de analytics ou publicidade so devem carregar depois do consentimento."
  },

  consent: {
    storageKey: "homeServicesProConsent.v1",
    analytics: {
      enabled: false,
      provider: "",
      measurementId: ""
    },
    advertising: {
      enabled: false,
      provider: "",
      measurementId: ""
    }
  },

  seo: {
    language: "pt-BR",
    pageTitle: "Home Services Pro | Template para empresas de servicos residenciais",
    metaDescription:
      "Template profissional e focado em conversao para empresas de ar-condicionado, eletrica, hidraulica, manutencao, limpeza e servicos residenciais.",
    openGraphImage:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=82",
    siteUrl: "",
    canonicalUrl: "",
    enableStructuredData: false,
    localBusinessType: "HomeAndConstructionBusiness"
  }
};

const navLinks = [
  { label: "Inicio", href: "#home" },
  { label: "Servicos", href: "#services" },
  { label: "Sobre", href: "#about" },
  { label: "Areas atendidas", href: "#service-areas" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contact" }
];

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttr(value) {
  return escapeHtml(value).replaceAll("`", "&#096;");
}

function digitsOnly(value) {
  return String(value ?? "").replace(/\D/g, "");
}

function telHref(phone) {
  const digits = digitsOnly(phone);
  return digits ? `tel:${digits}` : "";
}

function mailHref(email) {
  return email ? `mailto:${email}` : "";
}

function enabledServices(config) {
  return config.services.filter((service) => service.enabled);
}

function addressLine(config) {
  const { streetAddress, city, state, postalCode } = config.contact;
  const locality = [city, state].filter(Boolean).join(", ");
  return [streetAddress, locality, postalCode].filter(Boolean).join(" ");
}

function createWhatsAppUrl(number, message) {
  const digits = digitsOnly(number);
  if (!digits) return "";
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

function buildQuoteMessage(config, values) {
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

function serviceNameById(config, serviceId) {
  const service = enabledServices(config).find((item) => item.id === serviceId);
  return service?.name || "";
}

function isProbablyExternal(url) {
  return /^https?:\/\//i.test(url);
}

function safeUrl(url) {
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

function currentYear() {
  return new Date().getFullYear();
}

function getFocusableElements(container) {
  return Array.from(
    container.querySelectorAll(
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
  ).filter((element) => !element.hasAttribute("hidden") && element.offsetParent !== null);
}

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

function initNavigation() {
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

function initAccordion() {
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

function initQuoteModal(config = businessConfig) {
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

function initGalleryLightbox(config = businessConfig) {
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

function initCookieConsent(config = businessConfig) {
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


function initHomeServicesPro() {
  document.documentElement.dataset.homeServicesProReady = "starting";
  try {
    initNavigation();
    initAccordion();
    initQuoteModal(businessConfig);
    initGalleryLightbox(businessConfig);
    initCookieConsent(businessConfig);
    document.documentElement.dataset.homeServicesProReady = "true";
  } catch (error) {
    document.documentElement.dataset.homeServicesProReady = "error";
    document.documentElement.dataset.homeServicesProError = String(error?.message || error);
    throw error;
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initHomeServicesPro, { once: true });
} else {
  initHomeServicesPro();
}

