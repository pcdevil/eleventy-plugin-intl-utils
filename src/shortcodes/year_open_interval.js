'use strict';

function yearOpenIntervalFactory(locale) {
	const dateTimeFormat = new Intl.DateTimeFormat(locale, {
		year: 'numeric',
	});

	return (startDate) =>
		dateTimeFormat
			.formatRangeToParts(new Date(startDate), new Date())
			.filter(({ source }) => source !== 'endRange')
			.map(({ value }) => value)
			.join('');
}

module.exports = yearOpenIntervalFactory;
