System.register(['aurelia-framework', 'aurelia-dependency-injection', 'aurelia-task-queue'], function (_export) {
  'use strict';

  var computedFrom, bindable, Container, inject, TaskQueue, BaseView;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      computedFrom = _aureliaFramework.computedFrom;
      bindable = _aureliaFramework.bindable;
    }, function (_aureliaDependencyInjection) {
      Container = _aureliaDependencyInjection.Container;
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaTaskQueue) {
      TaskQueue = _aureliaTaskQueue.TaskQueue;
    }],
    execute: function () {
      BaseView = (function () {
        _createClass(BaseView, [{
          key: 'raiseChange',
          value: function raiseChange() {
            if (this.change) {
              this.change();
            }
          }
        }], [{
          key: 'inject',
          value: [TaskQueue],
          enumerable: true
        }]);

        function BaseView() {
          _classCallCheck(this, BaseView);

          this.taskQueue = new TaskQueue();
        }

        _createClass(BaseView, [{
          key: 'bind',
          value: function bind() {
            var self = this;
            this.taskQueue.queueMicroTask(function () {
              if (self.onRender) {
                self.onRender();
              }
            });
          }
        }]);

        return BaseView;
      })();

      _export('BaseView', BaseView);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL2Jhc2Utdmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7NERBYWEsUUFBUTs7Ozs7Ozs7dUNBWm5CLFlBQVk7bUNBQUUsUUFBUTs7OENBSXRCLFNBQVM7MkNBQUUsTUFBTTs7b0NBSWpCLFNBQVM7OztBQUlFLGNBQVE7cUJBQVIsUUFBUTs7aUJBR1IsdUJBQUc7QUFDWixnQkFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQ2Ysa0JBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUNmO1dBQ0Y7OztpQkFOZSxDQUFDLFNBQVMsQ0FBQzs7OztBQVFoQixpQkFUQSxRQUFRLEdBU0w7Z0NBVEgsUUFBUTs7QUFVakIsY0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFNBQVMsRUFBQSxDQUFDO1NBQ2hDOztxQkFYVSxRQUFROztpQkFhZixnQkFBRztBQUNMLGdCQUFJLElBQUksR0FBRyxJQUFJLENBQUM7QUFDaEIsZ0JBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLFlBQU07QUFDbEMsa0JBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtBQUNqQixvQkFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2VBQ2pCO2FBQ0YsQ0FBQyxDQUFDO1dBQ0o7OztlQXBCVSxRQUFRIiwiZmlsZSI6InZpZXdzL2Jhc2Utdmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgY29tcHV0ZWRGcm9tLCBiaW5kYWJsZVxyXG59XHJcbmZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtcclxuICBDb250YWluZXIsIGluamVjdFxyXG59XHJcbmZyb20gJ2F1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb24nO1xyXG5pbXBvcnQge1xyXG4gIFRhc2tRdWV1ZVxyXG59XHJcbmZyb20gXCJhdXJlbGlhLXRhc2stcXVldWVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlVmlldyB7XHJcbiAgc3RhdGljIGluamVjdCA9IFtUYXNrUXVldWVdXHJcblxyXG4gIHJhaXNlQ2hhbmdlKCkge1xyXG4gICAgaWYgKHRoaXMuY2hhbmdlKSB7XHJcbiAgICAgIHRoaXMuY2hhbmdlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMudGFza1F1ZXVlID0gbmV3IFRhc2tRdWV1ZTtcclxuICB9XHJcblxyXG4gIGJpbmQoKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICB0aGlzLnRhc2tRdWV1ZS5xdWV1ZU1pY3JvVGFzaygoKSA9PiB7XHJcbiAgICAgIGlmIChzZWxmLm9uUmVuZGVyKSB7XHJcbiAgICAgICAgc2VsZi5vblJlbmRlcigpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19
