// Module
(function(global) {

  var db = {
    /**
     * @type {Array}
     */
    events: [
      {
        id: 1,
        title: "Зверополис",
        date: "6 марта, воскресенье",
        src: "https://placebear.com/300/150",
        link: "Посетить Зверополис!!!"
      },
      {
        id: 2,
        title: "Да здравствует Цезарь!",
        date: "7 марта, понедельник",
        src: "https://placebear.com/300/150",
        link: "Посетить Цезарь!!!"
      }
    ],
    users: {}
  };

  /**
   *
   * @constructor
   *
   * @param {String} type
   */
  var Model = function(type) {
    this.id = Date.now(); //
    this.type = type;

    // @type {Array}
    this.data = db[type];
  };

  // TODO: develop
  /**
   *
   * @param {String} name
   */
  Model.prototype.get = function(name) {
    return this.data;
  };

  /**
   *
   * @see https://docs.mongodb.com/manual/reference/command/find/#dbcmd.find
   * 
   * @param {String} [key]
   * @param {String} [value]
   * @return {*} Data from `server`
   */
  Model.prototype.find = function(key, value) {
    var result;

    if (key) {
      result = this.data.find(function(elem) {
        return elem[key] === value;
      });

    } else {
      result = this.data;
    }

    return result;
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
