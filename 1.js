/*function b1(){
	var x='Apple';
	x=x+ 'Banana';
	x=x+ 'Orange';
	document.getElementById('id1').textContent= x;
	
} 

function b1(){
	var a=1;
	a=a+3;
	a=a=1;
	a++;
	a= a + ' It's my lucky number'
	document.getElementById('id1').textContent='Result is ' + a;
}
/*
function c1(){
	var a=0;
	var t= 'Shivam ';
	var na= document.getElementById('t1').value;
	for (a=1; a<=na ; a++){
		t =t + '<br>' + a + ' ' + ' x ' + 3 + '= '+ (a*3);
	}
}*/

function f1(){
	console.log("hi");
	var tables= 'Table is ';
	var a=0;
	var b =document.getElementById('t1').value;
	var c=document.getElementById('t2').value;
	
	for( a=1 ;a<=c; a++){
	tables= tables + '<br>' + a + ' '+ 'X ' + b + ' '+ ' ='+  (a* b) ;
}
	document.getElementById('id1').innerHTML= tables;
}