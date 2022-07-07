function calculateCompoundInterest(){
    var principle = document.getElementById('principle').value;
    var numofyear = document.getElementById('numofyear').value;
    var rateofInterest = document.getElementById('rateofInterest').value;
    result = principle*Math.pow((1+rateofInterest/100),numofyear);
    console.log(result);
    document.getElementById('result').value = result;

}