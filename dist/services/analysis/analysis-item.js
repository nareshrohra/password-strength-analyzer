System.register(['../../locale', 'vaow'], function (_export) {
  'use strict';

  var Locale, vaow, AnalysisItem, TimeAnalysisItem, NumberAnalysisItem;

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_locale) {
      Locale = _locale.Locale;
    }, function (_vaow) {
      vaow = _vaow['default'];
    }],
    execute: function () {
      AnalysisItem = (function () {
        function AnalysisItem(name, value, nameHint, valueHint) {
          _classCallCheck(this, AnalysisItem);

          this.highValueThreshold = Math.pow(10, 6);
          this.validate(name, value);
          this.name = name;
          this.value = this.text = value;
          this.nameHint = nameHint;
          this.valueHint = valueHint;
        }

        _createClass(AnalysisItem, [{
          key: 'setHighValueThreshold',
          value: function setHighValueThreshold(threshold) {
            this.highValueThreshold = threshold;
          }
        }, {
          key: 'validate',
          value: function validate(name, value) {
            if (!window.vaow.util.Validator.isDefinedAndNotNull(name)) {
              throw Locale.Error.InvalidArgName;
            }

            if (!window.vaow.util.Validator.isDefinedAndNotNull(value)) {
              throw Locale.Error.InvalidArgValue;
            }
          }
        }, {
          key: 'setTranslator',
          value: function setTranslator(translator) {
            this.translator = translator;
          }
        }, {
          key: 'setTranslationText',
          value: function setTranslationText() {
            this.text = this.translator.translate(this.value);
          }
        }, {
          key: 'appendToTranslatedText',
          value: function appendToTranslatedText(text) {
            this.text += text;
          }
        }, {
          key: 'getName',
          value: function getName() {
            return this.name;
          }
        }, {
          key: 'getNameHint',
          value: function getNameHint() {
            return this.nameHint || '';
          }
        }, {
          key: 'hasNameHint',
          value: function hasNameHint() {
            return this.getNameHint().length > 0;
          }
        }, {
          key: 'getText',
          value: function getText() {
            return this.text;
          }
        }, {
          key: 'getTextHint',
          value: function getTextHint() {
            return this.valueHint || '';
          }
        }, {
          key: 'hasTextHint',
          value: function hasTextHint() {
            return this.getTextHint().length > 0;
          }
        }, {
          key: 'isHighValue',
          value: function isHighValue() {
            return this.value >= this.highValueThreshold;
          }
        }]);

        return AnalysisItem;
      })();

      _export('AnalysisItem', AnalysisItem);

      TimeAnalysisItem = (function (_AnalysisItem) {
        _inherits(TimeAnalysisItem, _AnalysisItem);

        function TimeAnalysisItem(name, seconds, nameHint, valueHint) {
          _classCallCheck(this, TimeAnalysisItem);

          _get(Object.getPrototypeOf(TimeAnalysisItem.prototype), 'constructor', this).call(this, name, seconds, nameHint, valueHint);
          this.setTranslator(new window.vaow.TimeTranslator());
          this.setTranslationText();
        }

        return TimeAnalysisItem;
      })(AnalysisItem);

      _export('TimeAnalysisItem', TimeAnalysisItem);

      NumberAnalysisItem = (function (_AnalysisItem2) {
        _inherits(NumberAnalysisItem, _AnalysisItem2);

        function NumberAnalysisItem(name, number, nameHint, valueHint) {
          _classCallCheck(this, NumberAnalysisItem);

          _get(Object.getPrototypeOf(NumberAnalysisItem.prototype), 'constructor', this).call(this, name, number, nameHint, valueHint);
          this.setTranslator(new window.vaow.NumberTranslator());
          this.setTranslationText();
          if (this.isHighValue()) {
            var formattedText = window.vaow.NumberFormatter.format(this.value);
            this.appendToTranslatedText(' (' + formattedText + ')');
          }
        }

        return NumberAnalysisItem;
      })(AnalysisItem);

      _export('NumberAnalysisItem', NumberAnalysisItem);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2FuYWx5c2lzL2FuYWx5c2lzLWl0ZW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O29CQU9hLFlBQVksRUFpRVosZ0JBQWdCLEVBUWhCLGtCQUFrQjs7Ozs7Ozs7Ozs7O3VCQS9FN0IsTUFBTTs7Ozs7QUFNSyxrQkFBWTtBQUNaLGlCQURBLFlBQVksQ0FDWCxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUU7Z0NBRG5DLFlBQVk7O0FBRXJCLGNBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMxQyxjQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztBQUMzQixjQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixjQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0FBQy9CLGNBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0FBQ3pCLGNBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1NBQzVCOztxQkFSVSxZQUFZOztpQkFVRiwrQkFBQyxTQUFTLEVBQUU7QUFDL0IsZ0JBQUksQ0FBQyxrQkFBa0IsR0FBRyxTQUFTLENBQUM7V0FDckM7OztpQkFFTyxrQkFBQyxJQUFJLEVBQUUsS0FBSyxFQUFFO0FBQ3BCLGdCQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ3hELG9CQUFNLE1BQU0sQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDO2FBQ25DOztBQUVELGdCQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQ3pELG9CQUFNLE1BQU0sQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDO2FBQ3BDO1dBQ0Y7OztpQkFFWSx1QkFBQyxVQUFVLEVBQUU7QUFDeEIsZ0JBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1dBQzlCOzs7aUJBRWlCLDhCQUFHO0FBQ25CLGdCQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztXQUNuRDs7O2lCQUVxQixnQ0FBQyxJQUFJLEVBQUU7QUFDM0IsZ0JBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDO1dBQ25COzs7aUJBRU0sbUJBQUc7QUFDUixtQkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDO1dBQ2xCOzs7aUJBRVUsdUJBQUc7QUFDWixtQkFBTyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQztXQUM1Qjs7O2lCQUVVLHVCQUFFO0FBQ1gsbUJBQU8sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7V0FDdEM7OztpQkFFTSxtQkFBRztBQUNSLG1CQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7V0FDbEI7OztpQkFFVSx1QkFBRztBQUNaLG1CQUFPLElBQUksQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDO1dBQzdCOzs7aUJBRVUsdUJBQUU7QUFDWCxtQkFBTyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztXQUN0Qzs7O2lCQUVVLHVCQUFHO0FBQ1osbUJBQU8sSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUM7V0FDOUM7OztlQTlEVSxZQUFZOzs7OztBQWlFWixzQkFBZ0I7a0JBQWhCLGdCQUFnQjs7QUFDaEIsaUJBREEsZ0JBQWdCLENBQ2YsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFO2dDQURyQyxnQkFBZ0I7O0FBRXpCLHFDQUZTLGdCQUFnQiw2Q0FFbkIsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFO0FBQzFDLGNBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7QUFDckQsY0FBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FDM0I7O2VBTFUsZ0JBQWdCO1NBQVMsWUFBWTs7OztBQVFyQyx3QkFBa0I7a0JBQWxCLGtCQUFrQjs7QUFDbEIsaUJBREEsa0JBQWtCLENBQ2pCLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRTtnQ0FEcEMsa0JBQWtCOztBQUUzQixxQ0FGUyxrQkFBa0IsNkNBRXJCLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRTtBQUN6QyxjQUFJLENBQUMsYUFBYSxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7QUFDdkQsY0FBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7QUFDMUIsY0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUU7QUFDckIsZ0JBQUksYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDbkUsZ0JBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLEdBQUcsYUFBYSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1dBQ3pEO1NBQ0Y7O2VBVFUsa0JBQWtCO1NBQVMsWUFBWSIsImZpbGUiOiJzZXJ2aWNlcy9hbmFseXNpcy9hbmFseXNpcy1pdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBMb2NhbGVcclxufVxyXG5mcm9tICcuLi8uLi9sb2NhbGUnO1xyXG5cclxuaW1wb3J0IHZhb3cgZnJvbSAndmFvdyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQW5hbHlzaXNJdGVtIHtcclxuICBjb25zdHJ1Y3RvcihuYW1lLCB2YWx1ZSwgbmFtZUhpbnQsIHZhbHVlSGludCkge1xyXG4gICAgdGhpcy5oaWdoVmFsdWVUaHJlc2hvbGQgPSBNYXRoLnBvdygxMCwgNik7XHJcbiAgICB0aGlzLnZhbGlkYXRlKG5hbWUsIHZhbHVlKTtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLnZhbHVlID0gdGhpcy50ZXh0ID0gdmFsdWU7XHJcbiAgICB0aGlzLm5hbWVIaW50ID0gbmFtZUhpbnQ7XHJcbiAgICB0aGlzLnZhbHVlSGludCA9IHZhbHVlSGludDtcclxuICB9XHJcblxyXG4gIHNldEhpZ2hWYWx1ZVRocmVzaG9sZCh0aHJlc2hvbGQpIHtcclxuICAgIHRoaXMuaGlnaFZhbHVlVGhyZXNob2xkID0gdGhyZXNob2xkO1xyXG4gIH1cclxuXHJcbiAgdmFsaWRhdGUobmFtZSwgdmFsdWUpIHtcclxuICAgIGlmKCF3aW5kb3cudmFvdy51dGlsLlZhbGlkYXRvci5pc0RlZmluZWRBbmROb3ROdWxsKG5hbWUpKSB7XHJcbiAgICAgIHRocm93IExvY2FsZS5FcnJvci5JbnZhbGlkQXJnTmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBpZighd2luZG93LnZhb3cudXRpbC5WYWxpZGF0b3IuaXNEZWZpbmVkQW5kTm90TnVsbCh2YWx1ZSkpIHtcclxuICAgICAgdGhyb3cgTG9jYWxlLkVycm9yLkludmFsaWRBcmdWYWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldFRyYW5zbGF0b3IodHJhbnNsYXRvcikge1xyXG4gICAgdGhpcy50cmFuc2xhdG9yID0gdHJhbnNsYXRvcjtcclxuICB9XHJcblxyXG4gIHNldFRyYW5zbGF0aW9uVGV4dCgpIHtcclxuICAgIHRoaXMudGV4dCA9IHRoaXMudHJhbnNsYXRvci50cmFuc2xhdGUodGhpcy52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBhcHBlbmRUb1RyYW5zbGF0ZWRUZXh0KHRleHQpIHtcclxuICAgIHRoaXMudGV4dCArPSB0ZXh0O1xyXG4gIH1cclxuXHJcbiAgZ2V0TmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgfVxyXG5cclxuICBnZXROYW1lSGludCgpIHtcclxuICAgIHJldHVybiB0aGlzLm5hbWVIaW50IHx8ICcnO1xyXG4gIH1cclxuXHJcbiAgaGFzTmFtZUhpbnQoKXtcclxuICAgIHJldHVybiB0aGlzLmdldE5hbWVIaW50KCkubGVuZ3RoID4gMDtcclxuICB9XHJcblxyXG4gIGdldFRleHQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50ZXh0O1xyXG4gIH1cclxuXHJcbiAgZ2V0VGV4dEhpbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy52YWx1ZUhpbnQgfHwgJyc7XHJcbiAgfVxyXG5cclxuICBoYXNUZXh0SGludCgpe1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0VGV4dEhpbnQoKS5sZW5ndGggPiAwO1xyXG4gIH1cclxuXHJcbiAgaXNIaWdoVmFsdWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy52YWx1ZSA+PSB0aGlzLmhpZ2hWYWx1ZVRocmVzaG9sZDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUaW1lQW5hbHlzaXNJdGVtIGV4dGVuZHMgQW5hbHlzaXNJdGVtIHtcclxuICBjb25zdHJ1Y3RvcihuYW1lLCBzZWNvbmRzLCBuYW1lSGludCwgdmFsdWVIaW50KSB7XHJcbiAgICBzdXBlcihuYW1lLCBzZWNvbmRzLCBuYW1lSGludCwgdmFsdWVIaW50KTtcclxuICAgIHRoaXMuc2V0VHJhbnNsYXRvcihuZXcgd2luZG93LnZhb3cuVGltZVRyYW5zbGF0b3IoKSk7XHJcbiAgICB0aGlzLnNldFRyYW5zbGF0aW9uVGV4dCgpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE51bWJlckFuYWx5c2lzSXRlbSBleHRlbmRzIEFuYWx5c2lzSXRlbSB7XHJcbiAgY29uc3RydWN0b3IobmFtZSwgbnVtYmVyLCBuYW1lSGludCwgdmFsdWVIaW50KSB7XHJcbiAgICBzdXBlcihuYW1lLCBudW1iZXIsIG5hbWVIaW50LCB2YWx1ZUhpbnQpO1xyXG4gICAgdGhpcy5zZXRUcmFuc2xhdG9yKG5ldyB3aW5kb3cudmFvdy5OdW1iZXJUcmFuc2xhdG9yKCkpO1xyXG4gICAgdGhpcy5zZXRUcmFuc2xhdGlvblRleHQoKTtcclxuICAgIGlmKHRoaXMuaXNIaWdoVmFsdWUoKSkge1xyXG4gICAgICBsZXQgZm9ybWF0dGVkVGV4dCA9IHdpbmRvdy52YW93Lk51bWJlckZvcm1hdHRlci5mb3JtYXQodGhpcy52YWx1ZSk7XHJcbiAgICAgIHRoaXMuYXBwZW5kVG9UcmFuc2xhdGVkVGV4dCgnICgnICsgZm9ybWF0dGVkVGV4dCArICcpJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==
