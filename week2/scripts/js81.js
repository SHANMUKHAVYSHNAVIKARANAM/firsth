function phnonenumber(input txt) {
	var phoneno = /^\d{10}$/;
	if (inputtxt.value.match(phoneno)) {
		return true;

	}
	else 
	{
		alert("Not a valid phone number");
		return false;
	}
}