console.log("Loaded in: ", this);

/**
 *
 * @return {{Object} new Event}
 */
var Model = function () {

	// https://addyosmani.com/resources/essentialjsdesignpatterns/book/#observerpatternjquery
	// see https://carldanley.com/js-observer-pattern/

	var _event = new Event();

	return {

		//getData method

		/**
		 * @return {Object} data
		 */
		getData: function () {

			return _events;

		}

	};

};


/**
 *
 * @type {{}}
 */

var View = function(selector)  {

	// get data, template it and return HTML

	// Write by hand (no vendor template engine
	// see http://ejohn.org/blog/javascript-micro-templating/

	/**
	 * @param {Object|Array} data
	 * @return {String} HTML
	 */
	this.render = function (data) {

		var eventsContainer = document.querySelector('.events');

		// get data
		function getEvents() {

			var xhr = new XMLHttpRequest();

			xhr.open('GET', 'events.json');

			xhr.onload = function(evt) {

				var rawData = evt.target.response;
				var loadedEvents = JSON.parse(rawData);

				renderEvents(loadedEvents);
			};

			xhr.send();

		}


		// template it (just without IMG)

		/**
		 *
		 * @param data
		 * @returns template
		 */

		function EventsTemplate(data) {

			var templateNode = document.querySelector('#events-template');
			var template = getTemplateFromNode(templateNode);

			template.querySelector('.event-thumbnail__title').textContent = data.title;
			template.querySelector('.event-thumbnail__date').textContent = data.date;
			template.querySelector('.event-thumbnail__link').textContent = data.link;

			return template;
		}

		// and "return" HTML

		/**
		 *
		 * @param events
		 */

		function renderEvents(events) {

			eventsContainer.innerHTML = '';
			var fragment = document.createDocumentFragment();

			events.forEach(function(EventData) {

				var eventItem = EventsTemplate(EventData);

				fragment.appendChild(eventItem);

			});

			eventsContainer.appendChild(fragment);
		}


	}
};

/**
 *
 * @param {Object, Object}

 */
var Router = function (view, model) {

	// https://developer.mozilla.org/en-US/docs/Web/API/History_API

	var _view = view;
	var _model = model;


};