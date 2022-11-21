import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "@shopify/polaris";
import translations from "@shopify/polaris/locales/en.json";
import Header from "./components/Header";
import Home from "./components/Home";
import './index.css';
function App() {
  return (
   
    <BrowserRouter>
      <AppProvider i18n={translations}>
        
       
        <Header/>
        <Home/>
     
      
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;