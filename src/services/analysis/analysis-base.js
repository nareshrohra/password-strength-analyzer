import {
  Locale
}
from '../../locale';

import vaow from 'vaow';

import {
  AnalysisItem
}
from './analysis-item';

export class AnalysisBase {
  analysisItems = [];

  constructor(name) {
    if (window.vaow.Validator.isDefinedAndNotNull(name)) {
      this.name = name;
    } else {
      throw Locale.Error.InvalidArgName;
    }
  }

  getName() {
    return this.name;
  }

  addAnalysisItem(analysisItem) {
    if (window.vaow.Validator.isDefinedAndNotNull(analysisItem)) {
      this.analysisItems.push(analysisItem);
    } else {
      throw Locale.Error.InvalidArgAnalysisItem;
    }
  }

  getAllItems() {
    return this.analysisItems;
  }
}
