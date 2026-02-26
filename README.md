# openUC2 Documentation

This repository is used to build the openUC2 project's documentation site.

## Usage

Customers who are just end-users of openUC2 products & projects should go to [docs.openuc2.com](https://docs.openuc2.com).

Developers should view the current state of the [openUC2/openUC2.github.io](https://github.com/openUC2/openUC2.github.io) repository's `master` branch at [docs-dev.openuc2.com](https://docs-dev.openuc2.com).
That site should be treated as a developer preview which can have disruptive changes without any prior notice; thus, customers should not be sent to `docs-dev.openuc2.com`. Instead, that site should be used for discovering and resolving most disruptions which would degrade the experience of people using the documentation.

[docs-staging.openuc2.com](https://docs-staging.openuc2.com) should be used as an intermediate "preview" version of `docs.openuc2.com`: it is more stable (i.e. has less accidental disruption) compared to `docs-dev.openuc2.com`), but there may still be a few subtle problems which need to be discovered and fixed before being generally exposed to customers.
`docs-staging.openuc2.com` can be thought of as a "beta preview" of what will become `docs.openuc2.com`.
It's okay to link certain customers to pages in `docs-staging.openuc2.com`, but only if those customers need to have a preview of specific newer versions of those pages before those changes are ready to be mande generally available at `docs.openuc2.com`.

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
git checkout -b deploy/staging staging/deploy
git checkout -b deploy/prod prod/deploy
git checkout master
```

Then you can fast-forward your local `deploy/staging` and `deploy/prod` branches to the desired commits on your local `master` branch, and you can deploy changes to the staging and prod release channels by pushing your updated local `deploy/staging` and `deploy/prod` branches, respectively, up to GitHub.
The deployment process should usually be done as follows:

1. Fast-forward the `deploy` branch of the `docs-staging` repo to whichever commit of the `openuc2.github.io` repo that we want to publish.
2. Look at `docs-staging.openuc2.com` and fix any problems.
3. Once the version in the `docs-staging` repo is stable and mature enough for publication, fast-forward the `deploy` branch of the `docs-prod` repo to the publication-ready commit of the `docs-staging` repo.
