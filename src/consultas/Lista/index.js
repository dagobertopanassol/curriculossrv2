//import React from 'react';
//import { DataStore } from '@aws-amplify/datastore';
//import { Teste } from '../../models';
import { API,graphqlOperation } from '@aws-amplify/api'

import { Amplify } from 'aws-amplify';
import awsExports from '../../aws-exports';
Amplify.configure(awsExports);
 
function Lista (user) {
    graphql1(user);
    console.log("func lista")
    //return
};
    
/*
  const models2 = DataStore.query(Teste);
  console.log("models2")
  console.log(models2 );
*/
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

 /*
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
    } catch (error) {
      console.log('Error listing posts', error);
    }
  }

  */

  //const m1 = models2.json;
 /* const detalhes = models2.key[0].map((n) => {
    return n;
  }); */
  //let { model } = models2.map;
  //console.log('MAP:' + model );

  // numabers ok
  /*const numbers = [1, 2, 3, 4, 5];
  const sumNumbers = numbers.map((n) => {
    return n + 1;
  });
  console.log('N:' +sumNumbers); */
  
  // Exemplo let
  /*const post = {
    title: 'Desestruturação super fácil',
    author: {
      nome: 'henrique weiand',
      email: 'henriqueweiand@gmail.com'
    }
  };
  
  let { title } = post;
 // console.log(title); // Desestruturação super fácil
  let { author: { email } } = post;
 // console.log(email); // henriqueweiand@gmail.com
*/
  //
  /*
const numbers = [1, 2, 3, 4, 5];
const Lista = () => {
  
  return (
    <ul>
      { numbers.map( (number) => 
        <li key ={ number } > { number }
        </li>) }
    </ul>

    
  );
  
} */


export default Lista;