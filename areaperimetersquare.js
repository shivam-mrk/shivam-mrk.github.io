function calculate(){
    console.log("test2");
    var side = document.getElementById('side').value;

    a = parseInt(side)*parseInt(side);
    p = 4*parseInt(side);
    document.getElementById('area').value = a;
    document.getElementById('perimeter').value = p;

}