/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	webpack: (webPackConfig) => {
		webPackConfig.module.rules.push({
			test: /\.svg$/,
			use: [
				{
					loader: '@svgr/webpack',
					options: {
						ref: false,
						runtimeConfig: false,
						icon: true,
						dimensions: true,
						native: false,
						expandProps: 'end',
						svgo: true,
						titleProp: true,
					},
				},
			],
		});

		return webPackConfig;
	},
	compiler: {
		// ssr and displayName are configured by default
		styledComponents: true,
	},
};

module.exports = nextConfig;
