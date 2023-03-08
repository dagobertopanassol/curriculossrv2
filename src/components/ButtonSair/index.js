import { Component } from "react";
import React from 'react';

class ButtonSair extends Component {
   
    render(signOut) {
        
        console.log('Ianterno Buttonlog !!');
        return (
            // <button>Salvar</button> Estatico
            <div>
              <button onClick= {signOut}>Sair</button>
              <button onClick= {console.log('Ianterno Buttonlog !!') }> </button>
 
            </div>
        )
    }

}

export default ButtonSair; 