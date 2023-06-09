System.register(['../../locale', 'vaow', './analysis-item'], function (_export) {
  'use strict';

  var Locale, vaow, AnalysisItem, AnalysisBase;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_locale) {
      Locale = _locale.Locale;
    }, function (_vaow) {
      vaow = _vaow['default'];
    }, function (_analysisItem) {
      AnalysisItem = _analysisItem.AnalysisItem;
    }],
    execute: function () {
      AnalysisBase = (function () {
        function AnalysisBase(name) {
          _classCallCheck(this, AnalysisBase);

          this.analysisItems = [];

          if (window.vaow.util.Validator.isDefinedAndNotNull(name)) {
            this.name = name;
          } else {
            throw Locale.Error.InvalidArgName;
          }
        }

        _createClass(AnalysisBase, [{
          key: 'getName',
          value: function getName() {
            return this.name;
          }
        }, {
          key: 'addAnalysisItem',
          value: function addAnalysisItem(analysisItem) {
            if (window.vaow.util.Validator.isDefinedAndNotNull(analysisItem)) {
              this.analysisItems.push(analysisItem);
            } else {
              throw Locale.Error.InvalidArgAnalysisItem;
            }
          }
        }, {
          key: 'getAllItems',
          value: function getAllItems() {
            return this.analysisItems;
          }
        }]);

        return AnalysisBase;
      })();

      _export('AnalysisBase', AnalysisBase);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2FuYWx5c2lzL2FuYWx5c2lzLWJhc2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2tDQVlhLFlBQVk7Ozs7Ozs7O3VCQVh2QixNQUFNOzs7O21DQU9OLFlBQVk7OztBQUlELGtCQUFZO0FBR1osaUJBSEEsWUFBWSxDQUdYLElBQUksRUFBRTtnQ0FIUCxZQUFZOztlQUN2QixhQUFhLEdBQUcsRUFBRTs7QUFHaEIsY0FBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDeEQsZ0JBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1dBQ2xCLE1BQU07QUFDTCxrQkFBTSxNQUFNLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQztXQUNuQztTQUNGOztxQkFUVSxZQUFZOztpQkFXaEIsbUJBQUc7QUFDUixtQkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDO1dBQ2xCOzs7aUJBRWMseUJBQUMsWUFBWSxFQUFFO0FBQzVCLGdCQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLENBQUMsRUFBRTtBQUNoRSxrQkFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDdkMsTUFBTTtBQUNMLG9CQUFNLE1BQU0sQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUM7YUFDM0M7V0FDRjs7O2lCQUVVLHVCQUFHO0FBQ1osbUJBQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztXQUMzQjs7O2VBekJVLFlBQVkiLCJmaWxlIjoic2VydmljZXMvYW5hbHlzaXMvYW5hbHlzaXMtYmFzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgTG9jYWxlXHJcbn1cclxuZnJvbSAnLi4vLi4vbG9jYWxlJztcclxuXHJcbmltcG9ydCB2YW93IGZyb20gJ3Zhb3cnO1xyXG5cclxuaW1wb3J0IHtcclxuICBBbmFseXNpc0l0ZW1cclxufVxyXG5mcm9tICcuL2FuYWx5c2lzLWl0ZW0nO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFuYWx5c2lzQmFzZSB7XHJcbiAgYW5hbHlzaXNJdGVtcyA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgICBpZiAod2luZG93LnZhb3cudXRpbC5WYWxpZGF0b3IuaXNEZWZpbmVkQW5kTm90TnVsbChuYW1lKSkge1xyXG4gICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgTG9jYWxlLkVycm9yLkludmFsaWRBcmdOYW1lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0TmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgfVxyXG5cclxuICBhZGRBbmFseXNpc0l0ZW0oYW5hbHlzaXNJdGVtKSB7XHJcbiAgICBpZiAod2luZG93LnZhb3cudXRpbC5WYWxpZGF0b3IuaXNEZWZpbmVkQW5kTm90TnVsbChhbmFseXNpc0l0ZW0pKSB7XHJcbiAgICAgIHRoaXMuYW5hbHlzaXNJdGVtcy5wdXNoKGFuYWx5c2lzSXRlbSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBMb2NhbGUuRXJyb3IuSW52YWxpZEFyZ0FuYWx5c2lzSXRlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEFsbEl0ZW1zKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuYW5hbHlzaXNJdGVtcztcclxuICB9XHJcbn1cclxuIl19
