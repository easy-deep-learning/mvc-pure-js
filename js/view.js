// Module
(function(global) {
  var doc = global.document;

  /**
   * View class
   *
   * @constructor
   *
   * @param {String} template
   *
   *
   * @example
   * var someUIComponent = new View('#template_some-ul-component');
   * ulPlaceholder.innerHTML = someUIComponent.render({ name: 'my component', count: 2 });
   */
  var View = function(template) {
    this.templateSource = template;

    this._init();
  };

  /**
   * Initialize template
   *
   * @private
   */
  View.prototype._init = function() {
    var templateSource = this.templateSource;

    this.template = function(data) {

      var fn =  new Function("obj",
        "var p = [];" +
        "var print = function() {p.push.apply(p,arguments);};" +

          // Introduce the data as local variables using with(){}
        "with(obj){p.push('" +

          // Convert the template into pure JavaScript
        templateSource// <div><%= name %></div> + { name: 'test' } TODO: разобрать
          .replace(/[\r\t\n]/g, " ")  // Убираем переносты строк
          .split("<%")
          .join("\t")
          .replace(/((^|%>)[^\t]*)'/g, "$1\r")
          .replace(/\t=(.*?)%>/g, "',$1,'")
          .split("\t")
          .join("');")
          .split("%>")
          .join("p.push('")
          .split("\r")
          .join("\\'")
        + "');} return p.join('');");

      return fn(data);
    };
  };

  /**
   * Render given `data` to HTML
   *
   * @param {Object|Array} data
   * @return {String} HTML
   */
  View.prototype.render = function(data) {
    return this.template(data);
  };

  if (global) {
    global.App = global.App || {};
    global.App.View = View;
  }

  console.log("View constructor loaded into global.App.View ");
}(window));