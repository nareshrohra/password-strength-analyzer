import 'foundation';
import 'foundation/css/foundation.css!';

export class App {
  configureRouter(config, router) {
    config.title = 'Password Strength Analyzer';
    config.map([
      { route: ['', 'analysis'], name: 'analysis', moduleId: './analysis/index', nav: false, title:'' }
    ]);
    this.router = router;
  }
}
