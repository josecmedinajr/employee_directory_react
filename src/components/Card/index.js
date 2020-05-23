import React from "react";


const divStyle = {
    backgroundColor: "white",
    margin: "40px",
    border: "10px solid grey",
    borderRadius: "20px"
}

class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-body" style={divStyle}>
                    <h3 className="card-title">{this.props.name}</h3>
                    <img src={this.props.image} className="card-img-top" alt="img" />
                    <p className="card-text">{this.props.role}</p>
                    <p className="card-text">{this.props.nationality}</p>
                    <p className="card-text">{this.props.department}</p>
                </div>
            </div>
        )
    }
}

export default Card;