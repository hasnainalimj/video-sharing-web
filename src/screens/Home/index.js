import React from "react";
import { style } from "./styles";
import Header from "../../components/Header";

function Home(props) {
  return (
    <div>
      <Header history={props.history} />
      <div style={style.mainContainer}>
        <h1>Home Screen</h1>
      </div>
    </div>
  );
}

export default Home;
