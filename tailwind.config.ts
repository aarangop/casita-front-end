import type {Config} from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#3B7D62',
                secondary: '#77BFA3',
                tertiary: '#BFD8BD',
                warning: '#F1D697',
                error: '#EE5E67'
            }
        }
    },
    plugins: [],
}
export default config
