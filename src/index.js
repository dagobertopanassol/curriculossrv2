import React from 'react';
import ReactDOM from 'react-dom/client'; //import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//
import { Amplify, Auth } from "aws-amplify";
import awsconfig from "./aws-exports";
//Form UI Auth //import { ThemeProvider, AmplifyProvider } from "@aws-amplify/ui-react";
import { AmplifyProvider } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css"; //import { studioTheme } from "./ui-components";
Amplify.configure(awsconfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /*  <React.StrictMode> </AmplifyProvider>   */  /* <ThemeProvider theme={studioTheme}> */
  <AmplifyProvider> 
    <App />
  </AmplifyProvider> 
  /* </ThemeProvider> */  /* </React.StrictMode> */
);

reportWebVitals();
