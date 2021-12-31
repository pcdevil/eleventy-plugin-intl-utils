'use strict';

function languageNameFactory (locale) {
	const displayName = new Intl.DisplayNames([locale], { type: 'language' });

	return (language) => displayName.of(language);
}

module.exports = languageNameFactory;
