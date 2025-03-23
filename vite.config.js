import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import fs from "fs";
import { viteStaticCopy } from "vite-plugin-static-copy";

function getHtmlEntryFiles(srcDir) {
	const entry = {};

	function traverseDir(currentDir) {
		const files = fs.readdirSync(currentDir);

		files.forEach((file) => {
			const filePath = path.join(currentDir, file);
			const isDirectory = fs.statSync(filePath).isDirectory();

			if (isDirectory) {
				// If it's a directory, recursively traverse it
				traverseDir(filePath);
			} else if (path.extname(file) === ".html") {
				// If it's an HTML file, add it to the entry object
				const name = path.relative(srcDir, filePath).replace(/\..*$/, "");
				entry[name] = filePath;
			}
		});
	}

	traverseDir(srcDir);

	return entry;
}

// https://vite.dev/config/
export default defineConfig({
	root: "src",
	base: "./",
	build: {
		rollupOptions: {
			input: getHtmlEntryFiles("src"),
			output: {
				assetFileNames: (assetInfo) => {
					if (/\.css$/.test(assetInfo.name)) {
						return `_assets/css/[name]-[hash].css`;
					}
					if (/\.png$|\.jpe?g$|\.svg$|\.gif$|\.webp$/.test(assetInfo.name)) {
						return "_assets/img/[name][extname]"; // Без хешу
					}

					// if (/\.js$/.test(assetInfo.name)) {
					// 	return `assets/js/[name][extname]`;
					// }
					if (/\.json$/.test(assetInfo.name)) {
						return `_assets/data/[name][extname]`;
					}

					if (/woff|woff2/.test(assetInfo.name)) {
						return `_assets/fonts/[name][extname]`;
					}
					return "_assets/[name][extname]";
				},

				entryFileNames: `_assets/js/[name]-[hash].js`,
				chunkFileNames: `_assets/js/[name]-[hash].js`,
			},
		},
		outDir: "../dist",
		emptyOutDir: true,
	},
	server: {
		port: 3000, // Порт локального сервера
		open: true, // Відкривати браузер при запуску
	},

	plugins: [
		react(),
		tailwindcss(),
		viteStaticCopy({
			targets: [
				
				{ src: "data", dest: "./" },
			],
		}),
	],
});
