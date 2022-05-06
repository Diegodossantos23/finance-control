import React from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';

export const App: React.FC = () => {
  return (
    <React.Fragment>
      <Header/>
      <Dashboard/>
      <GlobalStyle/>
    </React.Fragment>
  );
}

export default App;
