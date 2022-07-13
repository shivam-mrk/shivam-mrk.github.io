function f1(){
    document.getElementById('t1').value = "Hello world";
    console.log('Hello world');
}

function f1(){
    var obj1 = {"id":"01", "Product":"Mobile", "Price":"500000", "Quantity":10};
    var obj2 = {"id":"01", "Product":"TV", "Price":"10000", "Quantity":150};
    document.getElementById('order').value = obj1.id;
    document.getElementById('Product').value = obj1.Product;
    document.getElementById('Quantity').value = obj1.Quantity;
    document.getElementById('Price').value = obj1.Price ;
}

function f2(){
    document.getElementById('order').value = "";
    document.getElementById('Product').value = "";
    document.getElementById('Quantity').value = "";
    document.getElementById('Price').value = "";

}

function f4(){
	var obj1=[
		{"id":"01", "Product":"Mobile", "Price":"500000", "Quantity":10},
		{"id":"02", "Product":"TV", "Price":"10000", "Quantity":150},
		{"id":"03", "Product":"Radio", "Price":"10000", "Quantity":20}
	];
	if(document.getElementById('t1').value==""){
		document.getElementById('spa1').textContent=" Please Enter The Order No.";
		return;
	} else {
		document.getElementById('spa1').textContent='';
	}
	var tempobj= obj1[document.getElementById('t1').value];
		document.getElementById('order').value =tempobj.id;
		document.getElementById('Product').value=tempobj.Product;
		document.getElementById('Quantity').value=tempobj.Quantity;
		document.getElementById('Price').value=tempobj.Price;
		
		document.getElementById('t2').value=tempobj.Price*(tempobj.Quantity);
}

function f5(){
	
}