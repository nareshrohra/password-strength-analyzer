import {
  computedFrom, bindable
}
from 'aurelia-framework';

import 'foundation/js/foundation/foundation';
import 'foundation/js/foundation/foundation.slider';
import {
  BaseView
}
from 'base-view';

export class Slider extends BaseView {
  @bindable id;
  @bindable min;
  @bindable max;
  @bindable step;
  @bindable label;
  @bindable value;
  @bindable change;

  onRender() {
    let self = this;
    let slider = $('#' + this.id);
    let input = slider.find('input[type="hidden"]');
    slider.on('change.fndtn.slider', function() {
      //TODO: fix this
      //this.value = input.val();
      console.log(self.value);
      self.raiseChange();
    });
  }
}
