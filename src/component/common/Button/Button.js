import React from 'react'
import './Button.css'

const Button = props => {
    let classes = ['btn']
    let addClass = props.additionalClass.split(' ')
    addClass.forEach(element => {
        classes.push(element)
    });
    let classStr = classes.join(' ')
    return(
        <button className = {classStr} onClick = {props.clickListener} disabled = {props.disabled}>
            {props.children}
        </button>
    )
}

export default Button