import {
  Brain,
  HeartHandshake,
  MessageCircle,
  Moon,
  Sprout,
  UserRound,
  UsersRound,
} from "lucide-react";

export const whatsappNumber = "5571992189481";
export const whatsappDisplay = "(71) 99218-9481";
export const whatsappMessage =
  "Oi! Visitei o seu site e desejo mais informações.";
export const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage,
)}`;

export const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Crianças", href: "#criancas-adolescentes" },
  { label: "Adultos", href: "#adultos" },
  { label: "Avaliação", href: "#avaliacao-neuropsicologica" },
  { label: "Atenção", href: "#sinais" },
];

export const services = [
  {
    title: "Psicoterapia para Crianças e Adolescentes",
    description:
      "Acompanhamento para desenvolvimento emocional, comportamento, vínculos familiares e fases de adaptação.",
    icon: Sprout,
  },
  {
    title: "Psicoterapia para Adultos",
    description:
      "Escuta profissional para ansiedade, sobrecarga, relações, autoestima e processos de mudança.",
    icon: UserRound,
  },
  {
    title: "Avaliação Neuropsicológica",
    description:
      "Investigação de funções cognitivas, comportamentais e emocionais para orientar condutas e cuidados.",
    icon: Brain,
  },
];

export const therapies = [
  {
    id: "criancas-adolescentes",
    eyebrow: "Crianças e adolescentes",
    title: "Psicoterapia para Crianças e Adolescentes",
    image: "/images/office.png",
    imageAlt: "Espaço terapêutico infantil com brinquedos e poltronas",
    lead:
      "A infância e a adolescência são fases de descobertas, mudanças e reorganizações emocionais. A psicoterapia oferece um espaço protegido para que crianças, adolescentes e famílias compreendam sentimentos, comportamentos e necessidades.",
    paragraphs: [
      "O acompanhamento favorece expressão emocional, comunicação, autoestima, habilidades sociais e construção de estratégias para lidar com dificuldades escolares, familiares ou relacionais.",
      "Quando necessário, o cuidado inclui orientação aos responsáveis para ampliar a segurança, a previsibilidade e o acolhimento no cotidiano.",
    ],
  },
  {
    id: "adultos",
    eyebrow: "Adultos",
    title: "Psicoterapia para Adultos",
    image: "/images/work.png",
    imageAlt: "Andreia Reis em atendimento online",
    lead:
      "A psicoterapia para adultos é um espaço de escuta, elaboração e cuidado para quem deseja compreender melhor sua história, seus vínculos e os desafios emocionais do presente.",
    paragraphs: [
      "O processo pode ajudar em momentos de ansiedade, tristeza, estresse, mudanças importantes, conflitos relacionais, sobrecarga, luto, baixa autoestima e dificuldade de tomar decisões.",
      "Mais do que tratar sintomas, a psicoterapia favorece autoconhecimento e construção de caminhos possíveis com respeito ao tempo de cada pessoa.",
    ],
  },
  {
    id: "avaliacao-neuropsicologica",
    eyebrow: "Neuropsicologia",
    title: "Avaliação Neuropsicológica",
    image: "/images/portrait.png",
    imageAlt: "Andreia Reis em consultório",
    lead:
      "A avaliação neuropsicológica investiga funções cognitivas, emocionais e comportamentais por meio de entrevistas, instrumentos padronizados e análise clínica.",
    paragraphs: [
      "Esse processo auxilia na compreensão de quadros relacionados ao desenvolvimento, aprendizagem, atenção, memória, linguagem e funcionamento intelectual.",
      "Entre as demandas acompanhadas estão Transtorno do Espectro Autista (TEA), Transtorno de Déficit de Atenção e Hiperatividade (TDAH), dislexia e Transtornos do Desenvolvimento Intelectual (TDI).",
    ],
  },
];

export const signs = [
  {
    title: "Pensamentos de autolesão ou suicídio",
    description:
      "Sofrimento intenso, sensação de não conseguir continuar ou pensamentos de se machucar precisam de cuidado imediato e rede de apoio.",
    icon: HeartHandshake,
  },
  {
    title: "Isolamento social",
    description:
      "Afastar-se de pessoas, compromissos e atividades importantes pode indicar que algo precisa ser olhado com atenção.",
    icon: UsersRound,
  },
  {
    title: "Mudanças de humor",
    description:
      "Oscilações intensas, irritabilidade, tristeza frequente ou perda de interesse merecem acolhimento e avaliação profissional.",
    icon: Moon,
  },
];

export const faqs = [
  {
    question: "Como faço o agendamento?",
    answer:
      "O agendamento pode ser feito pelo WhatsApp. A mensagem inicial já fica pronta para facilitar o primeiro contato.",
  },
  {
    question: "A avaliação neuropsicológica atende quais demandas?",
    answer:
      "A avaliação pode auxiliar na investigação de TEA, TDAH, dislexia, Transtornos do Desenvolvimento Intelectual e outras questões cognitivas, emocionais e comportamentais.",
  },
  {
    question: "Quando procurar psicoterapia?",
    answer:
      "Quando emoções, relações, comportamento, rotina ou pensamentos começam a gerar sofrimento, prejuízos ou sensação de desorganização, o cuidado psicológico pode ajudar.",
  },
];

export const socialLinks = [
  {
    label: "Instagram",
    href: "https://m.instagram.com/andreiareis.neuropsi/",
    icon: MessageCircle,
  },
];
