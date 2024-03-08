/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		fontFamily: {
			"sans": ["Karla", "ui-sans-serif", "system-ui", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
			"serif": ["'Playfair Display'", "ui-serif", "Georgia", "Cambria", "Times New Roman", "Times", "serif"]
		}
	},
	plugins: [require('@tailwindcss/typography'),],
}
