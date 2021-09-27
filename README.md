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
    │   App.js                                               # App component
    │   index.js                                             # Main index.js file
    │
    ├───components
    │   ├───Auth
    │   │   ├───shared                                       # Styles for SignIn/SignUp
    │   │   │       styles.css
    │   │   │
    │   │   ├───SignIn                                       # SignIn page
    │   │   │       index.jsx
    │   │   │
    │   │   └───SignUp                                       # SignIn page
    │   │           index.jsx
    │   │
    │   ├───Calendar
    │   │   ├───CalendarComponent                            # Calendar component
    │   │   │       index.jsx
    │   │   │       styles.css
    │   │   │
    │   │   ├───CalendarItem                                 # Calendar item component
    │   │   │       index.jsx
    │   │   │
    │   │   └───TaskBadge                                    # Task badge that displays number of active/completed tasks
    │   │           index.jsx
    │   │           styles.css
    │   │
    │   ├───Loader                                           # Loader component
    │   │       index.jsx
    │   │       styles.css
    │   │
    │   ├───LogOutButton                                    # Log out button component
    │   │       index.jsx
    │   │
    │   ├───Main                                            # Main page, contains calendar, to-do-list and new task form
    │   │       index.jsx
    │   │
    │   ├───Router                                          # Router
    │   │       AppRouter.jsx
    │   │       AuthRouter.jsx
    │   │       Router.jsx
    │   │
    │   └───ToDo
    │       ├───NewToDo                                     # Form for creating new to-do
    │       │       index.jsx
    │       │       styles.css
    │       │
    │       ├───Status                                      # to-do status
    │       │       index.jsx
    │       │
    │       ├───ToDoItem                                    # to-do item
    │       │       index.jsx
    │       │       styles.css
    │       │
    │       └───ToDoList                                    # to-do list
    │               index.jsx
    │
    ├───configs
    │       authFormConfig.js                               # config for SignUp/SignIn forms
    │
    ├───constants                                           # App constants
    │       calendar.js                                     # Constants for calendar
    │       reduxTypes.js                                   # Redux types
    │       RoutePaths.js                                   # Route Paths
    │
    ├───firebase                                            # Firebase config
    │       firebase.js
    │
    ├───redux                                               # Redux
    │   │   appStore.js
    │   │   rootReducer.js
    │   │
    │   ├───appReducer
    │   │       actions.js
    │   │       reducer.js
    │   │
    │   ├───dateReducer
    │   │       actions.js
    │   │       reducer.js
    │   │
    │   ├───todosReducer
    │   │       actions.js
    │   │       reducer.js
    │   │
    │   └───userReducer
    │           actions.js
    │           reducer.js
    │
    ├───services
    │   └───localStorage                                    # localStorage
    │           index.js
    │
    └───utils
            DateCompare.js                                  # Function for comparing to-dos dates
            notification.js                                 # Toast from Ant Design
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
