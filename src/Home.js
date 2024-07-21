import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Sidebar from './Sidebar';
import VideoGrid from './VideoGrid';
import WalletConnection from './WalletConnection';

const Container = styled.div`
  display: flex;
`;

const MainContent = styled.div`
  flex-grow: 1;
`;

function Home() {
  return (
    <>
        <WalletConnection />
        
      <Header />
      <Container>
        <Sidebar />
        <MainContent>
          <VideoGrid />
        </MainContent>
      </Container>
    </>
  );
}

export default Home;
