import React from "react";
import { Route } from "react-router-dom";

//Componenes and Pages
import Home from "./pages/Home";
import Nav from "./componenst/Nav";

//Style
import GlobalStyle from "./componenst/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
