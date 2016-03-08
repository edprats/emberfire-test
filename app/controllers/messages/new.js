import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		addMessage: function() {
			//create record of type message model based on form
			var newMessage = this.store.createRecord('message', {
				name: this.get('name'),
				body: this.get('body')
			});
			//save record in Ember data
			newMessage.save();

			// clear values
			this.setProperties({
				name: '',
				body: ''
			});
		}
	}
});
