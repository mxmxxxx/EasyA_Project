import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 200px;
  background-color: #202020;
  color: white;
  height: 100vh;
  padding-top: 20px;
`;

const NavItem = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: #404040;
  }
`;

function Sidebar() {
  return (
    <SidebarContainer>
      <NavItem>Home</NavItem>
      <NavItem>Trending</NavItem>
      <NavItem>Subscriptions</NavItem>
      <NavItem>Library</NavItem>
    </SidebarContainer>
  );
}

export default Sidebar;