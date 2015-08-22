import {
  computedFrom, bindable
}
from 'aurelia-framework';
import {
  Container, inject
}
from 'aurelia-dependency-injection';
import {
  TaskQueue
}
from "aurelia-task-queue";

export class BaseView {
  static inject = [TaskQueue]

  raiseChange() {
    if (this.change) {
      this.change();
    }
  }

  constructor() {
    this.taskQueue = new TaskQueue;
  }

  bind() {
    let self = this;
    this.taskQueue.queueMicroTask(() => {
      if (self.onRender) {
        self.onRender();
      }
    });
  }
}
