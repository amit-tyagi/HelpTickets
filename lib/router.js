Router.configure({
	layoutTemplate: 'layout'
});

// Router.route('/', function () {
//   // set the layout programmatically
//   this.layout('mytickets');

//   // render the PageOne template
//   this.render('mytickets');
// });

Router.map(function() {
	this.route('mytickets', {
		path: '/',
		template: 'mytickets',
		data: function() {
			templateData = {
				tickets: Tickets.find({customer: Meteor.userId()})
			};

			return templateData;
		}
	});
});