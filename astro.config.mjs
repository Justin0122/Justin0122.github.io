import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import swup from '@swup/astro';

export default defineConfig({
    site: 'https://justinjongstra.nl',
    i18n: {
        defaultLocale: "en",
        locales: ["nl", "en"],
    },
    integrations: [
        mdx(),
        sitemap(),
        tailwind({
            applyBaseStyles: false
        }),
        swup({
                theme: 'slide',
                updateHead: true,
                cache: true,
            }
        )
    ],
    experimental: {
        contentCollectionCache: true,
    },
});
