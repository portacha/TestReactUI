import React from "react";

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function dateConverter(d){
    let options = { month: 'short', day: '2-digit' };
    let fechaLarga =  new Date(d).toLocaleDateString("es-ES",options);
    return fechaLarga;
}



class Movimientos extends React.Component {

    

    render(){
        return <div className="movimientos">
            <div className="movimientosTitle">Tus movimientos</div>
            <div className="movimientosBox">
            {this.props.movimientos.map((m)=><div key={m.name} className="movimientosElementsIMG">
                <div className="imageMovimientos"  style={{backgroundImage:`url(${m.image})`}}>    
                </div>
                <div className="movimientosElements">
                <div className="elementMF">
                    <div>{m.name}</div>
                    <div>{m.tag}</div>
                </div>
                <div className="elementMFR">
                
                <div>{dateConverter(m.time)}</div>
                    <div>{numberWithCommas(m.cost.toFixed(2))}</div>
                </div>
                </div>
            </div>)}
            </div>
        </div>
    }
  }
  
  export default Movimientos;