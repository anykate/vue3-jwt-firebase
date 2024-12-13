import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import pluginVue from 'eslint-plugin-vue'

export default [
	{
		name: 'app/files-to-lint',
		files: ['**/*.{js,ts,mts,jsx,tsx,vue}'],
	},
	{
		name: 'app/files-to-ignore',
		ignores: ['**/dist/**', '**/dist-ssr/**', '**/build/**', '**/build-ssr/**', '**/coverage/**'],
	},
	...pluginVue.configs['flat/essential'],
	{
		rules: {
			'vue/multi-word-component-names': 0,
		},
	},
	skipFormatting,
]
