			
	function fizzbuzz4(){
	var firstName = document.getElementById("first-name").value;
	var middleInitial   = document.getElementById("middle-initial").value;
	var lastName  = document.getElementById("last-name").value;
	var fizzNumber = 3;
	var buzzNumber = 5; 
	var bangNumber = 7; 

	document.getElementById("greeting").innerHTML =  `Welcome to Live 360!, ${firstName} ${middleInitial}. ${lastName}!`;
		
	// Loop message / function checkDivision()
	var displayMessage = "";
	var i;
	var word1 = "Fizz";
	var word2 = "Buzz";
	var word3 = "BANG!";
	var wordCombo = word1 + word2 + word3;
	var totalNumber = parseInt(document.getElementById("totalNumberCount").value);

	for (i = 1; i <= 125; i++) 
	{
    displayMessage += `${i}. `
	if (!checkDivision(i, fizzNumber)  && !checkDivision(i, buzzNumber) && !checkDivision(i, bangNumber)){
		displayMessage += "Bee";
	} else {
		if (checkDivision(i, fizzNumber))
		{
		  displayMessage += word1 + " ";
		} 
		if (checkDivision(i, buzzNumber))
		{
		  displayMessage += word2+ " ";
		} 
		if (checkDivision(i, bangNumber))
		{
		  displayMessage += word3+ " ";
		} 
    }
    displayMessage += "<br>";
	}
	document.getElementById("demoFour").innerHTML = displayMessage;
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
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	