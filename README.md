# spaghetworks.github.io

This is the repository for the [Spaghetworks](https://github.com/Spaghetworks/Spaghetworks) homepage. It was bootstrapped using [Docusaurus v2](https://docusaurus.io), with `pnpm` and TypeScript.

## Setup

Make sure you have Node.js 18.x and `pnpm` 8.x installed. Then run `pnpm i` to install the dependencies.

Once you're fully set up, you can run `pnpm start` to start the local development server.

## Documenting Feature Branches

Spaghetworks developers are encouraged to document their feature branches. They may do so by running the following command:

```shell
$ pnpm docusaurus docs:version feature-foo
```

Obviously, replace `foo` with the name of the feature branch in lower kebab case, minus the `feature/` prefix. This command will create a copy of the latest documentation in `versioned_docs/version-feature-foo` and add `feature-foo` to `versions.json`. It will also make a copy of the sidebars in `versioned_sidebars/version-feature-foo-sidebars.json`, but try not to touch that unless you absolutely have to.

Newly created documentation should always be in a new subdirectory. This is to prevent conflicts if the feature branch is merged into `dev`. If necessary, it is always possible (and indeed preferred) to de-fragment the docs later on.

Once the feature branch is merged into `dev`, copy the contents of `versioned_docs/version-feature-foo` to `docs/`, and everything should be smooth sailing since you shouldn't have touched any of the existing documentation. If defragmentation is necessary, do so in separate commits after merging the documentation.

To delete the feature branch's documentation, simply remove the `versioned_docs/version-feature-foo` directory and `versioned_sidebars/version-feature-foo-sidebars.json`, then remove the corresponding entry from `versions.json`.

For more information, feel free to read up on [Docusaurus Versioning](https://docusaurus.io/docs/versioning).
