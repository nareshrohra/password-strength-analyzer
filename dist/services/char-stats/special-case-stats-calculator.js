System.register(['./char-stats', 'vaow', '../../locale'], function (_export) {
  'use strict';

  var CharStats, vaow, Locale, SpecialCaseStatsCalculator;

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
      SpecialCaseStatsCalculator = (function () {
        function SpecialCaseStatsCalculator() {
          _classCallCheck(this, SpecialCaseStatsCalculator);

          this.pattern = new RegExp(/[`\-=[\]\;',./~!@#$%^&*()_+{}|:"<>?]/g);
        }

        _createClass(SpecialCaseStatsCalculator, [{
          key: 'getStats',
          value: function getStats(text) {
            if (window.vaow.util.Validator.isDefinedAndNotNull(text)) {
              var matches = text.match(this.pattern);
              var count = matches !== null ? matches.length : 0;
              return new CharStats(Locale.SpecialCaseStatsName, count, SpecialCaseStatsCalculator.CharDepth);
            } else {
              throw Locale.Error.InvalidArgText;
            }
          }
        }]);

        return SpecialCaseStatsCalculator;
      })();

      _export('SpecialCaseStatsCalculator', SpecialCaseStatsCalculator);

      SpecialCaseStatsCalculator.CharDepth = 33;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2NoYXItc3RhdHMvc3BlY2lhbC1jYXNlLXN0YXRzLWNhbGN1bGF0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OytCQVlhLDBCQUEwQjs7Ozs7Ozs7NkJBWHJDLFNBQVM7Ozs7dUJBT1QsTUFBTTs7O0FBSUssZ0NBQTBCO2lCQUExQiwwQkFBMEI7Z0NBQTFCLDBCQUEwQjs7ZUFDckMsT0FBTyxHQUFHLElBQUksTUFBTSxDQUFDLHVDQUF1QyxDQUFDOzs7cUJBRGxELDBCQUEwQjs7aUJBRzdCLGtCQUFDLElBQUksRUFBRTtBQUNiLGdCQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUN4RCxrQkFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDdkMsa0JBQUksS0FBSyxHQUFHLE9BQU8sS0FBSyxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDbEQscUJBQU8sSUFBSSxTQUFTLENBQUMsTUFBTSxDQUFDLG9CQUFvQixFQUFFLEtBQUssRUFBRSwwQkFBMEIsQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUNoRyxNQUFNO0FBQ0wsb0JBQU0sTUFBTSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUM7YUFDbkM7V0FDRjs7O2VBWFUsMEJBQTBCOzs7OztBQWN2QyxnQ0FBMEIsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDIiwiZmlsZSI6InNlcnZpY2VzL2NoYXItc3RhdHMvc3BlY2lhbC1jYXNlLXN0YXRzLWNhbGN1bGF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYXJTdGF0c1xyXG59XHJcbmZyb20gJy4vY2hhci1zdGF0cyc7XHJcblxyXG5pbXBvcnQgdmFvdyBmcm9tICd2YW93JztcclxuXHJcbmltcG9ydCB7XHJcbiAgTG9jYWxlXHJcbn1cclxuZnJvbSAnLi4vLi4vbG9jYWxlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTcGVjaWFsQ2FzZVN0YXRzQ2FsY3VsYXRvciB7XHJcbiAgcGF0dGVybiA9IG5ldyBSZWdFeHAoL1tgXFwtPVtcXF1cXDsnLC4vfiFAIyQlXiYqKClfK3t9fDpcIjw+P10vZyk7XHJcblxyXG4gIGdldFN0YXRzKHRleHQpIHtcclxuICAgIGlmICh3aW5kb3cudmFvdy51dGlsLlZhbGlkYXRvci5pc0RlZmluZWRBbmROb3ROdWxsKHRleHQpKSB7XHJcbiAgICAgIGxldCBtYXRjaGVzID0gdGV4dC5tYXRjaCh0aGlzLnBhdHRlcm4pO1xyXG4gICAgICBsZXQgY291bnQgPSBtYXRjaGVzICE9PSBudWxsID8gbWF0Y2hlcy5sZW5ndGggOiAwO1xyXG4gICAgICByZXR1cm4gbmV3IENoYXJTdGF0cyhMb2NhbGUuU3BlY2lhbENhc2VTdGF0c05hbWUsIGNvdW50LCBTcGVjaWFsQ2FzZVN0YXRzQ2FsY3VsYXRvci5DaGFyRGVwdGgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgTG9jYWxlLkVycm9yLkludmFsaWRBcmdUZXh0O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuU3BlY2lhbENhc2VTdGF0c0NhbGN1bGF0b3IuQ2hhckRlcHRoID0gMzM7XHJcbiJdfQ==
