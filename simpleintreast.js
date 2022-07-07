function calculateSimpleInterest(){
    var principle = document.getElementById('principle').value;
    var numofyear = document.getElementById('numofyear').value;
    var rateofInterest = document.getElementById('rateofInterest').value;
    var result = principle * numofyear * rateofInterest/100;
    console.log(result);
    document.getElementById('result').value = result;

}