System.register(['./char-stats', 'vaow', '../../locale'], function (_export) {
  'use strict';

  var CharStats, vaow, Locale, AggregateCharStats;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  return {
    setters: [function (_charStats) {
      CharStats = _charStats.CharStats;
    }, function (_vaow) {
      vaow = _vaow['default'];
    }, function (_locale) {
      Locale = _locale.Locale;
    }],
    execute: function () {
      AggregateCharStats = (function (_CharStats) {
        _inherits(AggregateCharStats, _CharStats);

        function AggregateCharStats(name) {
          _classCallCheck(this, AggregateCharStats);

          _get(Object.getPrototypeOf(AggregateCharStats.prototype), 'constructor', this).call(this, name, 0, 0);
          this.subStats = [];
        }

        _createClass(AggregateCharStats, [{
          key: 'getAllStats',
          value: function getAllStats() {
            return this.subStats;
          }
        }, {
          key: 'addStats',
          value: function addStats(charStats) {
            if (window.vaow.util.Validator.isDefinedAndNotNull(charStats)) {
              this.subStats.push(charStats);
              this.updateAggregate(charStats);
            } else {
              throw Locale.Error.InvalidArgCharStats;
            }
          }
        }, {
          key: 'updateAggregate',
          value: function updateAggregate(charStats) {
            if (charStats.matchCount > 0) {
              this.matchCount += charStats.matchCount;
              this.charDepth += charStats.charDepth;
              this.searchSpace += charStats.charDepth * charStats.matchCount;
            }
          }
        }]);

        return AggregateCharStats;
      })(CharStats);

      _export('AggregateCharStats', AggregateCharStats);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2NoYXItc3RhdHMvYWdncmVnYXRlLWNoYXItc3RhdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OytCQVlhLGtCQUFrQjs7Ozs7Ozs7Ozs7OzZCQVg3QixTQUFTOzs7O3VCQU9ULE1BQU07OztBQUlLLHdCQUFrQjtrQkFBbEIsa0JBQWtCOztBQUVsQixpQkFGQSxrQkFBa0IsQ0FFakIsSUFBSSxFQUFFO2dDQUZQLGtCQUFrQjs7QUFHM0IscUNBSFMsa0JBQWtCLDZDQUdyQixJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtlQUZwQixRQUFRLEdBQUcsRUFBRTtTQUdaOztxQkFKVSxrQkFBa0I7O2lCQU1sQix1QkFBRztBQUNaLG1CQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7V0FDdEI7OztpQkFFTyxrQkFBQyxTQUFTLEVBQUU7QUFDbEIsZ0JBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxFQUFFO0FBQzdELGtCQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM5QixrQkFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUNqQyxNQUFNO0FBQ0wsb0JBQU0sTUFBTSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQzthQUN4QztXQUNGOzs7aUJBRWMseUJBQUMsU0FBUyxFQUFFO0FBQ3pCLGdCQUFJLFNBQVMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxFQUFFO0FBQzVCLGtCQUFJLENBQUMsVUFBVSxJQUFJLFNBQVMsQ0FBQyxVQUFVLENBQUM7QUFDeEMsa0JBQUksQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDLFNBQVMsQ0FBQztBQUN0QyxrQkFBSSxDQUFDLFdBQVcsSUFBSSxTQUFTLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxVQUFVLENBQUM7YUFDaEU7V0FDRjs7O2VBekJVLGtCQUFrQjtTQUFTLFNBQVMiLCJmaWxlIjoic2VydmljZXMvY2hhci1zdGF0cy9hZ2dyZWdhdGUtY2hhci1zdGF0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhclN0YXRzXHJcbn1cclxuZnJvbSAnLi9jaGFyLXN0YXRzJztcclxuXHJcbmltcG9ydCB2YW93IGZyb20gJ3Zhb3cnO1xyXG5cclxuaW1wb3J0IHtcclxuICBMb2NhbGVcclxufVxyXG5mcm9tICcuLi8uLi9sb2NhbGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFnZ3JlZ2F0ZUNoYXJTdGF0cyBleHRlbmRzIENoYXJTdGF0cyB7XHJcbiAgc3ViU3RhdHMgPSBbXTtcclxuICBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgICBzdXBlcihuYW1lLCAwLCAwKTtcclxuICB9XHJcblxyXG4gIGdldEFsbFN0YXRzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3ViU3RhdHM7XHJcbiAgfVxyXG5cclxuICBhZGRTdGF0cyhjaGFyU3RhdHMpIHtcclxuICAgIGlmICh3aW5kb3cudmFvdy51dGlsLlZhbGlkYXRvci5pc0RlZmluZWRBbmROb3ROdWxsKGNoYXJTdGF0cykpIHtcclxuICAgICAgdGhpcy5zdWJTdGF0cy5wdXNoKGNoYXJTdGF0cyk7XHJcbiAgICAgIHRoaXMudXBkYXRlQWdncmVnYXRlKGNoYXJTdGF0cyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBMb2NhbGUuRXJyb3IuSW52YWxpZEFyZ0NoYXJTdGF0cztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZUFnZ3JlZ2F0ZShjaGFyU3RhdHMpIHtcclxuICAgIGlmIChjaGFyU3RhdHMubWF0Y2hDb3VudCA+IDApIHtcclxuICAgICAgdGhpcy5tYXRjaENvdW50ICs9IGNoYXJTdGF0cy5tYXRjaENvdW50O1xyXG4gICAgICB0aGlzLmNoYXJEZXB0aCArPSBjaGFyU3RhdHMuY2hhckRlcHRoO1xyXG4gICAgICB0aGlzLnNlYXJjaFNwYWNlICs9IGNoYXJTdGF0cy5jaGFyRGVwdGggKiBjaGFyU3RhdHMubWF0Y2hDb3VudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19
