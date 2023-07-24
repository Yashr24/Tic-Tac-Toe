import React from 'react';
import './Square.css';

const Square = (props) => {
    let color = '';
    if (props.value === 'X') {
        color = 'red';
    } else if (props.value === 'O') {
        color = 'blue';
    }
    return (
    <div onClick={props.onClick} className='square'>

        <button style={{ color: color }} className='style'><h1>{props.value}</h1></button>
    </div>
  )
}

export default Square;