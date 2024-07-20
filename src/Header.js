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
  width: 60%;
`;

const RightContainer = styled.div`
  width: 50%;
  justify-content: right;
`;

const SignInButton = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  background-color: #FF4500;
  color: white;
  font-weight: bold;
  cursor: pointer;
  margin-right: 10px;
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo>My Video Site</Logo>
      <RightContainer>
        <SignInButton>Log In</SignInButton>
        <SignInButton>Sign Up</SignInButton>
        <SearchBar placeholder="Search..." />
      </RightContainer>
    </HeaderContainer>
  );
}

export default Header;
