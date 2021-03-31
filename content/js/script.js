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



	// TODO display none loader



}
