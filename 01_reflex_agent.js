// MIT License
// Copyright (c) 2020 Luis Espino

function reflex_agent(location, state){
   	if (state=="DIRTY") return "CLEAN";
   	else if (location=="A") return "RIGHT";
   	else if (location=="B") return "LEFT";
}

function test(states){
	var locaction, state, action_result;

	while (conta <= 8){
		locaction = states[0];		
      	state = states[0] == "A" ? states[1] : states[2];
      	action_result = reflex_agent(location, state);
      	
      	if (action_result == "CLEAN"){
        	if (location == "A") states[1] = "CLEAN";
         	else if (location == "B") states[2] = "CLEAN";
      	}
      	else if (action_result == "RIGHT") states[0] = "B";
      	else if (action_result == "LEFT") states[0] = "A";
		var random = Math.round(Math.random()) + 1;
		states[random] = "DIRTY";
		console.log(states);
		if(states[1] == "CLEAN" && states[2] == "CLEAN"){
			console.log("FIN");
		}else{
			setTimeout(function(){ test(states); }, 2000);
		}
		
		document.getElementById("log").innerHTML+="<br>Location: ".concat(location).concat(" | Action: ").concat(action_result);
		setTimeout(function(){ test(states); }, 2000);
		conta = conta + 1;
	}
      	
}

var states = ["A","DIRTY","DIRTY"];
var conta = 0;
test(states);
