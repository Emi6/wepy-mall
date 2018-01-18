'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _CONST = require('./../core/constValues.js');

var has = {};

has[_CONST.ACTION.UPDATEUSER] = function (state, _ref) {
  var payload = _ref.payload;
  return _extends({}, state, { User: _extends({}, state.User, payload) });
};

exports.default = has;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJSZWR1Y2VyLmpzIl0sIm5hbWVzIjpbImhhcyIsIlVQREFURVVTRVIiLCJzdGF0ZSIsInBheWxvYWQiLCJVc2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUNBLElBQU1BLE1BQU0sRUFBWjs7QUFFQUEsSUFBSSxjQUFPQyxVQUFYLElBQ0UsVUFBQ0MsS0FBRDtBQUFBLE1BQVNDLE9BQVQsUUFBU0EsT0FBVDtBQUFBLHNCQUEyQkQsS0FBM0IsSUFBa0NFLG1CQUFVRixNQUFNRSxJQUFoQixFQUF5QkQsT0FBekIsQ0FBbEM7QUFBQSxDQURGOztrQkFHZUgsRyIsImZpbGUiOiJ1c2VyUmVkdWNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QUNUSU9OfSBmcm9tICdDT05TVCdcbmNvbnN0IGhhcyA9IHt9XG5cbmhhc1tBQ1RJT04uVVBEQVRFVVNFUl0gPVxuICAoc3RhdGUsIHtwYXlsb2FkfSkgPT4gKHsuLi5zdGF0ZSwgVXNlcjogey4uLnN0YXRlLlVzZXIsIC4uLnBheWxvYWR9fSk7XG5cbmV4cG9ydCBkZWZhdWx0IGhhc1xuIl19