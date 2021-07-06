import React from "react";

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


class Head extends React.Component {

    render(){
        return <div >
            <div className="Hola-Jos">Hola {this.props.name}!
            <div style={{backgroundImage:`url(${this.props.image})`}} class="pepeshabot" >
            
            </div>
            </div>
            <div className="Rectangle-Copy-8">
            <p>SALDO DISPONIBLE</p>
            <h1 ><a href="/money">${numberWithCommas(this.props.saldo.toFixed(2))}</a></h1>
            </div>
        </div>
    }
  }
  
  export default Head;