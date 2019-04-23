function greet(name) {
	if (name === undefined || name.length === 0) {
		return "Hello, my friend.";
	} else if (Array.isArray(name) && name.length === 2) {
		return `Hello, ${name[0]} and ${name[1]}.`;
	} else if (Array.isArray(name) && name.length > 2) {
		let output = "Hello, ";
		for (let i = 0; i < name.length - 1; i++) {
			output = output + `${name[i]}, `;
		}
		return (output = output + `and ${name[name.length - 1]}.`);
	} else if (name === name.toUpperCase()) {
		return `HELLO, ${name}.`;
	} else {
		return `Hello, ${name}.`;
	}
}

module.exports = greet;
