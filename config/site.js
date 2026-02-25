export const siteURL = process.env.SITE_URL || 'https://docs.openuc2.com';
export const baseURL = process.env.BASE_URL || '/';

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

export const buildDate = process.env.BUILD_DATE;
