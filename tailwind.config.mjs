/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'node_modules/daisyui/dist/**/*.js',
		'node_modules/react-daisyui/dist/**/*.js',
	],
	theme: {
		extend: {},
	},
	plugins: [
		require('daisyui'),
	],
	daisyui: {
		themes: [
		  {
			light: {
			  ...require("daisyui/src/theming/themes")["light"],
			  primary: "#4433ff",
			  accent: "#000000",
			  neutral: "#808080",
			},
			forest: {
			  ...require("daisyui/src/theming/themes")["forest"],
			  primary: "#079211",
			  accent: "#ffffff",
			  neutral: "#808080",
			  'base-100': "#101017",
			  'base-300': "#313131"
			},
		  },
		  "light",
		  "dark",
		  "forest",
		],
	  },
}
