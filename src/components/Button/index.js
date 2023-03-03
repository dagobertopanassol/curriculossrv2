import { Component } from "react";
import React from 'react';
import Lista from '../../consultas/Lista';

const a = Lista('0321');
class Button extends Component {
   
    render(a) {
        
        console.log(a);
        return (
            // <button>Salvar</button> Estatico
            <div>
            <p>{this.props.title} A:{ a } </p>
            <button>Salvar - {this.props.children} - {this.props.user}  </button>
            </div>
        )
    }

}

export default Button; 