import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";

import Main from "./pages/Main";
import About from "./pages/About";
import Menu from "./pages/Menu";

import Header from "components/Header";
import Footer from "components/Footer";

const RootWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const MobileMenuToggle = (e) => {
  const target = e.target;
  const toggle = document.querySelector("#menuToggle");
  if (!target.classList.contains("mobileMenu")) {
    toggle.checked = false;
  }
};

export default () => (
  <>
    <GlobalStyles />
    <Router>
      <RootWrapper onClick={MobileMenuToggle} onTouchStart={MobileMenuToggle}>
        <Header />
        <div onClick={() => console.log("pages")}>
          <Switch>
            <Route path="/about" component={About}></Route>
            <Route path="/menu" component={Menu}></Route>
            <Route path="/" component={Main}></Route>
          </Switch>
        </div>
        <Footer />
      </RootWrapper>
    </Router>
  </>
);
