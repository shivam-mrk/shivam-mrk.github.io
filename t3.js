/*function f1(){
	console.log('hey');
	var str= '<table>';
	for(i=1; i<=5; i++){
	str=str + '<tr><td>Apple '+ i + '</td></tr>';
	}
		str=str+'<table>';
		document.getElementById('s1').innerHTML=str;
}
*/
function f1(){
	var num1=document.getElementById('t1').value;
	var num2=document.getElementById('t2').value;
	var str='<table class="table table-dark">'
for(i=parseInt(num1); i<=parseInt(num2) ; i++){
str= str + '<tr> <td> '+ (i*1)+'</td>  <td> '+ (i*2)+'</td> <td> '+
(i*3)+' </td></tr>';
}
str=str +'</table>';
document.getElementById('s1').innerHTML= str;
}