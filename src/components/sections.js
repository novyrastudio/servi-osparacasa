import { icon } from "./icons.js";
import {
  addressLine,
  createWhatsAppUrl,
  currentYear,
  enabledServices,
  escapeAttr,
  escapeHtml,
  mailHref,
  navLinks,
  safeUrl,
  telHref
} from "./utils.js";

function initials(name) {
  return String(name)
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

function logoMarkup(config) {
  const logo = safeUrl(config.identity.logoPath);
  const name = escapeHtml(config.identity.businessName);

  if (logo) {
    return `<img class="brand-logo" src="${escapeAttr(logo)}" alt="${name} logo" width="150" height="42">`;
  }

  return `
    <span class="brand-mark" aria-hidden="true">${escapeHtml(initials(config.identity.businessName) || "HS")}</span>
    <span class="brand-text">
      <span>${name}</span>
      <small>${escapeHtml(config.identity.shortTagline)}</small>
    </span>
  `;
}

function sectionHeading(eyebrow, headline, description = "") {
  return `
    <div class="section-heading">
      <p class="eyebrow">${escapeHtml(eyebrow)}</p>
      <h2>${escapeHtml(headline)}</h2>
      ${description ? `<p>${escapeHtml(description)}</p>` : ""}
    </div>
  `;
}

function quoteButton(label, className = "button button-primary", serviceId = "") {
  return `<button class="${className}" type="button" data-quote-trigger ${serviceId ? `data-service-id="${escapeAttr(serviceId)}"` : ""}>${escapeHtml(label)}</button>`;
}

export function renderTopBar(config) {
  if (!config.topBar.enabled) return "";

  const phoneHref = telHref(config.contact.primaryPhone);
  const phone = config.topBar.phoneLabel || config.contact.primaryPhone;

  return `
    <div class="top-bar" aria-label="Business information">
      <div class="container top-bar-inner">
        <span>${icon("map")} ${escapeHtml(config.topBar.serviceAreaLabel || config.contact.primaryServiceArea)}</span>
        <span>${icon("clock")} ${escapeHtml(config.topBar.hoursLabel || config.hours.display)}</span>
        ${
          phoneHref
            ? `<a href="${escapeAttr(phoneHref)}">${icon("phone")} ${escapeHtml(phone)}</a>`
            : ""
        }
      </div>
    </div>
  `;
}

export function renderHeader(config) {
  const navMarkup = navLinks
    .map((link) => `<a href="${escapeAttr(link.href)}">${escapeHtml(link.label)}</a>`)
    .join("");

  return `
    <header class="site-header" data-site-header>
      <div class="container header-inner">
        <a class="brand" href="#home" aria-label="${escapeAttr(config.identity.businessName)} home">
          ${logoMarkup(config)}
        </a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="primary-navigation" aria-label="Abrir navegacao" data-nav-toggle>
          ${icon("menu")}
        </button>
        <nav class="primary-nav" id="primary-navigation" aria-label="Navegacao principal" data-primary-nav>
          ${navMarkup}
          ${quoteButton("Solicitar orcamento", "button button-accent header-quote")}
        </nav>
      </div>
    </header>
  `;
}

export function renderHero(config) {
  const trustItems = config.hero.trustItems
    .map((item) => `<li>${icon("check")} <span>${escapeHtml(item)}</span></li>`)
    .join("");

  return `
    <section class="hero section" id="home" aria-labelledby="hero-title">
      <div class="container hero-grid">
        <div class="hero-copy">
          <p class="eyebrow">${escapeHtml(config.hero.eyebrow)}</p>
          <h1 id="hero-title">${escapeHtml(config.hero.headline)}</h1>
          <p class="hero-description">${escapeHtml(config.hero.description)}</p>
          <div class="hero-actions">
            ${quoteButton(config.hero.primaryCtaLabel, "button button-accent button-large")}
            <a class="button button-secondary button-large" href="#services">${escapeHtml(config.hero.secondaryCtaLabel)}</a>
          </div>
          <ul class="trust-list" aria-label="Client supplied trust details">
            ${trustItems}
          </ul>
        </div>
        <div class="hero-media">
          <img src="${escapeAttr(config.hero.image)}" alt="${escapeAttr(config.hero.imageAlt)}" width="760" height="620" fetchpriority="high">
          <div class="hero-card" aria-label="Template note">
            ${icon("shield")}
            <div>
              <strong>Sistema pronto para personalizacao</strong>
              <span>Troque servicos, areas, imagens e provas pelo arquivo de configuracao.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function renderServiceShortcuts(config) {
  const services = enabledServices(config);
  if (!services.length) return "";

  return `
    <section class="shortcut-band" aria-labelledby="service-shortcuts-title">
      <div class="container">
        <div class="shortcut-heading">
          <h2 id="service-shortcuts-title">Encontre o servico certo mais rapido</h2>
          <p>Os atalhos de servico sao controlados pela configuracao da empresa.</p>
        </div>
        <div class="shortcut-grid">
          ${services
            .map(
              (service) => `
                <a class="shortcut-card" href="#service-${escapeAttr(service.id)}">
                  ${icon(service.id)}
                  <span>${escapeHtml(service.shortcutLabel || service.name)}</span>
                  ${icon("arrow", "icon shortcut-arrow")}
                </a>
              `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

export function renderServices(config) {
  const services = enabledServices(config);
  if (!services.length) return "";

  return `
    <section class="section services-section" id="services" aria-labelledby="services-title">
      <div class="container">
        ${sectionHeading(
          "Servicos",
          "Solucoes para sua casa",
          "Adicione, remova, renomeie ou reorganize servicos pela configuracao central sem reconstruir a pagina."
        ).replace("<h2>", '<h2 id="services-title">')}
        <div class="services-grid">
          ${services
            .map(
              (service) => `
                <article class="service-card" id="service-${escapeAttr(service.id)}">
                  <div class="service-image">
                    <img src="${escapeAttr(service.image)}" alt="${escapeAttr(service.alt)}" width="640" height="420" loading="lazy">
                    <span class="service-icon">${icon(service.id)}</span>
                  </div>
                  <div class="service-card-body">
                    <h3>${escapeHtml(service.name)}</h3>
                    <p>${escapeHtml(service.description)}</p>
                    ${
                      service.includedTasks?.length
                        ? `<ul>${service.includedTasks
                            .map((task) => `<li>${icon("check")} ${escapeHtml(task)}</li>`)
                            .join("")}</ul>`
                        : ""
                    }
                    ${quoteButton("Solicitar orcamento", "button button-outline service-quote", service.id)}
                  </div>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

export function renderWhyChooseUs(config) {
  return `
    <section class="section why-section" aria-labelledby="why-title">
      <div class="container why-grid">
        <div>
          <p class="eyebrow">Por que escolher</p>
          <h2 id="why-title">Atendimento em que voce pode confiar</h2>
          <p class="large-copy">Estes diferenciais sao placeholders de marketing editaveis. Substitua por pontos fortes verificados do cliente antes de publicar.</p>
        </div>
        <div class="why-list">
          ${config.differentiators
            .map(
              (item) => `
                <article class="why-item">
                  <span>${icon(item.icon)}</span>
                  <div>
                    <h3>${escapeHtml(item.title)}</h3>
                    <p>${escapeHtml(item.description)}</p>
                  </div>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

export function renderHowItWorks(config) {
  return `
    <section class="section process-section" aria-labelledby="process-title">
      <div class="container">
        ${sectionHeading("Processo", "Como funciona", "Uma sequencia simples ajuda o visitante a entender o que acontece depois da solicitacao.").replace("<h2>", '<h2 id="process-title">')}
        <div class="process-grid">
          ${config.process
            .map(
              (step, index) => `
                <article class="process-card">
                  <span class="process-number">${String(index + 1).padStart(2, "0")}</span>
                  <span class="process-icon">${icon(step.icon)}</span>
                  <h3>${escapeHtml(step.title)}</h3>
                  <p>${escapeHtml(step.description)}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

export function renderAbout(config) {
  return `
    <section class="section about-section" id="about" aria-labelledby="about-title">
      <div class="container about-grid">
        <div class="about-media">
          <img src="${escapeAttr(config.about.image)}" alt="${escapeAttr(config.about.imageAlt)}" width="720" height="560" loading="lazy">
        </div>
        <div class="about-copy">
          <p class="eyebrow">Sobre a empresa</p>
          <h2 id="about-title">${escapeHtml(config.about.headline)}</h2>
          <p>${escapeHtml(config.about.body)}</p>
          <p>${escapeHtml(config.about.supportingText)}</p>
          ${quoteButton(config.about.ctaLabel, "button button-primary")}
        </div>
      </div>
    </section>
  `;
}

export function renderServiceAreas(config) {
  const areas = [config.contact.primaryServiceArea, ...config.contact.additionalServiceAreas].filter(Boolean);
  if (!areas.length) return "";

  return `
    <section class="section areas-section" id="service-areas" aria-labelledby="areas-title">
      <div class="container areas-grid">
        <div>
          <p class="eyebrow">Areas atendidas</p>
          <h2 id="areas-title">Atendimento na sua regiao</h2>
          <p class="large-copy">Somente locais configurados aparecem aqui, evitando promessas de atendimento em areas nao definidas.</p>
          ${
            config.contact.googleMapsUrl
              ? `<a class="text-link" href="${escapeAttr(safeUrl(config.contact.googleMapsUrl))}" target="_blank" rel="noopener noreferrer">Abrir no Google Maps ${icon("arrow")}</a>`
              : ""
          }
        </div>
        <div class="area-list">
          ${areas.map((area) => `<span>${icon("map")} ${escapeHtml(area)}</span>`).join("")}
        </div>
      </div>
    </section>
  `;
}

export function renderGallery(config) {
  const gallery = config.gallery || [];
  if (!gallery.length && !config.template.showDevelopmentPlaceholders) return "";
  if (!gallery.length) {
    return `
      <section class="section gallery-section" id="gallery" aria-labelledby="gallery-title">
        <div class="container">
          ${sectionHeading("Galeria", "Nosso trabalho", "A galeria fica oculta em producao ate que imagens aprovadas pelo cliente sejam fornecidas.").replace("<h2>", '<h2 id="gallery-title">')}
        </div>
      </section>
    `;
  }

  return `
    <section class="section gallery-section" id="gallery" aria-labelledby="gallery-title">
      <div class="container">
        ${sectionHeading("Galeria", "Nosso trabalho", "Use esta area para instalacoes, reparos, manutencoes ou projetos concluidos aprovados pelo cliente.").replace("<h2>", '<h2 id="gallery-title">')}
        <div class="gallery-grid">
          ${gallery
            .map(
              (item, index) => `
                <button class="gallery-item" type="button" data-gallery-index="${index}" aria-label="Ver ${escapeAttr(item.title)}">
                  <img src="${escapeAttr(item.image)}" alt="${escapeAttr(item.alt)}" width="640" height="480" loading="lazy">
                  <span class="gallery-caption">
                    <strong>${escapeHtml(item.title)}</strong>
                    ${item.placeholder ? "<em>Previa do template</em>" : ""}
                  </span>
                </button>
              `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

export function renderTestimonials(config) {
  const testimonials = config.testimonials || [];
  if (!testimonials.length && !config.template.showDevelopmentPlaceholders) return "";

  if (!testimonials.length) {
    return `
      <section class="section testimonials-section" aria-labelledby="testimonials-title">
        <div class="container testimonial-placeholder">
          <p class="eyebrow">Depoimentos</p>
          <h2 id="testimonials-title">Feedback verificado aparece aqui</h2>
          <p>Nenhum depoimento real e exibido por padrao porque o cliente ainda nao forneceu feedback verificado de clientes.</p>
        </div>
      </section>
    `;
  }

  return `
    <section class="section testimonials-section" aria-labelledby="testimonials-title">
      <div class="container">
        ${sectionHeading("Depoimentos", "O que os clientes dizem", "Exiba apenas feedback aprovado e fornecido pelo cliente.").replace("<h2>", '<h2 id="testimonials-title">')}
        <div class="testimonial-grid">
          ${testimonials
            .map(
              (item) => `
                <figure class="testimonial-card">
                  <blockquote>${escapeHtml(item.text)}</blockquote>
                  <figcaption>
                    <strong>${escapeHtml(item.displayName)}</strong>
                    ${
                      item.sourceUrl
                        ? `<a href="${escapeAttr(safeUrl(item.sourceUrl))}" target="_blank" rel="noopener noreferrer">Fonte</a>`
                        : ""
                    }
                  </figcaption>
                </figure>
              `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

export function renderQuoteSection(config) {
  return `
    <section class="quote-section" aria-labelledby="quote-section-title">
      <div class="container quote-band">
        <div>
          <p class="eyebrow">Pronto para o proximo passo?</p>
          <h2 id="quote-section-title">Solicite um orcamento sem precisar de backend.</h2>
          <p>O formulario prepara uma mensagem no WhatsApp para o visitante revisar e enviar. O site nao afirma que a empresa recebeu a solicitacao antes do envio no WhatsApp.</p>
        </div>
        ${quoteButton("Iniciar solicitacao", "button button-accent button-large")}
      </div>
    </section>
  `;
}

export function renderFaq(config) {
  const items = config.faq.filter((item) => {
    if (config.hours.isEmergencyAvailable) return true;
    return !/emergency/i.test(`${item.question} ${item.answer}`);
  });

  if (!items.length) return "";

  return `
    <section class="section faq-section" id="faq" aria-labelledby="faq-title">
      <div class="container faq-grid">
        <div>
          <p class="eyebrow">FAQ</p>
          <h2 id="faq-title">Perguntas frequentes</h2>
          <p class="large-copy">Perguntas e respostas vêm da configuracao, inclusive quando conteudos sobre emergencia sao apropriados.</p>
        </div>
        <div class="accordion" data-accordion>
          ${items
            .map((item, index) => {
              const panelId = `faq-panel-${index}`;
              return `
                <article class="accordion-item">
                  <h3>
                    <button type="button" aria-expanded="${index === 0 ? "true" : "false"}" aria-controls="${panelId}" data-accordion-button>
                      <span>${escapeHtml(item.question)}</span>
                      ${icon("chevron")}
                    </button>
                  </h3>
                  <div class="accordion-panel" id="${panelId}" ${index === 0 ? "" : "hidden"}>
                    <p>${escapeHtml(item.answer)}</p>
                  </div>
                </article>
              `;
            })
            .join("")}
        </div>
      </div>
    </section>
  `;
}

export function renderContact(config) {
  const phoneHref = telHref(config.contact.primaryPhone);
  const emailHref = mailHref(config.contact.email);
  const address = addressLine(config);
  const areas = [config.contact.primaryServiceArea, ...config.contact.additionalServiceAreas].filter(Boolean);

  return `
    <section class="section contact-section" id="contact" aria-labelledby="contact-title">
      <div class="container contact-grid">
        <div>
          <p class="eyebrow">Contato</p>
          <h2 id="contact-title">Fale com a equipe de atendimento</h2>
          <p class="large-copy">Os dados de contato sao configuraveis. Se o cliente nao tiver loja fisica, mantenha o layout focado na area de atendimento.</p>
          ${quoteButton("Solicitar orcamento", "button button-accent")}
        </div>
        <div class="contact-panel">
          ${
            phoneHref
              ? `<a class="contact-row" href="${escapeAttr(phoneHref)}">${icon("phone")} <span><strong>Telefone</strong>${escapeHtml(config.contact.primaryPhone)}</span></a>`
              : ""
          }
          ${
            config.contact.whatsappNumber
              ? `<a class="contact-row" href="${escapeAttr(createWhatsAppUrl(config.contact.whatsappNumber, `Ola ${config.identity.businessName}, gostaria de saber mais sobre os servicos.`))}" target="_blank" rel="noopener noreferrer">${icon("whatsapp")} <span><strong>WhatsApp</strong>Enviar mensagem</span></a>`
              : ""
          }
          ${
            emailHref
              ? `<a class="contact-row" href="${escapeAttr(emailHref)}">${icon("message")} <span><strong>Email</strong>${escapeHtml(config.contact.email)}</span></a>`
              : ""
          }
          ${
            address
              ? `<div class="contact-row">${icon("map")} <span><strong>Endereco</strong>${escapeHtml(address)}</span></div>`
              : `<div class="contact-row">${icon("map")} <span><strong>Area de atendimento</strong>${escapeHtml(areas.join(", "))}</span></div>`
          }
          <div class="contact-row">${icon("clock")} <span><strong>Horario</strong>${escapeHtml(config.hours.display)}</span></div>
          ${
            config.contact.googleMapsUrl
              ? `<a class="text-link" href="${escapeAttr(safeUrl(config.contact.googleMapsUrl))}" target="_blank" rel="noopener noreferrer">Abrir mapa ${icon("arrow")}</a>`
              : ""
          }
        </div>
      </div>
    </section>
  `;
}

export function renderPrivacySection(config) {
  return `
    <section class="privacy-section" id="privacy" aria-labelledby="privacy-title">
      <div class="container privacy-card">
        <div>
          <p class="eyebrow">${escapeHtml(config.privacy.policyLabel)}</p>
          <h2 id="privacy-title">Privacidade e escolhas de medicao</h2>
        </div>
        <p>${escapeHtml(config.privacy.content)}</p>
      </div>
    </section>
  `;
}

export function renderFooter(config) {
  const services = enabledServices(config);
  const phoneHref = telHref(config.contact.primaryPhone);
  const emailHref = mailHref(config.contact.email);
  const socialLinks = Object.entries(config.contact.socialUrls || {}).filter(([, url]) => safeUrl(url));

  return `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div>
          <a class="brand footer-brand" href="#home" aria-label="${escapeAttr(config.identity.businessName)} home">
            ${logoMarkup(config)}
          </a>
          <p>${escapeHtml(config.identity.shortTagline)}</p>
          ${
            config.template.showAttribution
              ? `<p class="studio-credit">Website por ${escapeHtml(config.template.studio)}</p>`
              : ""
          }
        </div>
        <nav aria-label="Footer navigation">
          <h2>Navegacao</h2>
          ${navLinks.map((link) => `<a href="${escapeAttr(link.href)}">${escapeHtml(link.label)}</a>`).join("")}
          <a href="#privacy">${escapeHtml(config.privacy.policyLabel)}</a>
          <button type="button" class="footer-button" data-open-consent>Preferencias de cookies</button>
        </nav>
        <nav aria-label="Footer services">
          <h2>Servicos</h2>
          ${services.map((service) => `<a href="#service-${escapeAttr(service.id)}">${escapeHtml(service.name)}</a>`).join("")}
        </nav>
        <div>
          <h2>Contato</h2>
          ${phoneHref ? `<a href="${escapeAttr(phoneHref)}">${escapeHtml(config.contact.primaryPhone)}</a>` : ""}
          ${emailHref ? `<a href="${escapeAttr(emailHref)}">${escapeHtml(config.contact.email)}</a>` : ""}
          <span>${escapeHtml(config.contact.primaryServiceArea)}</span>
          ${socialLinks.length ? `<div class="social-links">${socialLinks.map(([label, url]) => `<a href="${escapeAttr(safeUrl(url))}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a>`).join("")}</div>` : ""}
        </div>
      </div>
      <div class="container footer-bottom">
        <span>&copy; ${currentYear()} ${escapeHtml(config.identity.businessName)}. Todos os direitos reservados.</span>
        <span>Template ${escapeHtml(config.template.name)}</span>
      </div>
    </footer>
  `;
}

export function renderFloatingWhatsapp(config) {
  if (!config.contact.whatsappNumber) return "";

  const url = createWhatsAppUrl(
    config.contact.whatsappNumber,
    `Ola ${config.identity.businessName}, gostaria de solicitar informacoes sobre servicos residenciais.`
  );
  if (!url) return "";

  return `
    <a class="floating-whatsapp" href="${escapeAttr(url)}" target="_blank" rel="noopener noreferrer" aria-label="Abrir WhatsApp para falar com ${escapeAttr(config.identity.businessName)}">
      ${icon("whatsapp")}
    </a>
  `;
}

export function renderQuoteModal(config) {
  const services = enabledServices(config);

  return `
    <div class="modal-backdrop" data-quote-modal hidden>
      <section class="quote-modal" role="dialog" aria-modal="true" aria-labelledby="quote-modal-title" aria-describedby="quote-modal-description">
        <button class="modal-close" type="button" aria-label="Fechar solicitacao de orcamento" data-modal-close>${icon("close")}</button>
        <div class="modal-header">
          <p class="eyebrow">Solicitacao de orcamento</p>
          <h2 id="quote-modal-title">${escapeHtml(config.quoteForm.title)}</h2>
          <p id="quote-modal-description">${escapeHtml(config.quoteForm.description)}</p>
        </div>
        <form class="quote-form" novalidate data-quote-form>
          <div class="form-grid">
            <label>
              <span>Nome completo</span>
              <input name="fullName" autocomplete="name" required>
              <small data-error-for="fullName"></small>
            </label>
            <label>
              <span>Telefone ou WhatsApp</span>
              <input name="contactNumber" autocomplete="tel" inputmode="tel" required>
              <small data-error-for="contactNumber"></small>
            </label>
            <label>
              <span>Email <em>opcional</em></span>
              <input name="email" autocomplete="email" inputmode="email">
              <small data-error-for="email"></small>
            </label>
            <label>
              <span>Cidade ou CEP</span>
              <input name="location" autocomplete="postal-code" required>
              <small data-error-for="location"></small>
            </label>
            <label>
              <span>Servico solicitado</span>
              <select name="serviceRequested" required>
                <option value="">Selecione um servico</option>
                ${services.map((service) => `<option value="${escapeAttr(service.name)}" data-service-id="${escapeAttr(service.id)}">${escapeHtml(service.name)}</option>`).join("")}
              </select>
              <small data-error-for="serviceRequested"></small>
            </label>
            <label>
              <span>Forma de contato preferida</span>
              <select name="preferredContact" required>
                ${config.quoteForm.contactMethods.map((method) => `<option value="${escapeAttr(method)}">${escapeHtml(method)}</option>`).join("")}
              </select>
              <small data-error-for="preferredContact"></small>
            </label>
          </div>
          <label>
            <span>Descricao do problema <em>opcional</em></span>
            <textarea name="description" rows="4"></textarea>
            <small data-error-for="description"></small>
          </label>
          <p class="form-note">O envio prepara uma mensagem no WhatsApp. O visitante precisa revisar e enviar a mensagem no WhatsApp antes que a empresa a receba.</p>
          <div class="form-status" role="status" aria-live="polite" data-form-status></div>
          <button class="button button-accent button-large" type="submit">${escapeHtml(config.quoteForm.submitLabel)}</button>
        </form>
      </section>
    </div>
  `;
}

export function renderLightbox(config) {
  if (!config.gallery?.length) return "";

  return `
    <div class="modal-backdrop lightbox-backdrop" data-lightbox hidden>
      <section class="lightbox" role="dialog" aria-modal="true" aria-labelledby="lightbox-title">
        <button class="modal-close" type="button" aria-label="Fechar previa da galeria" data-lightbox-close>${icon("close")}</button>
        <img data-lightbox-image src="" alt="" width="1000" height="760">
        <div class="lightbox-footer">
          <button type="button" class="icon-button" aria-label="Imagem anterior" data-lightbox-prev>${icon("chevron")}</button>
          <div>
            <h2 id="lightbox-title" data-lightbox-title></h2>
            <p data-lightbox-caption></p>
          </div>
          <button type="button" class="icon-button next" aria-label="Proxima imagem" data-lightbox-next>${icon("chevron")}</button>
        </div>
      </section>
    </div>
  `;
}

export function renderCookieConsent() {
  return `
    <section class="consent-banner" role="dialog" aria-live="polite" aria-label="Consentimento de cookies" data-consent-banner hidden>
      <div class="consent-copy">
        <p>Você escolhe sobre a medição. Com sua autorização, usamos Analytics e mídia para entender a navegação e melhorar campanhas. Nenhum dado digitado no WhatsApp é enviado pelo site. <a href="#privacy">Ver privacidade.</a></p>
      </div>
      <div class="consent-actions">
        <button class="button button-primary" type="button" data-consent-accept>Aceitar tudo</button>
        <button class="button button-secondary" type="button" data-consent-reject>Rejeitar opcionais</button>
        <button class="button button-outline" type="button" aria-expanded="false" aria-controls="consent-panel" data-consent-customize>Personalizar</button>
      </div>
      <div class="consent-panel" id="consent-panel" hidden>
        <label class="toggle-row">
          <span>
            <strong>Analytics</strong>
            <small>Ajuda a entender a navegacao quando estiver configurado e autorizado.</small>
          </span>
          <input type="checkbox" data-consent-category="analytics">
        </label>
        <label class="toggle-row">
          <span>
            <strong>Publicidade e medicao de campanhas</strong>
            <small>Permite medir campanhas quando estiver configurado e autorizado.</small>
          </span>
          <input type="checkbox" data-consent-category="advertising">
        </label>
        <button class="button button-accent" type="button" data-consent-save>Salvar preferencias</button>
      </div>
    </section>
  `;
}
