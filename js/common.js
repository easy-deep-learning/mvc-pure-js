// console.log("Loaded in: ", this);

(function (global) {
  var App = global.App;
  var doc = global.document;

  var templateEventsItemNode = doc.getElementById("template_events__item");

  var eventsRoute = new App.Router();

  eventsRoute.all("/events", function () {
    var eventsUI = new App.View(templateEventsItemNode.innerHTML);
    var eventsModel = new App.Model('events');

    App.eventsModel = eventsModel;

    var eventsHTML = eventsUI.render({
      events: eventsModel.find()
    });

    doc.querySelector(".events").innerHTML = eventsHTML;


    var myEvent = eventsModel.find("date", "6 марта, воскресенье");
    
    console.log(myEvent);
  });

}(window));
