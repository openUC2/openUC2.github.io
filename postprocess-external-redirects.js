import fs from "fs";
import Handlebars from "handlebars";
import path from "path";

import makeRedirects from "./config/redirects.js";
import { stableURL, variant } from "./config/site.js";

const template = Handlebars.compile(
	fs.readFileSync("./redirect.html.tmpl", "utf8"),
);

for (const redirectSet of makeRedirects(variant)) {
	const allFrom =
		typeof redirectSet.from === "string"
			? [redirectSet.from]
			: redirectSet.from;
	for (const from of allFrom) {
		const rendered = template({ target: `${stableURL}${redirectSet.to}` });
		const outputDir = path.join(import.meta.dirname, "build", from);
		const outputPath = path.join(outputDir, "index.html");
		console.log(`${outputPath}`);
		fs.mkdirSync(outputDir, { recursive: true });
		fs.writeFileSync(outputPath, rendered);
	}
}
