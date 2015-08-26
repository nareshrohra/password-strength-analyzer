import {
  computedFrom, bindable
}
from 'aurelia-framework';
import {
  BaseView
}
from './base-view';

export class Options extends BaseView {
  @bindable model;
  @bindable change;

  constructor() {
    super();
  }

  sliderChanged() {
    console.log(this.model.onlineAttackSpeed);
    this.raiseChange();
  }

  onRender() {
    $(document).foundation();
  }
}

export class OptionsModel {
  constructor(online, offline) {
    this.onlineAttackSpeed = online;
    this.offlineAttackSpeed = offline;
  }

  getOnlineAttackSpeed() {
    return this.onlineAttackSpeed;
  }

  getOfflineAttackSpeed() {
    return this.offlineAttackSpeed;
  }
}
