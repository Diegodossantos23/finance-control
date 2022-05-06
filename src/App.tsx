import React from 'react';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';

export const App: React.FC = () => {
  return (
    <React.Fragment>
      <Header/>
      <GlobalStyle/>
    </React.Fragment>
  );
}

export default App;
