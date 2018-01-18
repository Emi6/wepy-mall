'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reduxActions = require('./../npm/redux-actions/lib/index.js');

var _userReducer = require('./userReducer.js');

var _userReducer2 = _interopRequireDefault(_userReducer);

var _lodash = require('./../npm/lodash/lodash.js');

var _lodash2 = _interopRequireDefault(_lodash);

var _CONST = require('./../core/constValues.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var has = _extends({}, _userReducer2.default);

_lodash2.default.each(has, function (item, index) {
  has[index] = {
    next: item,
    throw: function _throw(state, _ref) {
      var payload = _ref.payload;
      return _extends({}, state, { Toast: payload.reason || payload.message });
    }
  };
});

exports.default = (0, _reduxActions.handleActions)(has, _CONST.STATE);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImhhcyIsImVhY2giLCJpdGVtIiwiaW5kZXgiLCJuZXh0IiwidGhyb3ciLCJzdGF0ZSIsInBheWxvYWQiLCJUb2FzdCIsInJlYXNvbiIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0EsSUFBTUEseUNBQU47O0FBRUEsaUJBQUVDLElBQUYsQ0FBT0QsR0FBUCxFQUFZLFVBQUNFLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUMzQkgsTUFBSUcsS0FBSixJQUFhO0FBQ1hDLFVBQU1GLElBREs7QUFFWEcsV0FBTyxnQkFBQ0MsS0FBRDtBQUFBLFVBQVNDLE9BQVQsUUFBU0EsT0FBVDtBQUFBLDBCQUNBRCxLQURBLElBQ09FLE9BQU9ELFFBQVFFLE1BQVIsSUFBa0JGLFFBQVFHLE9BRHhDO0FBQUE7QUFGSSxHQUFiO0FBS0QsQ0FORDs7a0JBUWUsaUNBQWNWLEdBQWQsZSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhhbmRsZUFjdGlvbnMgfSBmcm9tICdyZWR1eC1hY3Rpb25zJ1xuaW1wb3J0IHVzZXJSZWR1Y2VyIGZyb20gJy4vdXNlclJlZHVjZXInXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5cbmltcG9ydCB7U1RBVEV9IGZyb20gJ0NPTlNUJ1xuY29uc3QgaGFzID0gey4uLnVzZXJSZWR1Y2VyfVxuXG5fLmVhY2goaGFzLCAoaXRlbSwgaW5kZXgpID0+IHtcbiAgaGFzW2luZGV4XSA9IHtcbiAgICBuZXh0OiBpdGVtLFxuICAgIHRocm93OiAoc3RhdGUsIHtwYXlsb2FkfSkgPT5cbiAgICAgICh7Li4uc3RhdGUsIFRvYXN0OiBwYXlsb2FkLnJlYXNvbiB8fCBwYXlsb2FkLm1lc3NhZ2V9KVxuICB9XG59KVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVBY3Rpb25zKGhhcywgU1RBVEUpXG4iXX0=