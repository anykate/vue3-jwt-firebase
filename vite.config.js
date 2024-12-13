import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'
import eslint from 'vite-plugin-eslint'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
	plugins: [vueDevTools(), vue(), eslint()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
})
