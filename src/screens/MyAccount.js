import React from 'react';
import styled from 'styled-components';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Cards from '../Cards'; // Import the Card component
import Chart from '../Chart'; // Import the Chart component
import { auth } from '../auth/Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Layout, HeaderWrapper, SidebarWrapper, ContentWrapper } from '../Home'; // Import the styled components from Home.js

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
