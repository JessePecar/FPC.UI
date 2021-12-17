module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
       extend: {
           blur: {
               xs: '2px',
           }
       }
    },
    variants: {
        extend: {
            animation: ['hover', 'focus'],
            scale: ['hover']
        },
    },
    plugins: [],
}