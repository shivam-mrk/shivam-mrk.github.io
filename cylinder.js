function calculateAreaVolume(){
    console.log("test");
    var radius = document.getElementById('radius').value;
    var height = document.getElementById('height').value;

    area = 2*3.14*parseInt(radius)*parseInt(height);
    volume = 3.14*parseInt(radius)*parseInt(radius)*parseInt(height);
   
    document.getElementById('areacylinder').value = area;
    document.getElementById('volumecylinder').value = volume;

}