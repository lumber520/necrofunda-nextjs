module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
        theme: {
            extend: {
                fontFamily: {
                    sans: ['Acme, sans-serif;'],
                },
                backgroundImage: theme => ({
                    'hero-pattern': "url('/animated-shape-corner.svg')",
                    'meteor': "url('/meteor.svg')",
                    'curve-line': "url('/curve-line.svg')",
                    'polygon': "url('/polygon-luminary.svg')",
                    'shiny-overlay': "url('/shiny-overlay.svg')",
                    'hexagon': "url('/hexagon.svg')",
                    'rect-light': "url('/rect-light.svg')"
                }),
                backgroundColor: theme => ({
                    ...theme('colors'),
                    'primary-blue': '#0e2a47',
                    'secondary-blue': '#d1e6f4',
                    'gangs-blue': '#0e2a47',
                }),

                keyframes: {
                    'fade-in-down': {
                        '0%': {
                            opacity: '0',
                            transform: 'translateY(-10px)'
                        },
                        '100%': {
                            opacity: '1',
                            transform: 'translateY(0)'
                        },
                    },
                    'fade-out-down': {
                        'from': {
                            opacity: '1',
                            transform: 'translateY(0px)'
                        },
                        'to': {
                            opacity: '0',
                            transform: 'translateY(10px)'
                        },
                    },
                    'fade-in-up': {
                        '0%': {
                            opacity: '0',
                            transform: 'translateY(10px)'
                        },
                        '100%': {
                            opacity: '1',
                            transform: 'translateY(0)'
                        },
                    },
                    'fade-out-up': {
                        'from': {
                            opacity: '1',
                            transform: 'translateY(0px)'
                        },
                        'to': {
                            opacity: '0',
                            transform: 'translateY(10px)'
                        },
                    },
                    'slide-in-left': {
                        'from': {
                            left: '-300%'
                        },

                        'to': {
                            left: '0%'
                        },
                    },
                    'slide-in-right': {
                        'from': {
                            right: '-300%'
                        },

                        'to': {
                            right: '0%'
                        },
                    },
                    'slide-right': {
                        'from': {
                            'margin-left': '100%',
                            width: '300%'
                        },

                        'to': {
                            'margin-left': '0%',
                            width: '100%'
                        },
                    }


                },
                animation: {
                    'fade-in-down': 'fade-in-down 1.5s ease-out',
                    'fade-out-down': 'fade-out-down 1.5s ease-out',
                    'fade-in-up': 'fade-in-up 1.5s ease-out',
                    'fade-out-up': 'fade-out-up 1.5s ease-out',
                    'slide-in-left': 'slide-in-left 1.4s ease-out',
                    'slide-in-right': 'slide-in-right 1.4s ease-out',
                }
            },

        },
    variants: {
        extend: {
            zIndex: ['hover', 'active'],
        },
    },
    plugins: [],
};
