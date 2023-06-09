System.register(['vaow', '../../../../locale', '../../analysis-base', '../../analysis-item'], function (_export) {
  'use strict';

  var vaow, Locale, AnalysisBase, AnalysisItem, TimeAnalysisItem, NumberAnalysisItem, BruteForceAnalysis;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  return {
    setters: [function (_vaow) {
      vaow = _vaow['default'];
    }, function (_locale) {
      Locale = _locale.Locale;
    }, function (_analysisBase) {
      AnalysisBase = _analysisBase.AnalysisBase;
    }, function (_analysisItem) {
      AnalysisItem = _analysisItem.AnalysisItem;
      TimeAnalysisItem = _analysisItem.TimeAnalysisItem;
      NumberAnalysisItem = _analysisItem.NumberAnalysisItem;
    }],
    execute: function () {
      BruteForceAnalysis = (function (_AnalysisBase) {
        _inherits(BruteForceAnalysis, _AnalysisBase);

        function BruteForceAnalysis() {
          _classCallCheck(this, BruteForceAnalysis);

          _get(Object.getPrototypeOf(BruteForceAnalysis.prototype), 'constructor', this).call(this, Locale.BruteForceAnalysisName);
          this.numberTranslator = new window.vaow.NumberTranslator();
        }

        _createClass(BruteForceAnalysis, [{
          key: 'setCharStats',
          value: function setCharStats(charStats) {
            if (window.vaow.util.Validator.isDefinedAndNotNull(charStats)) {
              this.charStats = charStats;
            } else {
              throw Locale.Error.InvalidArgCharStats;
            }
          }
        }, {
          key: 'setSearchSpaceDepth',
          value: function setSearchSpaceDepth(depth) {
            if (window.vaow.util.Validator.isPositiveNumber(depth)) {
              this.searchSpaceDepth = depth;
            } else {
              throw Locale.Error.InvalidArgDepth;
            }
          }
        }, {
          key: 'setSearchSpaceLength',
          value: function setSearchSpaceLength(length) {
            if (window.vaow.util.Validator.isPositiveNumber(length)) {
              this.searchSpaceLength = length;
            } else {
              throw Locale.Error.InvalidArgLength;
            }
          }
        }, {
          key: 'setSearchSpaceSize',
          value: function setSearchSpaceSize(size) {
            if (window.vaow.util.Validator.isPositiveNumber(size)) {
              this.searchSpaceSize = size;
            } else {
              throw Locale.Error.InvalidArgSize;
            }
          }
        }, {
          key: 'setOnlineAttackCrackTime',
          value: function setOnlineAttackCrackTime(time, attackSpeed) {
            this.validateCrackTime(time, attackSpeed);
            this.onlineAttackCrackTime = time;
            this.onlineAttackSpeed = attackSpeed;
          }
        }, {
          key: 'setOfflineAttackCrackTime',
          value: function setOfflineAttackCrackTime(time, attackSpeed) {
            this.validateCrackTime(time, attackSpeed);
            this.offlineAttackCrackTime = time;
            this.offlineAttackSpeed = attackSpeed;
          }
        }, {
          key: 'validateCrackTime',
          value: function validateCrackTime(time, attackSpeed) {
            if (!window.vaow.util.Validator.isPositiveNumber(time)) {
              throw Locale.Error.InvalidArgTime;
            }

            if (!window.vaow.util.Validator.isPositiveNumber(attackSpeed)) {
              throw Locale.Error.InvalidArgAttackSpeed;
            }
          }
        }, {
          key: 'build',
          value: function build() {
            this.addAnalysisItem(new NumberAnalysisItem("Search space length", this.searchSpaceLength, '', this.searchSpaceLength + ' characters'));

            this.addAnalysisItem(new NumberAnalysisItem("Search space depth", this.searchSpaceDepth, 'number of guesses for each character', this.getDepthValueHint()));

            this.addAnalysisItem(new NumberAnalysisItem("Search space size", this.searchSpaceSize, 'total guesses to attempt', this.getSizeValueHint()));

            var onlineAttackNameHint = 'with ' + this.numberTranslator.translate(this.onlineAttackSpeed) + ' guesses per second';
            this.addAnalysisItem(new TimeAnalysisItem("Online attack crack time", this.onlineAttackCrackTime, onlineAttackNameHint, ''));

            var offlineAttackNameHint = 'with ' + this.numberTranslator.translate(this.offlineAttackSpeed) + ' guesses per second';
            this.addAnalysisItem(new TimeAnalysisItem("Offline attack crack time", this.offlineAttackCrackTime, offlineAttackNameHint, ''));
          }
        }, {
          key: 'getDepthValueHint',
          value: function getDepthValueHint() {
            var hint = '';
            var allCharStats = this.charStats.getAllStats();
            var charStatsCount = allCharStats.length;
            for (var i = 0; i < charStatsCount; i++) {
              if (allCharStats[i].getMatchCount() > 0) {
                hint += (hint !== '' ? ' + ' : '') + allCharStats[i].getCharDepth() + ' (' + allCharStats[i].getName() + ')';
              }
            }
            return hint;
          }
        }, {
          key: 'getSizeValueHint',
          value: function getSizeValueHint() {
            return this.searchSpaceDepth + '^' + this.searchSpaceLength + (this.searchSpaceLength >= 2 ? ' + ' + this.searchSpaceDepth + '^' + (this.searchSpaceLength - 1) + (this.searchSpaceLength >= 3 ? ' + ...' : '') : '');
          }
        }]);

        return BruteForceAnalysis;
      })(AnalysisBase);

      _export('BruteForceAnalysis', BruteForceAnalysis);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2FuYWx5c2lzL2FuYWx5emVycy9icnV0ZS1mb3JjZS9hbmFseXNpcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7c0ZBaUJhLGtCQUFrQjs7Ozs7Ozs7Ozs7Ozs7dUJBZDdCLE1BQU07O21DQUtOLFlBQVk7O21DQUtaLFlBQVk7dUNBQUUsZ0JBQWdCO3lDQUFFLGtCQUFrQjs7O0FBSXZDLHdCQUFrQjtrQkFBbEIsa0JBQWtCOztBQUVsQixpQkFGQSxrQkFBa0IsR0FFZjtnQ0FGSCxrQkFBa0I7O0FBRzNCLHFDQUhTLGtCQUFrQiw2Q0FHckIsTUFBTSxDQUFDLHNCQUFzQixFQUFFO2VBRnZDLGdCQUFnQixHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtTQUdwRDs7cUJBSlUsa0JBQWtCOztpQkFNakIsc0JBQUMsU0FBUyxFQUFFO0FBQ3RCLGdCQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsRUFBRTtBQUM3RCxrQkFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7YUFDNUIsTUFBTTtBQUNMLG9CQUFNLE1BQU0sQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUM7YUFDeEM7V0FDRjs7O2lCQUVrQiw2QkFBQyxLQUFLLEVBQUU7QUFDekIsZ0JBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQ3RELGtCQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO2FBQy9CLE1BQU07QUFDTCxvQkFBTSxNQUFNLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQzthQUNwQztXQUNGOzs7aUJBRW1CLDhCQUFDLE1BQU0sRUFBRTtBQUMzQixnQkFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7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RWdCLDZCQUFHO0FBQ2xCLGdCQUFJLElBQUksR0FBRyxFQUFFLENBQUM7QUFDZCxnQkFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUNoRCxnQkFBSSxjQUFjLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQztBQUN6QyxpQkFBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGNBQWMsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN2QyxrQkFBSSxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxFQUFFO0FBQ3ZDLG9CQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssRUFBRSxHQUFHLEtBQUssR0FBRyxFQUFFLENBQUEsR0FBSSxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUFFLEdBQUcsSUFBSSxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxHQUFHLENBQUM7ZUFDOUc7YUFDRjtBQUNELG1CQUFPLElBQUksQ0FBQztXQUNiOzs7aUJBRWUsNEJBQUc7QUFDakIsbUJBQU8sSUFBSSxDQUFDLGdCQUFnQixHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsaUJBQWlCLElBQUksSUFBSSxDQUFDLGlCQUFpQixJQUFJLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFBLEFBQUMsSUFBSSxJQUFJLENBQUMsaUJBQWlCLElBQUksQ0FBQyxHQUFHLFFBQVEsR0FBRyxFQUFFLENBQUEsQUFBQyxHQUFHLEVBQUUsQ0FBQSxBQUFDLENBQUM7V0FDdk47OztlQXhGVSxrQkFBa0I7U0FBUyxZQUFZIiwiZmlsZSI6InNlcnZpY2VzL2FuYWx5c2lzL2FuYWx5emVycy9icnV0ZS1mb3JjZS9hbmFseXNpcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB2YW93IGZyb20gJ3Zhb3cnO1xyXG5cclxuaW1wb3J0IHtcclxuICBMb2NhbGVcclxufVxyXG5mcm9tICcuLi8uLi8uLi8uLi9sb2NhbGUnO1xyXG5cclxuaW1wb3J0IHtcclxuICBBbmFseXNpc0Jhc2VcclxufVxyXG5mcm9tICcuLi8uLi9hbmFseXNpcy1iYXNlJztcclxuXHJcbmltcG9ydCB7XHJcbiAgQW5hbHlzaXNJdGVtLCBUaW1lQW5hbHlzaXNJdGVtLCBOdW1iZXJBbmFseXNpc0l0ZW1cclxufVxyXG5mcm9tICcuLi8uLi9hbmFseXNpcy1pdGVtJztcclxuXHJcbmV4cG9ydCBjbGFzcyBCcnV0ZUZvcmNlQW5hbHlzaXMgZXh0ZW5kcyBBbmFseXNpc0Jhc2Uge1xyXG4gIG51bWJlclRyYW5zbGF0b3IgPSBuZXcgd2luZG93LnZhb3cuTnVtYmVyVHJhbnNsYXRvcigpO1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoTG9jYWxlLkJydXRlRm9yY2VBbmFseXNpc05hbWUpO1xyXG4gIH1cclxuXHJcbiAgc2V0Q2hhclN0YXRzKGNoYXJTdGF0cykge1xyXG4gICAgaWYgKHdpbmRvdy52YW93LnV0aWwuVmFsaWRhdG9yLmlzRGVmaW5lZEFuZE5vdE51bGwoY2hhclN0YXRzKSkge1xyXG4gICAgICB0aGlzLmNoYXJTdGF0cyA9IGNoYXJTdGF0cztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IExvY2FsZS5FcnJvci5JbnZhbGlkQXJnQ2hhclN0YXRzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0U2VhcmNoU3BhY2VEZXB0aChkZXB0aCkge1xyXG4gICAgaWYgKHdpbmRvdy52YW93LnV0aWwuVmFsaWRhdG9yLmlzUG9zaXRpdmVOdW1iZXIoZGVwdGgpKSB7XHJcbiAgICAgIHRoaXMuc2VhcmNoU3BhY2VEZXB0aCA9IGRlcHRoO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgTG9jYWxlLkVycm9yLkludmFsaWRBcmdEZXB0aDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldFNlYXJjaFNwYWNlTGVuZ3RoKGxlbmd0aCkge1xyXG4gICAgaWYgKHdpbmRvdy52YW93LnV0aWwuVmFsaWRhdG9yLmlzUG9zaXRpdmVOdW1iZXIobGVuZ3RoKSkge1xyXG4gICAgICB0aGlzLnNlYXJjaFNwYWNlTGVuZ3RoID0gbGVuZ3RoO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgTG9jYWxlLkVycm9yLkludmFsaWRBcmdMZW5ndGg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRTZWFyY2hTcGFjZVNpemUoc2l6ZSkge1xyXG4gICAgaWYgKHdpbmRvdy52YW93LnV0aWwuVmFsaWRhdG9yLmlzUG9zaXRpdmVOdW1iZXIoc2l6ZSkpIHtcclxuICAgICAgdGhpcy5zZWFyY2hTcGFjZVNpemUgPSBzaXplO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgTG9jYWxlLkVycm9yLkludmFsaWRBcmdTaXplO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0T25saW5lQXR0YWNrQ3JhY2tUaW1lKHRpbWUsIGF0dGFja1NwZWVkKSB7XHJcbiAgICB0aGlzLnZhbGlkYXRlQ3JhY2tUaW1lKHRpbWUsIGF0dGFja1NwZWVkKTtcclxuICAgIHRoaXMub25saW5lQXR0YWNrQ3JhY2tUaW1lID0gdGltZTtcclxuICAgIHRoaXMub25saW5lQXR0YWNrU3BlZWQgPSBhdHRhY2tTcGVlZDtcclxuICB9XHJcblxyXG4gIHNldE9mZmxpbmVBdHRhY2tDcmFja1RpbWUodGltZSwgYXR0YWNrU3BlZWQpIHtcclxuICAgIHRoaXMudmFsaWRhdGVDcmFja1RpbWUodGltZSwgYXR0YWNrU3BlZWQpO1xyXG4gICAgdGhpcy5vZmZsaW5lQXR0YWNrQ3JhY2tUaW1lID0gdGltZTtcclxuICAgIHRoaXMub2ZmbGluZUF0dGFja1NwZWVkID0gYXR0YWNrU3BlZWQ7XHJcbiAgfVxyXG5cclxuICB2YWxpZGF0ZUNyYWNrVGltZSh0aW1lLCBhdHRhY2tTcGVlZCkge1xyXG4gICAgaWYgKCF3aW5kb3cudmFvdy51dGlsLlZhbGlkYXRvci5pc1Bvc2l0aXZlTnVtYmVyKHRpbWUpKSB7XHJcbiAgICAgIHRocm93IExvY2FsZS5FcnJvci5JbnZhbGlkQXJnVGltZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXdpbmRvdy52YW93LnV0aWwuVmFsaWRhdG9yLmlzUG9zaXRpdmVOdW1iZXIoYXR0YWNrU3BlZWQpKSB7XHJcbiAgICAgIHRocm93IExvY2FsZS5FcnJvci5JbnZhbGlkQXJnQXR0YWNrU3BlZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBidWlsZCgpIHtcclxuICAgIHRoaXMuYWRkQW5hbHlzaXNJdGVtKG5ldyBOdW1iZXJBbmFseXNpc0l0ZW0oXCJTZWFyY2ggc3BhY2UgbGVuZ3RoXCIsIHRoaXMuc2VhcmNoU3BhY2VMZW5ndGgsICcnLCB0aGlzLnNlYXJjaFNwYWNlTGVuZ3RoICsgJyBjaGFyYWN0ZXJzJykpO1xyXG5cclxuICAgIHRoaXMuYWRkQW5hbHlzaXNJdGVtKG5ldyBOdW1iZXJBbmFseXNpc0l0ZW0oXCJTZWFyY2ggc3BhY2UgZGVwdGhcIiwgdGhpcy5zZWFyY2hTcGFjZURlcHRoLCAnbnVtYmVyIG9mIGd1ZXNzZXMgZm9yIGVhY2ggY2hhcmFjdGVyJywgdGhpcy5nZXREZXB0aFZhbHVlSGludCgpKSk7XHJcblxyXG4gICAgdGhpcy5hZGRBbmFseXNpc0l0ZW0obmV3IE51bWJlckFuYWx5c2lzSXRlbShcIlNlYXJjaCBzcGFjZSBzaXplXCIsIHRoaXMuc2VhcmNoU3BhY2VTaXplLCAndG90YWwgZ3Vlc3NlcyB0byBhdHRlbXB0JywgdGhpcy5nZXRTaXplVmFsdWVIaW50KCkpKTtcclxuXHJcbiAgICBsZXQgb25saW5lQXR0YWNrTmFtZUhpbnQgPSAnd2l0aCAnICsgdGhpcy5udW1iZXJUcmFuc2xhdG9yLnRyYW5zbGF0ZSh0aGlzLm9ubGluZUF0dGFja1NwZWVkKSArICcgZ3Vlc3NlcyBwZXIgc2Vjb25kJztcclxuICAgIHRoaXMuYWRkQW5hbHlzaXNJdGVtKG5ldyBUaW1lQW5hbHlzaXNJdGVtKFwiT25saW5lIGF0dGFjayBjcmFjayB0aW1lXCIsIHRoaXMub25saW5lQXR0YWNrQ3JhY2tUaW1lLCBvbmxpbmVBdHRhY2tOYW1lSGludCwgJycpKTtcclxuXHJcbiAgICBsZXQgb2ZmbGluZUF0dGFja05hbWVIaW50ID0gJ3dpdGggJyArIHRoaXMubnVtYmVyVHJhbnNsYXRvci50cmFuc2xhdGUodGhpcy5vZmZsaW5lQXR0YWNrU3BlZWQpICsgJyBndWVzc2VzIHBlciBzZWNvbmQnO1xyXG4gICAgdGhpcy5hZGRBbmFseXNpc0l0ZW0obmV3IFRpbWVBbmFseXNpc0l0ZW0oXCJPZmZsaW5lIGF0dGFjayBjcmFjayB0aW1lXCIsIHRoaXMub2ZmbGluZUF0dGFja0NyYWNrVGltZSwgb2ZmbGluZUF0dGFja05hbWVIaW50LCAnJykpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGVwdGhWYWx1ZUhpbnQoKSB7XHJcbiAgICBsZXQgaGludCA9ICcnO1xyXG4gICAgbGV0IGFsbENoYXJTdGF0cyA9IHRoaXMuY2hhclN0YXRzLmdldEFsbFN0YXRzKCk7XHJcbiAgICBsZXQgY2hhclN0YXRzQ291bnQgPSBhbGxDaGFyU3RhdHMubGVuZ3RoO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGFyU3RhdHNDb3VudDsgaSsrKSB7XHJcbiAgICAgIGlmIChhbGxDaGFyU3RhdHNbaV0uZ2V0TWF0Y2hDb3VudCgpID4gMCkge1xyXG4gICAgICAgIGhpbnQgKz0gKGhpbnQgIT09ICcnID8gJyArICcgOiAnJykgKyBhbGxDaGFyU3RhdHNbaV0uZ2V0Q2hhckRlcHRoKCkgKyAnICgnICsgYWxsQ2hhclN0YXRzW2ldLmdldE5hbWUoKSArICcpJztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGhpbnQ7XHJcbiAgfVxyXG5cclxuICBnZXRTaXplVmFsdWVIaW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2VhcmNoU3BhY2VEZXB0aCArICdeJyArIHRoaXMuc2VhcmNoU3BhY2VMZW5ndGggKyAodGhpcy5zZWFyY2hTcGFjZUxlbmd0aCA+PSAyID8gJyArICcgKyB0aGlzLnNlYXJjaFNwYWNlRGVwdGggKyAnXicgKyAodGhpcy5zZWFyY2hTcGFjZUxlbmd0aCAtIDEpICsgKHRoaXMuc2VhcmNoU3BhY2VMZW5ndGggPj0gMyA/ICcgKyAuLi4nIDogJycpIDogJycpO1xyXG4gIH1cclxufVxyXG4iXX0=
