import React, {useState, useRef} from "react";
import classes from "../css/GraphSpace.module.css"

import Node from "./Node"

function GraphSpace(props) {
    const {name} = props;

  return (
    <>
      <div>
        <h1>{name}</h1>
        <div className={classes.backmat}>
            <Node/>
        </div>
      </div>
    </>
  )
}

export default GraphSpace;