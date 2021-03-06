import React, { Component } from "react";
import Nav from "./components/Nav";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Post from "./components/Post";
import Switch from "react-router-dom/Switch";
import Todo from "./components/Todo";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path="/post/:post_id" component={Post} />
            <Route path='/todos' component={Todo}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
