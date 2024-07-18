import { isProd } from './support/envs.ts'
import type { NavigationLink, Site } from './types.ts'

export const SITE: Site = {
    author: 'Jarvlis',
    url: 'https://jarvlis.com',
    title: 'world in Jarvlis',
    description:
        "Jarvlis's personal blog, I enjoy the process of building something using any technology stack",
    shortDescription: '',
}

export const NavigationLinks: NavigationLink[] = [
    { name: 'Posts', url: '/posts' },
    { name: 'Category', url: '/categories' },
    { name: 'Timeline', url: '/timeline' },
    { name: 'About', url: '/posts/about-godruoyi' },
    { name: 'Friends', url: '/friends' },
]

export const FooterLinks = [
    {
        section: 'Blog',
        links: [
            { name: 'Posts', url: '/posts' },
            { name: 'Timeline', url: '/timeline' },
            { name: 'Categories', url: '/categories' },
            { name: 'About Me', url: '/posts/about-godruoyi' },
        ],
    },
    {
        section: 'Other',
        links: [
            { name: 'RSS', url: '/rss.xml' },
            { name: 'Site Map', url: '/sitemap-index.xml' },
            { name: 'Twitter', url: 'https://x.com/godruoyi' },
        ],
    },
]

export const Settings = {
    GoogleAnalytics: {
        enable: false,
        id: 'G-TKQ4L3ZDSF',
    },

    UmamiAnalytics: {
        enable: true,
        dataWebsiteID: 'bf63658a-9418-4f39-a6a1-5a0cedb6e429',
    },
}

export const SEO = {
    title: SITE.title,
    description: SITE.description,
    structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        inLanguage: 'en-US',
        '@id': SITE.url,
        url: SITE.url,
        name: SITE.title,
        description: SITE.description,
        isPartOf: {
            '@type': 'WebSite',
            url: SITE.url,
            name: SITE.title,
            description: SITE.description,
        },
    },
}
