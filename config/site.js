export const siteURL = process.env.SITE_URL || "https://docs.openuc2.com"; // this should be the URL for the stable release channel!
export const siteURLAbbrev = siteURL.replace(/^https?:\/\//, "")
export const baseURL = process.env.BASE_URL || "/";

export const variant = process.env.VARIANT || "full";
export const releaseChannel = process.env.RELEASE_CHANNEL || "development";
export const title = ((channel) => {
	switch (channel) {
		case "":
		case "stable":
		case "production":
		case "prod":
			return "openUC2 Documentation";
		case "offline":
			return "openUC2 Docs (offline snapshot)";
		default:
			return `openUC2 Docs (${channel} preview)`;
	}
})(releaseChannel);
export const shortTitle = ((channel) => {
	switch (channel) {
		case "":
		case "stable":
		case "production":
		case "prod":
			return "openUC2 Docs";
		case "offline":
			return "openUC2 Docs (offline)";
		case "development":
			return "openUC2 Docs (dev)";
		case "staging":
			return "openUC2 Docs (staging)";
		default:
			return `openUC2 Docs (${channel})`;
	}
})(releaseChannel);
export const announcement = ((channel) => {
	const link = `<a href="${siteURL}" target="_blank">${siteURLAbbrev}</a>`;
	switch (channel) {
		case "":
		case "stable":
		case "production":
		case "prod":
			return "";
		case "offline":
			return `This is an offline snapshot of the documentation! You can find the latest version at: ${link}`;
		default:
			return `This is the unstable <strong>${channel}</strong> preview of the documentation! You can find the stable version at: ${link}`;
	}
})(releaseChannel);

export const buildDate = process.env.BUILD_DATE;
