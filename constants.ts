import { Event, EventType, Organizer, Workshop } from './types';

const asset = (relativePath: string) => {
  // Get BASE_URL which is set at build time by Vite
  // In dev mode it's '/', in production it's '/AI4HealthClub/'
  const base = import.meta.env.BASE_URL || '/';
  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base;
  // Remove leading slash if present to avoid double slashes
  const path = relativePath.startsWith('/') ? relativePath.slice(1) : relativePath;
  return `${normalizedBase}/${path}`;
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
    title: "John C. Malone Associate Professor",
    university: "Johns Hopkins University",
    imageUrl: asset('founding-members/suchi-saria-2.jpg'),
    website: "https://engineering.jhu.edu/faculty/suchi-saria/"
  },
  {
    name: "Fei Wang",
    title: "Associate Professor",
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
    title: "Associate Professor",
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
  },
  {
    name: "Jon Tamir",
    title: "Assistant Professor",
    university: "UT Austin",
    imageUrl: asset('founding-members/Tamir-Jon.jpg'),
    website: "https://users.ece.utexas.edu/~jtamir/"
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
    id: "evt-005",
    title: "Enhancing GI Tract Cancer Diagnosis Through Generative Models and Vision-based Robotic Tactile Sensing",
    date: "2026-01-29T13:00:00-06:00",
    endDate: "2026-01-29T13:30:00-06:00",
    type: EventType.UPCOMING,
    speaker: {
      name: "Dr. Farshid Alambeigi",
      affiliation: "The University of Texas at Austin",
      bio: "Dr. Farshid Alambeigi is an Associate Professor and the Leland Barclay Fellow in the Walker Department of Mechanical Engineering at The University of Texas at Austin. He is also a core faculty member of Texas Robotics. Dr. Alambeigi earned his Ph.D. in Mechanical Engineering (2019) and M.Sc. in Robotics (2017) from Johns Hopkins University. In 2018, he was awarded the 2019 Siebel Scholarship in recognition of his academic excellence and leadership. He is the recipient of the NIH NIBIB Trailblazer Award (2020) for his work on flexible implants and robotic systems for minimally invasive spinal fixation surgery and the NIH Director's New Innovator Award (2022) for pioneering in vivo bioprinting surgical robotics for the treatment of volumetric muscle loss. His contributions have also been recognized with the UT Austin Faculty Innovation Award, the Outstanding Research Award by an Assistant Professor, the Walker Scholar Award, and several best paper awards and recognitions. He serves as an Associate Editor for the IEEE Transactions on Robotics (TRO), IEEE Robotics and Automation Letters (RAL), and the IEEE Robotics and Automation Magazine (RAM). At UT Austin, Dr. Alambeigi directs the Advanced Robotic Technologies for Surgery (ARTS) Lab. In collaboration with the UT Dell Medical School and MD Anderson Cancer Center, the ARTS Lab advances the concept of Surgineering, engineering the surgery, by developing dexterous, intelligent robotic systems designed to partner with surgeons. The ultimate goal of this work is to enhance surgical precision, improve clinician performance, and advance patient safety and outcomes.",
      imageUrl: asset('speakers/Farshid_Alambeigi.jpg')
    },
    abstract: "Colonoscopy remains the gold standard for colorectal cancer screening, yet it is difficult and unintuitive to operate and relies almost entirely on vision, making subtle or early-stage polyps easy to miss. In this talk, I present a unified research platform to accelerate next-generation AI-enabled robotic colonoscopy by addressing three core gaps: improving the steerability and intuitiveness of conventional devices, advancing sensing beyond vision alone, and expanding access to data for intelligent screening. First, we robotize conventional colonoscopes with a modular add-on system that improves steerability and clinician intuitiveness without disrupting established clinical workflow. Second, we extend beyond vision-only colonoscopy by integrating an inflatable vision-based robotic tactile sensor. While its output is also camera-based, tactile interaction provides complementary cues, including polyp surface texture and local stiffness relative to surrounding tissue. Finally, to overcome limited access to diverse, well-labeled clinical data, we incorporate a generative AI module to synthesize realistic training data and improve model robustness across variations in anatomy, lighting, and pathology. Together, these components form a practical, end-to-end framework for developing, validating, and translating AI-driven robotic colonoscopy with enhanced sensing and improved generalization.",
    location: "Zoom Webinar",
    link: "https://utexas.zoom.us/j/87121024650?pwd=kkV0qG3NF7BkeuOHL7bHWeIO4nB0Uv.1"
  },
  {
    id: "evt-006",
    title: "Knowledge-Informed Weakly-Supervised Deep Learning Models for Cancer Applications",
    date: "2026-02-12T13:00:00-06:00",
    endDate: "2026-02-12T13:30:00-06:00",
    type: EventType.UPCOMING,
    speaker: {
      name: "Hairong Wang",
      affiliation: "The University of Texas at Austin, BME",
      bio: "Hairong Wang is an Assistant Professor in the Operations Research & Industrial Engineering program at UT Austin. Her research focuses on the development of machine learning models and algorithms for high-dimensional, multi-modal data with complex, heterogeneous structures. In particular, she develops data-driven methodologies for building and training machine learning models with data and computational efficiency, interpretability, generalizability, and robustness, and propose principled approaches to fuse domain knowledge into model design for supporting clinical diagnosis and optimal treatment in high-stake scenarios. Hairong received her PhD in Operations Research from the School of Industrial and Systems Engineering at Georgia Tech. Prior to joining Georgia Tech, she received her BA in Mathematics from University of Oxford.",
      imageUrl: asset('speakers/Hairong_Wang.jpg')
    },
    abstract: "Within the past decade, the unprecedented capability of modern deep learning (DL) models has been undoubtedly proven on large dataset. It is therefore suggested that, thanks to its computational power and versatility, DL possesses substantial potential for analyzing healthcare data, thereby significantly enhancing diagnosis, prognosis, and treatment planning. Healthcare data, on the other hand, possess unique properties distinct from commonly used DL benchmarks. Notably, due to the invasive nature and high expense of direct diagnosis, accurate healthcare data are often scarce, rendering off-the-shelf DL models largely ineffective in high-stakes applications. In this talk, I will discuss my recent developments on addressing these constraints by advancing knowledge-informed, image-based DL methodologies, which improve sample efficiency, predictive accuracy, and generalizability for real-world cancer applications. Such approaches systematically integrate biological, anatomical, and clinical domain knowledge into DL pipelines to overcome data scarcity and heterogeneity in cancer imaging. Across applications in glioblastoma and liver cancer, the methods demonstrate substantial improvements in generalizability and precision, showing strong potential to support personalized diagnosis, prognosis, treatment planning, and monitoring in precision oncology.",
    location: "Zoom Webinar",
    link: "https://utexas.zoom.us/j/87121024650?pwd=kkV0qG3NF7BkeuOHL7bHWeIO4nB0Uv.1"
  },
  {
    id: "evt-007",
    title: "Real-World Data to Real-World Evidence with some AI: Successes, Challenges, and Opportunities",
    date: "2026-02-26T13:00:00-06:00",
    endDate: "2026-02-26T13:30:00-06:00",
    type: EventType.UPCOMING,
    speaker: {
      name: "Jiang Bian",
      affiliation: "Regenstrief Institute",
      bio: "Dr. Bian specializes in biomedical informatics and health data science—interdisciplinary fields focused on leveraging data, information, and knowledge to drive scientific discovery, problem-solving, and decision-making aimed at improving human health. Dr. Bian brings extensive experience in developing real-world data infrastructure, informatics tools, and systems, as well as applying advanced AI and data science methods to analyze and interpret multimodal clinical and biomedical data. Dr. Bian is the Chief Research Information Officer of the IU Melvin and Bren Simon Comprehensive Cancer Center. In addition, he serves as Chief Data Scientist at the Regenstrief Institute, Chief Data Scientist at IU Health, Associate Dean of Data Science and Vice Chair for Translational Informatics in the Department of Biostatistics and Health Data Science at the IU School of Medicine, and Deputy Director of the Indiana Clinical and Translational Sciences Institute (CTSI) at the Regenstrief Institute.",
      imageUrl: asset('speakers/Jiang_Bian.jpg')
    },
    abstract: "This presentation examines practical methods—and some AI tools—for transforming real-world data (RWD) into credible real-world evidence (RWE). It highlights the central role of data science in overcoming common obstacles in electronic health records (EHR) and claims data (e.g., missingness, measurement error, and coding variability). Using case studies focused on GLP-1 receptor agonists (GLP-1RAs), the talk illustrates how rigorous study design and causal inference—particularly target trial emulation—can be used to assess the effectiveness and safety of GLP-1RAs.  The presentation emphasizes when and how RWE can complement randomized controlled trials—and where it can mislead without careful attention to potential biases, many of which originate from data limitations.",
    location: "Zoom Webinar",
    link: "https://utexas.zoom.us/j/87121024650?pwd=kkV0qG3NF7BkeuOHL7bHWeIO4nB0Uv.1"
  },
  {
    id: "evt-008",
    title: "TBD",
    date: "2026-03-12T13:00:00-06:00",
    endDate: "2026-03-12T13:30:00-06:00",
    type: EventType.UPCOMING,
    speaker: {
      name: "Anthony Christodoulou",
      affiliation: "UCLA",
      bio: "TBD",
      imageUrl: asset('speakers/Anthony_Christodoulou.jpg')
    },
    abstract: "TBD",
    location: "Zoom Webinar",
    link: "https://utexas.zoom.us/j/87121024650?pwd=kkV0qG3NF7BkeuOHL7bHWeIO4nB0Uv.1"
  },
  {
    id: "evt-009",
    title: "Trustworthy Health AI: Challenges & Lessons Learned",
    date: "2026-03-26T13:00:00-06:00",
    endDate: "2026-03-26T13:30:00-06:00",
    type: EventType.UPCOMING,
    speaker: {
      name: "Krishnaram Kenthapadi",
      affiliation: "Oracle Health",
      bio: "Krishnaram Kenthapadi is the Chief Scientist, Healthcare AI at Oracle, where he leads the AI initiatives for Clinical AI Agent and other Oracle Health products. Previously, he led AI safety, trustworthiness, and responsible AI initiatives at Fiddler AI, Amazon AWS AI, and LinkedIn, and served as LinkedIn's representative in Microsoft's AI and Ethics in Engineering and Research (AETHER) Advisory Board. Prior to that, he was a Researcher at Microsoft Research Silicon Valley Lab. Krishnaram obtained his Ph.D. in Computer Science from Stanford University in 2006. He has published 60+ papers, with 7000+ citations and filed 150+ patents, 72 of which have been granted. He has given invited talks and tutorials at leading research conferences and industry forums, and received research recognition awards.",
      imageUrl: asset('speakers/Krishnaram_Kenthapadi.jpg')
    },
    abstract: "While generative AI models and applications have huge potential across healthcare, their successful deployment requires addressing several ethical, trustworthiness, and safety considerations. These concerns include domain‑specific evaluation, hallucinations, truthfulness and grounding, safety and alignment, bias and fairness, robustness and security, privacy and unlearning, calibration and confidence, and transparency. In this talk, we first highlight the key challenges and opportunities for AI in healthcare, and then discuss unique challenges associated with trustworthy deployment of generative AI in healthcare. Focusing on the clinical documentation use case, we present practical guidelines for applying responsible AI techniques effectively and discuss lessons learned from deploying responsible AI approaches for AI agentic applications in healthcare. In particular, we present insights from building and deploying AI agents as part of Oracle Health Clinical AI Agent.",
    location: "Zoom Webinar",
    link: "https://utexas.zoom.us/j/87121024650?pwd=kkV0qG3NF7BkeuOHL7bHWeIO4nB0Uv.1"
  },
  {
    id: "evt-010",
    title: "TBD",
    date: "2026-04-09T13:00:00-06:00",
    endDate: "2026-04-09T13:30:00-06:00",
    type: EventType.UPCOMING,
    speaker: {
      name: "Ergys Subashi",
      affiliation: "MD Anderson Cancer Center",
      bio: "TBD",
      imageUrl: asset('speakers/Ergys_Subashi.jpg')
    },
    abstract: "TBD",
    location: "Zoom Webinar",
    link: "https://utexas.zoom.us/j/87121024650?pwd=kkV0qG3NF7BkeuOHL7bHWeIO4nB0Uv.1"
  },
  {
    id: "evt-011",
    title: "TBD",
    date: "2026-04-23T13:00:00-06:00",
    endDate: "2026-04-23T13:30:00-06:00",
    type: EventType.UPCOMING,
    speaker: {
      name: "Radu Marculescu",
      affiliation: "The University of Texas at Austin",
      bio: "TBD",
      imageUrl: asset('speakers/Radu_Marculescu.jpg')
    },
    abstract: "TBD",
    location: "Zoom Webinar",
    link: "https://utexas.zoom.us/j/87121024650?pwd=kkV0qG3NF7BkeuOHL7bHWeIO4nB0Uv.1"
  },
  {
    id: "evt-test",
    title: "Test Recording (Format Preview)",
    date: "2024-01-01T09:00:00",
    type: EventType.PAST,
    speaker: {
      name: "TBD",
      affiliation: "TBD",
      bio: "This is a placeholder to show how recordings will appear.",
      imageUrl: "https://picsum.photos/202"
    },
    abstract: "A test entry to preview the layout for future recordings.",
    recordingUrl: "https://youtube.com/example"
  }
];

export const LINKS = {
  slack: "https://join.slack.com/t/genaiforhealth/shared_invite/zt-3n3aewm9j-a91nqjPArIEIQQgIGUAVQA",
  mailingList: "mailto:sympa@utlists.utexas.edu?subject=subscribe%20ai4health",
  speakerForm: "#"
};
