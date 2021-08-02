import React from "react";
import "./assets/scss/main.scss";
import EmailSignature from "./pages/EmailSignature";
import ErrorPage from "./pages/ErrorPage";
import { useWindowWidth } from "@react-hook/window-size";

function App() {
  const onlyWidth = useWindowWidth();

  return onlyWidth <= "954" ? <ErrorPage /> : <EmailSignature />;
}

export default App;
