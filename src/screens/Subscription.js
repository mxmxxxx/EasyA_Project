import React from 'react';
import styled from 'styled-components';
import Header from '../Header';
import Sidebar from '../Sidebar';
import { auth } from '../auth/Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function Subscription() {
  const [user] = useAuthState(auth);

  return (
    <div>
      <h1>Subscription Page</h1>
      <p>Manage your subscription here</p>
    </div>
  );
}

export default Subscription;