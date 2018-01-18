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
      navigationBarTitleText: '购物车'
    }, _this.components = {}, _this.data = {
      userInfo: {},
      rightType: 'text' // text,icon
    }, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_default, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return _default;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(_default , 'pages/shoppingCart'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nQ2FydC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImRhdGEiLCJ1c2VySW5mbyIsInJpZ2h0VHlwZSIsIm1ldGhvZHMiLCJldmVudHMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7MExBR0VBLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWEsRSxRQUliQyxJLEdBQU87QUFDTEMsZ0JBQVUsRUFETDtBQUVMQyxpQkFBVyxNQUZOLENBRVk7QUFGWixLLFFBS1BDLE8sR0FBVSxFLFFBSVZDLE0sR0FBUyxFOzs7Ozs2QkFJQSxDQUVSOzs7O0VBdkIwQixlQUFLQyxJIiwiZmlsZSI6InNob3BwaW5nQ2FydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAvLyAgaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3dlcHktcmVkdXgnXG5cbiAgLy8gIEBjb25uZWN0KHtcbiAgLy8gICAgbnVtKHN0YXRlKSB7XG4gIC8vICAgICAgcmV0dXJuIHN0YXRlLmNvdW50ZXIubnVtXG4gIC8vICAgIH1cbiAgLy8gIH0sIHtcbiAgLy8gICAgYWRkTnVtOiBudW0gPT4ge31cbiAgLy8gIH0pXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfotK3nianovaYnXG4gICAgfVxuICAgIGNvbXBvbmVudHMgPSB7XG5cbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgdXNlckluZm86IHt9LFxuICAgICAgcmlnaHRUeXBlOiAndGV4dCcvLyB0ZXh0LGljb25cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuXG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuXG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuXG4gICAgfVxuICB9XG4iXX0=