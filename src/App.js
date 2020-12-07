import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./presenters/header";
import HomePage from "./presenters/homePage";
import BeforeQuiz from "./presenters/beforeQuiz";
import SignIn from "./helpers/auth/signIn";
import SignUp from "./helpers/auth/signUp";
import CreateProject from "./presenters/createProject";
import Quiz from "./presenters/quiz";
import AfterQuiz from "./presenters/afterQuiz";
import ProfilePage from "./presenters/profilePage";
import HighScore from "./presenters/highScore";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/beforequiz">
              <div className="row">
                <div className="col s3 ">
                  <div className="highscore">
                    <HighScore />
                  </div>
                </div>
                <div className="col s6">
                  <div className="beforeQuiz">
                    <BeforeQuiz />
                  </div>
                </div>
              </div>
            </Route>
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/create" component={CreateProject} />

            <Route path="/profile">
              <div className="row">
                <div className="col s4 ">
                  <div className="highscore ">
                    <HighScore />
                  </div>
                </div>
                <div className="col s8">
                  <div className="profile">
                    <ProfilePage />
                  </div>
                </div>
              </div>
            </Route>
            <Route path="/quiz" component={Quiz} />
            <Route path="/afterquiz">
              <div className="row center grey" id="afterquizView">
                <div className="col s7 " id="afterQuiz">
                  <AfterQuiz />
                </div>
                <div className="col s2 " id="highscoreAfterquiz">
                  <HighScore />
                </div>
              </div>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
