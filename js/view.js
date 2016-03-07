// Module
(function(global) {
  var doc = global.document;

  /**
   * View class
   *
   * @constructor
   *
   * @param {String} selector Example: <template id="selector">
   *
   *
   * @example
   * var someUIComponent = new View('#template_some-ul-component');
   * ulPlaceholder.innerHTML = someUIComponent.render({ name: 'my component', count: 2 });
   */
  var View = function(selector) {
    this.templateID = selector;

    this._init();
  };

  /**
   * Initialize template
   */
  View.prototype._init = function() {
    this.template = doc.getElementById(this.templateID).innerHTML;
  };

  /**
   * Render given `data` to HTML
   *
   * @param {Object|Array} data
   * @return {String} HTML
   */
  View.prototype.render = function(data) {
    // TODO: You have template source — `this.template`, you should convert the template into pure JavaScript, see http://ejohn.org/blog/javascript-micro-templating/
  };

  if (global) {
    global.App = global.App || {};
    global.App.View = View;
  }

  console.log("View constructor loaded into global.App.View ");
}(window));
