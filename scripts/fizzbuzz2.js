			
	
	function fizzbuzz2(){
	var firstName = document.getElementById("first-name").value;
	var middleInitial   = document.getElementById("middle-initial").value;
	var lastName  = document.getElementById("last-name").value;
	var firstNumber = 3;
	var secondNumber = 5; 

	document.getElementById("greeting").innerHTML =  `Welcome to Live 360!, ${firstName} ${middleInitial}. ${lastName}!`;
		
	// Loop message / function checkDivision()
	var displayMessage = "";
	var i;
	var word1 = "Live";
	var word2 = "360!";
	var wordCombo = word1 + word2;


	for (i = 1; i <= 140; i++) 
	{
    displayMessage += `${i}. `
    if (checkDivision(i, firstNumber)  && checkDivision(i, secondNumber)) 
    { 
      displayMessage += wordCombo;
    } 
    else if (checkDivision(i, firstNumber)) 
    {
	  displayMessage += word1;
    }	
    else if (checkDivision(i, secondNumber))
    {
      displayMessage += word2;
    } 
    else 
    {
      displayMessage += "Bee";
    }
    displayMessage += "<br>";
	}
	document.getElementById("demoDos").innerHTML = displayMessage;
	}

	function checkDivision(num1, num2) { 
	if(num1 % num2 === 0) 
	{
    return true;
	} 
	else 
	{
    return false;
	}
}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	