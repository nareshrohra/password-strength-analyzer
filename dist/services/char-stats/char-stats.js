System.register(['vaow', '../../locale'], function (_export) {
  'use strict';

  var vaow, Locale, CharStats;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_vaow) {
      vaow = _vaow['default'];
    }, function (_locale) {
      Locale = _locale.Locale;
    }],
    execute: function () {
      CharStats = (function () {
        function CharStats(name, matchCount, charDepth) {
          _classCallCheck(this, CharStats);

          this.validate(name, matchCount, charDepth);

          this.name = name;
          this.matchCount = matchCount;
          this.charDepth = charDepth;
        }

        _createClass(CharStats, [{
          key: 'validate',
          value: function validate(name, matchCount, charDepth) {
            if (!window.vaow.util.Validator.isDefinedAndNotNull(name)) {
              throw Locale.Error.InvalidArgName;
            }

            if (!window.vaow.util.Validator.isPositiveNumber(matchCount)) {
              throw Locale.Error.InvalidArgMatchCount;
            }

            if (!window.vaow.util.Validator.isPositiveNumber(charDepth)) {
              throw Locale.Error.InvalidArgCharDepth;
            }
          }
        }, {
          key: 'getName',
          value: function getName() {
            return this.name;
          }
        }, {
          key: 'getMatchCount',
          value: function getMatchCount() {
            return this.matchCount;
          }
        }, {
          key: 'getCharDepth',
          value: function getCharDepth() {
            return this.charDepth;
          }
        }]);

        return CharStats;
      })();

      _export('CharStats', CharStats);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2NoYXItc3RhdHMvY2hhci1zdGF0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7b0JBT2EsU0FBUzs7Ozs7Ozs7Ozt1QkFKcEIsTUFBTTs7O0FBSUssZUFBUztBQUNULGlCQURBLFNBQVMsQ0FDUixJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRTtnQ0FEOUIsU0FBUzs7QUFFbEIsY0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsQ0FBQyxDQUFDOztBQUUzQyxjQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixjQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztBQUM3QixjQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztTQUM1Qjs7cUJBUFUsU0FBUzs7aUJBU1osa0JBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUU7QUFDcEMsZ0JBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDekQsb0JBQU0sTUFBTSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUM7YUFDbkM7O0FBRUQsZ0JBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLEVBQUU7QUFDNUQsb0JBQU0sTUFBTSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQzthQUN6Qzs7QUFFRCxnQkFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsRUFBRTtBQUMzRCxvQkFBTSxNQUFNLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDO2FBQ3hDO1dBQ0Y7OztpQkFFTSxtQkFBRztBQUNSLG1CQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7V0FDbEI7OztpQkFFWSx5QkFBRztBQUNkLG1CQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7V0FDeEI7OztpQkFFVyx3QkFBRztBQUNiLG1CQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7V0FDdkI7OztlQWpDVSxTQUFTIiwiZmlsZSI6InNlcnZpY2VzL2NoYXItc3RhdHMvY2hhci1zdGF0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB2YW93IGZyb20gJ3Zhb3cnO1xyXG5cclxuaW1wb3J0IHtcclxuICBMb2NhbGVcclxufVxyXG5mcm9tICcuLi8uLi9sb2NhbGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENoYXJTdGF0cyB7XHJcbiAgY29uc3RydWN0b3IobmFtZSwgbWF0Y2hDb3VudCwgY2hhckRlcHRoKSB7XHJcbiAgICB0aGlzLnZhbGlkYXRlKG5hbWUsIG1hdGNoQ291bnQsIGNoYXJEZXB0aCk7XHJcblxyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMubWF0Y2hDb3VudCA9IG1hdGNoQ291bnQ7XHJcbiAgICB0aGlzLmNoYXJEZXB0aCA9IGNoYXJEZXB0aDtcclxuICB9XHJcblxyXG4gIHZhbGlkYXRlKG5hbWUsIG1hdGNoQ291bnQsIGNoYXJEZXB0aCkge1xyXG4gICAgaWYgKCF3aW5kb3cudmFvdy51dGlsLlZhbGlkYXRvci5pc0RlZmluZWRBbmROb3ROdWxsKG5hbWUpKSB7XHJcbiAgICAgIHRocm93IExvY2FsZS5FcnJvci5JbnZhbGlkQXJnTmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXdpbmRvdy52YW93LnV0aWwuVmFsaWRhdG9yLmlzUG9zaXRpdmVOdW1iZXIobWF0Y2hDb3VudCkpIHtcclxuICAgICAgdGhyb3cgTG9jYWxlLkVycm9yLkludmFsaWRBcmdNYXRjaENvdW50O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghd2luZG93LnZhb3cudXRpbC5WYWxpZGF0b3IuaXNQb3NpdGl2ZU51bWJlcihjaGFyRGVwdGgpKSB7XHJcbiAgICAgIHRocm93IExvY2FsZS5FcnJvci5JbnZhbGlkQXJnQ2hhckRlcHRoO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0TmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgfVxyXG5cclxuICBnZXRNYXRjaENvdW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMubWF0Y2hDb3VudDtcclxuICB9XHJcblxyXG4gIGdldENoYXJEZXB0aCgpIHtcclxuICAgIHJldHVybiB0aGlzLmNoYXJEZXB0aDtcclxuICB9XHJcbn1cclxuIl19
