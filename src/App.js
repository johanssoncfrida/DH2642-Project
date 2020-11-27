import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './presenters/header'
import HomePage from './presenters/homePage'
import BeforeQuiz from './presenters/beforeQuiz'
import SignIn from './helpers/auth/signIn'
import SignUp from './helpers/auth/signUp'
import CreateProject from './presenters/createProject'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/beforequiz' component={BeforeQuiz} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateProject} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
