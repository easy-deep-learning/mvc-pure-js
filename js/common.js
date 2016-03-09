// console.log("Loaded in: ", this);

(function(global) {
	var App = global.App;
	var doc = global.document;

	var dataStub = {
		events: [
			{
				id: 1,
				title: "Зверополис",
				date: "6 марта, воскресенье",
				src: 'https://placebear.com/300/150',
				link: "Посетить Зверополис!!!"
			},
			{
				id: 2,
				title: "Да здравствует Цезарь!",
				date: "7 марта, понедельник",
				src: 'https://placebear.com/300/150',
				link: "Посетить Цезарь!!!"
			}
		]
	};

	var templateEventsItemNode = doc.getElementById('template_events__item');

	var eventsUI = new App.View(templateEventsItemNode.innerHTML);
	var eventsHTML = eventsUI.render(dataStub);

	console.log('templateEventsItemNode', templateEventsItemNode.innerHTML);

	doc.querySelector('.events').innerHTML = eventsHTML;

}(window));