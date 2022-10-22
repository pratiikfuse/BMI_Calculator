function CalculateBMI()
{
    let height = document.getElementById("height").value/100;
    let weight = document.getElementById("weight").value;
    
    var Result  = document.getElementById("result");

    if(weight<0 || height<0)
    {
        Result.innerHTML = "Weight should be Positive !!";
        Result.style.color = "red";
        return false;
    }
    let BMI = weight/(height*height);


 
    

    if(BMI < 18.5)
    {
        Result.innerHTML = "You are Underweight";  
        Result.style.color = "green";
    }
    else if(BMI >= 18.5 && BMI<=24.9)
    {
        Result.innerHTML = "You are Normal";
        Result.style.color = "#8B8000";
    }
    else if(BMI >= 25 && BMI<=29.9)
    {
        Result.innerHTML = "You are Overweight";
        Result.style.color = "orange";
    }
    else if(BMI>=30)
    {
        Result.innerHTML = "You are Extremely Obese";
        Result.style.color = "red";
    }


}