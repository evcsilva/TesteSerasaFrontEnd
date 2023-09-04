import React from "react";

import BarraSuperior from "../../componentes/barra_superior/BarraSuperior";
import "./tipografia.css";

const Tipografia = () => {
  return (

    <div className="t-tela">
        <div className="t-superior">
            <BarraSuperior text="Type"/>
        </div>

        <div className="t-inferior">
            <div className="t-div1">
                <p className="Body-M">Typeface: Roboto</p>
                <p className="Body-M">https://fonts.google.com/specimen/Roboto</p>
            </div>

            <div className="t-div2">
                <p className="Body-M"> Weights: Regular 400. <b>Bold 700</b> </p>
            </div>

            <div className="t-div3">
                <p className="Heading-S"> Headings</p>
            </div>

            <div className="t-div4">
                <table className="t-table">
                    <thead>
                        <tr className="Body-M">
                            <th >Name</th>
                            <th >Size</th>
                            <th ></th>
                            <th >Line</th>
                            <th ></th>
                            <th >Weights</th>
                            <th >Letter spacing</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className="Display">Display</td>
                            <td> <img src="   https://cdn-icons-png.flaticon.com/512/3474/3474360.png " width="20" height="20" alt="" title="" ></img> 48px (3 rem)</td>
                            <td> <img src="   https://cdn-icons-png.flaticon.com/512/545/545245.png " width="20" height="20" alt="" title=""></img> 40px (2,5 rem)</td>
                            <td> <img src="   https://cdn-icons-png.flaticon.com/512/3474/3474360.png " width="20" height="20" alt="" title="" ></img> 52px</td>
                            <td> <img src="   https://cdn-icons-png.flaticon.com/512/545/545245.png " width="20" height="20" alt="" title=""></img> 44px</td>
                            <td>Bold (700)</td>
                            <td>-1,2</td>
                        </tr>
                        <tr>
                            <td className="Heading-L">Heading L</td>
                            <td> <img src="   https://cdn-icons-png.flaticon.com/512/3474/3474360.png " width="20" height="20" alt="" title="" ></img> 40px (2,25 rem)</td>
                            <td> <img src="   https://cdn-icons-png.flaticon.com/512/545/545245.png " width="20" height="20" alt="" title=""></img> 32px (2 rem)</td>
                            <td> <img src="   https://cdn-icons-png.flaticon.com/512/3474/3474360.png " width="20" height="20" alt="" title="" ></img> 44px</td>
                            <td> <img src="   https://cdn-icons-png.flaticon.com/512/545/545245.png " width="20" height="20" alt="" title=""></img> 36px</td>
                            <td>Bold (700)</td>
                            <td>-1</td>
                        </tr>
                        <tr>
                            <td className="Heading-M">Heading M</td>
                            <td> <img src="   https://cdn-icons-png.flaticon.com/512/3474/3474360.png " width="20" height="20" alt="" title="" ></img> 32px (2 rem)</td>
                            <td> <img src="   https://cdn-icons-png.flaticon.com/512/545/545245.png " width="20" height="20" alt="" title=""></img> 24px (1,5 rem)</td>
                            <td> <img src="   https://cdn-icons-png.flaticon.com/512/3474/3474360.png " width="20" height="20" alt="" title="" ></img> 36px</td>
                            <td> <img src="   https://cdn-icons-png.flaticon.com/512/545/545245.png " width="20" height="20" alt="" title=""></img> 28px</td>
                            <td>Bold (700)</td>
                            <td>-0,8</td>
                        </tr>
                        <tr>
                            <td className="Heading-S">Heading S</td>
                            <td> <img src="   https://cdn-icons-png.flaticon.com/512/3474/3474360.png " width="20" height="20" alt="" title="" ></img> 24px (1,5 rem)</td>
                            <td> <img src="   https://cdn-icons-png.flaticon.com/512/545/545245.png " width="20" height="20" alt="" title=""></img> 20px (1,25 rem)</td>
                            <td> <img src="   https://cdn-icons-png.flaticon.com/512/3474/3474360.png " width="20" height="20" alt="" title="" ></img> 28px</td>
                            <td> <img src="   https://cdn-icons-png.flaticon.com/512/545/545245.png " width="20" height="20" alt="" title=""></img>24px</td>
                            <td>Bold (700)</td>
                            <td>-0,6</td>
                        </tr>
                        <tr>
                            <td className="Heading-XS">Heading-XS</td>
                            <td> <img src="   https://cdn-icons-png.flaticon.com/512/3474/3474360.png " width="20" height="20" alt="" title="" ></img> 20px (1,5 rem)</td>
                            <td> <img src="   https://cdn-icons-png.flaticon.com/512/545/545245.png " width="20" height="20" alt="" title=""></img> 18px (1,125 rem)</td>
                            <td> <img src="   https://cdn-icons-png.flaticon.com/512/3474/3474360.png " width="20" height="20" alt="" title="" ></img> 24px</td>
                            <td> <img src="   https://cdn-icons-png.flaticon.com/512/545/545245.png " width="20" height="20" alt="" title=""></img>22px</td>
                            <td>Bold (700)</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td className="Subheading">Subheading</td>
                            <td> 
                                <img src="   https://cdn-icons-png.flaticon.com/512/3474/3474360.png " width="20" height="20" alt="" title="" ></img> 
                                <img src="   https://cdn-icons-png.flaticon.com/512/545/545245.png " width="20" height="20" alt="" title=""></img>
                                16px (1 rem)
                            </td>
                            <td></td>
                            <td>
                                <img src="   https://cdn-icons-png.flaticon.com/512/3474/3474360.png " width="20" height="20" alt="" title="" ></img> 
                                <img src="   https://cdn-icons-png.flaticon.com/512/545/545245.png " width="20" height="20" alt="" title=""></img>
                                20px
                            </td>
                            <td></td>
                            <td>Bold (700)</td>
                            <td>-</td>
                        </tr>
                        <tr>
                        <td className="Body-M">Body M</td>
                            <td> 
                                <img src="   https://cdn-icons-png.flaticon.com/512/3474/3474360.png " width="20" height="20" alt="" title="" ></img> 
                                <img src="   https://cdn-icons-png.flaticon.com/512/545/545245.png " width="20" height="20" alt="" title=""></img>
                                16px (1 rem)
                            </td>
                            <td></td>
                            <td>
                                <img src="   https://cdn-icons-png.flaticon.com/512/3474/3474360.png " width="20" height="20" alt="" title="" ></img> 
                                <img src="   https://cdn-icons-png.flaticon.com/512/545/545245.png " width="20" height="20" alt="" title=""></img>
                                24px
                            </td>
                            <td></td>
                            <td>Regular(400), Bold (700)</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
                
            </div>

        </div>

    </div>

  );
}

export default Tipografia;
