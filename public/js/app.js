new Vue({
	el: '#root',

	data: {
		skills: []
	},

	mounted(){
		console.log('done');
		// Make an ajax request to our server - /skills
		// fetch() * use with polyfill

		axios.get('/skills').then(response => this.skills = response.data);
	}
});