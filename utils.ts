import { Event } from './types';

export const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

export const generateGoogleCalendarUrl = (event: Event): string => {
  const startDate = new Date(event.date);
  const endDate = event.endDate
    ? new Date(event.endDate)
    : new Date(startDate.getTime() + 60 * 60 * 1000); // Default to 1 hour

  const formatDateForGoogle = (date: Date) => {
    return date.toISOString().replace(/-|:|\.\d\d\d/g, "");
  };

  const start = formatDateForGoogle(startDate);
  const end = formatDateForGoogle(endDate);

  const eventLink = event.link ? `\n\nEvent Link: ${event.link}` : '';
  const details = `Speaker: ${event.speaker.name} (${event.speaker.affiliation})\n\nAbstract: ${event.abstract}${eventLink}`;
  
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: `AI4Health Club: ${event.title}`,
    dates: `${start}/${end}`,
    details: details,
    location: event.location || 'Online',
  });

  return `https://www.google.com/calendar/render?${params.toString()}`;
};
