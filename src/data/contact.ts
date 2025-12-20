export type ContactInfo = {
  businessName: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    full: string;
  };
  hours: {
    weekdays: string; // Wednesday - Saturday
    weekend: string; // Sunday - Tuesday
  };
  mapsUrl?: string;
};

export const contact: ContactInfo = {
  businessName: "Bubb's Corner Pub",
  phone: '(224) 238-3168',
  address: {
    street: '335 N McLean Blvd',
    city: 'South Elgin',
    state: 'IL',
    zip: '60177',
    full: '335 N McLean Blvd, South Elgin, IL 60177',
  },
  hours: {
    weekdays: 'Wednesday - Saturday: 11:00 am - 1:00 am',
    weekend: 'Sunday - Tuesday: 11:00 am - 11:00 pm',
  },
  mapsUrl: 'https://maps.google.com/?q=335+N+McLean+Blvd+South+Elgin+IL+60177',
};
