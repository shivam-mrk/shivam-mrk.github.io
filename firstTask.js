function clickon(){
	console.log("hey folks good morning");
	var num1=document.getElementById("demo").value;
	var result= num1*2;
	console.log(result);
}

function doclick(){
	//console.log("i am in ");
	//document.getElementById("demo").value ="";	
	var doublenum=document.getElementById("demo").value;
	var result=2*doublenum;
	//console.log(result);
	document.getElementById("result").textContent= 'Result is   '+result;
	
}