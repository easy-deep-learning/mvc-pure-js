// Module
(function(global) {
  var doc = global.document;

  /**
   *
   * @constructor
   */
  var Router = function() {};

  if (global) {
    global.App = global.App || {};
    global.App.Router = Router;
  }

  console.log("Router constructor loaded into global.App.Router ");
}(window));
