import * as React from "react";
import { Route } from "react-router-dom";

import { Home } from "../../scenes/Home";
import { Admin } from "../../scenes/Admin";
import * as Styled from "./Main.style";

export const Main = props => {
  return (
    <Styled.Container>
      <Route path="/" exact component={Home} />
      <Route path="/admin" exact component={Admin} />
    </Styled.Container>
  );
};
