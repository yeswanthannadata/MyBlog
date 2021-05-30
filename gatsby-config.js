module.exports = {
    siteMetadata: {
        title: "My Blog",
        description: `Blog concepts`,
        twitter: `https://twitter.com/annadatayeswant`,
        siteUrl: `https://example.com`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-mdx`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/posts`,
                name: `posts`
            }
        },
        {
            resolve: `gatsby-plugin-theme-ui`,
            options: {
                prismPreset: `prism-okaidia`,
                preset: `@theme-ui/preset-funk`,
            }
        },
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
    ]
}