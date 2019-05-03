import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AlertContextProvider } from '../../contexts/Alert';
import { AuthContextProvider } from '../../contexts/Auth';
import { Main } from '../Main';
import { TopBar } from '../TopBar';
import * as Styled from './App.style';

// levibluephillips@gmail.com
export const App = props => {
  return (
    <AlertContextProvider>
      <AuthContextProvider>
        <BrowserRouter>
          <Styled.Container>
            <TopBar />
            <Main />
          </Styled.Container>
        </BrowserRouter>
      </AuthContextProvider>
    </AlertContextProvider>
  );
};
