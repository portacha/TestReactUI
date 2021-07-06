import './App.css';
import Head from './Head';
import Actions from './Actions';
import Pagos from './Pagos';
import Movimientos from './Movimientos';
import Prestamo from './Prestamo';
import Menu from './Menu';
import callApi from './api';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
console.log(callApi);



function App() {
  return (
    <div className="">
    <Router>
    <Switch>
      <Route exact path="/">
      <div className="home Rectangle-Copy-11">
        <Head name={callApi.name} saldo={callApi.saldoDisponible} image={callApi.profileImage} />
        <Actions/>
        <div className="bot">
        <Pagos paymentNext={callApi.paymentNext} logros={callApi.logros} comprasTDC={callApi.comprasTDC} />
        <Movimientos movimientos={callApi.movements} />
        </div>
        </div>
        <Menu />
      </Route>
      <Route path="/money">
        <Prestamo saldo={callApi.saldoDisponible} />
      </Route>
    </Switch>
  </Router>,
    

    </div>
  );
}

export default App;
