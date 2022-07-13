function f1(){
	var v1=['Apple','Banana','Mango', 'Grapes','Blueberry'];
	counter=0;
	var sp = document.getElementById('t1').value;
	if(sp=="Apple"){
		counter=1;
	}
	if(sp=="Banana"){
		counter=2;
	}
	if(sp=="Mango"){
		counter=3;
	}
	if(sp=="Grapes"){
		counter=4;
	}
	document.getElementById('t1').value=v1[counter];
}



function f2(){	
//console.log('hey');
	var v2=['Apple','Banana','Mango', 'Grapes','Blueberry'];
	counter=0;
	var ret = document.getElementById('t1').value;
	if(ret=="Banana"){
		counter=0;
	}
	if(ret=="Mango"){
		counter=1;
	}
	if(ret=="Grapes"){
		counter=2;
	}
	if(ret=="Blueberry"){
		counter=3;
	}
	
	document.getElementById('t1').value=v2[counter];
}

function f3(){
	//console.log("boss");
	    var v3=['Apple','Banana','Mango', 'Grapes','Blueberry'];
		 val=0;
		var alter=document.getElementById('t1').value;
		if(alter=="Apple"){
			val=2;
		}
		if(alter=="Banana"){
			val=3;
		}
		if(alter=="Mango"){
			val=4;
		}
		if(alter=="Grapes"){
			val=0;
		}
		document.getElementById('t1').value=v3[val]; 
}


	
	
	
	
//console.log("Good afternoon");
	/* var v1=['Apple','Banana','Manago','Grapes','Blueberry'];
	var sp = document.getElementById('t1').value;
	if(sp=="Apple"){
		counter=1;
	}
	if(sp=="Banana"){
		counter=2;
	}
	if(sp=="Manago"){
		counter=3;
	}
	if(sp=="Grapes"){
		counter=4;
	}
	if(sp=="Blueberry"){
		counter=0;
	}
	document.getElementById('t1').value=v1[counter] 
	
}



var v1=['Apple','Banana','Mango','Grapes','Blueberry'];
	var sp=v1.length;
	document.getElementById('t1').value=v1[counter];
	counter++;*/