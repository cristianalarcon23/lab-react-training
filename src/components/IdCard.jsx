import React from 'react'

export default function IdCard(props) {
  return (
    <div class="IdCard">
        <img src={props.picture} alt=""/>
            <div class="right">
                <p><strong>First name</strong>: {props.firstName}</p>
                <p><strong>Last name</strong>: {props.lastName}</p>
                <p><strong>Gender</strong>: {props.gender} </p>
                <p><strong>Height</strong>: {props.height} </p>
                <p><strong>Birth</strong>: {props.birth} </p>
        </div>
        </div>
 )
}
