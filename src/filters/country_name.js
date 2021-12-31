'use strict';

function countryNameFactory (locale) {
	const displayName = new Intl.DisplayNames([locale], { type: 'region' });

	return (countryCode) => displayName.of(countryCode);
}

module.exports = countryNameFactory;
