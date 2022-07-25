import React from 'react'

export default function CreditCard(props) {
const hideNumbers = '**** **** **** ' + props.number.slice(12);
const styleCard = {
    backgroundColor: `${props.bgColor}`,
    color: `${props.color}`
}

  return (
    <div class="Credit-Card" >
        <div  style={styleCard} className="border">
            <p><strong>Number</strong> {hideNumbers}</p>
            <p><strong>Type</strong> {props.type}</p>
            <p><strong>Expires in</strong> {props.expirationMonth}/{props.expirationYear} </p>
            <p><strong>Bank</strong> {props.bank} </p>
            <p><strong>Owner</strong> {props.owner} </p>
    </div>
    </div>
  )
}
