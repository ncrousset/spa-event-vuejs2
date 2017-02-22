// Listing evenst component
var EvenstListing = Vue.extend({
	template: '#events-listing-template',
	data: function() {
		return {
			events: this.$parent.events
		}
	}
});

// Add evenst component
var EvenstAdd = Vue.extend({
	template: "#events-add-templante",
	data: function() {
		return {
			event: this.$parent.event
		}
	},
	methods: {
		addEvent: function() {
			
		}
	}
});

// Create the router
var router = new VueRouter({
	mode: 'hash',
	base: window.location.href,
	routes: [
		{ path: '/', component: EvenstListing },
		{ path: '/add', component: EvenstAdd }
	]
})

var vm = new Vue({
	router,
	data: {
		event: {},
		events: []
	},
	mounted: function() {
		this.fetchEvents();
	},

	methods: {

		// We dedicate a method to retrieving and setting some data
		fetchEvents: function() {
			var events = [
				{
        			id: 1,
        			name: 'TIFF',
        			description: 'Toronto International Film Festival',
        			date: '2015-09-10'
      			},
      			{
        			id: 2,
        			name: 'The Martian Premiere',
        			description: 'The Martian comes to theatres.',
        			date: '2015-10-02'
      			},
      			{
        			id: 3,
        			name: 'SXSW',
        			description: 'Music, film and interactive festival in Austin, TX.',
        			date: '2016-03-11'
      			}
			];
			this.events = events;
		},

		// add the one event in the list events
		addEvent: function() {
			if(this.event.name   && this.event.date) {
				this.events.push(this.event);
				this.event = {};
			} 
		},

		// delete the one event
		deleteEvent: function(index) {
			if(typeof this.events[index] == 'object') {
				if(confirm("Are you sure you want to delete the event?")) {
					this.events.splice(index, 1);
				}
			}
		}
	}
	
}).$mount('#events');