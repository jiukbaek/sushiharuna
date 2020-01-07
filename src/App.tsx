import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";

import Main from "./pages/Main";
import About from "./pages/About";

import Header from "components/Header";

const RootWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const MobileMenuToggle = (e: Event) => {
  const target = e.target as HTMLElement;
  const toggle = document.querySelector("#menuToggle") as HTMLInputElement;
  if (!target.classList.contains("mobileMenu")) {
    toggle.checked = false;
  }
};

class App extends React.Component {
  render() {
    return (
      <>
        <GlobalStyles />
        <Router>
          <RootWrapper onClick={MobileMenuToggle}>
            <Header />
            <Switch>
              <Route path="/about" component={About}></Route>
              <Route path="/" component={Main}></Route>
            </Switch>
          </RootWrapper>
        </Router>
      </>
    );
  }
}

export default App;
