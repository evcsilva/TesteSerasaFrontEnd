import React from "react";
import "./index.css";
import "../../componentes/Tipografia/index.css";

const BarraSuperior = (props) => {

    return (
        <div className="t-superior">
            <p className="Display">{props.text}</p>
        </div>
    );
}

export default BarraSuperior;