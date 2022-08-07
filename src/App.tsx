import React from 'react'
/*Importing React Components*/
import Home from './components/Home/Home';
/*Importing global styling*/
import { GlobalStyle } from "./GlobalStyles";




function App(): JSX.Element {
  return (
    <>
    <Home/>
    <GlobalStyle/>
    </>
  )
}
 

export default App;
