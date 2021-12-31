'use strict';

function shortDateTimeFormatFactory (locale) {
	const dateTimeFormat = new Intl.DateTimeFormat(locale, {
		dateStyle: 'short',
		timeStyle: 'short',
	});

	return (date) => dateTimeFormat.format(new Date(date));
}

module.exports = shortDateTimeFormatFactory;
