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

/*function f1(){
	console.log("hi");
	
	var a=0;
	var b =document.getElementById('t1').value;
	var c=document.getElementById('t2').value;
	var str='<table class="table table-dark">'
	for( a=1 ;a<=c; a++){
	str= str + '<br>' + a + '   '+ '  X  ' + b + ' '+ ' ='+  (a* b) ;
}
		str=str +'</table>';
	document.getElementById('id1').innerHTML= str;
	
}
*/
/*
function f1(){
	console.log("hi buddy")
	var num1=document.getElementById('t1').value;
	console.log(num1);
	var num2=document.getElementById('t2').value;
	console.log(num2);
	var str='<table class="table table-dark">'
for(i=parseInt(num1); i<=parseInt(num2) ; i++){
str= str + '<tr> <td> '+ (i*1)+'</td>  <td> '+ (i*2)+'</td> <td> '+
(i*3)+' </td></tr>';
}
str=str +'</table>';
console.log(str);
document.getElementById('id1').innerHTML= str;
}
*/
function f1(){
    var a = 0;
    var b = document.getElementById('t1').value;
    var c = document.getElementById('t2').value;
    var t= '<table class="table table-dark"><tbody>';
//////// for loop operation perform//////
    for(a=1; a<=c; a++){ 

    t= t +'<tr><td>' + a + ' </td><td>' + ' x ' + '</td><td>'+  b +' </td><td>' + '=' + '</td><td> ' +( a * b) + '</td></tr>';        
    }
    t = t + '</tbody></table>';
    document.getElementById('id1').innerHTML='value is '+ t;    
}