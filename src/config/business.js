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

export const businessConfig = {
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

export const enabledServices = businessConfig.services.filter((service) => service.enabled);
