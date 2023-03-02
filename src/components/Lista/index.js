import React from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { DadosUsuario } from '../../models';

import { Amplify, Auth  } from 'aws-amplify';
import awsExports from '../../aws-exports';
Amplify.configure(awsExports);
  const models2 = DataStore.query(DadosUsuario);
  console.log(models2);

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
  const post = {
    title: 'Desestruturação super fácil',
    author: {
      nome: 'henrique weiand',
      email: 'henriqueweiand@gmail.com'
    }
  };
  
  let { title } = post;
  console.log(title); // Desestruturação super fácil
  let { author: { email } } = post;
  console.log(email); // henriqueweiand@gmail.com

  //
const numbers = [1, 2, 3, 4, 5];
const Lista = () => {
  
  return (
    <ul>
      { numbers.map( (number) => 
        <li key ={ number } > { number }
        </li>) }
    </ul>

    
  );
}

export default Lista;