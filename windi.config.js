import { defineConfig } from "windicss/helpers";
import defaultTheme from "windicss/defaultTheme";
import forms from "windicss/plugin/forms";
import typography from 'windicss/plugin/typography'

export default defineConfig({
	darkMode: "class",
	extract: {
		include: ['lib/**/*.{vue,html,jsx,tsx}'],
		exclude: ['node_modules', '.git'],
	},
	theme: {
		extend: {
			fontFamily: {
				sans: ["Poppins", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [forms, typography],
});
