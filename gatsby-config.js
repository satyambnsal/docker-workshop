module.exports = {
  siteMetadata: {
    title: "Containers and Docker",
    subtitle: "",
    description: "A complete intro to Linux containers for developers",
    keywords: [
      "linux",
      "containers",
      "javascript",
      "node",
      "docker",
      "nodejs",
      "satyam",
      "Pesto Tech"
    ]
  },
  pathPrefix: "/docker-workshop",
  plugins: [
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/lessons`,
        name: "markdown-pages"
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: true,
              sizeByPixelDensity: false
            }
          }
        ]
      }
    },
    "gatsby-plugin-sharp"
  ]
};
