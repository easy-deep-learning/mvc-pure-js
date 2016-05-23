// Module
(function(global) {
  var doc = global.document;

  /**
   *
   * @constructor
   */
  var Router = function() {
    this.routes = {};
  };

  /**
   * Add `handler` to `url` for all HTTP requests (GET, POST, DELETE, PUT)
   *
   * @param {String} url
   * @param {Function} handler
   */
  Router.prototype.all = function(url, handler) {
    this.routes[url] = handler;
  };

  /**
   * Call handler of given `url`
   *
   * @param {String} url
   */
  Router.prototype.route = function(url) {
    if (typeof this.routes[url] === 'function') {
      this.routes[url]();
    }
  };

  if (global) {
    global.App = global.App || {};
    global.App.Router = Router;
  }

  console.log("Router constructor loaded into global.App.Router ");

}(window));

