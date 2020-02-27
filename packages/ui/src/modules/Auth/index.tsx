import React from 'react';
import { Route, Routes } from 'react-suspense-router';
import Styled from './styled';

const Login = React.lazy(() => import('modules/Login'));
const Register = React.lazy(() => import('modules/Register'));

function Auth() {
  return (
    <Styled.Wrapper>
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </Styled.Wrapper>
  );
}

export default Auth;
