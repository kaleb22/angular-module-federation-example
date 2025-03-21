# 🧱 Example for Module Federation + Standalone Components

This project is composed by an App Shell (host) application plus two microfront-ends (mfe1, mfe2) and a shared library with two services to be used by all applications. All projects are using angular v18 with standalone components.

- 🏷️ MFE1 is constructed and exposed as a microfront-end.
- 🏷️ MFE2 is constructed and exposed as a web-component.

Both MFE's are loaded into the shell using Module Federation.

## 🌟 Topics adressed

- 🔵 Exposing Router configs with Standalone Components via Module Federation.
- 🔵 Loading Standalone Components via the Router with the use of loadChildren() and loadRemoteModule().
- 🔵 Sharing libraries to be used and consumed by all applications.

## 🚀 Features developed

- MFE1 is composed by one route '/home' which renders the standalone homeComponent using encapsulation shadow.DOM.
- MFE2 is composed by one route '/home' which renders the standalone appComponent using encapsulation shadow.DOM.
- App Shell is composed by a header mapping mfe1 and mfe2 routes to be loaded via Module Federation.
- Shared-lib is a library composed by two services, message and log. Log is a simple service just to log messages and errors on console and Message service uses custom events to communicate between shell and mfe's.


### Installing and running locally

In order to run the project locally, you just need to download this repo and run the commands:

To install:

```
npm install
```

To run shell and mfe1:

```
npm run start:all
```

to run mfe2 and generates the build to be loaded, its necessary to have an extension like Live Server, to serve the dist files generated. To generate the build for mfe2, you can run:

```
npm run build:mfe2
```

After generating the build, you can use Live Server to serve the dist folder. In my case, it generates a url like this: http://localhost:5500/dist/mfe2/remoteEntry.js
