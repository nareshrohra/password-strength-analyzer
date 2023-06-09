System.register(['aurelia-framework', 'foundation/js/foundation/foundation', 'foundation/js/foundation/foundation.slider'], function (_export) {
  'use strict';

  var computedFrom, bindable, Results, ResultsModel;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      computedFrom = _aureliaFramework.computedFrom;
      bindable = _aureliaFramework.bindable;
    }, function (_foundationJsFoundationFoundation) {}, function (_foundationJsFoundationFoundationSlider) {}],
    execute: function () {
      Results = (function () {
        var _instanceInitializers = {};

        function Results() {
          _classCallCheck(this, Results);

          _defineDecoratedPropertyDescriptor(this, 'model', _instanceInitializers);

          this.hasAnalysis = false;
        }

        _createDecoratedClass(Results, [{
          key: 'modelChanged',
          value: function modelChanged() {
            this.hasAnalysis = this.model && this.model.hasAnalysis();
          }
        }, {
          key: 'model',
          decorators: [bindable],
          initializer: function initializer() {
            return null;
          },
          enumerable: true
        }], null, _instanceInitializers);

        return Results;
      })();

      _export('Results', Results);

      ResultsModel = (function () {
        function ResultsModel() {
          _classCallCheck(this, ResultsModel);

          this.analyses = [];
        }

        _createClass(ResultsModel, [{
          key: 'addAnalyses',
          value: function addAnalyses(analyses) {
            var analysesCount = analyses.length;
            for (var i = 0; i < analysesCount; i++) {
              this.analyses.push(analyses[i]);
            }
          }
        }, {
          key: 'addAnalysis',
          value: function addAnalysis(analysis) {
            this.analyses.push(analysis);
          }
        }, {
          key: 'hasAnalysis',
          value: function hasAnalysis() {
            return this.analyses && this.analyses.length > 0;
          }
        }, {
          key: 'getAllAnalyses',
          value: function getAllAnalyses() {
            return this.analyses;
          }
        }]);

        return ResultsModel;
      })();

      _export('ResultsModel', ResultsModel);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL2FuYWx5c2lzL3Jlc3VsdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzhCQVFhLE9BQU8sRUFTUCxZQUFZOzs7Ozs7Ozs7Ozs7dUNBaEJ2QixZQUFZO21DQUFFLFFBQVE7OztBQU9YLGFBQU87OztpQkFBUCxPQUFPO2dDQUFQLE9BQU87Ozs7ZUFFbEIsV0FBVyxHQUFHLEtBQUs7Ozs4QkFGUixPQUFPOztpQkFJTix3QkFBRztBQUNiLGdCQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztXQUMzRDs7O3VCQUxELFFBQVE7O21CQUFTLElBQUk7Ozs7O2VBRFYsT0FBTzs7Ozs7QUFTUCxrQkFBWTtpQkFBWixZQUFZO2dDQUFaLFlBQVk7O2VBQ3ZCLFFBQVEsR0FBRyxFQUFFOzs7cUJBREYsWUFBWTs7aUJBRVoscUJBQUMsUUFBUSxFQUFFO0FBQ3BCLGdCQUFJLGFBQWEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO0FBQ3BDLGlCQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsYUFBYSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3RDLGtCQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNqQztXQUNGOzs7aUJBRVUscUJBQUMsUUFBUSxFQUFFO0FBQ3BCLGdCQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztXQUM5Qjs7O2lCQUVVLHVCQUFHO0FBQ1osbUJBQU8sSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7V0FDbEQ7OztpQkFFYSwwQkFBRztBQUNmLG1CQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7V0FDdEI7OztlQW5CVSxZQUFZIiwiZmlsZSI6InZpZXdzL2FuYWx5c2lzL3Jlc3VsdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIGNvbXB1dGVkRnJvbSwgYmluZGFibGVcclxufVxyXG5mcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcblxyXG5pbXBvcnQgJ2ZvdW5kYXRpb24vanMvZm91bmRhdGlvbi9mb3VuZGF0aW9uJztcclxuaW1wb3J0ICdmb3VuZGF0aW9uL2pzL2ZvdW5kYXRpb24vZm91bmRhdGlvbi5zbGlkZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlc3VsdHMge0BcclxuICBiaW5kYWJsZSBtb2RlbCA9IG51bGw7XHJcbiAgaGFzQW5hbHlzaXMgPSBmYWxzZTtcclxuXHJcbiAgbW9kZWxDaGFuZ2VkKCkge1xyXG4gICAgdGhpcy5oYXNBbmFseXNpcyA9IHRoaXMubW9kZWwgJiYgdGhpcy5tb2RlbC5oYXNBbmFseXNpcygpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlc3VsdHNNb2RlbCB7XHJcbiAgYW5hbHlzZXMgPSBbXTtcclxuICBhZGRBbmFseXNlcyhhbmFseXNlcykge1xyXG4gICAgbGV0IGFuYWx5c2VzQ291bnQgPSBhbmFseXNlcy5sZW5ndGg7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFuYWx5c2VzQ291bnQ7IGkrKykge1xyXG4gICAgICB0aGlzLmFuYWx5c2VzLnB1c2goYW5hbHlzZXNbaV0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkQW5hbHlzaXMoYW5hbHlzaXMpIHtcclxuICAgIHRoaXMuYW5hbHlzZXMucHVzaChhbmFseXNpcyk7XHJcbiAgfVxyXG5cclxuICBoYXNBbmFseXNpcygpIHtcclxuICAgIHJldHVybiB0aGlzLmFuYWx5c2VzICYmIHRoaXMuYW5hbHlzZXMubGVuZ3RoID4gMDtcclxuICB9XHJcblxyXG4gIGdldEFsbEFuYWx5c2VzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuYW5hbHlzZXM7XHJcbiAgfVxyXG59XHJcbiJdfQ==
