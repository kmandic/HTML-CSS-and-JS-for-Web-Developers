(function(window) {
	var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
	for(var name in names) {
		var firstLetter = names[name].charAt().toLowerCase();
		// console.log("First Letter of the name is: " + firstLetter);
		if (firstLetter === "j") {
			byeSpeaker.speak(names[name]);
		} else {
			helloSpeaker.speak(names[name]);
		}
	}
})(window);