/**
 * Site-wide constants.
 */
export const SITE_URL = 'https://bubbspub.com';
export const SITE_NAME = 'Bubbs Pub';

/**
 * Pub contact & location details — shared across Restaurant schema, Event schema, etc.
 */
export const PUB_LOCATION = {
  name: "Bubb's Corner Pub",
  telephone: '+1-224-238-3168',
  address: {
    streetAddress: '335 N McLean Blvd',
    addressLocality: 'South Elgin',
    addressRegion: 'IL',
    postalCode: '60177',
    addressCountry: 'US',
  },
  geo: {
    latitude: 41.9936,
    longitude: -88.2917,
  },
} as const;

/**
 * Feature flags for the application.
 * Toggle features on/off during development or for A/B testing.
 */
export const FEATURES = {
  /**
   * When true, drinks page shows menu-style layout (CategoryNav + MenuSection grid)
   * instead of image carousels. Set to false once drink images are ready.
   */
  showDrinksMenuWithoutImages: true,

  /**
   * When true, shows hero section on the drinks page.
   */
  showDrinksHeroSection: false,

  /**
   * When true, shows hero section on the menu page.
   */
  showMenuHeroSection: false,

  /**
   * When true, shows contact form on the contact-us page.
   */
  showContactForm: false,

  /**
   * When true, shows hero section on the contact-us page.
   */
  showContactHeroSection: false,

  /**
   * When true, shows hero section on the events page.
   */
  showEventsHeroSection: true,
} as const;
