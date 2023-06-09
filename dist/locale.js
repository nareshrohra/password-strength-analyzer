System.register([], function (_export) {
  'use strict';

  var Locale;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [],
    execute: function () {
      Locale = function Locale() {
        _classCallCheck(this, Locale);
      };

      _export('Locale', Locale);

      Locale.Error = {};
      Locale.Error.InvalidArgText = 'Invalid argument "text"';
      Locale.Error.InvalidArgName = 'Invalid argument "name"';
      Locale.Error.InvalidArgCharStats = 'Invalid argument "charStats"';
      Locale.Error.InvalidArgMatchCount = 'Invalid argument "matchCount". matchCount should be a positive number';
      Locale.Error.InvalidArgCharDepth = 'Invalid argument "charDepth". charDepth should be a positive number';
      Locale.Error.InvalidArgAnalysisItem = 'Invalid argument "analysisItem"';

      Locale.Error.InvalidArgPassword = 'Invalid argument "password"';
      Locale.Error.InvalidArgOptions = 'Invalid argument "options"';

      Locale.ZxcvbnAnalysisName = 'Zxcvbn Analysis';
      Locale.Error.InvalidArgEntropy = 'Invalid argument "entropy". entropy should be a positive number';
      Locale.Error.InvalidArgScore = 'Invalid argument "score". score should be a positive number';

      Locale.BruteForceAnalysisName = 'Brute force analysis';
      Locale.Error.InvalidArgCharStats = 'Invalid argument "charStats"';
      Locale.Error.InvalidArgDepth = 'Invalid argument "depth". depth should be a positive number';
      Locale.Error.InvalidArgLength = 'Invalid argument "length". length should be a positive number';
      Locale.Error.InvalidArgSize = 'Invalid argument "size". size should be a positive number';
      Locale.Error.InvalidArgTime = 'Invalid argument "time". time should be a positive number';
      Locale.Error.InvalidArgAttackSpeed = 'Invalid argument "attackSpeed". attackSpeed should be a positive number';

      Locale.Error.InvalidArgAnalyzer = 'Invalid argument "analyzer"';

      Locale.UpperCaseAlphabetStatsName = "upper-case";
      Locale.LowerCaseAlphabetStatsName = "lower-case";
      Locale.SpecialCaseStatsName = "special-case";
      Locale.NumbersStatsName = "numbers";
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvY2FsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBYSxNQUFNOzs7Ozs7O0FBQU4sWUFBTSxZQUFOLE1BQU07OEJBQU4sTUFBTTs7Ozs7QUFJbkIsWUFBTSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDbEIsWUFBTSxDQUFDLEtBQUssQ0FBQyxjQUFjLEdBQUcseUJBQXlCLENBQUM7QUFDeEQsWUFBTSxDQUFDLEtBQUssQ0FBQyxjQUFjLEdBQUcseUJBQXlCLENBQUM7QUFDeEQsWUFBTSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsR0FBRyw4QkFBOEIsQ0FBQztBQUNsRSxZQUFNLENBQUMsS0FBSyxDQUFDLG9CQUFvQixHQUFHLHVFQUF1RSxDQUFDO0FBQzVHLFlBQU0sQ0FBQyxLQUFLLENBQUMsbUJBQW1CLEdBQUcscUVBQXFFLENBQUM7QUFDekcsWUFBTSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsR0FBRyxpQ0FBaUMsQ0FBQzs7QUFFeEUsWUFBTSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsR0FBRyw2QkFBNkIsQ0FBQztBQUNoRSxZQUFNLENBQUMsS0FBSyxDQUFDLGlCQUFpQixHQUFHLDRCQUE0QixDQUFDOztBQUU5RCxZQUFNLENBQUMsa0JBQWtCLEdBQUcsaUJBQWlCLENBQUM7QUFDOUMsWUFBTSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsR0FBRyxpRUFBaUUsQ0FBQztBQUNuRyxZQUFNLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyw2REFBNkQsQ0FBQzs7QUFFN0YsWUFBTSxDQUFDLHNCQUFzQixHQUFHLHNCQUFzQixDQUFDO0FBQ3ZELFlBQU0sQ0FBQyxLQUFLLENBQUMsbUJBQW1CLEdBQUcsOEJBQThCLENBQUM7QUFDbEUsWUFBTSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsNkRBQTZELENBQUM7QUFDN0YsWUFBTSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsR0FBRywrREFBK0QsQ0FBQztBQUNoRyxZQUFNLENBQUMsS0FBSyxDQUFDLGNBQWMsR0FBRywyREFBMkQsQ0FBQztBQUMxRixZQUFNLENBQUMsS0FBSyxDQUFDLGNBQWMsR0FBRywyREFBMkQsQ0FBQztBQUMxRixZQUFNLENBQUMsS0FBSyxDQUFDLHFCQUFxQixHQUFHLHlFQUF5RSxDQUFDOztBQUUvRyxZQUFNLENBQUMsS0FBSyxDQUFDLGtCQUFrQixHQUFHLDZCQUE2QixDQUFDOztBQUVoRSxZQUFNLENBQUMsMEJBQTBCLEdBQUcsWUFBWSxDQUFDO0FBQ2pELFlBQU0sQ0FBQywwQkFBMEIsR0FBRyxZQUFZLENBQUM7QUFDakQsWUFBTSxDQUFDLG9CQUFvQixHQUFHLGNBQWMsQ0FBQztBQUM3QyxZQUFNLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDIiwiZmlsZSI6ImxvY2FsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBMb2NhbGUge1xyXG5cclxufVxyXG5cclxuTG9jYWxlLkVycm9yID0ge307XHJcbkxvY2FsZS5FcnJvci5JbnZhbGlkQXJnVGV4dCA9ICdJbnZhbGlkIGFyZ3VtZW50IFwidGV4dFwiJztcclxuTG9jYWxlLkVycm9yLkludmFsaWRBcmdOYW1lID0gJ0ludmFsaWQgYXJndW1lbnQgXCJuYW1lXCInO1xyXG5Mb2NhbGUuRXJyb3IuSW52YWxpZEFyZ0NoYXJTdGF0cyA9ICdJbnZhbGlkIGFyZ3VtZW50IFwiY2hhclN0YXRzXCInO1xyXG5Mb2NhbGUuRXJyb3IuSW52YWxpZEFyZ01hdGNoQ291bnQgPSAnSW52YWxpZCBhcmd1bWVudCBcIm1hdGNoQ291bnRcIi4gbWF0Y2hDb3VudCBzaG91bGQgYmUgYSBwb3NpdGl2ZSBudW1iZXInO1xyXG5Mb2NhbGUuRXJyb3IuSW52YWxpZEFyZ0NoYXJEZXB0aCA9ICdJbnZhbGlkIGFyZ3VtZW50IFwiY2hhckRlcHRoXCIuIGNoYXJEZXB0aCBzaG91bGQgYmUgYSBwb3NpdGl2ZSBudW1iZXInO1xyXG5Mb2NhbGUuRXJyb3IuSW52YWxpZEFyZ0FuYWx5c2lzSXRlbSA9ICdJbnZhbGlkIGFyZ3VtZW50IFwiYW5hbHlzaXNJdGVtXCInO1xyXG5cclxuTG9jYWxlLkVycm9yLkludmFsaWRBcmdQYXNzd29yZCA9ICdJbnZhbGlkIGFyZ3VtZW50IFwicGFzc3dvcmRcIic7XHJcbkxvY2FsZS5FcnJvci5JbnZhbGlkQXJnT3B0aW9ucyA9ICdJbnZhbGlkIGFyZ3VtZW50IFwib3B0aW9uc1wiJztcclxuXHJcbkxvY2FsZS5aeGN2Ym5BbmFseXNpc05hbWUgPSAnWnhjdmJuIEFuYWx5c2lzJztcclxuTG9jYWxlLkVycm9yLkludmFsaWRBcmdFbnRyb3B5ID0gJ0ludmFsaWQgYXJndW1lbnQgXCJlbnRyb3B5XCIuIGVudHJvcHkgc2hvdWxkIGJlIGEgcG9zaXRpdmUgbnVtYmVyJztcclxuTG9jYWxlLkVycm9yLkludmFsaWRBcmdTY29yZSA9ICdJbnZhbGlkIGFyZ3VtZW50IFwic2NvcmVcIi4gc2NvcmUgc2hvdWxkIGJlIGEgcG9zaXRpdmUgbnVtYmVyJztcclxuXHJcbkxvY2FsZS5CcnV0ZUZvcmNlQW5hbHlzaXNOYW1lID0gJ0JydXRlIGZvcmNlIGFuYWx5c2lzJztcclxuTG9jYWxlLkVycm9yLkludmFsaWRBcmdDaGFyU3RhdHMgPSAnSW52YWxpZCBhcmd1bWVudCBcImNoYXJTdGF0c1wiJztcclxuTG9jYWxlLkVycm9yLkludmFsaWRBcmdEZXB0aCA9ICdJbnZhbGlkIGFyZ3VtZW50IFwiZGVwdGhcIi4gZGVwdGggc2hvdWxkIGJlIGEgcG9zaXRpdmUgbnVtYmVyJztcclxuTG9jYWxlLkVycm9yLkludmFsaWRBcmdMZW5ndGggPSAnSW52YWxpZCBhcmd1bWVudCBcImxlbmd0aFwiLiBsZW5ndGggc2hvdWxkIGJlIGEgcG9zaXRpdmUgbnVtYmVyJztcclxuTG9jYWxlLkVycm9yLkludmFsaWRBcmdTaXplID0gJ0ludmFsaWQgYXJndW1lbnQgXCJzaXplXCIuIHNpemUgc2hvdWxkIGJlIGEgcG9zaXRpdmUgbnVtYmVyJztcclxuTG9jYWxlLkVycm9yLkludmFsaWRBcmdUaW1lID0gJ0ludmFsaWQgYXJndW1lbnQgXCJ0aW1lXCIuIHRpbWUgc2hvdWxkIGJlIGEgcG9zaXRpdmUgbnVtYmVyJztcclxuTG9jYWxlLkVycm9yLkludmFsaWRBcmdBdHRhY2tTcGVlZCA9ICdJbnZhbGlkIGFyZ3VtZW50IFwiYXR0YWNrU3BlZWRcIi4gYXR0YWNrU3BlZWQgc2hvdWxkIGJlIGEgcG9zaXRpdmUgbnVtYmVyJztcclxuXHJcbkxvY2FsZS5FcnJvci5JbnZhbGlkQXJnQW5hbHl6ZXIgPSAnSW52YWxpZCBhcmd1bWVudCBcImFuYWx5emVyXCInO1xyXG5cclxuTG9jYWxlLlVwcGVyQ2FzZUFscGhhYmV0U3RhdHNOYW1lID0gXCJ1cHBlci1jYXNlXCI7XHJcbkxvY2FsZS5Mb3dlckNhc2VBbHBoYWJldFN0YXRzTmFtZSA9IFwibG93ZXItY2FzZVwiO1xyXG5Mb2NhbGUuU3BlY2lhbENhc2VTdGF0c05hbWUgPSBcInNwZWNpYWwtY2FzZVwiO1xyXG5Mb2NhbGUuTnVtYmVyc1N0YXRzTmFtZSA9IFwibnVtYmVyc1wiO1xyXG4iXX0=
