// Check if staff
Template.registerHelper('isStaff', function() {
	return (Meteor.user().profile.usertype === 'staff');
});

//Format the date using moment.js
Template.registerHelper('formatDate', function(date) {
	return moment(date).format('MMMM Do YYYY, h:mm:ss a');
});

// Capitalize first letter
Template.registerHelper('capFirst', function(text) {
	return text.charAt(0).toUpperCase() + text.slice(1);
});