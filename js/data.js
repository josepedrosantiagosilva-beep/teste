/* Conteúdo do site. Edite aqui para trocar produtos, preços e contato. */
window.DG = {
  /* WhatsApp da loja. Use DDI 55 + DDD + número, sem espaços ou símbolos. */
  phone: "5588994828085",
  phoneLabel: "(88) 99482-8085",

  /* Empresa que desenvolveu o site (aparece no rodapé) */
  dev: {
    name: "José Pedro Santiago da Silva",
    phone: "5588988039478",
    phoneLabel: "(88) 98803-9478",
    message: "Olá! Vi o site da DG Store e gostaria de um orçamento para o meu próprio site."
  },

  categories: [
    { slug: "fones-de-ouvido", name: "Fones de ouvido", img: "c-fones.jpg", desc: "Fones e headsets com ótimo som para o dia a dia e para jogar." },
    { slug: "smartwatches", name: "Smartwatches", img: "c-watch.jpg", desc: "Relógios inteligentes para acompanhar a sua rotina." },
    { slug: "caixas-de-som", name: "Caixas de som", img: "c-caixas.jpg", desc: "Caixas de som potentes para levar a música a qualquer lugar." },
    { slug: "acessorios", name: "Acessórios", img: "c-acess.jpg", desc: "Carregadores, cabos e tudo para completar o seu setup." }
  ],

  /* featured: true aparece em "Os mais procurados" na página inicial */
  products: [
    { id: "caixa-jbl", category: "caixas-de-som", featured: true, name: "Caixa de som Bluetooth JBL", desc: "Som de alta qualidade e bateria de longa duração.", price: 199.9, img: "p-caixa.jpg" },
    { id: "fone-bluetooth", category: "fones-de-ouvido", featured: true, name: "Fone de ouvido Bluetooth", desc: "Liberdade e qualidade de som em qualquer lugar.", price: 129.9, img: "p-fone.jpg" },
    { id: "smartwatch", category: "smartwatches", featured: true, name: "Smartwatch", desc: "Mais praticidade para o seu dia a dia.", price: 159.9, img: "p-watch.jpg" },
    { id: "headset-gamer", category: "fones-de-ouvido", featured: true, name: "Headset Gamer", desc: "Som imersivo para sua melhor experiência.", price: 149.9, img: "p-headset.jpg" },

    /* Exemplos para preencher as páginas de categoria: troque nomes, preços e imagens */
    { id: "fone-esportivo", category: "fones-de-ouvido", name: "Fone Bluetooth Esportivo", desc: "Firme no ouvido e resistente ao suor.", price: 99.9, img: "p-fone.jpg" },
    { id: "smartwatch-sport", category: "smartwatches", name: "Smartwatch Sport", desc: "Monitor de atividades e notificações no pulso.", price: 179.9, img: "p-watch.jpg" },
    { id: "caixa-portatil", category: "caixas-de-som", name: "Caixa de som portátil", desc: "Compacta, com ótimo som e fácil de levar.", price: 89.9, img: "p-caixa.jpg" },
    { id: "carregador-turbo", category: "acessorios", name: "Carregador turbo com cabo", desc: "Carregamento rápido para o seu celular.", price: 59.9, img: "c-acess.jpg" },
    { id: "cabo-usbc", category: "acessorios", name: "Cabo USB-C reforçado", desc: "Mais resistência e carga estável.", price: 24.9, img: "c-acess.jpg" }
  ],

  reviews: [
    { name: "Roni", img: "a-roni.jpg", text: "Chegou tudo certinho, muito rápido. Site top e atendimento excelente!" },
    { name: "Livya", img: "a-livya.jpg", text: "Produtos de qualidade e preço justo. Super recomendo!" },
    { name: "André", img: "a-andre.jpg", text: "Já comprei várias vezes e sempre é tudo perfeito. Atendimento nota 10!" }
  ]
};
