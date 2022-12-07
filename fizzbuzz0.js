function fizzbuzz0(){
	var firstName = document.getElementById("first-name").value;
	var middleInitial   = document.getElementById("middle-initial").value;
    var lastName  = document.getElementById("last-name").value;
    // Display Welcome to User Input
			
			document.getElementById("greeting").innerHTML = `Welcome to Live 360!, ${firstName} ${middleInitial} ${lastName}!`;			
			var displayMessage = "";
			var i;
			for (i = 1; i <= 125; i++){
				displayMessage += `${i}. We are here to help you and do your life easier!` + "<br>";
			}
			document.getElementById("demoZero").innerHTML = displayMessage;
		}
		
		
		

