module.exports = {
	siteMetadata: {
		siteUrl: 'https://www.yourdomain.tld',
		title: 'ThrSite',
	},
	plugins: [
		'gatsby-plugin-image',
		'gatsby-plugin-sharp',
		`gatsby-plugin-sass`,
		`gatsby-plugin-styled-components`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'React go',
				short_name: 'Reactgo',
				start_url: '/',
				background_color: '#f7f0eb',
				theme_color: '#a2466c',
				display: 'standalone',
				icon: 'src/images/image.png',
			},
		}
	],
};
