'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyRedux = require('./../npm/wepy-redux/lib/index.js');

var _recommendVertical = require('./../components/recommendVertical.js');

var _recommendVertical2 = _interopRequireDefault(_recommendVertical);

var _recommendHorizontal = require('./../components/recommendHorizontal.js');

var _recommendHorizontal2 = _interopRequireDefault(_recommendHorizontal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = (_dec = (0, _wepyRedux.connect)({
  accessToken: function accessToken(state) {
    return state.accessToken;
  }
}, {}), _dec(_class = function (_wepy$page) {
  _inherits(_default, _wepy$page);

  function _default() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _default.__proto__ || Object.getPrototypeOf(_default)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '首页'
    }, _this.$repeat = {}, _this.$props = { "recommendVertical": { "v-bind:title.sync": "recommendTitle", "v-bind:goods.once": "recommendData" }, "recommendHorizontal": { "xmlns:v-bind": "", "v-bind:title.sync": "recommendTitle", "v-bind:goods.once": "recommendData" } }, _this.$events = {}, _this.components = {
      recommendVertical: _recommendVertical2.default,
      recommendHorizontal: _recommendHorizontal2.default
    }, _this.data = {
      banners: [1, 2, 3],
      classIndexs: [0, 1],
      classifies: [[{ name: '分类1' }, { name: '分类2' }, { name: '分类3' }, { name: '分类4' }, { name: '分类5' }, { name: '分类6' }, { name: '分类7' }, { name: '分类8' }, { name: '分类9' }, { name: '分类10' }], [{ name: '分类11' }, { name: '分类12' }, { name: '分类13' }, { name: '分类14' }, { name: '分类15' }, { name: '分类16' }, { name: '分类17' }, { name: '分类18' }, { name: '分类19' }]],
      recommendTitle: '新品上架',
      recommendData: [1, 2, 3, 4]
    }, _this.methods = {
      handleBanner: function handleBanner(index) {
        console.log(index);
      },
      handleClassify: function handleClassify(name) {
        console.log(name);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_default, [{
    key: 'onLoad',
    value: function onLoad() {
      var state = (0, _wepyRedux.getStore)().getState();
      console.log(state);
    }
  }]);

  return _default;
}(_wepy2.default.page)) || _class);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(_default , 'pages/home'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiYWNjZXNzVG9rZW4iLCJzdGF0ZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJyZWNvbW1lbmRWZXJ0aWNhbCIsInJlY29tbWVuZEhvcml6b250YWwiLCJkYXRhIiwiYmFubmVycyIsImNsYXNzSW5kZXhzIiwiY2xhc3NpZmllcyIsIm5hbWUiLCJyZWNvbW1lbmRUaXRsZSIsInJlY29tbWVuZERhdGEiLCJtZXRob2RzIiwiaGFuZGxlQmFubmVyIiwiaW5kZXgiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2xhc3NpZnkiLCJnZXRTdGF0ZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7dUJBRUMsd0JBQVE7QUFDUEEsYUFETyx1QkFDS0MsS0FETCxFQUNZO0FBQ2pCLFdBQU9BLE1BQU1ELFdBQWI7QUFDRDtBQUhNLENBQVIsRUFJRSxFQUpGLEM7Ozs7Ozs7Ozs7Ozs7OzBMQVNDRSxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMscUJBQW9CLEVBQUMscUJBQW9CLGdCQUFyQixFQUFzQyxxQkFBb0IsZUFBMUQsRUFBckIsRUFBZ0csdUJBQXNCLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIscUJBQW9CLGdCQUF2QyxFQUF3RCxxQkFBb0IsZUFBNUUsRUFBdEgsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkMsb0RBRFE7QUFFUkM7QUFGUSxLLFFBS1ZDLEksR0FBTztBQUNMQyxlQUFTLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBREo7QUFFTEMsbUJBQWEsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUZSO0FBR0xDLGtCQUFZLENBQ1YsQ0FBQyxFQUFDQyxNQUFNLEtBQVAsRUFBRCxFQUFnQixFQUFDQSxNQUFNLEtBQVAsRUFBaEIsRUFBK0IsRUFBQ0EsTUFBTSxLQUFQLEVBQS9CLEVBQThDLEVBQUNBLE1BQU0sS0FBUCxFQUE5QyxFQUE2RCxFQUFDQSxNQUFNLEtBQVAsRUFBN0QsRUFDQSxFQUFDQSxNQUFNLEtBQVAsRUFEQSxFQUNlLEVBQUNBLE1BQU0sS0FBUCxFQURmLEVBQzhCLEVBQUNBLE1BQU0sS0FBUCxFQUQ5QixFQUM2QyxFQUFDQSxNQUFNLEtBQVAsRUFEN0MsRUFDNEQsRUFBQ0EsTUFBTSxNQUFQLEVBRDVELENBRFUsRUFHVixDQUFDLEVBQUNBLE1BQU0sTUFBUCxFQUFELEVBQWlCLEVBQUNBLE1BQU0sTUFBUCxFQUFqQixFQUFpQyxFQUFDQSxNQUFNLE1BQVAsRUFBakMsRUFBaUQsRUFBQ0EsTUFBTSxNQUFQLEVBQWpELEVBQWlFLEVBQUNBLE1BQU0sTUFBUCxFQUFqRSxFQUNFLEVBQUNBLE1BQU0sTUFBUCxFQURGLEVBQ2tCLEVBQUNBLE1BQU0sTUFBUCxFQURsQixFQUNrQyxFQUFDQSxNQUFNLE1BQVAsRUFEbEMsRUFDa0QsRUFBQ0EsTUFBTSxNQUFQLEVBRGxELENBSFUsQ0FIUDtBQVNMQyxzQkFBZ0IsTUFUWDtBQVVMQyxxQkFBZSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVY7QUFWVixLLFFBYVBDLE8sR0FBVTtBQUNSQyxrQkFEUSx3QkFDS0MsS0FETCxFQUNZO0FBQ2xCQyxnQkFBUUMsR0FBUixDQUFZRixLQUFaO0FBQ0QsT0FITztBQUlSRyxvQkFKUSwwQkFJT1IsSUFKUCxFQUlhO0FBQ25CTSxnQkFBUUMsR0FBUixDQUFZUCxJQUFaO0FBQ0Q7QUFOTyxLOzs7Ozs2QkFTRDtBQUNQLFVBQU1iLFFBQVEsMkJBQVdzQixRQUFYLEVBQWQ7QUFDQUgsY0FBUUMsR0FBUixDQUFZcEIsS0FBWjtBQUNEOzs7O0VBdEMwQixlQUFLdUIsSSIsImZpbGUiOiJob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCB7IGdldFN0b3JlLCBjb25uZWN0IH0gZnJvbSAnd2VweS1yZWR1eCdcbiAgaW1wb3J0IFJlY29tbWVuZFZlcnRpY2FsIGZyb20gJy4uL2NvbXBvbmVudHMvcmVjb21tZW5kVmVydGljYWwnXG4gIGltcG9ydCBSZWNvbW1lbmRIb3Jpem9udGFsIGZyb20gJy4uL2NvbXBvbmVudHMvcmVjb21tZW5kSG9yaXpvbnRhbCdcblxuICBAY29ubmVjdCh7XG4gICAgYWNjZXNzVG9rZW4oc3RhdGUpIHtcbiAgICAgIHJldHVybiBzdGF0ZS5hY2Nlc3NUb2tlblxuICAgIH1cbiAgfSwge1xuXG4gIH0pXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfpppbpobUnXG4gICAgfVxuXG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInJlY29tbWVuZFZlcnRpY2FsXCI6e1widi1iaW5kOnRpdGxlLnN5bmNcIjpcInJlY29tbWVuZFRpdGxlXCIsXCJ2LWJpbmQ6Z29vZHMub25jZVwiOlwicmVjb21tZW5kRGF0YVwifSxcInJlY29tbWVuZEhvcml6b250YWxcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnRpdGxlLnN5bmNcIjpcInJlY29tbWVuZFRpdGxlXCIsXCJ2LWJpbmQ6Z29vZHMub25jZVwiOlwicmVjb21tZW5kRGF0YVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICByZWNvbW1lbmRWZXJ0aWNhbDogUmVjb21tZW5kVmVydGljYWwsXG4gICAgICByZWNvbW1lbmRIb3Jpem9udGFsOiBSZWNvbW1lbmRIb3Jpem9udGFsXG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIGJhbm5lcnM6IFsxLCAyLCAzXSxcbiAgICAgIGNsYXNzSW5kZXhzOiBbMCwgMV0sXG4gICAgICBjbGFzc2lmaWVzOiBbXG4gICAgICAgIFt7bmFtZTogJ+WIhuexuzEnfSwge25hbWU6ICfliIbnsbsyJ30sIHtuYW1lOiAn5YiG57G7Myd9LCB7bmFtZTogJ+WIhuexuzQnfSwge25hbWU6ICfliIbnsbs1J30sXG4gICAgICAgIHtuYW1lOiAn5YiG57G7Nid9LCB7bmFtZTogJ+WIhuexuzcnfSwge25hbWU6ICfliIbnsbs4J30sIHtuYW1lOiAn5YiG57G7OSd9LCB7bmFtZTogJ+WIhuexuzEwJ31dLFxuICAgICAgICBbe25hbWU6ICfliIbnsbsxMSd9LCB7bmFtZTogJ+WIhuexuzEyJ30sIHtuYW1lOiAn5YiG57G7MTMnfSwge25hbWU6ICfliIbnsbsxNCd9LCB7bmFtZTogJ+WIhuexuzE1J30sXG4gICAgICAgICAge25hbWU6ICfliIbnsbsxNid9LCB7bmFtZTogJ+WIhuexuzE3J30sIHtuYW1lOiAn5YiG57G7MTgnfSwge25hbWU6ICfliIbnsbsxOSd9XVxuICAgICAgXSxcbiAgICAgIHJlY29tbWVuZFRpdGxlOiAn5paw5ZOB5LiK5p62JyxcbiAgICAgIHJlY29tbWVuZERhdGE6IFsxLCAyLCAzLCA0XVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBoYW5kbGVCYW5uZXIoaW5kZXgpIHtcbiAgICAgICAgY29uc29sZS5sb2coaW5kZXgpXG4gICAgICB9LFxuICAgICAgaGFuZGxlQ2xhc3NpZnkobmFtZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhuYW1lKVxuICAgICAgfVxuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICAgIGNvbnN0IHN0YXRlID0gZ2V0U3RvcmUoKS5nZXRTdGF0ZSgpXG4gICAgICBjb25zb2xlLmxvZyhzdGF0ZSlcbiAgICB9XG4gIH1cbiJdfQ==