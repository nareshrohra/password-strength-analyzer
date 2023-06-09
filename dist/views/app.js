System.register(['foundation', 'foundation/css/foundation.css!'], function (_export) {
  'use strict';

  var App;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_foundation) {}, function (_foundationCssFoundationCss) {}],
    execute: function () {
      App = (function () {
        function App() {
          _classCallCheck(this, App);
        }

        _createClass(App, [{
          key: 'configureRouter',
          value: function configureRouter(config, router) {
            config.title = 'Password Strength Analyzer';
            config.map([{ route: ['', 'analysis'], name: 'analysis', moduleId: './analysis/index', nav: false, title: '' }]);
            this.router = router;
          }
        }]);

        return App;
      })();

      _export('App', App);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFHYSxHQUFHOzs7Ozs7Ozs7QUFBSCxTQUFHO2lCQUFILEdBQUc7Z0NBQUgsR0FBRzs7O3FCQUFILEdBQUc7O2lCQUNDLHlCQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUU7QUFDOUIsa0JBQU0sQ0FBQyxLQUFLLEdBQUcsNEJBQTRCLENBQUM7QUFDNUMsa0JBQU0sQ0FBQyxHQUFHLENBQUMsQ0FDVCxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBQyxFQUFFLEVBQUUsQ0FDbEcsQ0FBQyxDQUFDO0FBQ0gsZ0JBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1dBQ3RCOzs7ZUFQVSxHQUFHIiwiZmlsZSI6InZpZXdzL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnZm91bmRhdGlvbic7XHJcbmltcG9ydCAnZm91bmRhdGlvbi9jc3MvZm91bmRhdGlvbi5jc3MhJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHAge1xyXG4gIGNvbmZpZ3VyZVJvdXRlcihjb25maWcsIHJvdXRlcikge1xyXG4gICAgY29uZmlnLnRpdGxlID0gJ1Bhc3N3b3JkIFN0cmVuZ3RoIEFuYWx5emVyJztcclxuICAgIGNvbmZpZy5tYXAoW1xyXG4gICAgICB7IHJvdXRlOiBbJycsICdhbmFseXNpcyddLCBuYW1lOiAnYW5hbHlzaXMnLCBtb2R1bGVJZDogJy4vYW5hbHlzaXMvaW5kZXgnLCBuYXY6IGZhbHNlLCB0aXRsZTonJyB9XHJcbiAgICBdKTtcclxuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xyXG4gIH1cclxufVxyXG4iXX0=
