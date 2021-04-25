import * as React from "react";
import "@fontsource/roboto";
import "@fontsource/lato";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";

/* COMPONENTS */
import Home from "./pages/Home";
import About from "./pages/AboutMe";
import Experience from "./pages/Experience"
import Skills from "./pages/Skills"

function App() {
  return (
    <Box  minHeight='100vh' bg="warm.100">
      <Router>
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/About">
            <About />
          </Route>
          <Route exact path="/Experience">
            <Experience/>
          </Route>
          <Route exact path="/Skills">
            <Skills/>
          </Route>
        </Switch>
      </Router>
    </Box>
  );
}

export default App;
