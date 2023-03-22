'use strict';

function yearIntervalFactory(locale) {
	const dateTimeFormat = new Intl.DateTimeFormat(locale, {
		year: 'numeric',
	});

	return (startDate, endDate = new Date()) => dateTimeFormat.formatRange(new Date(startDate), new Date(endDate));
}

module.exports = yearIntervalFactory;
