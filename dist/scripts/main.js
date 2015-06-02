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
			$('nav').show();
			$('#game').show();
			$(document).keydown(function(e){
				move = $('.big-icon').css('left');
				move = parseInt(move);
				move-= 20;
			
				if (e.keyCode === 37) { 
					$('.big-icon').css('left', move+'px');
					$('.scr').html(move.toString());
				}
				else if(e.keyCode === 39){
					move = $('.big-icon').css('left');
					move = parseInt(move);
					move += 20;
					$('.big-icon').css('left', move+'px');
					$('.scr').html(move.toString());
				}
			
			});
		},

		leaderScreen: function(){
			$('.page').hide();
			$('nav').show();
			$('#leaderboard').show();
		},

		settingsScreen: function(){
			$('.page').hide();
			$('nav').show();
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