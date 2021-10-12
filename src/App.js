import React from "react";

//Componenes and Pages
import Home from "./pages/Home";

//Style
import GlobalStyle from "./componenst/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Home />
    </div>
  );
}

export default App;
