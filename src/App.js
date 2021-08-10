import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { SignIn } from './SignIn';
import { ToDoList } from './ToDoList';
import 'antd/dist/antd.css'


function App() {
  return (
    <Router>
      <Link to='/signin'>Sign In</Link>
      <Link to='/'>Home</Link>
      <Switch>
        <Route exact path='/'>
          <ToDoList />
        </Route>
        <Route path='/signin' component={SignIn}/>
      </Switch>
    </Router>
  );
}

export default App;
