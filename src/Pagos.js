import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyCheck } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function dateConverter(d){
    let options = { month: 'short', day: '2-digit' };
    let fechaLarga =  new Date(d).toLocaleDateString("es-ES",options);
    return fechaLarga;
}

class Pagos extends React.Component {

    

    render(){



        return <div className="pagos">
            <p>Tu proximo pago</p>
            <div className="nextMount">
                {numberWithCommas(this.props.paymentNext.cost.toFixed(2))}
            </div>
            <div style={{position: "relative"}}>
                <p>Fecha de pago</p>
                <div className="nextDatePayment">
                {dateConverter(this.props.paymentNext.fechaCorte)}
                </div>
                <button className="pagarAhoraButton">PAGAR AHORA</button>
            </div>
            <div className="icons">
                <div>
                <FontAwesomeIcon icon={faMoneyCheck} /> Mis logros
                </div><b>${numberWithCommas(this.props.logros.toFixed(2))}</b>
            </div>
            <div className="icons">
                <div>
                <FontAwesomeIcon icon={faMoneyBill} /> Compras con TDC   
                </div><b>${numberWithCommas(this.props.comprasTDC.toFixed(2))}</b>
            </div>

        </div>
    }
  }
  
  export default Pagos;