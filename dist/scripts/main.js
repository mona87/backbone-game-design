$(document).ready(function(){


	var Router = Backbone.Router.extend({
		routes: {
		'load':  		'loadScreen',
		'menu': 		'menuScreen',
		'game':   		'gameScreen',
		'leaderboard': 	'leaderScreen',
		'settings':  	'settingsScreen'
		},

		loadScreen: function(){
			$('.page').hide();
			$('#loading').show();
			 setTimeout(function(){
			$('#loading').hide();
			myRouter.navigate('menu', {trigger: true});
			}, 4000)
			
		},

		 menuScreen: function(){
			$('.page').hide();
			$('#menu').show();
		},

		gameScreen: function(){
			$('.page').hide();
			$('#game').show();
		},

		leaderScreen: function(){
			$('.page').hide();
			$('#leaderboard').show();
		},

		settingsScreen: function(){
			$('.page').hide();
			$('#settings').show();
		}
	});

	Backbone.history.start();

	var myRouter = new Router();

	myRouter.navigate('load', {trigger: true});

	$('#leadBtn').click(function(e) {
		e.preventDefault();	
		myRouter.navigate('leaderboard', {trigger: true});
	});
	$('#gameBtn').click(function(e) {
		e.preventDefault();	
		myRouter.navigate('game', {trigger: true});
	});
	$('#setBtn').click(function(e) {
		e.preventDefault();	
		myRouter.navigate('settings', {trigger: true});
	});



})