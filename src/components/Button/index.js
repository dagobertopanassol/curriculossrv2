import { Component } from "react";
import React from 'react';
import { ActionCard,ContactUs } from '../../ui-components'
import { useState } from 'react'

//import Lista from '../../consultas/Lista';
import { API,graphqlOperation } from '@aws-amplify/api'
// D O C S 
//Promise de modo síncrono, Await
//https://www.alura.com.br/artigos/async-await-no-javascript-o-que-e-e-quando-usar
//const a = Lista('0321');
class Button extends Component {
   
    render(a) {
        
        //console.log(a);
        return (
            // <button>Salvar</button> Estatico <button onClick= {signOut}>Sair</button>
            <div>
            <p>{this.props.title} A:{ a } </p>
            {/* <button>Salvar - {this.props.children} - {this.props.user}  </button> */}
            <button onClick= { Alerta } > Alerta </button>
            <button onClick = {graphql1 }>graphql1</button>
            <button onClick = { updateItem }>acao3</button>
                      
                {/* <div className='container'>
                    <ContactUs />  
                </div>
                <div className='modal' style={{display: 'none'}}>
                    <ActionCard />
                </div> */}
          

            </div>
        )//return
    }//render

}//classe
//https://amplify.aws/learn/courses/Fullstack-for-Frontend-Developers-e7319/lessons/8
function Alerta () {
    console.log("func Alerta")
    alert("Alerta")
 
};
//Promise Sincrono Aguarda a resposta na hora
function getUser(userId) {
    const userData = fetch(`http://localhost/api/user/${userId}`)
    
      .then(response => response.json())
      .then(data => console.log(data.name))
      .catch(error => console.log("_______________------------error----------________________________"+ error))
      .finally( () => console.log("finally eh:"+ userData ) )
   };
   
   //getUser(1); // "Nome Sobrenome"
//Await  Sem compromisso - antes de qualquer expressão que retorne uma promessa - a execução da função externa (a função async)
// será pausada até que a Promise seja resolvida,Se for finalizada com sucesso (o termo utilizado é fulfilled), Se a Promise for rejeitada (o termo utilizado é rejected)
async function graphql1(user) {
    try {
      const result = await API.graphql(graphqlOperation(`
        query MyQuery {
          getDadosUsuario(id: "13d94c33-8616-415f-b5d0-46280acc9431") {
            celular
          }
        }
      `));
      //console.log('Posts', result.data.listPosts.items);
      console.log('Posts', user );
      //console.log('Items', result.data.getTeste );
      console.log('PostsDetalhes', result.data.getDadosUsuario.celular );
      return result.data.getDadosUsuario.celular;
    } catch (error) {
      console.log('Error listing posts', error);
    }  
  }
/*Só é possível usar await em funções declaradas com a palavra-chave async, então vamos adicioná-la:*/
    function mostra(p){
        console.log('mostra:'+p )
    }  
    function mostraerro(){
        console.log('mostra Erro !' )
    }  
    async function getUser2(userId) {
    let response = await fetch(`https://api.com/api/user/${userId}`);
    let userData = await response.json(); // eslint-disable-next-line 
    return userData.name; // nas linhas de return não é necessário usar await
   }
   //exibeDadosUser(await getUser2(1)) --erro webpack config --The top-level-await experiment is not enabled (set experiments.topLevelAwait: true to enabled it
   function getUser3(userId) {
    const userData = fetch(`http://localhost/api/user/${userId}`);return userData.name; 
   };
    // erro 
   async function updateItem(id, newFieldValue) {
    try {
      const itemData = await API.graphql({
        query: (''),
        variables: {
          input: {
            id: 'texto1',
            newField: 'valor novo do catch'
          }
        }
      });
      console.log('Item atualizado com sucesso!', itemData);
    } catch (err) {
      console.log('Ocorreu um erro ao atualizar o item', err);
      
      
    }
  }
  
   //getUser3(1).then(mostra('ok')).catch(mostraerro())
   //Em termos de sintaxe, o método .then() traz uma sintaxe que faz mais sentido quando utilizamos o JavaScript de forma funcional, enquanto o fluxo das declarações com async/await fazem sentido ao serem utilizadas em métodos de classes.
   /*async function getAndPrintAllCustomers() {
    const sql = 'SELECT id FROM customers'
    const customers = await db.query(sql, [])
    for (const customer of customers) {
      await printCustomer(customer.id) }   }
      
      --

                    <NavBar
                    marginBottom='20px' width='100%'
                    overrides={{
                    Button31502513: { onClick: () => setShowCreateModal(true) },
                    Button31502517: {
                    onClick: async () => {
                    +       await DataStore.clear()
                    signOut()
                    }
                    }
                    }}
                    />
            */



export default Button; 