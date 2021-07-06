import React, { useState } from 'react'
import { Donut } from 'react-dial-knob'

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function Knob() {
    const [value, setValue] = useState(0)
    return <Donut
        diameter={200}
        min={6}
        max={48}
        step={6}
        value={value}
        theme={{
            donutColor: 'radial-gradient(#783183, #bb64c8)'
        }}
        onValueChange={setValue}
    >
        <div className="textPrestamo">Tu pago mensual</div>
        <div className="textPrestamo">${numberWithCommas((350000/value).toFixed(2))}</div>
        <div className="textPrestamoMes">Meses</div>
        <div className="textPrestamoInteres">Tasa de interes <br/> %16.6</div>
        <button class="pedirPrestamoButton">LO QUIERO</button>
    </Donut>
}