// Module
(function(global) {

  /**
   *
   * @constructor
   */
  var Model = function() {
    this.id = Date.now(); //
  };

  // TODO: develop
  /**
   *
   * @param {String} name
   */
  Model.prototype.get = function(name) {

  };

  // TODO: develop
  /**
   *
   * @param {String} name
   * @param {*} value
   */
  Model.prototype.set = function(name, value) {
    
  };
  

  if (global) {
    global.App = global.App || {};
    global.App.Model = Model;
  }

  console.log("Model constructor loaded into global.App.Model ");

}(window));
