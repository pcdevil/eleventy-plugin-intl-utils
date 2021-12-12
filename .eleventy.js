'use strict';

const countryNameFactory = require('./src/country_name');
const languageNameFactory = require('./src/language_name');
const shortDateTimeFormatFactory = require('./src/short_datetime_format');
const yearIntervalFactory = require('./src/year_interval');

module.exports = (eleventyConfig, pluginConfig = {}) => {
	const { locale } = pluginConfig;

	eleventyConfig.addFilter('country_name', countryNameFactory(locale));
	eleventyConfig.addFilter('language_name', languageNameFactory(locale));
	eleventyConfig.addFilter('short_datetime_format', shortDateTimeFormatFactory(locale));
	eleventyConfig.addFilter('year_interval', yearIntervalFactory(locale));
};
