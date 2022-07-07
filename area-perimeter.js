function calculateSimpleInterest(){
    console.log("test");
    var radius = document.getElementById('radius').value;

    area = 2*3.14*parseInt(radius)*parseInt(radius);
    perimeter = 2*3.14*parseInt(radius);
   
    document.getElementById('resultarea').value = area;
    document.getElementById('resultperimeter').value = perimeter;

}