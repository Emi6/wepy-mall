'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configStore;

var _redux = require('./npm/redux/lib/index.js');

var _reduxPromise = require('./npm/redux-promise/lib/index.js');

var _reduxPromise2 = _interopRequireDefault(_reduxPromise);

var _reducers = require('./reducers/index.js');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function configStore() {
  return (0, _redux.createStore)(_reducers2.default, (0, _redux.applyMiddleware)(_reduxPromise2.default));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZ1N0b3JlLmpzIl0sIm5hbWVzIjpbImNvbmZpZ1N0b3JlIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFJd0JBLFc7O0FBSnhCOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVlLFNBQVNBLFdBQVQsR0FBdUI7QUFDcEMsU0FBTyw0Q0FBc0IsbURBQXRCLENBQVA7QUFDRCIsImZpbGUiOiJjb25maWdTdG9yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCdcbmltcG9ydCBwcm9taXNlTWlkZGxld2FyZSBmcm9tICdyZWR1eC1wcm9taXNlJ1xuaW1wb3J0IHJlZHVjZXJzIGZyb20gJy4vcmVkdWNlcnMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbmZpZ1N0b3JlKCkge1xuICByZXR1cm4gY3JlYXRlU3RvcmUocmVkdWNlcnMsIGFwcGx5TWlkZGxld2FyZShwcm9taXNlTWlkZGxld2FyZSkpXG59O1xuIl19