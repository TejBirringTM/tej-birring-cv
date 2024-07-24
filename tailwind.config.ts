import { type Config } from "tailwindcss"
import plugin from "tailwindcss/plugin"
import typography from "@tailwindcss/typography"
import defaultTheme from "tailwindcss/defaultTheme"

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				/* 
					Colour Scheme:
					https://coolors.co/2d2d49-2e436f-f6f8fe-fc9e4f-edd382-f2f3ae
				*/
				light: '#F6F8FE',
				primary: '#2E436F',
				secondary: '#2D2D49',
				'tertiary-1': '#FC9E4F',
				'tertiary-2': '#EDD382',
				'tertiary-3': '#F2F3AE',
			},
			fontFamily: {
				sans: ['Nunito Sans', ...defaultTheme.fontFamily.sans],
				serif: ['Noto Serif', ...defaultTheme.fontFamily.serif],
			}
		},
	},
	plugins: [
		typography,
		plugin(({addVariant})=>{
			addVariant('not-first', '&:not(:first-child)');
		})
	],
} satisfies Config;
