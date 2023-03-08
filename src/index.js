import React from 'react';
import ReactDOM from 'react-dom/client'; //import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// https://frontsrv2.d3siwku701mbez.amplifyapp.com/
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
//F7orm UI Auth //
import { ThemeProvider, AmplifyProvider } from "@aws-amplify/ui-react"; // ThemeProvider To syncRONIZA your changes locally com FigmaCloud
import "@aws-amplify/ui-react/styles.css"; 
import { studioTheme } from "./ui-components";
Amplify.configure(awsconfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /*  <React.StrictMode> </AmplifyProvider>   */  
  <ThemeProvider theme={studioTheme}>
      <AmplifyProvider> 
        <App />
      </AmplifyProvider> 
  </ThemeProvider>   /* </React.StrictMode> */
);

reportWebVitals();
