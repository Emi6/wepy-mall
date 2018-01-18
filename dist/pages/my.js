'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//  import { connect } from 'wepy-redux'

//  @connect({
//    num(state) {
//      return state.counter.num
//    }
//  }, {
//    addNum: num => {}
//  })

var _default = function (_wepy$page) {
  _inherits(_default, _wepy$page);

  function _default() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _default.__proto__ || Object.getPrototypeOf(_default)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '我的'
    }, _this.components = {}, _this.data = {
      userInfo: {},
      rightType: 'text' // text,icon
    }, _this.methods = {
      navigateTo: function navigateTo(type) {
        switch (type) {
          case 'editUserInfo':
            break;
          case 'order':
            break;
          case 'coupon':
            break;
          case 'memCard':
            break;
          case 'collection':
            break;
          case 'address':
            break;
          default:
            console.log('can not recognition the type');
            break;
        }
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_default, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      this.$parent.getUserInfo(function (userInfo) {
        if (userInfo) {
          self.userInfo = userInfo;
          console.log(userInfo);
          self.$apply();
        }
      });
    }
  }]);

  return _default;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(_default , 'pages/my'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LmpzIl0sIm5hbWVzIjpbImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZGF0YSIsInVzZXJJbmZvIiwicmlnaHRUeXBlIiwibWV0aG9kcyIsIm5hdmlnYXRlVG8iLCJ0eXBlIiwiY29uc29sZSIsImxvZyIsImV2ZW50cyIsInNlbGYiLCIkcGFyZW50IiwiZ2V0VXNlckluZm8iLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7MExBR0lBLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxVLEdBQWEsRSxRQUliQyxJLEdBQU87QUFDTEMsZ0JBQVUsRUFETDtBQUVMQyxpQkFBVyxNQUZOLENBRVk7QUFGWixLLFFBS1BDLE8sR0FBVTtBQUNSQyxnQkFEUSxzQkFDR0MsSUFESCxFQUNTO0FBQ2YsZ0JBQVFBLElBQVI7QUFDRSxlQUFLLGNBQUw7QUFDRTtBQUNGLGVBQUssT0FBTDtBQUNFO0FBQ0YsZUFBSyxRQUFMO0FBQ0U7QUFDRixlQUFLLFNBQUw7QUFDRTtBQUNGLGVBQUssWUFBTDtBQUNFO0FBQ0YsZUFBSyxTQUFMO0FBQ0U7QUFDRjtBQUNFQyxvQkFBUUMsR0FBUixDQUFZLDhCQUFaO0FBQ0E7QUFmSjtBQWlCRDtBQW5CTyxLLFFBc0JWQyxNLEdBQVMsRTs7Ozs7NkJBSUE7QUFDUCxVQUFJQyxPQUFPLElBQVg7QUFDQSxXQUFLQyxPQUFMLENBQWFDLFdBQWIsQ0FBeUIsVUFBVVYsUUFBVixFQUFvQjtBQUMzQyxZQUFJQSxRQUFKLEVBQWM7QUFDWlEsZUFBS1IsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQUssa0JBQVFDLEdBQVIsQ0FBWU4sUUFBWjtBQUNBUSxlQUFLRyxNQUFMO0FBQ0Q7QUFDRixPQU5EO0FBT0Q7Ozs7RUFqRDBCLGVBQUtDLEkiLCJmaWxlIjoibXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbi8vICBpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnd2VweS1yZWR1eCdcblxuLy8gIEBjb25uZWN0KHtcbi8vICAgIG51bShzdGF0ZSkge1xuLy8gICAgICByZXR1cm4gc3RhdGUuY291bnRlci5udW1cbi8vICAgIH1cbi8vICB9LCB7XG4vLyAgICBhZGROdW06IG51bSA9PiB7fVxuLy8gIH0pXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiJHnmoQnXG4gICAgfVxuXG4gICAgY29tcG9uZW50cyA9IHtcblxuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICB1c2VySW5mbzoge30sXG4gICAgICByaWdodFR5cGU6ICd0ZXh0Jy8vIHRleHQsaWNvblxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBuYXZpZ2F0ZVRvKHR5cGUpIHtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSAnZWRpdFVzZXJJbmZvJzpcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgY2FzZSAnb3JkZXInOlxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICBjYXNlICdjb3Vwb24nOlxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICBjYXNlICdtZW1DYXJkJzpcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgY2FzZSAnY29sbGVjdGlvbic6XG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIGNhc2UgJ2FkZHJlc3MnOlxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NhbiBub3QgcmVjb2duaXRpb24gdGhlIHR5cGUnKVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcblxuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgdGhpcy4kcGFyZW50LmdldFVzZXJJbmZvKGZ1bmN0aW9uICh1c2VySW5mbykge1xuICAgICAgICBpZiAodXNlckluZm8pIHtcbiAgICAgICAgICBzZWxmLnVzZXJJbmZvID0gdXNlckluZm9cbiAgICAgICAgICBjb25zb2xlLmxvZyh1c2VySW5mbylcbiAgICAgICAgICBzZWxmLiRhcHBseSgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG4iXX0=