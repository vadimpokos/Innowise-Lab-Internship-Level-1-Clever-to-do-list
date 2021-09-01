# Innowise Lab Internship Level 1 Clever to-do list

## [demo](https://vadimpokos.github.io/Innowise-Lab-Internship-Level-1-Clever-to-do-list/)

## How to run the app

1. Clone this repo

```
    $git clone https://github.com/vadimpokos/Innowise-Lab-Internship-Level-1-Clever-to-do-list.git
```

2. Open the directory in code editor
3. Run `$ npm install`
4. Set up .env file with Firebase config
5. Run app with `$ npm start`

## npm scripts

### `npm start`

Runs the app in the development mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `env-cmd -f .env.firebase gh-pages -d build`

Builds and deploys app on gh-pages

## Folders structure

```
└───src
    │   App.css
    │   App.js                                   # App component
    │   index.css
    │   index.js
    │   localStorage.js                          # Local storage
    │   notification.js                          # Notification toast from antd
    │
    ├───Auth                                     # SingIn/SignUp pages
    │       authFormConfig.js
    │       login_logout.css
    │       LogOutButton.js
    │       SignIn.jsx
    │       SignUp.jsx
    │
    ├───Calendar                                # Calendar component
    │       Calendar.css
    │       Calendar.js
    │       CalendarItem.js                     # Calendar item (one day)
    │       TasksBadge.css
    │       TasksBadge.jsx                      # Badges that display number of active/completed tasks
    │
    ├───firebase                                # Firebase config
    │       firebase.js
    │
    ├───redux                                   # Redux
    │       actions.js
    │       appReducer.js
    │       dateReducer.js
    │       reduxTypes.js
    │       rootReducer.js
    │       store.js
    │       todosReducer.js
    │       userReducer.js
    │
    ├───Router                                 # App routing
    │       AppRouter.js
    │       AuthRouter.js
    │       RoutePaths.js
    │       Router.js
    │
    └───ToDo                                   # ToDo component
            NewToDo.css
            NewToDoForm.jsx
            ToDo.css
            ToDo.js
            ToDoList.jsx
```

## Firebase Structure

```
└──todos                  # collection 'todos'
    ├──date               # date when task should be displayed (string)
    ├──description        # to-do description (string)
    ├──id                 # id of the to-do (string)
    ├──uid                # uid of user who created the current to-do (string)
    ├──title              # to-do title (string)
    ├──status             # to-do status (string)
```

## Application stack

### React

### Redux

### Firebase

### Ant Design
