System.register(['./char-stats', 'vaow', '../../locale'], function (_export) {
  'use strict';

  var CharStats, vaow, Locale, NumbersStatsCalculator;

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
      NumbersStatsCalculator = (function () {
        function NumbersStatsCalculator() {
          _classCallCheck(this, NumbersStatsCalculator);

          this.pattern = new RegExp(/[1234567890]/g);
        }

        _createClass(NumbersStatsCalculator, [{
          key: 'getStats',
          value: function getStats(text) {
            if (window.vaow.util.Validator.isDefinedAndNotNull(text)) {
              var matches = text.match(this.pattern);
              var count = matches !== null ? matches.length : 0;
              return new CharStats(Locale.NumbersStatsName, count, NumbersStatsCalculator.CharDepth);
            } else {
              throw Locale.Error.InvalidArgText;
            }
          }
        }]);

        return NumbersStatsCalculator;
      })();

      _export('NumbersStatsCalculator', NumbersStatsCalculator);

      NumbersStatsCalculator.CharDepth = 10;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2NoYXItc3RhdHMvbnVtYmVycy1zdGF0cy1jYWxjdWxhdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OzsrQkFZYSxzQkFBc0I7Ozs7Ozs7OzZCQVhqQyxTQUFTOzs7O3VCQU9ULE1BQU07OztBQUlLLDRCQUFzQjtpQkFBdEIsc0JBQXNCO2dDQUF0QixzQkFBc0I7O2VBQ2pDLE9BQU8sR0FBRyxJQUFJLE1BQU0sQ0FBQyxlQUFlLENBQUM7OztxQkFEMUIsc0JBQXNCOztpQkFHekIsa0JBQUMsSUFBSSxFQUFFO0FBQ2IsZ0JBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ3hELGtCQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN2QyxrQkFBSSxLQUFLLEdBQUcsT0FBTyxLQUFLLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztBQUNsRCxxQkFBTyxJQUFJLFNBQVMsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLHNCQUFzQixDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ3hGLE1BQU07QUFDTCxvQkFBTSxNQUFNLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQzthQUNuQztXQUNGOzs7ZUFYVSxzQkFBc0I7Ozs7O0FBY25DLDRCQUFzQixDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMiLCJmaWxlIjoic2VydmljZXMvY2hhci1zdGF0cy9udW1iZXJzLXN0YXRzLWNhbGN1bGF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYXJTdGF0c1xyXG59XHJcbmZyb20gJy4vY2hhci1zdGF0cyc7XHJcblxyXG5pbXBvcnQgdmFvdyBmcm9tICd2YW93JztcclxuXHJcbmltcG9ydCB7XHJcbiAgTG9jYWxlXHJcbn1cclxuZnJvbSAnLi4vLi4vbG9jYWxlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBOdW1iZXJzU3RhdHNDYWxjdWxhdG9yIHtcclxuICBwYXR0ZXJuID0gbmV3IFJlZ0V4cCgvWzEyMzQ1Njc4OTBdL2cpO1xyXG5cclxuICBnZXRTdGF0cyh0ZXh0KSB7XHJcbiAgICBpZiAod2luZG93LnZhb3cudXRpbC5WYWxpZGF0b3IuaXNEZWZpbmVkQW5kTm90TnVsbCh0ZXh0KSkge1xyXG4gICAgICBsZXQgbWF0Y2hlcyA9IHRleHQubWF0Y2godGhpcy5wYXR0ZXJuKTtcclxuICAgICAgbGV0IGNvdW50ID0gbWF0Y2hlcyAhPT0gbnVsbCA/IG1hdGNoZXMubGVuZ3RoIDogMDtcclxuICAgICAgcmV0dXJuIG5ldyBDaGFyU3RhdHMoTG9jYWxlLk51bWJlcnNTdGF0c05hbWUsIGNvdW50LCBOdW1iZXJzU3RhdHNDYWxjdWxhdG9yLkNoYXJEZXB0aCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBMb2NhbGUuRXJyb3IuSW52YWxpZEFyZ1RleHQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5OdW1iZXJzU3RhdHNDYWxjdWxhdG9yLkNoYXJEZXB0aCA9IDEwO1xyXG4iXX0=
