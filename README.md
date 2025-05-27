# 🧱 Example for Module Federation + Standalone Components

This project is composed by an App Shell (host) application plus one microfront-end (mfe1). All projects are using angular v18 with standalone components.

- 🏷️ MFE1 is constructed and exposed as a microfront-end.
- 🏷️ App shell is the host application responsible for loading the mfe1.

The MFE is loaded into the shell using Module Federation.

## 🌟 Topics adressed

- 🔵 Exposing Router configs with Standalone Components via Webpack Module Federation.
- 🔵 Loading Standalone Components via the Router with the use of loadChildren().
- 🔵 Form validations using Angular Reactive Forms.
- 🔵 Mocked Authentication using json-server to create a fake API.
- 🔵 Used concurrently to automate scripts to start app shell and mfe applications.

## 🚀 Features developed

- MFE1 is composed by two routes ('/login', '/welcome').
- 🔀 '/login' will render a Login standalone component using encapsulation shadow.DOM displaying a login form. On succesfull login, user is redirected to welcome page.
- 🔀 '/welcome' will render a Welcome standalone component using encapsulation shadow.DOM displaying welcome message.
- App Shell is composed by a header mapping mfe1 login route to be loaded via Module Federation and a footer.


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

to run only app shell:

```
npm start
```

to run only mfe1:

```
npm run start:mfe1
```

Screenshot example:
![image](https://github.com/user-attachments/assets/15b4e026-38fc-474a-858e-c5aaed477a63)
