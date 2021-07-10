setTimeout(expireLoader, 3000)
setTimeout(function (){ 
	var loaderContainer = document.querySelector('#linkLoader01');
	loaderContainer.classList.add('linkHover'); // animation underline
}, 500 )

function expireLoader(){
	// make animation opacity fade for loader
	var loaderContainer = document.querySelector('#loaderContainer');
	loaderContainer.classList.add('loaderExpire');

	// TODO display app
	var app = document.getElementById('app')
	app.style.display = "block";

	setTimeout(function (){loaderContainer.style.display = "none";}, 1005)

	// TODO display none loader
	//loaderContainer.style.display = "none";
}

function startTime() {
	const today = new Date();
	let h = today.getHours();
	let m = today.getMinutes();
	let s = today.getSeconds();
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById('hour').innerHTML = h;
	document.getElementById('minute').innerHTML = m;
	setTimeout(startTime, 1000);
}

function checkTime(i) {
	if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
	return i;
}