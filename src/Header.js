import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #202020;
  color: white;
  width: 100%;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const SearchContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const SearchBar = styled.input`
  padding: 8px;
  border-radius: 4px;
  border: none;
  width: 40%;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-right: 20px; 
`;

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  background-color: #8B0000;  /* Deeper green background */
  color: white; /* White text */

  &:hover {
    background-color: #6b0000;  /* Even darker green on hover */
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo>My Video Site</Logo>
      <SearchContainer>
        <SearchBar placeholder="Search..." />
      </SearchContainer>
      <ButtonContainer>
        <Button>Sign Up</Button>
        <Button>Connect Wallet</Button>
      </ButtonContainer>
    </HeaderContainer>
  );
}

export default Header;
