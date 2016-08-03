// app.controller.home.js
angular.module('ViceCity')
	.controller('homeController', [
		'$http',
		homeController
	]);

function homeController ($http){
	var hCtrl = this;

	hCtrl.welcomeMessage = 'The only place for sweet, sweet news';

	hCtrl.getTheNews = function(){

		$http.get('/api/news')
			.then(function(response){
				console.log(response);
				hCtrl.news = response.data;// This is what we res.sent down from the server
			});



		// console.log('Wow!  So much news!');
		// hCtrl.news = [
		// 	'Bad things',
		// 	'Squirrel waterskiing',
		// 	'More bad things'
		// ]
	}
}
