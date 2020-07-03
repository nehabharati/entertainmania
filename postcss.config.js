const tailwindcss = require('tailwindcss');
module.exports = {
    plugins: [
        tailwindcss('./tailwind.js'),
        require('autoprefixer'),
        require('tailwindcss')('./tailwind.config.js'),
    ],
};
