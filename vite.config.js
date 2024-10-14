import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
	plugins: [react()],
	base: '/todolist-react-api/',
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'), // 設定根目錄指向 src
		},
	},
	server: {
		open: true,
	},
	build: {
		base: '/todolist-react-api/',
		outDir: 'dist', // 構建輸出目錄
		sourcemap: true,
	},
})
