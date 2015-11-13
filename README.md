# Capital One Investing CSS Framework

## Install

After installing [Node](http://nodejs.org) on your development environment, you can install all the dependencies necessary for this project with a single command.

```
{~/path/to/project/folder}
npm install
```

## Run local server

Once the project dependencies have been installed, another one-liner will compile the stylesheets and start up a local server with livereload enabled (stylesheets only).

```
{~/path/to/project/folder}
gulp serve
```

Then, go to the address indicated in the green console output, e.g. http://localhost:8080.  Any changes to the SCSS files within the project will reload the stylesheet without having to refresh the page.

## Stylesheets

This package produces two versions of the COFI One Design CSS framework, both with expanded and compressed (`.min`) output options.

- `one-design-core.css` only includes a subset of styles which cover most use cases
- `one-design.css` includes everything from Bootstrap with the One Design styles applied

Any updates to these stylesheets should be published at the following location on the MGDCON server:

```
smb://files.sharebuilder.com/staging/Marketing_Content/MgdCon/core/css/
```
