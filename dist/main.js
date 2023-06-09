System.register(['jquery'], function (_export) {
  'use strict';

  var jquery;

  _export('configure', configure);

  function configure(aurelia) {
    aurelia.use.standardConfiguration().plugin('aurelia-animator-css');

    aurelia.start().then(function (a) {
      return a.setRoot('views/app');
    });
  }

  return {
    setters: [function (_jquery) {
      jquery = _jquery.jquery;
    }],
    execute: function () {}
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUtPLFdBQVMsU0FBUyxDQUFDLE9BQU8sRUFBRTtBQUNqQyxXQUFPLENBQUMsR0FBRyxDQUNSLHFCQUFxQixFQUFFLENBQ3ZCLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDOztBQUVsQyxXQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQzthQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO0tBQUEsQ0FBQyxDQUFDO0dBQ25EOzs7O3VCQVZDLE1BQU0iLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAganF1ZXJ5XHJcbn1cclxuZnJvbSAnanF1ZXJ5JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYSkge1xyXG4gIGF1cmVsaWEudXNlXHJcbiAgICAuc3RhbmRhcmRDb25maWd1cmF0aW9uKClcclxuICAgIC5wbHVnaW4oJ2F1cmVsaWEtYW5pbWF0b3ItY3NzJyk7XHJcblxyXG4gIGF1cmVsaWEuc3RhcnQoKS50aGVuKGEgPT4gYS5zZXRSb290KCd2aWV3cy9hcHAnKSk7XHJcbn1cclxuIl19
