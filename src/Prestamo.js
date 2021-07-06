import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Knob from './Knob';



function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

class Prestamo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          value: this.setState(),
          setValue : this.setState()
        };
      };

    render(){
        return <div className="prestamo">
        <div className="prestamoNav"><FontAwesomeIcon icon={faArrowLeft} /><div><a href="/">CANCELAR</a></div></div>
        <div className="Disposicin">Disposición</div>
        <div className="disposicionBox">
        <p>Tienes Disponible</p>
        <h2>${numberWithCommas(this.props.saldo.toFixed(2))}</h2>
        </div>
        
        <div className="inputs">Auto</div>
        <div className="inputs">$350,000.00</div>
        <p>Selecciona tu plazo</p>
        <div className="knob">
        <Knob prestamo={350000} className="knob"/>
        </div>
        
        </div>
        
    }
  }
  
  export default Prestamo;
