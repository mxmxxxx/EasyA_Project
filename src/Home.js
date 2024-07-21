import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Sidebar from './Sidebar';
import VideoGrid from './VideoGrid';
import WalletConnection from './WalletConnection';

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
`;

const SidebarWrapper = styled.div`
  grid-area: sidebar;
  position: fixed;
  top: 100px; /* Adjust this value based on the height of your header */
  height: calc(100vh - 80px); /* Adjust this value based on the height of your header */
  width: 200px; /* Width of the sidebar */
  background-color: #202020; /* Background color of the sidebar */
`;

const ContentWrapper = styled.div`
  grid-area: content;
  margin-left: 70px; /* Width of the sidebar */
  margin-top: 160px; /* Height of the header */
  overflow-y: auto;
  padding: 20px;
  background-color: #fff; /* Same background color as the main content to avoid the white bar */
`;

function Home() {
  return (
    <div>
      <Layout>
        <HeaderWrapper>
          <WalletConnection />
          <Header />
        </HeaderWrapper>
        <SidebarWrapper>
          <Sidebar />
        </SidebarWrapper>
        <ContentWrapper>
          <VideoGrid />
        </ContentWrapper>
      </Layout>
    </div>
  );
}

export { Layout, HeaderWrapper, SidebarWrapper, ContentWrapper };
export default Home;
