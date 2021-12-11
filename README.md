# eleventy-plugin-intl-utils
A set of internationalization utils for [Eleventy](https://www.11ty.dev/).

## Motivation
It's super fast to create a static website with **Eleventy** and with the help of [`eleventy-plugin-i18n`](https://www.npmjs.com/package/eleventy-plugin-i18n) localization can be done with ease too.

However it only gives solution for static data and dynamic data still needs treatment during layout rendering. This plugin aims to help with a set of [filters](https://www.11ty.dev/docs/filters/).

The implementations of the filters are mostly wrappers around the [ECMAScript Internationalization API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl) with a little _bit of sugar_.

## Usage
This guide corresponds to [Eleventy documentation](https://www.11ty.dev/docs/plugins/#add-the-plugin-to-eleventy-in-your-config-file):

1. Install the package
    ```bash
    npm install --save @pcdevil/eleventy-plugin-intl-utils
    ```

2. Add to your config file
    ```javascript
    // file: .eleventy.js
    const intlUtils = require('@pcdevil/eleventy-plugin-intl-utils');

    module.exports = function (eleventyConfig) {
        // ...

        const intlUtilConfig = {
            locale: 'en-GB',
        };
        eleventyConfig.addPlugin(intlUtils, intlUtilConfig);
    };
    ```

## Configuration object
A general configuration object is needed to pass via Eleventy config when the plugin is initiated. This sections lists the available configuration properties.

### `locale`
This property affects the output language of the filters. See [`locales` argument section on Intl page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument) for more info.

- **Type**: String
- **Example values**: `"en-GB"`, `"hu"`

## License
Available under the [MIT license](LICENSE.md).
