const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@store': path.resolve(__dirname, 'src/store/'),
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@hooks': path.resolve(__dirname, 'src/hooks/'),
      '@services': path.resolve(__dirname, 'src/services/'),
      '@contexts': path.resolve(__dirname, 'src/contexts/'),
      '@interfaces': path.resolve(__dirname, 'src/types/'),
      '@routes': path.resolve(__dirname, 'src/routes/'),
      '@features': path.resolve(__dirname, 'src/features/'),
      '@shared': path.resolve(__dirname, 'src/shared/'),
    }
  }
  // Add TypeScript plugin configuration here if needed
};
