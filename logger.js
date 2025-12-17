import pino from "pino";

// make sure ./logs folder exists (or change the path)
const logger = pino(
	{
		level: "info",
		// you can add more options here if needed
	},
	pino.destination("./logs/app.log")
);

export default logger;