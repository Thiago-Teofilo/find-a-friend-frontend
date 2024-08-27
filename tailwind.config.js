// eslint-disable-next-line no-undef
module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                primary: ['Nunito', 'sans-serif'],
                secondary: ['Nunito', 'sans-serif']
            },
            colors: {
                primary: '#F15156',
                border: '#ed8e91',
                'primary-alt': '#E44449',
                secondary: '#0D3B66',
                tertiary: '#F4D35E',
                white: '#FFFFFF',
                'pure-white': '#FDECED'
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
}
