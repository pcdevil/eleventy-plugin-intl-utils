'use strict';

const countryNameFactory = require('./filters/country_name');
const languageNameFactory = require('./filters/language_name');
const shortDateTimeFormatFactory = require('./filters/short_datetime_format');
const yearIntervalFactory = require('./shortcodes/year_interval');
const yearOpenIntervalFactory = require('./shortcodes/year_open_interval');

module.exports = (eleventyConfig, pluginConfig = {}) => {
	const { locale } = pluginConfig;

	eleventyConfig.addFilter('country_name', countryNameFactory(locale));
	eleventyConfig.addFilter('language_name', languageNameFactory(locale));
	eleventyConfig.addFilter('short_datetime_format', shortDateTimeFormatFactory(locale));

	eleventyConfig.addShortcode('year_interval', yearIntervalFactory(locale));
	eleventyConfig.addShortcode('year_open_interval', yearOpenIntervalFactory(locale));
};
