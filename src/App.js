import "./App.css";

import React, { Component } from "react";
import NavBar from "./component/NavBar";
import NewsComp from "./component/NewsComp";
import {
  Switch,
  Route
} from "react-router-dom";
import About from "./component/About";
import LoadingBar from 'react-top-loading-bar';
export default class App extends Component {
  pageSize=15;
  state={
    progress:0,
  }
  apiKey=process.env.REACT_APP_NEWS_API;
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <LoadingBar
        color='#f11946'
        height={4}
        progress={this.state.progress}
       
      />
        <NavBar/>
        <Switch>
          <Route exact path="/"><NewsComp  setProgress={this.setProgress}  key="general" pagesize={this.pageSize} country="in" category="general"/></Route>
          <Route exact path="/about"><About/></Route>
          <Route exact path="/sports"><NewsComp  setProgress={this.setProgress}  key="sports" pagesize={this.pageSize} country="in" category="sports"/></Route>
          <Route exact path="/business"><NewsComp  setProgress={this.setProgress}  key="business" pagesize={this.pageSize} country="in" category="business"/></Route>
          <Route exact path="/technology"><NewsComp  setProgress={this.setProgress}  key="technology" pagesize={this.pageSize} country="in" category="technology"/></Route>
          <Route exact path="/science"><NewsComp  setProgress={this.setProgress}  key="science" pagesize={this.pageSize} country="in" category="science"/></Route>
          <Route exact path="/health"><NewsComp  setProgress={this.setProgress}  key="health" pagesize={this.pageSize} country="in" category="health"/></Route>
          <Route exact path="/entertainment"><NewsComp  setProgress={this.setProgress}  key="entertainment" pagesize={this.pageSize} country="in" category="entertainment"/></Route> 
        </Switch>
      </div>
    );
  }
}
