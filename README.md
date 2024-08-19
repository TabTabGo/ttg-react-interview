# React To Do App

<img alt="Logo" align="right" src="https://www.tabtabgo.com/assets/images/logo_text_512.png" width="30%" />

A simple skeleton To Do app ready to be implemented. It serves as a good introduction to the various frameworks and tools in use at TabTabgo.

## Quick Overview

The app was setup using [Create React App](https://facebook.github.io/create-react-app/) and follows the standard folder structure

```
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── services
|   ├── TasksService.js
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── assets
        └──img
        └──jss
    ├── reducers
        └──stores
        └──rootReducer.js
    ├── views
        └──components
        └──[modules*]
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    └── reportWebVitals.js
    └── setupTests.js
```

The app relies on the following main packages / frameworks

- [Material-UI](https://material-ui.com/) – The main UI library with the default CSS-in-JSS styling solution. Keep in mind that the current version in use is version **4** and not **5**.
- [Redux](https://redux.js.org/) – For state management along with [Redux Thunk](https://redux.js.org/usage/writing-logic-thunks) as the middleware.
- [Formik](https://formik.org/) – For handling forms and [Yup](https://github.com/jquense/yup) for schema validation.
- [Axios](https://axios-http.com/) – The HTTP client library
- [Yarn](https://yarnpkg.com/) – The package manager

## Get Started

To get started please fork and clone the repository.

- Install dependencies and run the app

## Requirments

The following changes are required

#### 1. Add Task

Implement the add task functionality which requires a form, the correponding action, and reducer functions. No backend is required for this app so keep the data in the app state for now.

To get started, review the Todo module under views/Todo

#### 2. Task List Component

Add a list component to show added tasks and add ability to delete a task

#### 3. Styling the app

Using your design intuitions, adjust the layout and styling of the app. You may use the theme and make broad changes to the color pallete

You might have also noticed the logo in the header isn't showing. Investigate the issue and fix it.

#### 4. Use TaskService

Using Task service to get list of tasks, add task and remove task

#### 5. Use Zustand instead of Redux (option)

The application is build using Redux. Can you replace redux state managment to use [Zustand](https://github.com/pmndrs/zustand)

<!-- +971 55 557 9788 -->
