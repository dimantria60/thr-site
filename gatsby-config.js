module.exports = {
	siteMetadata: {
		siteUrl: 'https://www.yourdomain.tld',
		title: 'ThrSite',
	},
	plugins: [
		'gatsby-plugin-image',
		'gatsby-plugin-sharp',
		`gatsby-plugin-sass`,
		{
			resolve: 'gatsby-source-filesystem',
			options: {
			  name: `backgrounds`,
			  path: `${__dirname}/src/backgrounds`,
			}
		},
	],
};
