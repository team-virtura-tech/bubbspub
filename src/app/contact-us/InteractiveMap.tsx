'use client';

import { contact } from '@/data/contact';

interface InteractiveMapProps {
  address?: string;
  className?: string;
  height?: string;
}

export const InteractiveMap = ({
  address = contact.address.full,
  className = '',
  height = 'h-[500px]',
}: InteractiveMapProps) => {
  // Create Google Maps embed URL using the address (doesn't require API key)
  // Using the simple embed format which works without an API key
  const encodedAddress = encodeURIComponent(address);
  const mapUrl = `https://www.google.com/maps?q=${encodedAddress}&output=embed`;

  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl bg-muted/50 ${height} ${className}`}
    >
      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`${contact.businessName} Location - ${contact.address.city}, ${contact.address.state}`}
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
};
