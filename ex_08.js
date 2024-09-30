function verif(breadCount,hamCount,tunaCount){
	if (breadCount >= 2 && hamCount >=1 && tunaCount >=1){
		console.log("I can make a royal sandwich!");
	}
	else if (breadCount >=2 && hamCount >=1){
		console.log("i can make a ham sandwich!");
	}
	else if (breadCount>=2 && tunaCount >=1){
		console.log("i can make a tuna sandwich!");
	}
	else {
		console.log("I'd rather be fasting tonight...")
	}
}

verif(breadCount,hamCount,tunaCount);
