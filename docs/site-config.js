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
			return `openUC2 Docs (offline snapshot)`;
		default:
			return `openUC2 Docs (${channel} preview)`;
	}
})(releaseChannel);
