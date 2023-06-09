System.register(['aurelia-framework', '../base-view'], function (_export) {
  'use strict';

  var computedFrom, bindable, BaseView, Options, OptionsModel;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      computedFrom = _aureliaFramework.computedFrom;
      bindable = _aureliaFramework.bindable;
    }, function (_baseView) {
      BaseView = _baseView.BaseView;
    }],
    execute: function () {
      Options = (function (_BaseView) {
        var _instanceInitializers = {};
        var _instanceInitializers = {};

        _inherits(Options, _BaseView);

        _createDecoratedClass(Options, [{
          key: 'model',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'change',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }], null, _instanceInitializers);

        function Options() {
          _classCallCheck(this, Options);

          _get(Object.getPrototypeOf(Options.prototype), 'constructor', this).call(this);

          _defineDecoratedPropertyDescriptor(this, 'model', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'change', _instanceInitializers);
        }

        _createDecoratedClass(Options, [{
          key: 'sliderChanged',
          value: function sliderChanged() {
            console.log(this.model.onlineAttackSpeed);
            this.raiseChange();
          }
        }, {
          key: 'onRender',
          value: function onRender() {
            $(document).foundation();
          }
        }], null, _instanceInitializers);

        return Options;
      })(BaseView);

      _export('Options', Options);

      OptionsModel = (function () {
        function OptionsModel(online, offline) {
          _classCallCheck(this, OptionsModel);

          this.onlineAttackSpeed = online;
          this.offlineAttackSpeed = offline;
        }

        _createClass(OptionsModel, [{
          key: 'getOnlineAttackSpeed',
          value: function getOnlineAttackSpeed() {
            return this.onlineAttackSpeed;
          }
        }, {
          key: 'getOfflineAttackSpeed',
          value: function getOfflineAttackSpeed() {
            return this.offlineAttackSpeed * Math.pow(10, 9);
          }
        }]);

        return OptionsModel;
      })();

      _export('OptionsModel', OptionsModel);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL2FuYWx5c2lzL29wdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3dDQVNhLE9BQU8sRUFrQlAsWUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozt1Q0ExQnZCLFlBQVk7bUNBQUUsUUFBUTs7MkJBSXRCLFFBQVE7OztBQUlHLGFBQU87Ozs7a0JBQVAsT0FBTzs7OEJBQVAsT0FBTzs7dUJBQ2pCLFFBQVE7Ozs7O3VCQUNSLFFBQVE7Ozs7O0FBRUUsaUJBSkEsT0FBTyxHQUlKO2dDQUpILE9BQU87O0FBS2hCLHFDQUxTLE9BQU8sNkNBS1I7Ozs7O1NBQ1Q7OzhCQU5VLE9BQU87O2lCQVFMLHlCQUFHO0FBQ2QsbUJBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQzFDLGdCQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7V0FDcEI7OztpQkFFTyxvQkFBRztBQUNULGFBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztXQUMxQjs7O2VBZlUsT0FBTztTQUFTLFFBQVE7Ozs7QUFrQnhCLGtCQUFZO0FBQ1osaUJBREEsWUFBWSxDQUNYLE1BQU0sRUFBRSxPQUFPLEVBQUU7Z0NBRGxCLFlBQVk7O0FBRXJCLGNBQUksQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUM7QUFDaEMsY0FBSSxDQUFDLGtCQUFrQixHQUFHLE9BQU8sQ0FBQztTQUNuQzs7cUJBSlUsWUFBWTs7aUJBTUgsZ0NBQUc7QUFDckIsbUJBQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO1dBQy9COzs7aUJBRW9CLGlDQUFHO0FBQ3RCLG1CQUFPLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztXQUNsRDs7O2VBWlUsWUFBWSIsImZpbGUiOiJ2aWV3cy9hbmFseXNpcy9vcHRpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBjb21wdXRlZEZyb20sIGJpbmRhYmxlXHJcbn1cclxuZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge1xyXG4gIEJhc2VWaWV3XHJcbn1cclxuZnJvbSAnLi4vYmFzZS12aWV3JztcclxuXHJcbmV4cG9ydCBjbGFzcyBPcHRpb25zIGV4dGVuZHMgQmFzZVZpZXcge1xyXG4gIEBiaW5kYWJsZSBtb2RlbDtcclxuICBAYmluZGFibGUgY2hhbmdlO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBzbGlkZXJDaGFuZ2VkKCkge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5tb2RlbC5vbmxpbmVBdHRhY2tTcGVlZCk7XHJcbiAgICB0aGlzLnJhaXNlQ2hhbmdlKCk7XHJcbiAgfVxyXG5cclxuICBvblJlbmRlcigpIHtcclxuICAgICQoZG9jdW1lbnQpLmZvdW5kYXRpb24oKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBPcHRpb25zTW9kZWwge1xyXG4gIGNvbnN0cnVjdG9yKG9ubGluZSwgb2ZmbGluZSkge1xyXG4gICAgdGhpcy5vbmxpbmVBdHRhY2tTcGVlZCA9IG9ubGluZTtcclxuICAgIHRoaXMub2ZmbGluZUF0dGFja1NwZWVkID0gb2ZmbGluZTtcclxuICB9XHJcblxyXG4gIGdldE9ubGluZUF0dGFja1NwZWVkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMub25saW5lQXR0YWNrU3BlZWQ7XHJcbiAgfVxyXG5cclxuICBnZXRPZmZsaW5lQXR0YWNrU3BlZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5vZmZsaW5lQXR0YWNrU3BlZWQgKiBNYXRoLnBvdygxMCwgOSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
