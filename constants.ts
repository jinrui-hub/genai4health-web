import { Event, EventType, Organizer, Workshop } from './types';

const asset = (relativePath: string) => {
  const base = import.meta.env.BASE_URL || '/';
  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const normalizedPath = relativePath.startsWith('/')
    ? relativePath.slice(1)
    : relativePath;
  return `${normalizedBase}/${normalizedPath}`;
};

export const CHAIRS: Organizer[] = [
  {
    name: "Jinrui Fang",
    title: "PhD Student",
    university: "UT Austin",
    imageUrl: asset('founding-members/jinrui.jpg'),
    website: "https://ischool.utexas.edu/profiles/jinrui-fang"
  },
  {
    name: "Tiange Xiang",
    title: "PhD Student",
    university: "Stanford University",
    imageUrl: asset('founding-members/tiange.jpg'),
    website: "https://tiangexiang.github.io/"
  }, 
    {
    name: "Jiawei Xu",
    title: "PhD Student",
    university: "UT Austin",
    imageUrl: asset('founding-members/jiaweixu.jpg'),
    website: "https://jiaweixu98.github.io/"
  }
];

export const ORGANIZERS: Organizer[] = [
  {
    name: "Ying Ding",
    title: "Bill & Lewis Suit Professor",
    university: "UT Austin",
    imageUrl: asset('founding-members/YingDing.jpg'),
    website: "https://ischool.utexas.edu/profiles/ying-ding"
  },
  {
    name: "Ehsan Adeli",
    title: "Assistant Professor",
    university: "Stanford University",
    imageUrl: asset('founding-members/ehsan.jpg'),
    website: "https://profiles.stanford.edu/ehsan-adeli"
  },
  {
    name: "Eric Topol",
    title: "Chair",
    university: "Scripps Research Translational Institute",
    imageUrl: asset('founding-members/eric_topol.jpg'),
    website: "https://www.scripps.edu/faculty/topol/"
  },
  {
    name: "Suchi Saria",
    title: "John C. Malone Associate Professor of Computer Science",
    university: "Johns Hopkins University",
    imageUrl: asset('founding-members/suchi-saria-2.jpg'),
    website: "https://engineering.jhu.edu/faculty/suchi-saria/"
  },
  {
    name: "Fei Wang",
    title: "Associate Professor of Population Health Sciences",
    university: "Weill Cornell Medicine",
    imageUrl: asset('founding-members/FeiWang_1.jpeg'),
    website: "https://gradschool.weill.cornell.edu/faculty/fei-wang"
  },
  {
    name: "Haider Warraich",
    title: "Senior Advisor",
    university: "ARPA-H",
    imageUrl: asset('founding-members/Haider_WarraichMD.jpg'),
    website: "https://www.linkedin.com/in/haiderwarraich/"
  },
  {
    name: "James Zou",
    title: "Associate Professor of Biomedical Data Science",
    university: "Stanford University",
    imageUrl: asset('founding-members/zou.jpg'),
    website: "https://www.james-zou.com/"
  },

  {
    name: "Tianlong Chen",
    title: "Assistant Professor",
    university: "UNC-Chapel Hill",
    imageUrl: asset('founding-members/tianlong-chen.jpg'),
    website: "https://tianlong-chen.github.io/"
  },

  {
    name: "Zakia Hammal",
    title: "Associate Research Professor",
    university: "Carnegie Mellon University",
    imageUrl: asset('founding-members/zakia.jpg'),
    website: "https://www.ri.cmu.edu/ri-faculty/zakia-hammal/"
  },
  {
    name: "Sheng Liu",
    title: "Postdoctoral Researcher",
    university: "Stanford University",
    imageUrl: asset('founding-members/shengliu.jpg'),
    website: "https://shengliu66.github.io/"
  },
  {
    name: "Gregory Holste",
    title: "PhD Candidate",
    university: "UT Austin",
    imageUrl: asset('founding-members/Gregory.png'),
    website: "https://www.gholste.me/"
  }
];

export const WORKSHOPS: Workshop[] = [
  {
    title: "GenAI4Health @ NeurIPS 2025",
    year: "2025",
    url: "https://aihealth.ischool.utexas.edu/GenAI4HealthNeurips2025/",
    description: "Exploring the frontiers of generative models in medical imaging, records, and drug discovery."
  },
  {
    title: "GenAI4Health @ NeurIPS 2024",
    year: "2024",
    url: "https://genai4health.github.io/2024-NeurIPS/",
    description: "The inaugural workshop setting the stage for large language models in clinical workflows."
  }
];

export const EVENTS: Event[] = [
  {
    id: "evt-003",
    title: "Multimodal Foundation Models for Oncology",
    date: "2024-06-15T10:00:00",
    type: EventType.UPCOMING,
    speaker: {
      name: "Dr. Alice Chen",
      affiliation: "Harvard Medical School",
      bio: "Dr. Chen is a leading researcher in computational pathology and multimodal learning.",
      imageUrl: "https://picsum.photos/200"
    },
    abstract: "This talk will cover recent advancements in integrating pathology slides, radiology images, and genomic data using foundation models to predict treatment outcomes in oncology patients.",
    location: "Zoom Webinar",
    link: "https://zoom.us/j/example"
  },
  {
    id: "evt-004",
    title: "Privacy-Preserving GenAI in Healthcare",
    date: "2024-07-20T14:00:00",
    type: EventType.UPCOMING,
    speaker: {
      name: "Prof. Bob Smith",
      affiliation: "MIT CSAIL",
      bio: "Prof. Smith specializes in differential privacy and secure multi-party computation.",
      imageUrl: "https://picsum.photos/201"
    },
    abstract: "We will discuss frameworks for deploying LLMs in hospital settings without compromising patient data privacy, focusing on federated learning approaches.",
    location: "Zoom Webinar",
    link: "https://zoom.us/j/example"
  },
  {
    id: "evt-001",
    title: "Large Language Models for Clinical Decision Support",
    date: "2024-04-10T09:00:00",
    type: EventType.PAST,
    speaker: {
      name: "Dr. Sarah Lee",
      affiliation: "Google DeepMind",
      bio: "Research Scientist focusing on medical LLMs.",
      imageUrl: "https://picsum.photos/202"
    },
    abstract: "An overview of Med-PaLM and its applications in answering USMLE style questions and providing clinical reasoning support.",
    recordingUrl: "https://youtube.com/example"
  },
  {
    id: "evt-002",
    title: "Generative Chemistry: Accelerating Drug Discovery",
    date: "2024-03-12T11:00:00",
    type: EventType.PAST,
    speaker: {
      name: "Dr. James Wu",
      affiliation: "NVIDIA Healthcare",
      bio: "Lead of the BioNeMo project.",
      imageUrl: "https://picsum.photos/203"
    },
    abstract: "How generative AI is reducing the timeline for small molecule generation and protein folding predictions.",
    recordingUrl: "https://youtube.com/example"
  }
];

export const LINKS = {
  slack: "#",
  mailingList: "#",
  speakerForm: "#"
};
