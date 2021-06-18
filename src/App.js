import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Login from './components/login';
import Register from './components/register';
import UserList from './components/userList';
import CreateUser from './components/addUser';
import EditUser from './components/editUser';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./App.css"


export const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Login} />
          <Route  path='/register' component={Register} />  
          <Route  path='/userdata' component={UserList} />
          <Route  path='/adduser' component={CreateUser} />
          <Route  path='/edituser/:id' component={EditUser} />
        </Switch>
      </Router>
      </>
  )
}

export default App;