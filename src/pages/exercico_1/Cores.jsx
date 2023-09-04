import React from "react";

import BarraSuperior from "../../componentes/barra_superior/BarraSuperior";
import "./cores.css";

const Cores = () => {
    
    return(
        <div className="c-tela">
            <div className="c-superior">
                <BarraSuperior text="Colors"/>
            </div> 

            <div className="c-head-line">
                <p className="Heading-M">Text Colors</p>
            </div>
            <hr className="c-line"></hr>

            <div className="c-elements">
                <div className="c-element-1">

                    <div className="c-transparente">
                        <div className="c-div1" ></div>
                        <p className="dark-low">dark-low</p>
                        <p className="c-descricao">color: rgba(0,0,0,0.44)</p>
                        <br></br>
                    </div>

                    <div className="c-transparente">
                        <div className="c-div2" ></div>
                        <p className="dark-medium">dark-medium</p>
                        <p className="c-descricao">color: rgba(0,0,0,0.60)</p>
                        <br></br>
                    </div>

                    <div className="c-transparente">
                        <div className="c-div3" ></div>
                        <p className="dark-high">dark-high</p>
                        <p className="c-descricao">color: rgba(0,0,0,0.80)</p>
                        <br></br>
                    </div>

                    <div className="c-transparente">
                        <div className="c-div4" ></div>
                        <p className="dark-high">magenta (accent-color)</p>
                        <p className="c-descricao">hex: #E63888</p>
                        <p className="c-descricao">hsl: 332, 78, 56</p>
                    </div>
                </div>

                <div className="c-element-2">
                    <div className="c-colorido">
                        <div className="c-div5" ></div>
                        <p className="light-solid">light-solid</p>
                        <p className="c-descricao-1">color: #FFFFFF;</p>
                    </div>

                    <div className="c-colorido">
                        <div className="c-div6" ></div>
                        <p className="light-high">light-high</p>
                        <p className="c-descricao-1">color: rgba(255,255,255,0,80);</p>
                    </div>
                </div>
            </div>


        </div> 
    );
}

export default Cores;