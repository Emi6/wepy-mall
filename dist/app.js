'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

var _wepyRedux = require('./npm/wepy-redux/lib/index.js');

var _configStore = require('./configStore.js');

var _configStore2 = _interopRequireDefault(_configStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var store = (0, _configStore2.default)();
// set!!
(0, _wepyRedux.setStore)(store);

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/home', 'pages/classify', 'pages/shoppingCart', 'pages/my'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: 'white',
        navigationBarTitleText: '商城',
        navigationBarTextStyle: 'black'
      },
      tabBar: {
        color: '#8a8a8a',
        selectedColor: '#1F9948',
        borderStyle: 'white',
        backgroundColor: '#fff',
        list: [{
          pagePath: 'pages/home',
          iconPath: 'images/icon-home.png',
          selectedIconPath: 'images/icon-home-select.png',
          text: '首页'
        }, {
          pagePath: 'pages/classify',
          iconPath: 'images/icon-classify.png',
          selectedIconPath: 'images/icon-classify-select.png',
          text: '分类'
        }, {
          pagePath: 'pages/shoppingCart',
          iconPath: 'images/icon-shopcart.png',
          selectedIconPath: 'images/icon-shopcart-select.png',
          text: '购物车'
        }, {
          pagePath: 'pages/my',
          iconPath: 'images/icon-my.png',
          selectedIconPath: 'images/icon-my-select.png',
          text: '我的'
        }]
      }
    };
    _this.globalData = {
      userInfo: null
    };

    _this.use('requestfix');
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch() {
      this.testAsync();
    }
  }, {
    key: 'sleep',
    value: function sleep(s) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve('promise resolved');
        }, s * 1000);
      });
    }
  }, {
    key: 'testAsync',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.sleep(3);

              case 2:
                data = _context.sent;

                console.log(data);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function testAsync() {
        return _ref.apply(this, arguments);
      }

      return testAsync;
    }()
  }, {
    key: 'getUserInfo',
    value: function getUserInfo(cb) {
      var that = this;
      if (this.globalData.userInfo) {
        return this.globalData.userInfo;
      }
      _wepy2.default.getUserInfo({
        success: function success(res) {
          that.globalData.userInfo = res.userInfo;
          cb && cb(res.userInfo);
        }
      });
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJzdG9yZSIsImNvbmZpZyIsInBhZ2VzIiwid2luZG93IiwiYmFja2dyb3VuZFRleHRTdHlsZSIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhclRleHRTdHlsZSIsInRhYkJhciIsImNvbG9yIiwic2VsZWN0ZWRDb2xvciIsImJvcmRlclN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwibGlzdCIsInBhZ2VQYXRoIiwiaWNvblBhdGgiLCJzZWxlY3RlZEljb25QYXRoIiwidGV4dCIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsInVzZSIsInRlc3RBc3luYyIsInMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNldFRpbWVvdXQiLCJzbGVlcCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiY2IiLCJ0aGF0IiwiZ2V0VXNlckluZm8iLCJzdWNjZXNzIiwicmVzIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVEsNEJBQWQ7QUFDQTtBQUNBLHlCQUFTQSxLQUFUOzs7OztBQWlERSxzQkFBZTtBQUFBOztBQUFBOztBQUFBLFVBOUNmQyxNQThDZSxHQTlDTjtBQUNQQyxhQUFPLENBQ0wsWUFESyxFQUVMLGdCQUZLLEVBR0wsb0JBSEssRUFJTCxVQUpLLENBREE7QUFPUEMsY0FBUTtBQUNOQyw2QkFBcUIsT0FEZjtBQUVOQyxzQ0FBOEIsT0FGeEI7QUFHTkMsZ0NBQXdCLElBSGxCO0FBSU5DLGdDQUF3QjtBQUpsQixPQVBEO0FBYVBDLGNBQVE7QUFDTkMsZUFBTyxTQUREO0FBRU5DLHVCQUFlLFNBRlQ7QUFHTkMscUJBQWEsT0FIUDtBQUlOQyx5QkFBaUIsTUFKWDtBQUtOQyxjQUFNLENBQUM7QUFDTEMsb0JBQVUsWUFETDtBQUVMQyxvQkFBVSxzQkFGTDtBQUdMQyw0QkFBa0IsNkJBSGI7QUFJTEMsZ0JBQU07QUFKRCxTQUFELEVBS0g7QUFDREgsb0JBQVUsZ0JBRFQ7QUFFREMsb0JBQVUsMEJBRlQ7QUFHREMsNEJBQWtCLGlDQUhqQjtBQUlEQyxnQkFBTTtBQUpMLFNBTEcsRUFVSDtBQUNESCxvQkFBVSxvQkFEVDtBQUVEQyxvQkFBVSwwQkFGVDtBQUdEQyw0QkFBa0IsaUNBSGpCO0FBSURDLGdCQUFNO0FBSkwsU0FWRyxFQWVIO0FBQ0RILG9CQUFVLFVBRFQ7QUFFREMsb0JBQVUsb0JBRlQ7QUFHREMsNEJBQWtCLDJCQUhqQjtBQUlEQyxnQkFBTTtBQUpMLFNBZkc7QUFMQTtBQWJELEtBOENNO0FBQUEsVUFKZkMsVUFJZSxHQUpGO0FBQ1hDLGdCQUFVO0FBREMsS0FJRTs7QUFFYixVQUFLQyxHQUFMLENBQVMsWUFBVDtBQUZhO0FBR2Q7Ozs7K0JBRVU7QUFDVCxXQUFLQyxTQUFMO0FBQ0Q7OzswQkFFTUMsQyxFQUFHO0FBQ1IsYUFBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDQyxtQkFBVyxZQUFNO0FBQ2ZGLGtCQUFRLGtCQUFSO0FBQ0QsU0FGRCxFQUVHRixJQUFJLElBRlA7QUFHRCxPQUpNLENBQVA7QUFLRDs7Ozs7Ozs7Ozs7dUJBR29CLEtBQUtLLEtBQUwsQ0FBVyxDQUFYLEM7OztBQUFiQyxvQjs7QUFDTkMsd0JBQVFDLEdBQVIsQ0FBWUYsSUFBWjs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dDQUdVRyxFLEVBQUk7QUFDZCxVQUFNQyxPQUFPLElBQWI7QUFDQSxVQUFJLEtBQUtkLFVBQUwsQ0FBZ0JDLFFBQXBCLEVBQThCO0FBQzVCLGVBQU8sS0FBS0QsVUFBTCxDQUFnQkMsUUFBdkI7QUFDRDtBQUNELHFCQUFLYyxXQUFMLENBQWlCO0FBQ2ZDLGVBRGUsbUJBQ05DLEdBRE0sRUFDRDtBQUNaSCxlQUFLZCxVQUFMLENBQWdCQyxRQUFoQixHQUEyQmdCLElBQUloQixRQUEvQjtBQUNBWSxnQkFBTUEsR0FBR0ksSUFBSWhCLFFBQVAsQ0FBTjtBQUNEO0FBSmMsT0FBakI7QUFNRDs7OztFQWhGMEIsZUFBS2lCLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xuaW1wb3J0IHsgc2V0U3RvcmUgfSBmcm9tICd3ZXB5LXJlZHV4J1xuaW1wb3J0IGNvbmZpZ1N0b3JlIGZyb20gJy4vY29uZmlnU3RvcmUnXG5cbmNvbnN0IHN0b3JlID0gY29uZmlnU3RvcmUoKVxuLy8gc2V0ISFcbnNldFN0b3JlKHN0b3JlKVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcbiAgY29uZmlnID0ge1xuICAgIHBhZ2VzOiBbXG4gICAgICAncGFnZXMvaG9tZScsXG4gICAgICAncGFnZXMvY2xhc3NpZnknLFxuICAgICAgJ3BhZ2VzL3Nob3BwaW5nQ2FydCcsXG4gICAgICAncGFnZXMvbXknXG4gICAgXSxcbiAgICB3aW5kb3c6IHtcbiAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdsaWdodCcsXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WVhuWfjicsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnYmxhY2snXG4gICAgfSxcbiAgICB0YWJCYXI6IHtcbiAgICAgIGNvbG9yOiAnIzhhOGE4YScsXG4gICAgICBzZWxlY3RlZENvbG9yOiAnIzFGOTk0OCcsXG4gICAgICBib3JkZXJTdHlsZTogJ3doaXRlJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgICAgbGlzdDogW3tcbiAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9ob21lJyxcbiAgICAgICAgaWNvblBhdGg6ICdpbWFnZXMvaWNvbi1ob21lLnBuZycsXG4gICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICdpbWFnZXMvaWNvbi1ob21lLXNlbGVjdC5wbmcnLFxuICAgICAgICB0ZXh0OiAn6aaW6aG1J1xuICAgICAgfSwge1xuICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL2NsYXNzaWZ5JyxcbiAgICAgICAgaWNvblBhdGg6ICdpbWFnZXMvaWNvbi1jbGFzc2lmeS5wbmcnLFxuICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnaW1hZ2VzL2ljb24tY2xhc3NpZnktc2VsZWN0LnBuZycsXG4gICAgICAgIHRleHQ6ICfliIbnsbsnXG4gICAgICB9LCB7XG4gICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvc2hvcHBpbmdDYXJ0JyxcbiAgICAgICAgaWNvblBhdGg6ICdpbWFnZXMvaWNvbi1zaG9wY2FydC5wbmcnLFxuICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnaW1hZ2VzL2ljb24tc2hvcGNhcnQtc2VsZWN0LnBuZycsXG4gICAgICAgIHRleHQ6ICfotK3nianovaYnXG4gICAgICB9LCB7XG4gICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvbXknLFxuICAgICAgICBpY29uUGF0aDogJ2ltYWdlcy9pY29uLW15LnBuZycsXG4gICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICdpbWFnZXMvaWNvbi1teS1zZWxlY3QucG5nJyxcbiAgICAgICAgdGV4dDogJ+aIkeeahCdcbiAgICAgIH1dXG4gICAgfVxuICB9XG5cbiAgZ2xvYmFsRGF0YSA9IHtcbiAgICB1c2VySW5mbzogbnVsbFxuICB9XG5cbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnVzZSgncmVxdWVzdGZpeCcpXG4gIH1cblxuICBvbkxhdW5jaCgpIHtcbiAgICB0aGlzLnRlc3RBc3luYygpXG4gIH1cblxuICBzbGVlcCAocykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcmVzb2x2ZSgncHJvbWlzZSByZXNvbHZlZCcpXG4gICAgICB9LCBzICogMTAwMClcbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgdGVzdEFzeW5jICgpIHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5zbGVlcCgzKVxuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gIH1cblxuICBnZXRVc2VySW5mbyhjYikge1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzXG4gICAgaWYgKHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbykge1xuICAgICAgcmV0dXJuIHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mb1xuICAgIH1cbiAgICB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICB0aGF0Lmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cbiAgICAgICAgY2IgJiYgY2IocmVzLnVzZXJJbmZvKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==