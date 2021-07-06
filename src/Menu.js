import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
class Menu extends React.Component {

    

    render(){
        return <div className="menu">
        <FontAwesomeIcon style={{color:"#1ca1cb"}} icon={faHome} />
        <FontAwesomeIcon icon={faMoneyBill} />
        <FontAwesomeIcon icon={faCreditCard} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faBell} />
        </div>
    }
  }
  
  export default Menu;
