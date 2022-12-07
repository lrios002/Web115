			
	function fizzbuzz1(){
	var firstName = document.getElementById("first-name").value;
	var middleInitial   = document.getElementById("middle-initial").value;
	var lastName  = document.getElementById("last-name").value;
	document.getElementById("greeting").innerHTML =  `Welcome to Live 360!, ${firstName} ${middleInitial}. ${lastName}!`;
		
	// Loop message 
	var displayMessage = "";
	var i;
	var word1 = "live";
	var word2 = "360!"
	var wordCombo = word1 + word2;

	for (i = 1; i <= 140; i++) 
	{
		displayMessage += `${i}. `
		if (i % 3 === 0 && i % 5 === 0) 
		{
      displayMessage += wordCombo;
		} 
		else if (i % 5 === 0) 
		{
			displayMessage += word1;
		}	
		else if (i % 3 === 0)
		{
      displayMessage += word2;
		} 
		else 
		{
      displayMessage += ` `;
		}
		displayMessage += "<br>";
	}
	document.getElementById("demoZero").innerHTML = displayMessage;
}