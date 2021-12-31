'use strict';

const countryNameFactory = require('./src/filters/country_name');
const languageNameFactory = require('./src/filters/language_name');
const shortDateTimeFormatFactory = require('./src/filters/short_datetime_format');
const yearIntervalFactory = require('./src/shortcodes/year_interval');

module.exports = (eleventyConfig, pluginConfig = {}) => {
	const { locale } = pluginConfig;

	eleventyConfig.addFilter('country_name', countryNameFactory(locale));
	eleventyConfig.addFilter('language_name', languageNameFactory(locale));
	eleventyConfig.addFilter('short_datetime_format', shortDateTimeFormatFactory(locale));

	eleventyConfig.addShortcode('year_interval', yearIntervalFactory(locale));
};
