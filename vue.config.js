module.exports = {
	productionSourceMap: process.env.NODE_ENV !== "production",
	chainWebpack: (config) => {
		config.module
			.rule("images")
			.use("url-loader")
			.loader("url-loader")
			.tap((options) => Object.assign(options, { limit: 10240 }));
	},
	css: {
		loaderOptions: {
			// by default the `sass` option will apply to both syntaxes
			// because `scss` syntax is also processed by sass-loader underlyingly
			// but when configuring the `data` option
			// `scss` syntax requires an semicolon at the end of a statement, while `sass` syntax requires none
			// in that case, we can target the `scss` syntax separately using the `scss` option
			scss: {
				prependData: `@import "~@/assets/scss/style.scss";`
			}
		}
	},
};
