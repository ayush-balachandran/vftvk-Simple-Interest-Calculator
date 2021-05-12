//function to display rate value from slider
function update(val)
{
    document.getElementById("rate_val").innerHTML = val;
}

//function to compute the intrest and total amount
function compute()
{
    var principal = document.getElementById("principal").value;
    var rate =  document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    //validation of principal to check for negative or zero value
    if(principal && parseInt(principal)>0)
    {
        var intrest = (principal * rate * years)/100;
        var final = parseInt(principal) + parseInt(intrest);
        var year = parseInt(new Date().getFullYear())+parseInt(years);
        document.getElementById("result").innerHTML= "If you deposit "+principal+",\<br\> at an interest rate of "+rate+"%,\<br\>You will receive an interest amount of "+intrest+",\<br\>Total amount received will be "+final+",\<br\>in the year "+year;
    }
    else
    {
        document.getElementById("result").innerHTML= "Enter a positive number";
        document.getElementById("principal").focus();
    }
}

        