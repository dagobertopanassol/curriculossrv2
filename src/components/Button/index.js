import { Component } from "react";
import React from 'react';

class Button extends Component {
    render() {
        return (
            // <button>Salvar</button> Estatico
            <div>
            <p>{this.props.title} </p>
            <button>Salvar - {this.props.children} </button>
            </div>
        )
    }

}

export default Button; 