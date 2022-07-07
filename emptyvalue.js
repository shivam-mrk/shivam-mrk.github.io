
function calculateSimpleInterest2(){
    console.log("test2");

    var principle = document.getElementById('principle').value;
    var numofyear = document.getElementById('numofyear').value;
    var rateofInterest = document.getElementById('rateofInterest').value;

    if(principle =='' || numofyear =='' || rateofInterest ==''){
        document.getElementById('result').value = "Enter All Values";
    }
}



