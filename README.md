<h1 align="center">5Place2Live</h1>
<h3 align="center">Project uses react typescript with firebase</h3>

## 🛠️ Technical

- React create app: Create project with react
- Redux/redux-toolkit: Manage and pass state to components
- Firebase: Replace BE
- Form handler: React-hook-form/ form handler
- Storybook: Show how to use components
- I18n: Translate english and vietnamese

## 📦 Steps to set up

- Step 1

  - Follow .env.example to create .env file

- Step 2

  - Run below commands

```bash
# yarn
$ yarn install
$ yarn start
```

## 📁 Directory structure

```sh

├──docs/
│ └── pull_request_template.md
├──public/
│ ├──locales/
  └──images/
└──src/
  ├──apis/ # Using to store api call from firebase
  ├──assets/ # Using to store stylesheets
  ├──components/ # Using to component used in many pages
  ├──constants/ # Using to constants used in many pages
  ├──enums/ # Using to enums used in many pages
  ├──interfaces/  # Using to store interfaces used in many file
  ├──pages/  # Using to store pages components
  ├──providers/  # Using to store providers and contexts
  ├──layouts/ # Store layouts used in many pages
  ├──server/ # Store Firebase config
  ├──store/ # Store reducer, slice from redux
  │
  └── index.tsx
```
