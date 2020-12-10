import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./presenters/header";
import HomePage from "./presenters/homePage";
import BeforeQuiz from "./presenters/beforeQuiz";
import SignIn from "./presenters/signIn";
import SignUp from "./presenters/signUp";
import Quiz from "./presenters/quiz";
import AfterQuiz from "./presenters/afterQuiz";
import ProfilePage from "./presenters/profilePage";
import HighScore from "./presenters/highScore";
import TopScores from "./presenters/topScores";

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
                <div className="col s4">
                  <div className="topScores">
                    <TopScores />
                  </div>
                </div>
                <div className="col s4">
                  <div className="beforeQuiz">
                    <BeforeQuiz />
                  </div>
                </div>
                <div className="col s4"></div>
              </div>
            </Route>
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/highscore" component={HighScore} />

            <Route path="/profile">
              <div className="row">
                <div className="col s4 ">
                  <div className="topScores">
                    <TopScores />
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
              <div className="row center" id="afterquizView">
                <div className="col s7 ">
                  <AfterQuiz />
                </div>
                <div className="topScores col s4" id="topScores">
                  <TopScores />
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
