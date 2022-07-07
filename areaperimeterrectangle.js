function calculate(){
    console.log("test2");
    var length = document.getElementById('length').value;
    var width = document.getElementById('width').value;

    area = parseInt(length)*parseInt(width);
    perimeter = 2*(parseInt(length)+parseInt(width));

    document.getElementById('arearect').value = area;
    document.getElementById('perimeterrect').value = perimeter;

}