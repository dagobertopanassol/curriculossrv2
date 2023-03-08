//import { Component } from "react";
import React from 'react';import { useState } from 'react'
import { API,graphqlOperation } from '@aws-amplify/api'


function TextoValor() {
    const celular = document.getElementById('cel');

    const [inputValue, setInputValue] = useState('');  
    return (
      <div>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <p>Valor do input: {inputValue}</p>
        <input id="t1" className="t1" type="text" placeholder="Teste" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        
        <button onClick = { async() => {await graphql1('heelo'); }  }>BuscaJson.</button> 

        <button onClick = { (e) =>  setInputValue("novo set") }>Evento3.</button>
        <hr/>
        <input id="cel" className="cel" name="cel" type="text" placeholder="celular"></input>
        <button onClick = { getCel }>getCel</button>
    </div>

    );// return
    
  }//TextoValor()
    async function asyncFunc(text) {
    console.log(text);
    };

    function getCel(celular) { //  Bucar os componente cel por ID
    console.log("func getCel: " + celular.data ); 
    };

  async function updateItem(id, newFieldValue) { ///erro
    try {
      const itemData = await API.graphql({
        query: '',
        variables: {
          input: {
            id: id,
            newField: newFieldValue
          }
        }
      });
      console.log('Item atualizado com sucesso!', itemData);
    } catch (err) {
      console.log('Ocorreu um erro ao atualizar o item', err);
    }
  };

  // erro func update mutations nao existe mais   updateItem('123', 'Novo valor do campo');


  function Alerta2 (p,x) {
    console.log("func Alerta2" + p +" X: "+ x); 
    };

    function ret1(t) {
        console.log("Func ret1:"+t); 
        return 'Valor Set';
        };

        async function graphql1(setInputValue) {
            try {
              const result = await API.graphql(graphqlOperation(`
                query MyQuery {
                  getDadosUsuario(id: "13d94c33-8616-415f-b5d0-46280acc9431") {
                    celular
                  }
                }
              `));
              //console.log('Posts', result.data.listPosts.items);
              //console.log('Posts', user );
              //console.log('Items', result.data.getTeste );
              console.log('PostsDetalhes', result.data.getDadosUsuario.celular );
              //return result.data.getDadosUsuario.celular;
              return (e) =>  setInputValue("OKKKKK")
            } catch (error) {
              console.log('Error listing posts', error);
            }  
          }
          //graphql1();



export default TextoValor;