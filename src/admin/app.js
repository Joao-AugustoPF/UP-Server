// path: ./my-app/src/admin/app.js

import AuthLogo from './extensions/logoAuth.png';
import MenuLogo from './extensions/logoAuth.png';
import favicon from './extensions/favicon.ico';

export default {
  config: {
    // Replace the Strapi logo in auth (login) views
    auth: {
      logo: AuthLogo,
    },
   // Replace the favicon
    head: {
      favicon: favicon,
    },
    // Add a new locale, other than 'en'
    locales: ['pt-BR'],
    // Replace the Strapi logo in the main navigation
    menu: {
      logo: MenuLogo,
    },
    // Override or extend the theme
    theme: {
      // overwrite light theme properties
      light: {
        colors: {
          primary100: '#f6ecfc',
          primary200: '#e0c1f4',
          primary500: '#ac73e6',
          primary600: '#e91b45',
          primary700: '#d10d35',
          danger700: '#b72b1a'
        },
      },

      // overwrite dark theme properties
      dark: {
        colors: {
          primary100: '#f6ecfc',
          primary200: '#e0c1f4',
          primary500: '#ac73e6',
          primary600: '#e91b45',
          primary700: '#d10d35',
          danger700: '#a00e2c'
        },
      }
    },
    // Extend the translations
    translations: {
    },
   // Disable video tutorials
    tutorials: false,
   // Disable notifications about new Strapi releases
    notifications: { release: false },
  },

  bootstrap() {},
};
