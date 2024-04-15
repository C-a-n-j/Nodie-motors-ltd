let copy = document.querySelector('.infinite_images').cloneNode(true);
document.querySelector('.infinite').appendChild(copy);

// scroll speed
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 10000,
	speedAsDuration: true
});