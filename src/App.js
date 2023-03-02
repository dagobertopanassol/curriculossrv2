//import logo from './logo.svg';
import './App.css';
import '@aws-amplify/ui-react/styles.css';
import { Amplify, Auth  } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
//Dados e Model //Componentes //import {  EditProfile  } from './ui-components'; //import Button from './components/Button'; import {  EditProfileCollection  } from './ui-components';
import {  NavBar  } from './ui-components';
import Lista from './components/Lista';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App({signOut, user}) {    

  return (
    <div className="App">
      <h1>Bem Vindo  {user.username}</h1>
      <NavBar></NavBar>
      <Lista/>

      <button onClick={signOut}>Sair</button>

      {/* <header className="App-header">
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
      </header> */}

    
 
    </div>
  );
/*
  const models = () =>
  async (dispatch) => {
   await DataStore.query(DadosUsuario); 
  };
  console.log(models);
  console.log( JSON.stringify(models) ); */

}

//export default App;
export default withAuthenticator(App);
