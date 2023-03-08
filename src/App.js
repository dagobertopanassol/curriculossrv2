//import logo from './logo.svg';
import './App.css';
import '@aws-amplify/ui-react/styles.css';
import { Amplify  } from 'aws-amplify'; //import { DataStore } from 'aws-amplify'
import { withAuthenticator } from '@aws-amplify/ui-react';
//Dados e Model //Componentes //import {  EditProfile  } from './ui-components';
import {  EditProfile  } from './ui-components';// import {  EditProfileCollection  } from './ui-components';
//import {  EditProfileCollection  } from './ui-components';
//componentes
import {  NavBar} from './ui-components'; import TextoValor from './components/TextoValor';
import {  JobUpdateForm  } from './ui-components';
import {  JobCreateForm  } from './ui-components';
import {  EditProfileCollectionJobs  } from './ui-components';
import {  FormCheckout,ProfileCard  } from './ui-components';
// import Button from './components/Button';//import Lista from './consultas/Lista'; //import ButtonSair from './components/ButtonSair';
// d3siwku701mbez //import {  DadosUsuarioCreateForm  } from './ui-components';//import {  DadosUsuarioUpdateForm  } from './ui-components'; 
// ex https://amplify.aws/learn/courses/Fullstack-for-Frontend-Developers-e7319/lessons/11

import React from "react";
import Button1 from "./components/Button1"; // async ok 

import awsExports from './aws-exports'; Amplify.configure(awsExports);

function App( {signOut, user} ) {    
  //const EditProfile = useState(false) // const [showUpdateModal, setShowUpdateModal] = useState(false)  //const [updateNote, setUpdateNote] = useState()
  
  const [url, setUrl] = React.useState(null);
  const fetchRandomDogPic = async () => {
    let res = await fetch("https://dog.ceo/api/breeds/image/random");
    const { message: url } = await res.json();
    return new Promise((resolve) => {
      // adding delay of 4s
       setTimeout(() => {
        setUrl(url);
        resolve();
      }, 1); 
    });
  };
  
  
  return (
    <>
    <div className="App">
      <div>
      <NavBar  />
      <hr></hr>
     {/*  <EditProfile></EditProfile> */} 
  
     {/* <ProfileCard overrides={({ job, index }) => ({
          backgroundColor: index % 2 === 0 ? 'white' : 'black',
          onClick: () => alert(`Home with id: ${job.position} and ${job.rate} clicked!`)
          })} />
      </div> */}
      <ProfileCard overrides={({ job }) => ({
          
          onClick: () => alert("Home with id: ${job.position} and ${job.rate} clicked!")
          })} />
      </div>
      <div>
   {/*    <JobUpdateForm></JobUpdateForm> */}    {/* <JobCreateForm></JobCreateForm> */}
      <JobCreateForm
    onSubmit={(fields) => {
        // Example function to trim all string inputs
        const updatedFields = {}
        Object.keys(fields).forEach(key => {
            if (typeof fields[key] === 'string') {
                updatedFields[key] = fields[key].trim()
            } else {
                updatedFields[key] = fields[key]
            }
        })
        return updatedFields
    }}
/>
</div>
      {/* <EditProfileCollectionJobs></EditProfileCollectionJobs> */}
      {/* <EditProfileCollection></EditProfileCollection> */}
      {TextoValor()}

      <FormCheckout></FormCheckout>

      <h5>{new Date().toLocaleTimeString()} <button onClick= {signOut}>Sair</button>
      <Button1 onClick={fetchRandomDogPic}>dog</Button1> {url && <img src={url} alt="random dog" />}
      </h5>

      {/* <DadosUsuarioCreateForm />
      
      
      <DadosUsuarioUpdateForm /> */}
      
      <hr></hr><h5>Username: {user.username} - ID: {user.id} - /projetos/reactjs/curriculosrv2/  </h5>
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
