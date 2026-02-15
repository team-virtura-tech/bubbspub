import type { MetadataRoute } from 'next';

import { SITE_URL } from '@/lib/config';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: '2025-02-14',
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/menu`,
      lastModified: '2025-02-14',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/menu/daily-special`,
      lastModified: '2025-02-14',
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/menu/happy-hour`,
      lastModified: '2025-02-14',
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/drinks`,
      lastModified: '2025-02-14',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/events`,
      lastModified: '2025-02-14',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/about-us`,
      lastModified: '2025-02-14',
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/contact-us`,
      lastModified: '2025-02-14',
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];
}
