var keys = document.querySelectorAll(".calculator span");
var input = document.querySelector('.screen');
for (var i = 0; i < keys.length; i++) {
	keys[i].onclick = function () {
		var inputVal = input.innerHTML;

		var btnVal = this.innerHTML;

		if (btnVal == "C") {
			input.innerHTML = "";
		}else if(btnVal == "="){
			input.innerHTML = eval(inputVal)
		}else{
			input.innerHTML += btnVal;
		}
	}
}