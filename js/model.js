// Module
(function(global) {

  /**
   *
   * @constructor
   */
  var Model = function() {};

  if (global) {
    global.App = global.App || {};
    global.App.Model = Model;
  }

  console.log("Model constructor loaded into global.App.Model ");
}(window));
