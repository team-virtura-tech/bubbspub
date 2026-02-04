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
  showEventsHeroSection: false,
} as const;
