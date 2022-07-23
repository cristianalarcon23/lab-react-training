import React from 'react'

export default function Greetings(props) {
    console.log(props)
    let greet = "";
    if (props.lang === 'es') {
        greet = "Hola ";
    } else if (props.lang === 'en') {
        greet = "Hello "
    } else if (props.lang === 'fr') {
        greet = "Bonjour "
    } else if (props.lang === 'de') {
        greet = "Hallo "
    } return (
    <div className='greet'>{greet}{props.children}</div>
    )
}
