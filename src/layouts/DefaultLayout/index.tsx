import {Outlet} from "react-router-dom";

import {Header} from "../../compoents/Header";
import {LayoutContainer} from "./styles.ts";

export function Index() {
  return (
    <LayoutContainer>
      <Header/>
      <Outlet/>
    </LayoutContainer>
  )
}