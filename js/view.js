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

    var cache = {};

    this.template = function template() {

      // Figure out if we're getting a template, or if we need to
      // load the template - and be sure to cache the result.
      var fn = !/\W/.test(str) ?
        cache[str] = cache[str] ||
          template(document.getElementById(str).innerHTML) :

        // Generate a reusable function that will serve as a template
        // generator (and which will be cached).
        new Function("obj",
          "var p=[],print=function(){p.push.apply(p,arguments);};" +

          // Introduce the data as local variables using with(){}
          "with(obj){p.push('" +

          // Convert the template into pure JavaScript
          str
            .replace(/[\r\t\n]/g, " ")
            .split("<%").join("\t")
            .replace(/((^|%>)[^\t]*)'/g, "$1\r")
            .replace(/\t=(.*?)%>/g, "',$1,'")
            .split("\t").join("');")
            .split("%>").join("p.push('")
            .split("\r").join("\\'")
          + "');}return p.join('');");

      // Provide some basic currying to the user
      return data ? fn( data ) : fn;
    };

  };

  if (global) {
    global.App = global.App || {};
    global.App.View = View;
  }

  console.log("View constructor loaded into global.App.View ");
}(window));
