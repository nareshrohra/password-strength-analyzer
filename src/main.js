import {
  jquery
}
from 'jquery';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .plugin('aurelia-animator-css');

  aurelia.start().then(a => a.setRoot('views/app'));
}
