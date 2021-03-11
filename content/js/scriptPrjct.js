function getPoint() {
	var target = document.getElementById("target");
	var output = document.getElementById("output");

	output.innerHTML = "offsetTop: " + target.offsetLeft;
}
