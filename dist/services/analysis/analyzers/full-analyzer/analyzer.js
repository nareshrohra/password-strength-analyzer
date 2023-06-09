System.register(['vaow', '../../../../locale', '../brute-force/analyzer', '../zxcvbn/analyzer'], function (_export) {
  'use strict';

  var vaow, Locale, BruteForceAnalyzer, ZxcvbnAnalyzer, CompositeAnalyzer, FullAnalyzer;

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_vaow) {
      vaow = _vaow['default'];
    }, function (_locale) {
      Locale = _locale.Locale;
    }, function (_bruteForceAnalyzer) {
      BruteForceAnalyzer = _bruteForceAnalyzer.BruteForceAnalyzer;
    }, function (_zxcvbnAnalyzer) {
      ZxcvbnAnalyzer = _zxcvbnAnalyzer.ZxcvbnAnalyzer;
    }],
    execute: function () {
      CompositeAnalyzer = (function () {
        function CompositeAnalyzer() {
          _classCallCheck(this, CompositeAnalyzer);

          this.analyzers = [];
          this.analyses = [];
        }

        _createClass(CompositeAnalyzer, [{
          key: 'addAnalyzer',
          value: function addAnalyzer(analyzer) {
            if (window.vaow.util.Validator.isDefinedAndNotNull(analyzer)) {
              this.analyzers.push(analyzer);
            } else {
              throw Locale.Error.InvalidArgAnalyzer;
            }
          }
        }, {
          key: 'getAnalysis',
          value: function getAnalysis(password, options) {
            this.validateAnalysisInput(password, options);
            this.password = password;
            this.options = options;
            this.analyses.length = 0;
            this.analyze();
            return this.analyses;
          }
        }, {
          key: 'validateAnalysisInput',
          value: function validateAnalysisInput(password, options) {
            if (!window.vaow.util.Validator.isDefinedAndNotNull(password)) {
              throw Locale.Error.InvalidArgPassword;
            }

            if (!window.vaow.util.Validator.isDefinedAndNotNull(options)) {
              throw Locale.Error.InvalidArgOptions;
            }
          }
        }, {
          key: 'analyze',
          value: function analyze() {
            var analyzersCount = this.analyzers.length;
            for (var i = 0; i < analyzersCount; i++) {
              var analysis = this.analyzers[i].getAnalysis(this.password, this.options);
              this.analyses.push(analysis);
            }
          }
        }]);

        return CompositeAnalyzer;
      })();

      _export('CompositeAnalyzer', CompositeAnalyzer);

      FullAnalyzer = (function (_CompositeAnalyzer) {
        _inherits(FullAnalyzer, _CompositeAnalyzer);

        function FullAnalyzer() {
          _classCallCheck(this, FullAnalyzer);

          _get(Object.getPrototypeOf(FullAnalyzer.prototype), 'constructor', this).call(this);
          this.constructAnalyzers();
        }

        _createClass(FullAnalyzer, [{
          key: 'constructAnalyzers',
          value: function constructAnalyzers() {
            this.addAnalyzer(new BruteForceAnalyzer());
            this.addAnalyzer(new ZxcvbnAnalyzer());
          }
        }]);

        return FullAnalyzer;
      })(CompositeAnalyzer);

      _export('FullAnalyzer', FullAnalyzer);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2FuYWx5c2lzL2FuYWx5emVycy9mdWxsLWFuYWx5emVyL2FuYWx5emVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozt3REFpQmEsaUJBQWlCLEVBMkNqQixZQUFZOzs7Ozs7Ozs7Ozs7Ozt1QkF6RHZCLE1BQU07OytDQUtOLGtCQUFrQjs7dUNBS2xCLGNBQWM7OztBQUlILHVCQUFpQjtBQUlqQixpQkFKQSxpQkFBaUIsR0FJZDtnQ0FKSCxpQkFBaUI7O2VBQzVCLFNBQVMsR0FBRyxFQUFFO2VBQ2QsUUFBUSxHQUFHLEVBQUU7U0FHWjs7cUJBTFUsaUJBQWlCOztpQkFPakIscUJBQUMsUUFBUSxFQUFFO0FBQ3BCLGdCQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsRUFBRTtBQUM1RCxrQkFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDL0IsTUFBTTtBQUNMLG9CQUFNLE1BQU0sQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUM7YUFDdkM7V0FDRjs7O2lCQUVVLHFCQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUU7QUFDN0IsZ0JBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDOUMsZ0JBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0FBQ3pCLGdCQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixnQkFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQ3pCLGdCQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDZixtQkFBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1dBQ3RCOzs7aUJBRW9CLCtCQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUU7QUFDdkMsZ0JBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLEVBQUU7QUFDN0Qsb0JBQU0sTUFBTSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQzthQUN2Qzs7QUFFRCxnQkFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsRUFBRTtBQUM1RCxvQkFBTSxNQUFNLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDO2FBQ3RDO1dBQ0Y7OztpQkFFTSxtQkFBRztBQUNSLGdCQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUMzQyxpQkFBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGNBQWMsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN2QyxrQkFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDMUUsa0JBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzlCO1dBQ0Y7OztlQXhDVSxpQkFBaUI7Ozs7O0FBMkNqQixrQkFBWTtrQkFBWixZQUFZOztBQUNaLGlCQURBLFlBQVksR0FDVDtnQ0FESCxZQUFZOztBQUVyQixxQ0FGUyxZQUFZLDZDQUViO0FBQ1IsY0FBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FDM0I7O3FCQUpVLFlBQVk7O2lCQU1MLDhCQUFFO0FBQ2xCLGdCQUFJLENBQUMsV0FBVyxDQUFDLElBQUksa0JBQWtCLEVBQUUsQ0FBQyxDQUFDO0FBQzNDLGdCQUFJLENBQUMsV0FBVyxDQUFDLElBQUksY0FBYyxFQUFFLENBQUMsQ0FBQztXQUN4Qzs7O2VBVFUsWUFBWTtTQUFTLGlCQUFpQiIsImZpbGUiOiJzZXJ2aWNlcy9hbmFseXNpcy9hbmFseXplcnMvZnVsbC1hbmFseXplci9hbmFseXplci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB2YW93IGZyb20gJ3Zhb3cnO1xyXG5cclxuaW1wb3J0IHtcclxuICBMb2NhbGVcclxufVxyXG5mcm9tICcuLi8uLi8uLi8uLi9sb2NhbGUnO1xyXG5cclxuaW1wb3J0IHtcclxuICBCcnV0ZUZvcmNlQW5hbHl6ZXJcclxufVxyXG5mcm9tICcuLi9icnV0ZS1mb3JjZS9hbmFseXplcic7XHJcblxyXG5pbXBvcnQge1xyXG4gIFp4Y3ZibkFuYWx5emVyXHJcbn1cclxuZnJvbSAnLi4venhjdmJuL2FuYWx5emVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDb21wb3NpdGVBbmFseXplciB7XHJcbiAgYW5hbHl6ZXJzID0gW107XHJcbiAgYW5hbHlzZXMgPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBhZGRBbmFseXplcihhbmFseXplcikge1xyXG4gICAgaWYgKHdpbmRvdy52YW93LnV0aWwuVmFsaWRhdG9yLmlzRGVmaW5lZEFuZE5vdE51bGwoYW5hbHl6ZXIpKSB7XHJcbiAgICAgIHRoaXMuYW5hbHl6ZXJzLnB1c2goYW5hbHl6ZXIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgTG9jYWxlLkVycm9yLkludmFsaWRBcmdBbmFseXplcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEFuYWx5c2lzKHBhc3N3b3JkLCBvcHRpb25zKSB7XHJcbiAgICB0aGlzLnZhbGlkYXRlQW5hbHlzaXNJbnB1dChwYXNzd29yZCwgb3B0aW9ucyk7XHJcbiAgICB0aGlzLnBhc3N3b3JkID0gcGFzc3dvcmQ7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgdGhpcy5hbmFseXNlcy5sZW5ndGggPSAwO1xyXG4gICAgdGhpcy5hbmFseXplKCk7XHJcbiAgICByZXR1cm4gdGhpcy5hbmFseXNlcztcclxuICB9XHJcblxyXG4gIHZhbGlkYXRlQW5hbHlzaXNJbnB1dChwYXNzd29yZCwgb3B0aW9ucykge1xyXG4gICAgaWYgKCF3aW5kb3cudmFvdy51dGlsLlZhbGlkYXRvci5pc0RlZmluZWRBbmROb3ROdWxsKHBhc3N3b3JkKSkge1xyXG4gICAgICB0aHJvdyBMb2NhbGUuRXJyb3IuSW52YWxpZEFyZ1Bhc3N3b3JkO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghd2luZG93LnZhb3cudXRpbC5WYWxpZGF0b3IuaXNEZWZpbmVkQW5kTm90TnVsbChvcHRpb25zKSkge1xyXG4gICAgICB0aHJvdyBMb2NhbGUuRXJyb3IuSW52YWxpZEFyZ09wdGlvbnM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhbmFseXplKCkge1xyXG4gICAgbGV0IGFuYWx5emVyc0NvdW50ID0gdGhpcy5hbmFseXplcnMubGVuZ3RoO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbmFseXplcnNDb3VudDsgaSsrKSB7XHJcbiAgICAgIGxldCBhbmFseXNpcyA9IHRoaXMuYW5hbHl6ZXJzW2ldLmdldEFuYWx5c2lzKHRoaXMucGFzc3dvcmQsIHRoaXMub3B0aW9ucyk7XHJcbiAgICAgIHRoaXMuYW5hbHlzZXMucHVzaChhbmFseXNpcyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRnVsbEFuYWx5emVyIGV4dGVuZHMgQ29tcG9zaXRlQW5hbHl6ZXIge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuY29uc3RydWN0QW5hbHl6ZXJzKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RBbmFseXplcnMoKXtcclxuICAgIHRoaXMuYWRkQW5hbHl6ZXIobmV3IEJydXRlRm9yY2VBbmFseXplcigpKTtcclxuICAgIHRoaXMuYWRkQW5hbHl6ZXIobmV3IFp4Y3ZibkFuYWx5emVyKCkpO1xyXG4gIH1cclxufVxyXG4iXX0=
