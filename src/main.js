import { businessConfig } from "./config/business.js";
import {
  initAccordion,
  initCookieConsent,
  initGalleryLightbox,
  initNavigation,
  initQuoteModal
} from "./components/interactions.js";
import {
  renderAbout,
  renderContact,
  renderCookieConsent,
  renderFaq,
  renderFloatingWhatsapp,
  renderFooter,
  renderGallery,
  renderHeader,
  renderHero,
  renderHowItWorks,
  renderLightbox,
  renderPrivacySection,
  renderQuoteModal,
  renderQuoteSection,
  renderServiceAreas,
  renderServiceShortcuts,
  renderServices,
  renderTestimonials,
  renderTopBar,
  renderWhyChooseUs
} from "./components/sections.js";

const app = document.querySelector("#app");

app.innerHTML = `
  ${renderTopBar(businessConfig)}
  ${renderHeader(businessConfig)}
  <main id="main-content">
    ${renderHero(businessConfig)}
    ${renderServiceShortcuts(businessConfig)}
    ${renderServices(businessConfig)}
    ${renderWhyChooseUs(businessConfig)}
    ${renderHowItWorks(businessConfig)}
    ${renderAbout(businessConfig)}
    ${renderServiceAreas(businessConfig)}
    ${renderGallery(businessConfig)}
    ${renderTestimonials(businessConfig)}
    ${renderQuoteSection(businessConfig)}
    ${renderFaq(businessConfig)}
    ${renderContact(businessConfig)}
    ${renderPrivacySection(businessConfig)}
  </main>
  ${renderFooter(businessConfig)}
  ${renderQuoteModal(businessConfig)}
  ${renderLightbox(businessConfig)}
  ${renderCookieConsent(businessConfig)}
  ${renderFloatingWhatsapp(businessConfig)}
`;

initNavigation();
initAccordion();
initQuoteModal(businessConfig);
initGalleryLightbox(businessConfig);
initCookieConsent(businessConfig);
