export enum EventType {
  UPCOMING = 'UPCOMING',
  PAST = 'PAST'
}

export interface Speaker {
  name: string;
  affiliation: string;
  bio: string;
  imageUrl?: string;
}

export interface Event {
  id: string;
  title: string;
  date: string; // ISO date string
  type: EventType;
  speaker: Speaker;
  abstract: string;
  recordingUrl?: string; // For past events
  location?: string; // e.g., "Zoom" or physical location
  link?: string; // Zoom link or registration
}

export interface Organizer {
  name: string;
  title: string;
  university: string;
  imageUrl: string;
  website?: string;
}

export interface Workshop {
  title: string;
  year: string;
  url: string;
  description: string;
}