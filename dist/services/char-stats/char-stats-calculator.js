System.register(['./lower-case-alphabets-stats-calculator', './upper-case-alphabets-stats-calculator', './numbers-stats-calculator', './special-case-stats-calculator', './char-stats', './aggregate-char-stats'], function (_export) {
  'use strict';

  var LowerCaseAlphabetsStatsCalculator, UpperCaseAlphabetsStatsCalculator, NumbersStatsCalculator, SpecialCaseStatsCalculator, CharStats, AggregateCharStats, CharStatsCalculator;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_lowerCaseAlphabetsStatsCalculator) {
      LowerCaseAlphabetsStatsCalculator = _lowerCaseAlphabetsStatsCalculator.LowerCaseAlphabetsStatsCalculator;
    }, function (_upperCaseAlphabetsStatsCalculator) {
      UpperCaseAlphabetsStatsCalculator = _upperCaseAlphabetsStatsCalculator.UpperCaseAlphabetsStatsCalculator;
    }, function (_numbersStatsCalculator) {
      NumbersStatsCalculator = _numbersStatsCalculator.NumbersStatsCalculator;
    }, function (_specialCaseStatsCalculator) {
      SpecialCaseStatsCalculator = _specialCaseStatsCalculator.SpecialCaseStatsCalculator;
    }, function (_charStats) {
      CharStats = _charStats.CharStats;
    }, function (_aggregateCharStats) {
      AggregateCharStats = _aggregateCharStats.AggregateCharStats;
    }],
    execute: function () {
      CharStatsCalculator = (function () {
        function CharStatsCalculator() {
          _classCallCheck(this, CharStatsCalculator);

          this.statsCalculators = [new LowerCaseAlphabetsStatsCalculator(), new UpperCaseAlphabetsStatsCalculator(), new NumbersStatsCalculator(), new SpecialCaseStatsCalculator()];
        }

        _createClass(CharStatsCalculator, [{
          key: 'getStats',
          value: function getStats(text) {
            var totalStats = new AggregateCharStats("TotalStats");

            var calculatorsCount = this.statsCalculators.length;

            for (var i = 0; i < calculatorsCount; i++) {
              var statsCalculator = this.statsCalculators[i];
              var stats = statsCalculator.getStats(text);
              totalStats.addStats(stats);
            }

            this.totalStats = totalStats;
            return this.totalStats;
          }
        }]);

        return CharStatsCalculator;
      })();

      _export('CharStatsCalculator', CharStatsCalculator);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2NoYXItc3RhdHMvY2hhci1zdGF0cy1jYWxjdWxhdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OzsrSkF5QmEsbUJBQW1COzs7Ozs7Ozs2RUF4QjlCLGlDQUFpQzs7NkVBSWpDLGlDQUFpQzs7dURBSWpDLHNCQUFzQjs7K0RBSXRCLDBCQUEwQjs7NkJBSTFCLFNBQVM7OytDQUlULGtCQUFrQjs7O0FBSVAseUJBQW1CO0FBQ25CLGlCQURBLG1CQUFtQixHQUNoQjtnQ0FESCxtQkFBbUI7O0FBRTVCLGNBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUN0QixJQUFJLGlDQUFpQyxFQUFFLEVBQ3ZDLElBQUksaUNBQWlDLEVBQUUsRUFDdkMsSUFBSSxzQkFBc0IsRUFBRSxFQUM1QixJQUFJLDBCQUEwQixFQUFFLENBQ2pDLENBQUM7U0FDSDs7cUJBUlUsbUJBQW1COztpQkFVdEIsa0JBQUMsSUFBSSxFQUFFO0FBQ2IsZ0JBQUksVUFBVSxHQUFHLElBQUksa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7O0FBRXRELGdCQUFJLGdCQUFnQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7O0FBRXBELGlCQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsZ0JBQWdCLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDekMsa0JBQUksZUFBZSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMvQyxrQkFBSSxLQUFLLEdBQUcsZUFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMzQyx3QkFBVSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUM1Qjs7QUFFRCxnQkFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7QUFDN0IsbUJBQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztXQUN4Qjs7O2VBdkJVLG1CQUFtQiIsImZpbGUiOiJzZXJ2aWNlcy9jaGFyLXN0YXRzL2NoYXItc3RhdHMtY2FsY3VsYXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgTG93ZXJDYXNlQWxwaGFiZXRzU3RhdHNDYWxjdWxhdG9yXHJcbn1cclxuZnJvbSAnLi9sb3dlci1jYXNlLWFscGhhYmV0cy1zdGF0cy1jYWxjdWxhdG9yJztcclxuaW1wb3J0IHtcclxuICBVcHBlckNhc2VBbHBoYWJldHNTdGF0c0NhbGN1bGF0b3JcclxufVxyXG5mcm9tICcuL3VwcGVyLWNhc2UtYWxwaGFiZXRzLXN0YXRzLWNhbGN1bGF0b3InO1xyXG5pbXBvcnQge1xyXG4gIE51bWJlcnNTdGF0c0NhbGN1bGF0b3JcclxufVxyXG5mcm9tICcuL251bWJlcnMtc3RhdHMtY2FsY3VsYXRvcic7XHJcbmltcG9ydCB7XHJcbiAgU3BlY2lhbENhc2VTdGF0c0NhbGN1bGF0b3JcclxufVxyXG5mcm9tICcuL3NwZWNpYWwtY2FzZS1zdGF0cy1jYWxjdWxhdG9yJztcclxuaW1wb3J0IHtcclxuICBDaGFyU3RhdHNcclxufVxyXG5mcm9tICcuL2NoYXItc3RhdHMnO1xyXG5pbXBvcnQge1xyXG4gIEFnZ3JlZ2F0ZUNoYXJTdGF0c1xyXG59XHJcbmZyb20gJy4vYWdncmVnYXRlLWNoYXItc3RhdHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENoYXJTdGF0c0NhbGN1bGF0b3Ige1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5zdGF0c0NhbGN1bGF0b3JzID0gW1xyXG4gICAgICBuZXcgTG93ZXJDYXNlQWxwaGFiZXRzU3RhdHNDYWxjdWxhdG9yKCksXHJcbiAgICAgIG5ldyBVcHBlckNhc2VBbHBoYWJldHNTdGF0c0NhbGN1bGF0b3IoKSxcclxuICAgICAgbmV3IE51bWJlcnNTdGF0c0NhbGN1bGF0b3IoKSxcclxuICAgICAgbmV3IFNwZWNpYWxDYXNlU3RhdHNDYWxjdWxhdG9yKClcclxuICAgIF07XHJcbiAgfVxyXG5cclxuICBnZXRTdGF0cyh0ZXh0KSB7XHJcbiAgICBsZXQgdG90YWxTdGF0cyA9IG5ldyBBZ2dyZWdhdGVDaGFyU3RhdHMoXCJUb3RhbFN0YXRzXCIpO1xyXG5cclxuICAgIGxldCBjYWxjdWxhdG9yc0NvdW50ID0gdGhpcy5zdGF0c0NhbGN1bGF0b3JzLmxlbmd0aDtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhbGN1bGF0b3JzQ291bnQ7IGkrKykge1xyXG4gICAgICBsZXQgc3RhdHNDYWxjdWxhdG9yID0gdGhpcy5zdGF0c0NhbGN1bGF0b3JzW2ldO1xyXG4gICAgICBsZXQgc3RhdHMgPSBzdGF0c0NhbGN1bGF0b3IuZ2V0U3RhdHModGV4dCk7XHJcbiAgICAgIHRvdGFsU3RhdHMuYWRkU3RhdHMoc3RhdHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudG90YWxTdGF0cyA9IHRvdGFsU3RhdHM7XHJcbiAgICByZXR1cm4gdGhpcy50b3RhbFN0YXRzO1xyXG4gIH1cclxufVxyXG4iXX0=
