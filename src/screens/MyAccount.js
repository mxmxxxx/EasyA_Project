import React from 'react';
import styled from 'styled-components';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Cards from '../Cards'; // Import the Card component
import Chart from '../Chart'; // Import the Chart component
import { auth } from '../auth/Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const Layout = styled.div`
  display: grid;
  grid-template-areas: 
    "header header"
    "sidebar content";
  grid-template-rows: auto 1fr;
  grid-template-columns: 200px 1fr;
  height: 100vh;
  overflow: hidden;
`;

const HeaderWrapper = styled.div`
  grid-area: header;
  position: fixed;
  width: 100%;
  z-index: 1000;
  top: 0;
  left: 0;
  background-color: #202020;
`;

const SidebarWrapper = styled.div`
  grid-area: sidebar;
  position: fixed;
  top: 60px;
  height: calc(100vh - 60px);
  width: 200px;
  background-color: #202020;
`;

const ContentWrapper = styled.div`
  grid-area: content;
  margin-left: 50px;
  margin-top: 60px;
  overflow-y: auto;
  height: calc(100vh - 60px);
  padding: 20px;
  background-color: #fff;
`;

const CardGrid = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-left: -10px;
  gap: 20px;
  margin-bottom: 20px;
`;

function MyAccount() {
  const [user] = useAuthState(auth);

  return (
    <Layout>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <SidebarWrapper>
        <Sidebar />
      </SidebarWrapper>
      <ContentWrapper>
        {!user ? (
          <h1>Please log in to see your account details</h1>
        ) : (
          <div>
            <h2>My Account</h2>
            <CardGrid>
              <Cards
                title="Views"
                value="4,658"
                valueColor="green"
                percentageChange="+35.2%"
                percentageColor="green"
              />
              <Cards
                title="Followers"
                value="$420"
                valueColor="green"
                percentageChange="+5.2%"
                percentageColor="green"
              />
            </CardGrid>
            <Chart />
          </div>
        )}
      </ContentWrapper>
    </Layout>
  );
}

export default MyAccount;
