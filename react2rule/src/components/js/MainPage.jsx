import React, {useState, useRef} from "react";
import classes from "../css/MainPage.module.css";

import GraphSpace from "./GraphSpace";

function MainPage() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className={classes.graphSpaceContainer}>
       <GraphSpace name="Left Graph"/>
       <GraphSpace name="Right Graph"/>
      </div>
    </>
  )
}

export default MainPage;