import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-suspense-router';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import { ThemeProvider } from 'styled-components';
import GloablStyle from 'core/styled/global-style';
import relayEnvironment from './relay-environment';
import defautTheme from 'core/styled/theme/light-pink';
import 'core/utils/icon-library';

const Auth = React.lazy(() => import('modules/Auth'));
const Dashboard = React.lazy(() => import('modules/Dashboard'));

function App() {
  return (
    <BrowserRouter timeout={2000}>
      <RelayEnvironmentProvider environment={relayEnvironment}>
        <ThemeProvider theme={defautTheme}>
          <Suspense fallback={<h1>App loading...</h1>}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/auth/*" element={<Auth />} />
            </Routes>
          </Suspense>
        </ThemeProvider>
        <GloablStyle />
      </RelayEnvironmentProvider>
    </BrowserRouter>
  );
}

export default App;
