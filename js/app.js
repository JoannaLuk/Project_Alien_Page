$(function(){
	console.log('ok');

	var friendAlien = $('.friend-alien');
	var info = $('.info');
	var ask = $('.ask');
	var container = $('.container');
	var hero = container.find('.hero');
	var power = container.find('.power');
	var ufo = $('.flying-alien');
	var email = $('.fa-envelope-o');
	var fluffy = $('.littleAlien');
	console.log(hero, power);

	power.on('mouseenter', function(){
		$(this).addClass('hidden');
		$(this).prev().removeClass('hidden');
	});

	hero.on('mouseleave', function(){
		$(this).addClass('hidden');
		$(this).next().removeClass('hidden');
	});

	email.on('mouseover', function(){
		fluffy.effect( "bounce", {times:3}, 800 );
	});
	

/*********** Scroll ***********/
var menu = $('.menu');
var menuItem = menu.find('a');
console.log(menuItem);

menuItem.on('click', function(e){
	e.preventDefault();
	var href = $(this).attr('href');
	$('html, body').animate({
		scrollTop: $(href).offset().top}, 'slow');
});

/*********** Scroll to top ***********/
var toTop = $('.toTop');
toTop.on('click', function(e){
	e.preventDefault();
	$('html, body').animate({
		scrollTop: 0}, 'slow');
})

/*********** Shoot Alien ***********/
function shootAlien() {

	ufo.on('click', function(){
		ufo.stop();
		clearInterval(intervalAlien);
		ufo.animate({
			'left': -200
		});

	});
};

/*********** Dialog ***********/
	var dialog = $('.dialog');
	var info = dialog.find('.info');
	var yes = dialog.find('.yes');
	var no = dialog.find('.no');
	
	yes.on('click', function(){
		
		// if(yesText == 'Yes'){
		// 	info.text('Greate! Ask then!');
		// 	yes.text('Who is she?');
		// 	no.text('Why programming?');
		// }

		// if(yesText == 'Who is she?'){
		// 	info.text('She is an ambisious young one, who is looking to be beter!');
		// 	yes.text('How did she started?');
		// }

		// if(yesText == 'How did she started?'){
		// 	info.text('Well, she wanted to try sth new in her life and fall in love with web aplications and programming. And now she is keen about it!');
		// 	yes.text('Thx! Where can I find more info about Asia?');
		// }

		// if(yesText == 'Thx! Where can I find more info about Asia?'){
		// 	info.text('Sure! At the bottom of the page, you can find links to her GitHub account and LinkedIn! Don\'t be shy. Go and check it!');
		// }
	});	


// var intervalAlien = setInterval(flyAlien, 15000);

// shootAlien();


});


/*********** Functions ***********/

//Flying alien
function flyAlien() {
	var q = $({});
	var ufo = $('.flying-alien');
	console.log(ufo);
	var scrollTop = $(document).scrollTop();
	var windowHeight = $(window).height()-210;
	var bodyWidth = $('body').width();
	var scrollBottom = scrollTop + windowHeight;
	console.log(scrollTop, windowHeight, scrollBottom);
	var startX = bodyWidth + 200;
	var startY = Math.random()*windowHeight + scrollTop;
	var endX = -200;
	var endY = Math.random()*windowHeight + scrollTop;
	var speed = 0.4;
	ufo.css({
		'top': startY + "px",
		'left': startX + "px"
	});
	ufo.show();

	var newX =  Math.random()*bodyWidth;
	var newY = Math.random()*windowHeight + scrollTop;
	var prevX = startX;
	var prevY = startY;

	var distance = Math.sqrt(Math.pow(newX - prevX,2)+Math.pow(newY - prevY,2));
	var time = distance / speed;
	console.log(distance);
	console.log(time);

	// usage
	animToQueue(q, ufo, {
			top: newY  + "px",
			left: newX  + "px"
		}, time);

		prevX = newX;
		prevY = newY;

		newX =  Math.random()*bodyWidth;
		newY = Math.random()*windowHeight + scrollTop;
		distance = Math.sqrt(Math.pow(newX - prevX,2)+Math.pow(newY - prevY,2));
		time = distance / speed;
		
	animToQueue(q, ufo, {
			top: newY  + "px",
			left: newX  + "px"
		}, time);

		prevX = newX;
		prevY = newY;

		newX =  Math.random()*bodyWidth;
		newY = Math.random()*windowHeight + scrollTop;
		distance = Math.sqrt(Math.pow(newX - prevX,2)+Math.pow(newY - prevY,2));
		time = distance / speed;

	animToQueue(q, ufo, {
			top: newY  + "px",
			left: newX  + "px"
		}, time);
		prevX = newX;
		prevY = newY;

		newX =  Math.random()*bodyWidth;
		newY = Math.random()*windowHeight + scrollTop;
		distance = Math.sqrt(Math.pow(newX - prevX,2)+Math.pow(newY - prevY,2));
		time = distance / speed;

	animToQueue(q, ufo, {
			top: newY  + "px",
			left: newX  + "px"
		}, time);
		prevX = newX;
		prevY = newY;

		newX =  Math.random()*bodyWidth;
		newY = Math.random()*windowHeight + scrollTop;
		distance = Math.sqrt(Math.pow(newX - prevX,2)+Math.pow(newY - prevY,2));
		time = distance / speed;

	animToQueue(q, ufo, {
			top: newY  + "px",
			left: newX  + "px"
		}, time);
		prevX = newX;
		prevY = newY;

		newX =  Math.random()*bodyWidth;
		newY = Math.random()*windowHeight + scrollTop;
		distance = Math.sqrt(Math.pow(newX - prevX,2)+Math.pow(newY - prevY,2));
		time = distance / speed;

	animToQueue(q, ufo, {
			top: newY  + "px",
			left: newX  + "px"
		}, time);

		prevX = newX;
		prevY = newY;

		newX = endX;
		newY = endY
		distance = Math.sqrt(Math.pow(newX - prevX,2)+Math.pow(newY - prevY,2));
		time = distance / speed;

	animToQueue(q, ufo, {
			top: endY + "px",
			left: endX + "px",
		}, time);

}

//Flying alien animation queue
function animToQueue(theQueue, element, animationprops, time) {
    theQueue.queue(function(next) {
        element.animate(animationprops, time, next);
    });
}


