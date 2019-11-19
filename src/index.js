import React from "react";
import ReactDOM from "react-dom";
// import "./styles.css";
// import React, { useState, useEffect } from "react";
function MyButton2(props) {
  return <div style={{ padding: "20px" }}>{props.children}</div>;
}
function MyButton(props) {
  const withButton = Element => props => (
    <Element>
      <button style={{ fontSize: "14px" }}>{props.text}</button>
    </Element>
  );
  const WrappedButton = withButton(MyButton2);
  return <WrappedButton {...props} />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<MyButton text="Hello1" />, rootElement);
