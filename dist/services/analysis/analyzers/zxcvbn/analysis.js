System.register(['../../analysis-base', '../../../../locale', 'vaow', '../../analysis-item'], function (_export) {
  'use strict';

  var AnalysisBase, Locale, vaow, AnalysisItem, TimeAnalysisItem, NumberAnalysisItem, ZxcvbnAnalysis;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  return {
    setters: [function (_analysisBase) {
      AnalysisBase = _analysisBase.AnalysisBase;
    }, function (_locale) {
      Locale = _locale.Locale;
    }, function (_vaow) {
      vaow = _vaow['default'];
    }, function (_analysisItem) {
      AnalysisItem = _analysisItem.AnalysisItem;
      TimeAnalysisItem = _analysisItem.TimeAnalysisItem;
      NumberAnalysisItem = _analysisItem.NumberAnalysisItem;
    }],
    execute: function () {
      ZxcvbnAnalysis = (function (_AnalysisBase) {
        _inherits(ZxcvbnAnalysis, _AnalysisBase);

        function ZxcvbnAnalysis() {
          _classCallCheck(this, ZxcvbnAnalysis);

          _get(Object.getPrototypeOf(ZxcvbnAnalysis.prototype), 'constructor', this).call(this, Locale.ZxcvbnAnalysisName);
        }

        _createClass(ZxcvbnAnalysis, [{
          key: 'setEntropy',
          value: function setEntropy(entropy) {
            if (window.vaow.util.Validator.isPositiveNumber(entropy)) {
              this.addAnalysisItem(new NumberAnalysisItem("Entropy", entropy));
            } else {
              throw Locale.Error.InvalidArgEntropy;
            }
          }
        }, {
          key: 'setScore',
          value: function setScore(score) {
            if (window.vaow.util.Validator.isPositiveNumber(score)) {
              this.addAnalysisItem(new NumberAnalysisItem("Score", score));
            } else {
              throw Locale.Error.InvalidArgScore;
            }
          }
        }]);

        return ZxcvbnAnalysis;
      })(AnalysisBase);

      _export('ZxcvbnAnalysis', ZxcvbnAnalysis);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2FuYWx5c2lzL2FuYWx5emVycy96eGN2Ym4vYW5hbHlzaXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3NGQWlCYSxjQUFjOzs7Ozs7Ozs7Ozs7bUNBaEJ6QixZQUFZOzt1QkFLWixNQUFNOzs7O21DQU9OLFlBQVk7dUNBQUUsZ0JBQWdCO3lDQUFFLGtCQUFrQjs7O0FBSXZDLG9CQUFjO2tCQUFkLGNBQWM7O0FBQ2QsaUJBREEsY0FBYyxHQUNYO2dDQURILGNBQWM7O0FBRXZCLHFDQUZTLGNBQWMsNkNBRWpCLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRTtTQUNsQzs7cUJBSFUsY0FBYzs7aUJBS2Ysb0JBQUMsT0FBTyxFQUFFO0FBQ2xCLGdCQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsRUFBRTtBQUN4RCxrQkFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLGtCQUFrQixDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO2FBQ2xFLE1BQU07QUFDTCxvQkFBTSxNQUFNLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDO2FBQ3RDO1dBQ0Y7OztpQkFFTyxrQkFBQyxLQUFLLEVBQUU7QUFDZCxnQkFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDdEQsa0JBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUM5RCxNQUFNO0FBQ0wsb0JBQU0sTUFBTSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUM7YUFDcEM7V0FDRjs7O2VBbkJVLGNBQWM7U0FBUyxZQUFZIiwiZmlsZSI6InNlcnZpY2VzL2FuYWx5c2lzL2FuYWx5emVycy96eGN2Ym4vYW5hbHlzaXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFuYWx5c2lzQmFzZVxyXG59XHJcbmZyb20gJy4uLy4uL2FuYWx5c2lzLWJhc2UnO1xyXG5cclxuaW1wb3J0IHtcclxuICBMb2NhbGVcclxufVxyXG5mcm9tICcuLi8uLi8uLi8uLi9sb2NhbGUnO1xyXG5cclxuaW1wb3J0IHZhb3cgZnJvbSAndmFvdyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIEFuYWx5c2lzSXRlbSwgVGltZUFuYWx5c2lzSXRlbSwgTnVtYmVyQW5hbHlzaXNJdGVtXHJcbn1cclxuZnJvbSAnLi4vLi4vYW5hbHlzaXMtaXRlbSc7XHJcblxyXG5leHBvcnQgY2xhc3MgWnhjdmJuQW5hbHlzaXMgZXh0ZW5kcyBBbmFseXNpc0Jhc2Uge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoTG9jYWxlLlp4Y3ZibkFuYWx5c2lzTmFtZSk7XHJcbiAgfVxyXG5cclxuICBzZXRFbnRyb3B5KGVudHJvcHkpIHtcclxuICAgIGlmICh3aW5kb3cudmFvdy51dGlsLlZhbGlkYXRvci5pc1Bvc2l0aXZlTnVtYmVyKGVudHJvcHkpKSB7XHJcbiAgICAgIHRoaXMuYWRkQW5hbHlzaXNJdGVtKG5ldyBOdW1iZXJBbmFseXNpc0l0ZW0oXCJFbnRyb3B5XCIsIGVudHJvcHkpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IExvY2FsZS5FcnJvci5JbnZhbGlkQXJnRW50cm9weTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldFNjb3JlKHNjb3JlKSB7XHJcbiAgICBpZiAod2luZG93LnZhb3cudXRpbC5WYWxpZGF0b3IuaXNQb3NpdGl2ZU51bWJlcihzY29yZSkpIHtcclxuICAgICAgdGhpcy5hZGRBbmFseXNpc0l0ZW0obmV3IE51bWJlckFuYWx5c2lzSXRlbShcIlNjb3JlXCIsIHNjb3JlKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBMb2NhbGUuRXJyb3IuSW52YWxpZEFyZ1Njb3JlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=
