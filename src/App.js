import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Views/Home'
import About from './Views/About'



// import CounterExample from './Components/CounterExample'

function App() {
  return (

    <>
      <Router>
        <Header />
        {/* <CounterExample/> */}

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>

        </Switch>
        <Footer />
      </Router>

    </>

  );
}

export default App;
