import { Event, EventType, Organizer, Workshop } from './types';

export const ORGANIZERS: Organizer[] = [
  {
    name: "Ehsan Adeli",
    title: "Assistant Professor",
    university: "Stanford University",
    imageUrl: "https://picsum.photos/400/400?grayscale", // Replace with real photo in prod
    website: "https://stanford.edu"
  },
  {
    name: "Ying Ding",
    title: "Bill & Lewis Suit Professor",
    university: "UT Austin",
    imageUrl: "https://picsum.photos/401/401?grayscale", // Replace with real photo in prod
    website: "https://utexas.edu"
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