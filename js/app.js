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


	// friendAlien.on('click', function(){
	// 	info.toggleClass('hidden');
	// 	ask.toggleClass('hidden');
	// 	friendAlien.toggleClass('friendAlienClicked');
	// })

		power.on('mouseenter', function(){
			$(this).addClass('hidden');
			$(this).prev().removeClass('hidden');
		});

		hero.on('mouseleave', function(){
			$(this).addClass('hidden');
			$(this).next().removeClass('hidden');
		});

	email.on('mouseover', function(){
		fluffy.effect( "bounce", {times:3}, 300 );
	});


function shootAlien() {

	// ufo.on('mouseenter', function(){
	// 	console.log('over');
	// 	$(this).css('cursor', 'pointer');
	// });
	ufo.on('click', function(){
		ufo.stop();
		clearInterval(intervalAlien);
		ufo.animate({
			'left': -200
		});

	});
};
test();
function test () {
	console.log('test');
}


// var intervalAlien = setInterval(flyAlien, 15000);

// shootAlien();
});


//Funkcje

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

function animToQueue(theQueue, element, animationprops, time) {
    theQueue.queue(function(next) {
        element.animate(animationprops, time, next);
    });
}


