import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from './auth/Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import WalletConnection from './WalletConnection';



const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #202020;
  color: white;
  width: 100%;
`;

const Logo = styled.img`
  height: 70px;
  width: 15%;
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
  width: 60%;
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
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const login = () => {
    navigate('/login');
  };

  const signup = () => {
    navigate('/signup');
  };

  const signout = async () => {
    await signOut(auth);
    navigate('/');
  };

  return (
    <HeaderContainer>
      <Logo src="/assets/output-onlinepngtools.png" alt={"Logo"} />
      <SearchContainer>
        <SearchBar placeholder="Search..." />
      </SearchContainer>
      <ButtonContainer>
        {!user ? (
          <>
            <Button onClick={login}>Login</Button>
            <Button onClick={signup}>Sign Up</Button>
          </>
        ) : (
          <Button onClick={signout}>Log Out</Button>
        )}
      </ButtonContainer>
    </HeaderContainer>
  );
}

export default Header;
