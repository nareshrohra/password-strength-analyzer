System.register(['./char-stats', 'vaow', '../../locale'], function (_export) {
  'use strict';

  var CharStats, vaow, Locale, LowerCaseAlphabetsStatsCalculator;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_charStats) {
      CharStats = _charStats.CharStats;
    }, function (_vaow) {
      vaow = _vaow['default'];
    }, function (_locale) {
      Locale = _locale.Locale;
    }],
    execute: function () {
      LowerCaseAlphabetsStatsCalculator = (function () {
        function LowerCaseAlphabetsStatsCalculator() {
          _classCallCheck(this, LowerCaseAlphabetsStatsCalculator);

          this.pattern = new RegExp(/[abcdefghijklmnopqrstuvwxyz]/g);
        }

        _createClass(LowerCaseAlphabetsStatsCalculator, [{
          key: 'getStats',
          value: function getStats(text) {
            if (window.vaow.util.Validator.isDefinedAndNotNull(text)) {
              var matches = text.match(this.pattern);
              var count = matches !== null ? matches.length : 0;
              return new CharStats(Locale.LowerCaseAlphabetStatsName, count, LowerCaseAlphabetsStatsCalculator.CharDepth);
            } else {
              throw Locale.Error.InvalidArgText;
            }
          }
        }]);

        return LowerCaseAlphabetsStatsCalculator;
      })();

      _export('LowerCaseAlphabetsStatsCalculator', LowerCaseAlphabetsStatsCalculator);

      LowerCaseAlphabetsStatsCalculator.CharDepth = 26;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2NoYXItc3RhdHMvbG93ZXItY2FzZS1hbHBoYWJldHMtc3RhdHMtY2FsY3VsYXRvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7K0JBWWEsaUNBQWlDOzs7Ozs7Ozs2QkFYNUMsU0FBUzs7Ozt1QkFPVCxNQUFNOzs7QUFJSyx1Q0FBaUM7aUJBQWpDLGlDQUFpQztnQ0FBakMsaUNBQWlDOztlQUM1QyxPQUFPLEdBQUcsSUFBSSxNQUFNLENBQUMsK0JBQStCLENBQUM7OztxQkFEMUMsaUNBQWlDOztpQkFHcEMsa0JBQUMsSUFBSSxFQUFFO0FBQ2IsZ0JBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ3hELGtCQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN2QyxrQkFBSSxLQUFLLEdBQUcsT0FBTyxLQUFLLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztBQUNsRCxxQkFBTyxJQUFJLFNBQVMsQ0FBQyxNQUFNLENBQUMsMEJBQTBCLEVBQUUsS0FBSyxFQUFFLGlDQUFpQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQzdHLE1BQU07QUFDTCxvQkFBTSxNQUFNLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQzthQUNuQztXQUNGOzs7ZUFYVSxpQ0FBaUM7Ozs7O0FBYzlDLHVDQUFpQyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMiLCJmaWxlIjoic2VydmljZXMvY2hhci1zdGF0cy9sb3dlci1jYXNlLWFscGhhYmV0cy1zdGF0cy1jYWxjdWxhdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFyU3RhdHNcclxufVxyXG5mcm9tICcuL2NoYXItc3RhdHMnO1xyXG5cclxuaW1wb3J0IHZhb3cgZnJvbSAndmFvdyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIExvY2FsZVxyXG59XHJcbmZyb20gJy4uLy4uL2xvY2FsZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgTG93ZXJDYXNlQWxwaGFiZXRzU3RhdHNDYWxjdWxhdG9yIHtcclxuICBwYXR0ZXJuID0gbmV3IFJlZ0V4cCgvW2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6XS9nKTtcclxuXHJcbiAgZ2V0U3RhdHModGV4dCkge1xyXG4gICAgaWYgKHdpbmRvdy52YW93LnV0aWwuVmFsaWRhdG9yLmlzRGVmaW5lZEFuZE5vdE51bGwodGV4dCkpIHtcclxuICAgICAgbGV0IG1hdGNoZXMgPSB0ZXh0Lm1hdGNoKHRoaXMucGF0dGVybik7XHJcbiAgICAgIGxldCBjb3VudCA9IG1hdGNoZXMgIT09IG51bGwgPyBtYXRjaGVzLmxlbmd0aCA6IDA7XHJcbiAgICAgIHJldHVybiBuZXcgQ2hhclN0YXRzKExvY2FsZS5Mb3dlckNhc2VBbHBoYWJldFN0YXRzTmFtZSwgY291bnQsIExvd2VyQ2FzZUFscGhhYmV0c1N0YXRzQ2FsY3VsYXRvci5DaGFyRGVwdGgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgTG9jYWxlLkVycm9yLkludmFsaWRBcmdUZXh0O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuTG93ZXJDYXNlQWxwaGFiZXRzU3RhdHNDYWxjdWxhdG9yLkNoYXJEZXB0aCA9IDI2O1xyXG4iXX0=
