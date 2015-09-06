import {
  AnalysisItem
}
from './analysis-item';

export class AnalysisBase {
  analysisItems = [];

  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
  
  addAnalysisItem(analysisItem) {
    this.analysisItems.push(analysisItem);
  }

  getAllItems() {
    return this.analysisItems;
  }

  //TODO: not used yet
  getItem(name) {
    throw 'Not implemented exception';
  }
}
