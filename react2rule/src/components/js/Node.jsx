import React, {useState, useRef} from "react";
import classes from "../css/Node.module.css"

function Node(props) {
    const {label2} = props;
    const [label, setLabel] = useState("C")
    const [selected, setSelected] = useState(false)

    function toggleSelect() {
        setSelected(!selected)
    }

  return (
    <>
      <div className={classes.circle} onClick={toggleSelect}>
        <h1>{selected.toString()}</h1>
      </div>
    </>
  )
}

export default Node;