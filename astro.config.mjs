// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: 'https://meta.kognilab.pl',
	trailingSlash: 'always',
	integrations: [sitemap()],
});
