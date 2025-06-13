# Documentation PDF Generation

This repository now includes automated PDF generation for all toolbox documentation using the [docusaurus-plugin-papersaurus](https://github.com/simologos/docusaurus-plugin-papersaurus) plugin.

## How it works

1. **Automatic Generation**: PDFs are automatically generated when a new release is published via GitHub Actions
2. **Manual Trigger**: The workflow can also be manually triggered from the Actions tab
3. **Organized Output**: PDFs are organized by toolbox type for easy access

## Generated PDFs

The workflow generates PDFs for the following documentation:

### CoreBox (with language variants)
- English documentation
- German documentation (Deutsch)
- French documentation (Français) 
- Spanish documentation (Español)
- Arabian documentation

### Other Toolboxes
- ElectronicsBox
- InfinityBox
- DiscoveryFluorescence
- LightsheetBox
- QBox
- SeeedMicroscope

## Accessing PDFs

Generated PDFs are available in two ways:

1. **Release Assets**: Attached to each GitHub release
2. **Workflow Artifacts**: Available as artifacts from the GitHub Actions workflow

## For Maintainers

### Manual PDF Generation

To manually generate PDFs locally (requires Chrome/Chromium):

1. Install Chrome or Chromium browser
2. Set environment variable: `export PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser`
3. Enable PDF generation in `docusaurus.config.js`: `autoBuildPdfs: true`
4. Run: `npm run build`
5. PDFs will be generated in `build/pdfs/`

### Workflow Configuration

The PDF generation workflow is located at `.github/workflows/generate-pdfs.yml` and:

- Installs required dependencies including Chrome
- Builds the documentation with PDF generation enabled
- Organizes PDFs by toolbox type
- Uploads artifacts and attaches to releases

## Technical Details

- **Plugin**: docusaurus-plugin-papersaurus v2.0.3
- **PDF Engine**: Puppeteer with Chrome/Chromium
- **Organization**: Automated sorting by toolbox folder structure
- **Trigger**: Release events and manual workflow dispatch