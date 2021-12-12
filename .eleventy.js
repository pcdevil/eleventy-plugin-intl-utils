'use strict';

const languageNameFactory = require('./src/language_name');
const shortDateTimeFormatFactory = require('./src/short_datetime_format');

module.exports = (eleventyConfig, pluginConfig = {}) => {
	const { locale } = pluginConfig;

	eleventyConfig.addFilter('language_name', languageNameFactory(locale));
	eleventyConfig.addFilter('short_datetime_format', shortDateTimeFormatFactory(locale));
};
