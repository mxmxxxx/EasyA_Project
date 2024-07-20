import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #202020;
  color: white;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const SearchBar = styled.input`
  padding: 8px;
  border-radius: 4px;
  border: none;
  width: 40%;
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo>My Video Site</Logo>
      <SearchBar placeholder="Search..." />
    </HeaderContainer>
  );
}

export default Header;
