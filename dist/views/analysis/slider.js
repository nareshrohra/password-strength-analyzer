System.register(['aurelia-framework', 'foundation/js/foundation/foundation', 'foundation/js/foundation/foundation.slider', '../base-view'], function (_export) {
  'use strict';

  var computedFrom, bindable, BaseView, Slider;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  return {
    setters: [function (_aureliaFramework) {
      computedFrom = _aureliaFramework.computedFrom;
      bindable = _aureliaFramework.bindable;
    }, function (_foundationJsFoundationFoundation) {}, function (_foundationJsFoundationFoundationSlider) {}, function (_baseView) {
      BaseView = _baseView.BaseView;
    }],
    execute: function () {
      Slider = (function (_BaseView) {
        var _instanceInitializers = {};

        _inherits(Slider, _BaseView);

        function Slider() {
          _classCallCheck(this, Slider);

          _get(Object.getPrototypeOf(Slider.prototype), 'constructor', this).apply(this, arguments);

          _defineDecoratedPropertyDescriptor(this, 'id', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'min', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'max', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'step', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'label', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'value', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'change', _instanceInitializers);
        }

        _createDecoratedClass(Slider, [{
          key: 'onRender',
          value: function onRender() {
            var self = this;
            var slider = $('#' + this.id);
            var input = slider.find('input[type="hidden"]');
            slider.on('change.fndtn.slider', function () {
              self.value = parseInt(input.val());
              self.raiseChange();
            });
          }
        }, {
          key: 'id',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'min',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'max',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'step',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'label',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'value',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'change',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }], null, _instanceInitializers);

        return Slider;
      })(BaseView);

      _export('Slider', Slider);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL2FuYWx5c2lzL3NsaWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7d0NBWWEsTUFBTTs7Ozs7Ozs7Ozs7Ozs7dUNBWGpCLFlBQVk7bUNBQUUsUUFBUTs7MkJBT3RCLFFBQVE7OztBQUlHLFlBQU07OztrQkFBTixNQUFNOztpQkFBTixNQUFNO2dDQUFOLE1BQU07O3FDQUFOLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUFOLE1BQU07O2lCQVNULG9CQUFHO0FBQ1QsZ0JBQUksSUFBSSxHQUFHLElBQUksQ0FBQztBQUNoQixnQkFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDOUIsZ0JBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUNoRCxrQkFBTSxDQUFDLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxZQUFXO0FBQzFDLGtCQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztBQUNuQyxrQkFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ3BCLENBQUMsQ0FBQztXQUNKOzs7dUJBaEJBLFFBQVE7Ozs7O3VCQUNSLFFBQVE7Ozs7O3VCQUNSLFFBQVE7Ozs7O3VCQUNSLFFBQVE7Ozs7O3VCQUNSLFFBQVE7Ozs7O3VCQUNSLFFBQVE7Ozs7O3VCQUNSLFFBQVE7Ozs7O2VBUEUsTUFBTTtTQUFTLFFBQVEiLCJmaWxlIjoidmlld3MvYW5hbHlzaXMvc2xpZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBjb21wdXRlZEZyb20sIGJpbmRhYmxlXHJcbn1cclxuZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5cclxuaW1wb3J0ICdmb3VuZGF0aW9uL2pzL2ZvdW5kYXRpb24vZm91bmRhdGlvbic7XHJcbmltcG9ydCAnZm91bmRhdGlvbi9qcy9mb3VuZGF0aW9uL2ZvdW5kYXRpb24uc2xpZGVyJztcclxuaW1wb3J0IHtcclxuICBCYXNlVmlld1xyXG59XHJcbmZyb20gJy4uL2Jhc2Utdmlldyc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2xpZGVyIGV4dGVuZHMgQmFzZVZpZXcge1xyXG4gIEBiaW5kYWJsZSBpZDtcclxuICBAYmluZGFibGUgbWluO1xyXG4gIEBiaW5kYWJsZSBtYXg7XHJcbiAgQGJpbmRhYmxlIHN0ZXA7XHJcbiAgQGJpbmRhYmxlIGxhYmVsO1xyXG4gIEBiaW5kYWJsZSB2YWx1ZTtcclxuICBAYmluZGFibGUgY2hhbmdlO1xyXG5cclxuICBvblJlbmRlcigpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIGxldCBzbGlkZXIgPSAkKCcjJyArIHRoaXMuaWQpO1xyXG4gICAgbGV0IGlucHV0ID0gc2xpZGVyLmZpbmQoJ2lucHV0W3R5cGU9XCJoaWRkZW5cIl0nKTtcclxuICAgIHNsaWRlci5vbignY2hhbmdlLmZuZHRuLnNsaWRlcicsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBzZWxmLnZhbHVlID0gcGFyc2VJbnQoaW5wdXQudmFsKCkpO1xyXG4gICAgICBzZWxmLnJhaXNlQ2hhbmdlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19
