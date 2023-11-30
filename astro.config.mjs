import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Hygraph Documentation',
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
			  ],
			tableOfContents: {
				maxHeadingLevel: 4,
			},
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				
				{
					label: 'Getting Started',
					autogenerate: { directory: 'getting-started', collapsed: true },
				},
	
			],
		}),
	],

	// Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
	image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
