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
			resolve: `gatsby-plugin-sharp`,
			options: {
				icon: 'src/images/favicon.ico',
				// Defaults used for gatsbyImageData and StaticImage
				defaults: {},
				// Set to false to allow builds to continue on image errors
				failOnError: true,
				// deprecated options and their defaults:
				base64Width: 20,
				//forceBase64Format: `png,jpg,ico`, // valid formats: png,jpg,webp
				useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
				stripMetadata: true,
				defaultQuality: 50,
			},
		},
	],
};
