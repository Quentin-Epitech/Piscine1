let type;
if (typeof input_var === "string") {
		type = 'string'
} 
else if (typeof input_var === "boolean") {
	type = "boolean";
}
else if (typeof input_var === "number") {
	if (Number.isInteger(input_var)){
  	type = "integer";
    
  }else {
  		type = "Float";
  }
}

displayThisText("The variable value is" +input_var);
displayThisText("Its type is" + type);
	if (input_var === 42) {
  displayThisText("It is the meaning of life.")
  }



