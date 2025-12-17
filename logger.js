import pino from "pino";

// check if ./logs folder exists
if (!fs.existsSync("./logs")) {
	fs.mkdirSync("./logs");
}

// check if ./logs/app.log exists
if (!fs.existsSync("./logs/app.log")) {
	fs.writeFileSync("./logs/app.log", "");
}

// make sure ./logs folder exists (or change the path)
const logger = pino(
	{
		level: "info",
		// you can add more options here if needed
	},
	pino.destination("./logs/app.log")
);

export default logger;