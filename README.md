
# generator-earl-package

Generate scaffolding for an npm package written in Earl Grey.

This generator will generate a proper skeleton for a package written
in the Earl Grey language which can be published to npm and required
from JavaScript as normal.

It generates `prepublish` hooks that compile your code to JavaScript
automatically, and a test file that uses `earl-mocha` (BDD mode).

## Usage

    npm install -g generator-earl-package
    yo earl-package

Resulting directory structure:

    package-root
      .gitignore
      .npmignore
      package.json
      src
        index.eg
      test
        mocha.opt
        test.eg

## Commands

The following commands are defined for convenience:

To compile the project to JS:

    npm run compile

Lazy version of `compile`:

    npm run refresh

