module.exports = {
  siteMetadata: {
    title: "Jake Peacock",
    titleTemplate: "%s - Digital Empowerment",
    description:
      "Jake Peacock - Software Developer - Activist - Digitally Empowers",
    url: "https://www.jake-peacock.com", // No trailing slash allowed!
    image: "/images/prof.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@real_pavoreal",
    instagramUsername: "pro_bono_dev"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'jake peacock',
        start_url: '/',
        background_color: '#222222',
        theme_color: '#222222',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.jpg', // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "http://jake-peacock.com",
        sitemap: "http://jake-peacock.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
