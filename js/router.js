// Module
(function(global) {
  var doc = global.document;

  /**
   *
   * @constructor
   */
  var Router = function() {
    this.routes = {};
    this._init();
  };
  
  /**
   * Initialize tracking URL changes
   * @private 
   */
  Router.prototype._init = function() {
    var that = this;
    window.addEventListener('popstate', function(e) {
      that.route(getUrlFromEvent(e))
    });
  
    /**
     * @param {Event} hash change 
     * @returns {string} url
     */
    function getUrlFromEvent(e) {
      var url = location.hash.slice(1) || '/';
      return url
    }
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

