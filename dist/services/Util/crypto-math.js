System.register(['vaow', '../../locale'], function (_export) {
  'use strict';

  var vaow, Locale, CryptoMath;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_vaow) {
      vaow = _vaow['default'];
    }, function (_locale) {
      Locale = _locale.Locale;
    }],
    execute: function () {
      CryptoMath = (function () {
        function CryptoMath() {
          _classCallCheck(this, CryptoMath);
        }

        _createClass(CryptoMath, null, [{
          key: 'caculateSearchSpaceSize',
          value: function caculateSearchSpaceSize(depth, length) {
            if (!window.vaow.util.Validator.isNonZeroPositiveNumber(depth)) {
              throw Locale.Error.InvalidArgDepth;
            }

            if (!window.vaow.util.Validator.isNonZeroPositiveNumber(length)) {
              throw Locale.Error.InvalidArgLength;
            }

            if (length === 1 || depth == 1) {
              return depth * length;
            } else {
              return Math.pow(depth, length) + CryptoMath.caculateSearchSpaceSize(depth, length - 1);
            }
          }
        }]);

        return CryptoMath;
      })();

      _export('CryptoMath', CryptoMath);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL1V0aWwvY3J5cHRvLW1hdGguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O29CQU9hLFVBQVU7Ozs7Ozs7Ozs7dUJBSnJCLE1BQU07OztBQUlLLGdCQUFVO2lCQUFWLFVBQVU7Z0NBQVYsVUFBVTs7O3FCQUFWLFVBQVU7O2lCQUNTLGlDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUU7QUFDNUMsZ0JBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDOUQsb0JBQU0sTUFBTSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUM7YUFDcEM7O0FBRUQsZ0JBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsTUFBTSxDQUFDLEVBQUU7QUFDL0Qsb0JBQU0sTUFBTSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQzthQUNyQzs7QUFFRCxnQkFBSSxNQUFNLEtBQUssQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7QUFDOUIscUJBQU8sS0FBSyxHQUFHLE1BQU0sQ0FBQzthQUN2QixNQUFNO0FBQ0wscUJBQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEdBQUcsVUFBVSxDQUFDLHVCQUF1QixDQUFDLEtBQUssRUFBRSxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDeEY7V0FDRjs7O2VBZlUsVUFBVSIsImZpbGUiOiJzZXJ2aWNlcy9VdGlsL2NyeXB0by1tYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHZhb3cgZnJvbSAndmFvdyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIExvY2FsZVxyXG59XHJcbmZyb20gJy4uLy4uL2xvY2FsZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ3J5cHRvTWF0aCB7XHJcbiAgc3RhdGljIGNhY3VsYXRlU2VhcmNoU3BhY2VTaXplKGRlcHRoLCBsZW5ndGgpIHtcclxuICAgIGlmICghd2luZG93LnZhb3cudXRpbC5WYWxpZGF0b3IuaXNOb25aZXJvUG9zaXRpdmVOdW1iZXIoZGVwdGgpKSB7XHJcbiAgICAgIHRocm93IExvY2FsZS5FcnJvci5JbnZhbGlkQXJnRGVwdGg7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF3aW5kb3cudmFvdy51dGlsLlZhbGlkYXRvci5pc05vblplcm9Qb3NpdGl2ZU51bWJlcihsZW5ndGgpKSB7XHJcbiAgICAgIHRocm93IExvY2FsZS5FcnJvci5JbnZhbGlkQXJnTGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChsZW5ndGggPT09IDEgfHwgZGVwdGggPT0gMSkge1xyXG4gICAgICByZXR1cm4gZGVwdGggKiBsZW5ndGg7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gTWF0aC5wb3coZGVwdGgsIGxlbmd0aCkgKyBDcnlwdG9NYXRoLmNhY3VsYXRlU2VhcmNoU3BhY2VTaXplKGRlcHRoLCBsZW5ndGggLSAxKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19
