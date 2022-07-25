import React from 'react'

export default function Rating(props) {

 let rating = "";

 if (props.children < 1) {
    rating = "0";
 } else if (props.children >= 1 && props.children < 1.5) {
    rating = "🌟 STAR" ;
 } else if (props.children >= 1.5 && props.children < 2.5) {
    rating = "🌟🌟 STARS" ;
 } else if (props.children >= 2.5 && props.children < 3.5) {
    rating = "🌟🌟🌟 STARS" ;
 } else if (props.children >= 3.5 && props.children < 4.5) {
    rating = "🌟🌟🌟🌟 STARS" ;
 } else if (props.children >= 4.5) {
    rating = "🌟🌟🌟🌟🌟 STARS" ;
 } 


  return (
    <div className='stars'>{rating}</div>
  )
}
