import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const SidebarContainer = styled.div`
  width: 200px;
  background-color: £202020; 
  color: white;
  margin-top: 100px;
`;

const NavItem = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: #404040;
  }
`;

function Sidebar() {
  const navigate = useNavigate();

  return (
    <SidebarContainer>
      <NavItem onClick={() => navigate('/')}>Home</NavItem>
      <NavItem onClick={() => navigate('/subscriptions')}>Subscriptions</NavItem>
      <NavItem onClick={() => navigate('/myaccount')}>My Account</NavItem>
    </SidebarContainer>
  );
}

export default Sidebar;
