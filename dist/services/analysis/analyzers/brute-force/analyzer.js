System.register(['vaow', '../../../../locale', '../../../char-stats/char-stats-calculator', './analysis', '../../../util/crypto-math'], function (_export) {
  'use strict';

  var vaow, Locale, CharStatsCalculator, BruteForceAnalysis, CryptoMath, BruteForceAnalyzer;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_vaow) {
      vaow = _vaow['default'];
    }, function (_locale) {
      Locale = _locale.Locale;
    }, function (_charStatsCharStatsCalculator) {
      CharStatsCalculator = _charStatsCharStatsCalculator.CharStatsCalculator;
    }, function (_analysis) {
      BruteForceAnalysis = _analysis.BruteForceAnalysis;
    }, function (_utilCryptoMath) {
      CryptoMath = _utilCryptoMath.CryptoMath;
    }],
    execute: function () {
      BruteForceAnalyzer = (function () {
        function BruteForceAnalyzer() {
          _classCallCheck(this, BruteForceAnalyzer);

          this.analysis = null;
        }

        _createClass(BruteForceAnalyzer, [{
          key: 'getAnalysis',
          value: function getAnalysis(password, options) {
            this.validateAnalysisInput(password, options);
            this.password = password;
            this.options = options;
            this.analyze();
            return this.analysis;
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
            this.analysis = new BruteForceAnalysis();
            var charStats = new CharStatsCalculator().getStats(this.password);

            var searchSpaceDepth = charStats.getCharDepth(),
                searchSpaceLength = this.password.length;
            var searchSpaceSize = this.calculateSearchSpaceSize(searchSpaceDepth, searchSpaceLength);

            this.analysis.setCharStats(charStats);
            this.analysis.setSearchSpaceLength(searchSpaceLength);
            this.analysis.setSearchSpaceDepth(searchSpaceDepth);
            this.analysis.setSearchSpaceSize(searchSpaceSize);
            this.calculateCrackTime(searchSpaceSize);
            this.analysis.build();
          }
        }, {
          key: 'calculateSearchSpaceSize',
          value: function calculateSearchSpaceSize(spaceDepth, spaceLength) {
            return CryptoMath.caculateSearchSpaceSize(spaceDepth, spaceLength);
          }
        }, {
          key: 'calculateCrackTime',
          value: function calculateCrackTime(searchSpaceSize) {
            var onlineTime = this.getCrackTimeForSearchSizeAndSpeed(searchSpaceSize, this.options.getOnlineAttackSpeed());
            this.analysis.setOnlineAttackCrackTime(onlineTime, this.options.getOnlineAttackSpeed());

            var offlineTime = this.getCrackTimeForSearchSizeAndSpeed(searchSpaceSize, this.options.getOfflineAttackSpeed());
            this.analysis.setOfflineAttackCrackTime(offlineTime, this.options.getOfflineAttackSpeed());
          }
        }, {
          key: 'getCrackTimeForSearchSizeAndSpeed',
          value: function getCrackTimeForSearchSizeAndSpeed(searchSpaceSize, speed) {
            return searchSpaceSize / speed;
          }
        }]);

        return BruteForceAnalyzer;
      })();

      _export('BruteForceAnalyzer', BruteForceAnalyzer);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2FuYWx5c2lzL2FuYWx5emVycy9icnV0ZS1mb3JjZS9hbmFseXplci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7eUVBc0JhLGtCQUFrQjs7Ozs7Ozs7Ozt1QkFuQjdCLE1BQU07OzBEQUtOLG1CQUFtQjs7cUNBS25CLGtCQUFrQjs7bUNBS2xCLFVBQVU7OztBQUlDLHdCQUFrQjtBQUdsQixpQkFIQSxrQkFBa0IsR0FHZjtnQ0FISCxrQkFBa0I7O2VBQzdCLFFBQVEsR0FBRyxJQUFJO1NBRUM7O3FCQUhMLGtCQUFrQjs7aUJBS2xCLHFCQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUU7QUFDN0IsZ0JBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDOUMsZ0JBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0FBQ3pCLGdCQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixnQkFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ2YsbUJBQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztXQUN0Qjs7O2lCQUVvQiwrQkFBQyxRQUFRLEVBQUUsT0FBTyxFQUFFO0FBQ3ZDLGdCQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxFQUFFO0FBQzdELG9CQUFNLE1BQU0sQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUM7YUFDdkM7O0FBRUQsZ0JBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLEVBQUU7QUFDNUQsb0JBQU0sTUFBTSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQzthQUN0QztXQUNGOzs7aUJBRU0sbUJBQUc7QUFDUixnQkFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGtCQUFrQixFQUFFLENBQUM7QUFDekMsZ0JBQUksU0FBUyxHQUFHLElBQUksbUJBQW1CLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDOztBQUVsRSxnQkFBSSxnQkFBZ0IsR0FBRyxTQUFTLENBQUMsWUFBWSxFQUFFO2dCQUM3QyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztBQUMzQyxnQkFBSSxlQUFlLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLGdCQUFnQixFQUFFLGlCQUFpQixDQUFDLENBQUM7O0FBRXpGLGdCQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUN0QyxnQkFBSSxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ3RELGdCQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDcEQsZ0JBQUksQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDbEQsZ0JBQUksQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUN6QyxnQkFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztXQUN2Qjs7O2lCQUV1QixrQ0FBQyxVQUFVLEVBQUUsV0FBVyxFQUFFO0FBQ2hELG1CQUFPLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUM7V0FDcEU7OztpQkFFaUIsNEJBQUMsZUFBZSxFQUFFO0FBQ2xDLGdCQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsaUNBQWlDLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDO0FBQzlHLGdCQUFJLENBQUMsUUFBUSxDQUFDLHdCQUF3QixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQzs7QUFFeEYsZ0JBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLENBQUM7QUFDaEgsZ0JBQUksQ0FBQyxRQUFRLENBQUMseUJBQXlCLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxDQUFDO1dBQzVGOzs7aUJBRWdDLDJDQUFDLGVBQWUsRUFBRSxLQUFLLEVBQUU7QUFDeEQsbUJBQU8sZUFBZSxHQUFHLEtBQUssQ0FBQztXQUNoQzs7O2VBckRVLGtCQUFrQiIsImZpbGUiOiJzZXJ2aWNlcy9hbmFseXNpcy9hbmFseXplcnMvYnJ1dGUtZm9yY2UvYW5hbHl6ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdmFvdyBmcm9tICd2YW93JztcclxuXHJcbmltcG9ydCB7XHJcbiAgTG9jYWxlXHJcbn1cclxuZnJvbSAnLi4vLi4vLi4vLi4vbG9jYWxlJztcclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhclN0YXRzQ2FsY3VsYXRvclxyXG59XHJcbmZyb20gJy4uLy4uLy4uL2NoYXItc3RhdHMvY2hhci1zdGF0cy1jYWxjdWxhdG9yJztcclxuXHJcbmltcG9ydCB7XHJcbiAgQnJ1dGVGb3JjZUFuYWx5c2lzXHJcbn1cclxuZnJvbSAnLi9hbmFseXNpcyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIENyeXB0b01hdGhcclxufVxyXG5mcm9tICcuLi8uLi8uLi91dGlsL2NyeXB0by1tYXRoJztcclxuXHJcbmV4cG9ydCBjbGFzcyBCcnV0ZUZvcmNlQW5hbHl6ZXIge1xyXG4gIGFuYWx5c2lzID0gbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBnZXRBbmFseXNpcyhwYXNzd29yZCwgb3B0aW9ucykge1xyXG4gICAgdGhpcy52YWxpZGF0ZUFuYWx5c2lzSW5wdXQocGFzc3dvcmQsIG9wdGlvbnMpO1xyXG4gICAgdGhpcy5wYXNzd29yZCA9IHBhc3N3b3JkO1xyXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuICAgIHRoaXMuYW5hbHl6ZSgpO1xyXG4gICAgcmV0dXJuIHRoaXMuYW5hbHlzaXM7XHJcbiAgfVxyXG5cclxuICB2YWxpZGF0ZUFuYWx5c2lzSW5wdXQocGFzc3dvcmQsIG9wdGlvbnMpIHtcclxuICAgIGlmICghd2luZG93LnZhb3cudXRpbC5WYWxpZGF0b3IuaXNEZWZpbmVkQW5kTm90TnVsbChwYXNzd29yZCkpIHtcclxuICAgICAgdGhyb3cgTG9jYWxlLkVycm9yLkludmFsaWRBcmdQYXNzd29yZDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXdpbmRvdy52YW93LnV0aWwuVmFsaWRhdG9yLmlzRGVmaW5lZEFuZE5vdE51bGwob3B0aW9ucykpIHtcclxuICAgICAgdGhyb3cgTG9jYWxlLkVycm9yLkludmFsaWRBcmdPcHRpb25zO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYW5hbHl6ZSgpIHtcclxuICAgIHRoaXMuYW5hbHlzaXMgPSBuZXcgQnJ1dGVGb3JjZUFuYWx5c2lzKCk7XHJcbiAgICBsZXQgY2hhclN0YXRzID0gbmV3IENoYXJTdGF0c0NhbGN1bGF0b3IoKS5nZXRTdGF0cyh0aGlzLnBhc3N3b3JkKTtcclxuXHJcbiAgICBsZXQgc2VhcmNoU3BhY2VEZXB0aCA9IGNoYXJTdGF0cy5nZXRDaGFyRGVwdGgoKSxcclxuICAgICAgc2VhcmNoU3BhY2VMZW5ndGggPSB0aGlzLnBhc3N3b3JkLmxlbmd0aDtcclxuICAgIGxldCBzZWFyY2hTcGFjZVNpemUgPSB0aGlzLmNhbGN1bGF0ZVNlYXJjaFNwYWNlU2l6ZShzZWFyY2hTcGFjZURlcHRoLCBzZWFyY2hTcGFjZUxlbmd0aCk7XHJcblxyXG4gICAgdGhpcy5hbmFseXNpcy5zZXRDaGFyU3RhdHMoY2hhclN0YXRzKTtcclxuICAgIHRoaXMuYW5hbHlzaXMuc2V0U2VhcmNoU3BhY2VMZW5ndGgoc2VhcmNoU3BhY2VMZW5ndGgpO1xyXG4gICAgdGhpcy5hbmFseXNpcy5zZXRTZWFyY2hTcGFjZURlcHRoKHNlYXJjaFNwYWNlRGVwdGgpO1xyXG4gICAgdGhpcy5hbmFseXNpcy5zZXRTZWFyY2hTcGFjZVNpemUoc2VhcmNoU3BhY2VTaXplKTtcclxuICAgIHRoaXMuY2FsY3VsYXRlQ3JhY2tUaW1lKHNlYXJjaFNwYWNlU2l6ZSk7XHJcbiAgICB0aGlzLmFuYWx5c2lzLmJ1aWxkKCk7XHJcbiAgfVxyXG5cclxuICBjYWxjdWxhdGVTZWFyY2hTcGFjZVNpemUoc3BhY2VEZXB0aCwgc3BhY2VMZW5ndGgpIHtcclxuICAgIHJldHVybiBDcnlwdG9NYXRoLmNhY3VsYXRlU2VhcmNoU3BhY2VTaXplKHNwYWNlRGVwdGgsIHNwYWNlTGVuZ3RoKTtcclxuICB9XHJcblxyXG4gIGNhbGN1bGF0ZUNyYWNrVGltZShzZWFyY2hTcGFjZVNpemUpIHtcclxuICAgIGxldCBvbmxpbmVUaW1lID0gdGhpcy5nZXRDcmFja1RpbWVGb3JTZWFyY2hTaXplQW5kU3BlZWQoc2VhcmNoU3BhY2VTaXplLCB0aGlzLm9wdGlvbnMuZ2V0T25saW5lQXR0YWNrU3BlZWQoKSk7XHJcbiAgICB0aGlzLmFuYWx5c2lzLnNldE9ubGluZUF0dGFja0NyYWNrVGltZShvbmxpbmVUaW1lLCB0aGlzLm9wdGlvbnMuZ2V0T25saW5lQXR0YWNrU3BlZWQoKSk7XHJcblxyXG4gICAgbGV0IG9mZmxpbmVUaW1lID0gdGhpcy5nZXRDcmFja1RpbWVGb3JTZWFyY2hTaXplQW5kU3BlZWQoc2VhcmNoU3BhY2VTaXplLCB0aGlzLm9wdGlvbnMuZ2V0T2ZmbGluZUF0dGFja1NwZWVkKCkpO1xyXG4gICAgdGhpcy5hbmFseXNpcy5zZXRPZmZsaW5lQXR0YWNrQ3JhY2tUaW1lKG9mZmxpbmVUaW1lLCB0aGlzLm9wdGlvbnMuZ2V0T2ZmbGluZUF0dGFja1NwZWVkKCkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q3JhY2tUaW1lRm9yU2VhcmNoU2l6ZUFuZFNwZWVkKHNlYXJjaFNwYWNlU2l6ZSwgc3BlZWQpIHtcclxuICAgIHJldHVybiBzZWFyY2hTcGFjZVNpemUgLyBzcGVlZDtcclxuICB9XHJcbn1cclxuIl19
