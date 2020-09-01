function valthisform() {
	var checkboxs=document.getElementByName("c1");
	var okay=false;
	for (var i = 0,l=checkboxs.length;i<l;i++) 
	{

if (checkboxs[i].checked)
{
	okay=true;
	break;
}

	}

	if(okay)alert("Thank you for checking a checkbox");
	else alert("please check a checkbox");

}