(function () {
	document.getElementById("form").onsubmit = function (e) {
		e.preventDefault(); //Clicking on a "Submit" button, prevent it from submitting a form

		if(!validation())
			return false;

		enter_data();
	};

function enter_data() {
	let table = document.getElementById("showinput");
	let row = table.insertRow(table.rows.length);//find the no of rows
	let cell = row.insertCell(0);
	let cell1 = row.insertCell(1);
	let cell2 = row.insertCell(2);

	cell.innerHTML = (table.rows.length-1);
	cell1.innerHTML = document.getElementById("fn").value;
	document.getElementById("fn").value = "";
	cell2.innerHTML = document.getElementById("email").value;
	document.getElementById("email").value = "";
	document.getElementById("password").value = "";
	document.getElementById("password2").value = "";


}

function validation() {
	let full = document.getElementById('fn').value;
	let em = document.getElementById('email').value;
	let pwd = document.getElementById('password').value;
	let cpwd = document.getElementById('password2').value;

	let errorStatus = true;

	if (!/^[a-zA-Z\-]+$/.test(full)) {
		document.getElementById('validate_name').innerHTML = "**please enter valid username";
		errorStatus = false;
		}
	if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(em)) {
		document.getElementById('validate_email').innerHTML = "**use correct format to enter email";
		errorStatus = false;
		}
	if (!/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(pwd)) {
		document.getElementById('validate_pwd').innerHTML = "**use correct format to enter password";
		errorStatus = false;
		}

	if (pwd !== cpwd) {
		document.getElementById('validate_cpwd').innerHTML = "**password does not matches";
		errorStatus = false;
		}

	return errorStatus;

	}

})();