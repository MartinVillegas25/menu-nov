import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path'


// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	build: {
		outDir: 'dist',
		assetsDir: 'assets',
		rollupOptions: {
		input: {
			// Configura las entradas para cada página
			index: resolve(__dirname,'index.html'),
			gracias: resolve(__dirname,'gracias.html'),
			admin: resolve(__dirname,'admin-boss.html'),
			// Añade más páginas según sea necesario
		},
		},
	},
	alias: {
		// Configura alias para los nombres de las páginas sin la extensión .html
		'/gracias': resolve(__dirname, 'gracias.html'),
		'/admin-boss': resolve(__dirname, 'admin-boss.html'),
		// Añade más alias según sea necesario
	},
	server: {
		proxy: {
		'/gracias': resolve(__dirname, 'gracias.html'),
		'/admin-boss': resolve(__dirname, 'admin-boss.html'),
		// Añade más proxy según sea necesario
		},
	},

});



