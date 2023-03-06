//import logo from './logo.svg';
import './App.css';
import '@aws-amplify/ui-react/styles.css';
import { Amplify  } from 'aws-amplify'; 
//import { DataStore } from 'aws-amplify'
import { withAuthenticator } from '@aws-amplify/ui-react';
//Dados e Model //Componentes //import {  EditProfile  } from './ui-components'; // import {  EditProfileCollection  } from './ui-components';
import {  EditProfile  } from './ui-components';
//import {  EditProfileCollection  } from './ui-components';
//componentes
import {  CreateNote, NavBar, NoteUICollection, UpdateNote  } from './ui-components';
import Button from './components/Button';
//import Lista from './consultas/Lista';
// d3siwku701mbez
//import {  DadosUsuarioCreateForm  } from './ui-components';
//import {  DadosUsuarioUpdateForm  } from './ui-components'; 
// ex https://amplify.aws/learn/courses/Fullstack-for-Frontend-Developers-e7319/lessons/11
//import ButtonSair from './components/ButtonSair';
//import { useState } from 'react'
import awsExports from './aws-exports';
Amplify.configure(awsExports);
 

function App( {signOut, user} ) {    
  
  //const EditProfile = useState(false)
 // const [showUpdateModal, setShowUpdateModal] = useState(false)
  //const [updateNote, setUpdateNote] = useState()

  return (
    <>
    <div className="App">
      <h2>Bem Vindo  -  </h2>
      <button onClick= {signOut}>Sair</button>
      <NavBar  />
      <EditProfile/>

      <Button>Button</Button>
    
      {/* <DadosUsuarioCreateForm />
      <EditProfileCollection></EditProfileCollection>
      <EditProfile></EditProfile> 
      <DadosUsuarioUpdateForm /> */}
      
      <hr></hr><h5>ID: {user.username} - /projetos/reactjs/curriculosrv2/  </h5>
      <h5>https://frontsrv2.d3siwku701mbez.amplifyapp.com/ </h5>
    
      
      
      {    
      //<Button title="pTitulo" user = {user.username}></Button>
      //Lista('testeeeeeeeeeeeeeeee')
      /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           Celular:  
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
          <Button>--</Button>
      </header> */
      }   
      </div>
      </>    //aberto no return
  ); //inicio1
}
/*
  const models = () =>
  async (dispatch) => {
   await DataStore.query(DadosUsuario); 
  };
  console.log(models);
  console.log( JSON.stringify(models) ); */

//export default App;

export default withAuthenticator(App);
