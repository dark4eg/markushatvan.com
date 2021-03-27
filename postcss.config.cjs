const tailwindcssJit = require('@tailwindcss/jit');
const cssnano = require('cssnano')({
  preset: ['default', { discardComments: { removeAll: true } }],
});

const autoprefixer = require('autoprefixer')();

module.exports = {
  plugins: [
    tailwindcssJit,
    autoprefixer,
    // only needed if you want to purge
    ...(process.env.NODE_ENV === 'production' ? [cssnano] : []),
  ],
};
