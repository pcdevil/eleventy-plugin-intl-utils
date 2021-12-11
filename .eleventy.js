'use strict';

const languageNameFactory = require('./src/language_name');

module.exports = (eleventyConfig, pluginConfig = {}) => {
	const { locale } = pluginConfig;

	eleventyConfig.addFilter('language_name', languageNameFactory(locale));
};
