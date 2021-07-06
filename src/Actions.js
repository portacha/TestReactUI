import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";

class Actions extends React.Component {

    render(){
        return <div className="ActionsContainer">
            <div className="icons">
            <FontAwesomeIcon icon={faStar} /><br/>
            <p>Crear logro</p>
            </div>
            <div className="icons">
            <FontAwesomeIcon icon={faTag} /><br/>
            <p>Pagar Servicio</p>
            </div>
            <div className="icons">
            <FontAwesomeIcon icon={faBell} /><br/>
            <p>Suscripcion</p>
            </div>

        </div>
    }
  }
  
  export default Actions;