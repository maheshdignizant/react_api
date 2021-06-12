import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Login from './components/login';
import Register from './components/register';
import UserList from './components/userList';
import Api from './components/api'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import "./App.css"


export const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Login} />
          <Route  path='/register' component={Register} />
          <Route  path='/api' component={Api} />
          <Route  path='/userdata' component={UserList} />
        </Switch>
      </Router>
      </>
  )
}

export default App;