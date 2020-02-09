## 2020-01-30 Initial release

## 2020-01-31 First update

1. Added babel.useStrict option, forced to false when template.variable is not set;
2. Add schema validation processing user options and add corresponding prompt information;

## 2020-02-09 fix bug, no longer use query

1. Remove local babel dependencies and rely on users to install babel dependencies
2. lodash is too dependent, use skyui-utils-collection instead
3. query parsing query field error, webpack5 may abandon the query field and will not add query option parsing function in the foreseeable future
