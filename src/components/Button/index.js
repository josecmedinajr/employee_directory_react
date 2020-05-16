import React from 'react';

const buttonStyle = {
    fontSize: "20px",
    color: "red"
}

const Button = ({ onClick, children }) => {
    return (
        <div>
            <button onClick={onClick} style={buttonStyle}>
                {children}
            </button>
        </div>
    )
}

export default Button;