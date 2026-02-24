# openUC2 Documentation

This repository is used to build the openUC2 project's documentation site.

## Development

### Local preview

Run:

```
npm install
npm run start
```

Then open: <http://localhost:3000>

## Deployment

The openUC2 docs site has three GitHub Pages deployments, each with its own repository:

- development/edge release channel: the `master` branch of [openUC2/openUC2.github.io](https://github.com/openUC2/openUC2.github.io)
- staging/beta release channel: the `deploy` branch of [openUC2/docs-staging](https://github.com/openUC2/docs-staging)
- prod/stable release channel: the `deploy` branch of [openUC2/docs-prod](https://github.com/openUC2/docs-prod)

To set up a local development environment which can deploy to all three channels, run:

```bash
git clone git@github.com:openUC2/openUC2.github.io.git
cd openUC2.github.io
git config push.default upstream
git remote add staging git@github.com:openUC2/docs-staging.git
git remote add prod git@github.com:openUC2/docs-prod.git
git fetch --all
git checkout -b staging staging/deploy
git checkout -b prod prod/deploy
git checkout master
```

Then you can fast-forward your local `staging` and `prod` branches to the desired commits on your local `master` branch, and you can deploy changes to the staging and prod release channels by pushing your `staging` and `prod` branches, respectively.
