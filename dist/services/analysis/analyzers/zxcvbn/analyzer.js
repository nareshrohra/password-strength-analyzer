System.register(['./analysis', 'zxcvbn', '../../../../locale', 'vaow'], function (_export) {
  'use strict';

  var ZxcvbnAnalysis, zxcvbn, Locale, vaow, ZxcvbnAnalyzer;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_analysis) {
      ZxcvbnAnalysis = _analysis.ZxcvbnAnalysis;
    }, function (_zxcvbn) {
      zxcvbn = _zxcvbn['default'];
    }, function (_locale) {
      Locale = _locale.Locale;
    }, function (_vaow) {
      vaow = _vaow['default'];
    }],
    execute: function () {
      ZxcvbnAnalyzer = (function () {
        function ZxcvbnAnalyzer() {
          _classCallCheck(this, ZxcvbnAnalyzer);

          this.analysis = null;
        }

        _createClass(ZxcvbnAnalyzer, [{
          key: 'getAnalysis',
          value: function getAnalysis(password, options) {
            if (window.vaow.util.Validator.isDefinedAndNotNull(password)) {
              this.password = password;
              this.analyze();
              return this.analysis;
            } else {
              throw Locale.Error.InvalidArgPassword;
            }
          }
        }, {
          key: 'analyze',
          value: function analyze() {
            this.analysis = new ZxcvbnAnalysis();
            var result = zxcvbn(this.password);
            this.analysis.setEntropy(result.entropy);
            this.analysis.setScore(result.score);
          }
        }]);

        return ZxcvbnAnalyzer;
      })();

      _export('ZxcvbnAnalyzer', ZxcvbnAnalyzer);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2FuYWx5c2lzL2FuYWx5emVycy96eGN2Ym4vYW5hbHl6ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzRDQWNhLGNBQWM7Ozs7Ozs7O2lDQWJ6QixjQUFjOzs7O3VCQU9kLE1BQU07Ozs7O0FBTUssb0JBQWM7QUFHZCxpQkFIQSxjQUFjLEdBR1g7Z0NBSEgsY0FBYzs7ZUFDekIsUUFBUSxHQUFHLElBQUk7U0FFQzs7cUJBSEwsY0FBYzs7aUJBS2QscUJBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRTtBQUM3QixnQkFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLEVBQUU7QUFDNUQsa0JBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0FBQ3pCLGtCQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDZixxQkFBTyxJQUFJLENBQUMsUUFBUSxDQUFDO2FBQ3RCLE1BQU07QUFDTCxvQkFBTSxNQUFNLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDO2FBQ3ZDO1dBQ0Y7OztpQkFFTSxtQkFBRztBQUNSLGdCQUFJLENBQUMsUUFBUSxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7QUFDckMsZ0JBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDbkMsZ0JBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN6QyxnQkFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1dBQ3RDOzs7ZUFwQlUsY0FBYyIsImZpbGUiOiJzZXJ2aWNlcy9hbmFseXNpcy9hbmFseXplcnMvenhjdmJuL2FuYWx5emVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBaeGN2Ym5BbmFseXNpc1xyXG59XHJcbmZyb20gJy4vYW5hbHlzaXMnO1xyXG5cclxuaW1wb3J0IHp4Y3ZibiBmcm9tICd6eGN2Ym4nO1xyXG5cclxuaW1wb3J0IHtcclxuICBMb2NhbGVcclxufVxyXG5mcm9tICcuLi8uLi8uLi8uLi9sb2NhbGUnO1xyXG5cclxuaW1wb3J0IHZhb3cgZnJvbSAndmFvdyc7XHJcblxyXG5leHBvcnQgY2xhc3MgWnhjdmJuQW5hbHl6ZXIge1xyXG4gIGFuYWx5c2lzID0gbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBnZXRBbmFseXNpcyhwYXNzd29yZCwgb3B0aW9ucykge1xyXG4gICAgaWYgKHdpbmRvdy52YW93LnV0aWwuVmFsaWRhdG9yLmlzRGVmaW5lZEFuZE5vdE51bGwocGFzc3dvcmQpKSB7XHJcbiAgICAgIHRoaXMucGFzc3dvcmQgPSBwYXNzd29yZDtcclxuICAgICAgdGhpcy5hbmFseXplKCk7XHJcbiAgICAgIHJldHVybiB0aGlzLmFuYWx5c2lzO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgTG9jYWxlLkVycm9yLkludmFsaWRBcmdQYXNzd29yZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFuYWx5emUoKSB7XHJcbiAgICB0aGlzLmFuYWx5c2lzID0gbmV3IFp4Y3ZibkFuYWx5c2lzKCk7XHJcbiAgICBsZXQgcmVzdWx0ID0genhjdmJuKHRoaXMucGFzc3dvcmQpO1xyXG4gICAgdGhpcy5hbmFseXNpcy5zZXRFbnRyb3B5KHJlc3VsdC5lbnRyb3B5KTtcclxuICAgIHRoaXMuYW5hbHlzaXMuc2V0U2NvcmUocmVzdWx0LnNjb3JlKTtcclxuICB9XHJcbn1cclxuIl19
