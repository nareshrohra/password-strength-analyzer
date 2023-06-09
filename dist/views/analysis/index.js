System.register(['./options', './results', '../../services/analysis/analyzers/full-analyzer/analyzer'], function (_export) {
  'use strict';

  var OptionsModel, ResultsModel, FullAnalyzer, Index;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_options) {
      OptionsModel = _options.OptionsModel;
    }, function (_results) {
      ResultsModel = _results.ResultsModel;
    }, function (_servicesAnalysisAnalyzersFullAnalyzerAnalyzer) {
      FullAnalyzer = _servicesAnalysisAnalyzersFullAnalyzerAnalyzer.FullAnalyzer;
    }],
    execute: function () {
      Index = (function () {
        function Index() {
          _classCallCheck(this, Index);

          this.password = '';
          this.analyzer = new FullAnalyzer();
          this.options = new OptionsModel(1000, 100);
          this.results = null;

          this.resetResults();
        }

        _createClass(Index, [{
          key: 'resetResults',
          value: function resetResults() {
            this.results = null;
          }
        }, {
          key: 'passwordChanged',
          value: function passwordChanged() {
            this.performAnalysis();
            return true;
          }
        }, {
          key: 'optionsChanged',
          value: function optionsChanged() {
            this.performAnalysis();
            return true;
          }
        }, {
          key: 'performAnalysis',
          value: function performAnalysis() {
            this.resetResults();
            if (this.password) {
              this.results = this.getAllAnalysis();
            }
          }
        }, {
          key: 'getAllAnalysis',
          value: function getAllAnalysis() {
            var results = new ResultsModel(),
                analyses = this.analyzer.getAnalysis(this.password, this.options);
            results.addAnalyses(analyses);
            return results;
          }
        }]);

        return Index;
      })();

      _export('Index', Index);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL2FuYWx5c2lzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztnREFlYSxLQUFLOzs7Ozs7Ozs4QkFkaEIsWUFBWTs7OEJBS1osWUFBWTs7b0VBS1osWUFBWTs7O0FBSUQsV0FBSztBQU1MLGlCQU5BLEtBQUssR0FNRjtnQ0FOSCxLQUFLOztlQUNoQixRQUFRLEdBQUcsRUFBRTtlQUNiLFFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRTtlQUM3QixPQUFPLEdBQUcsSUFBSSxZQUFZLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQztlQUNyQyxPQUFPLEdBQUcsSUFBSTs7QUFHWixjQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDckI7O3FCQVJVLEtBQUs7O2lCQVVKLHdCQUFHO0FBQ2IsZ0JBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1dBQ3JCOzs7aUJBRWMsMkJBQUc7QUFDaEIsZ0JBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztBQUN2QixtQkFBTyxJQUFJLENBQUM7V0FDYjs7O2lCQUVhLDBCQUFHO0FBQ2YsZ0JBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztBQUN2QixtQkFBTyxJQUFJLENBQUM7V0FDYjs7O2lCQUVjLDJCQUFHO0FBQ2hCLGdCQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7QUFDcEIsZ0JBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtBQUNqQixrQkFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7YUFDdEM7V0FDRjs7O2lCQUVhLDBCQUFHO0FBQ2YsZ0JBQUksT0FBTyxHQUFHLElBQUksWUFBWSxFQUFFO2dCQUM5QixRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDcEUsbUJBQU8sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDOUIsbUJBQU8sT0FBTyxDQUFDO1dBQ2hCOzs7ZUFwQ1UsS0FBSyIsImZpbGUiOiJ2aWV3cy9hbmFseXNpcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgT3B0aW9uc01vZGVsXHJcbn1cclxuZnJvbSAnLi9vcHRpb25zJztcclxuXHJcbmltcG9ydCB7XHJcbiAgUmVzdWx0c01vZGVsXHJcbn1cclxuZnJvbSAnLi9yZXN1bHRzJztcclxuXHJcbmltcG9ydCB7XHJcbiAgRnVsbEFuYWx5emVyXHJcbn1cclxuZnJvbSAnLi4vLi4vc2VydmljZXMvYW5hbHlzaXMvYW5hbHl6ZXJzL2Z1bGwtYW5hbHl6ZXIvYW5hbHl6ZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIEluZGV4IHtcclxuICBwYXNzd29yZCA9ICcnO1xyXG4gIGFuYWx5emVyID0gbmV3IEZ1bGxBbmFseXplcigpO1xyXG4gIG9wdGlvbnMgPSBuZXcgT3B0aW9uc01vZGVsKDEwMDAsIDEwMCk7XHJcbiAgcmVzdWx0cyA9IG51bGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5yZXNldFJlc3VsdHMoKTtcclxuICB9XHJcblxyXG4gIHJlc2V0UmVzdWx0cygpIHtcclxuICAgIHRoaXMucmVzdWx0cyA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBwYXNzd29yZENoYW5nZWQoKSB7XHJcbiAgICB0aGlzLnBlcmZvcm1BbmFseXNpcygpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBvcHRpb25zQ2hhbmdlZCgpIHtcclxuICAgIHRoaXMucGVyZm9ybUFuYWx5c2lzKCk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHBlcmZvcm1BbmFseXNpcygpIHtcclxuICAgIHRoaXMucmVzZXRSZXN1bHRzKCk7XHJcbiAgICBpZiAodGhpcy5wYXNzd29yZCkge1xyXG4gICAgICB0aGlzLnJlc3VsdHMgPSB0aGlzLmdldEFsbEFuYWx5c2lzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRBbGxBbmFseXNpcygpIHtcclxuICAgIGxldCByZXN1bHRzID0gbmV3IFJlc3VsdHNNb2RlbCgpLFxyXG4gICAgICBhbmFseXNlcyA9IHRoaXMuYW5hbHl6ZXIuZ2V0QW5hbHlzaXModGhpcy5wYXNzd29yZCwgdGhpcy5vcHRpb25zKTtcclxuICAgIHJlc3VsdHMuYWRkQW5hbHlzZXMoYW5hbHlzZXMpO1xyXG4gICAgcmV0dXJuIHJlc3VsdHM7XHJcbiAgfVxyXG59XHJcbiJdfQ==
